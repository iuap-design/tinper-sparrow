
## DOM

### wrap(element,parent)
* 说明：

  将HTML元素添加到某HTML元素中。

* 参数：
  * {HTMLElement} element：必需。被添加的HTML元素。
  * {String}/{HTMLElement} parent：必需。作为父项的HTML元素。
* 返回值：

  无
* 用法：​
  	u.wrap(document.getElementById('id1'), '<div></div>');	 
  	u.wrap(document.getElementById('id1'), document.getElementById('id2'));





### makeDOM(htmlString)
* 说明：

  创建HTML元素

* 参数：

  * {String} htmlString：必需。需要创建的HTML元素对应的html字符串。

* 返回值：

  创建之后的HTML元素
* 用法：​
  	u.makeDOM('<div></div>');	 
