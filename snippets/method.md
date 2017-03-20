## 方法扩展

### extend(object, config)
* 说明：

  复制对象属性

* 参数：
  * {Object} object：必需。目标对象
  * {Object} config：必需。源对象
* 返回值：

  {Object}复制之后的object
* 用法：​
  	var obj1 = {
  		id : 'id',
  		name : 'name'
  	}
  	var obj2 = {
  		code : 'code',
  		name : 'newName'
  	}
  	u.extend(obj1, obj2); //obj1为{id: "id", name: "newName", code: "code"}

### setCookie(sName, sValue, oExpires, sPath, sDomain, bSecure)
* 说明：

  设置cookie属性

* 参数：
  * {String} sName：必需。规定 cookie 的名称。
  * {String} sValue：必需。规定 cookie 的值。
  * {String} oExpires：可选。规定 cookie 的有效期。
  * {String} sPath：可选。规定 cookie 的服务器路径。
  * {String} sDomain：可选。规定 cookie 的域名。
  * {String} bSecure：可选。规定是否通过安全的 HTTPS 连接来传输 cookie。
* 返回值：

  无
* 用法：
  	u.setCookie('COOKIENAME', 'COOKIVALUE'); //设置cookie的COOKIENAME为COOKIVALUE

### getCookie(sName)
* 说明：

  获取cookie属性


* 参数：
  * {String} sName：必需。获取 cookie 的名称。
* 返回值：

  cookie中sName对应的属性
* 用法：​​
  	u.getCookie('COOKIENAME'); //获取cookie的COOKIENAME

### getFunction(target, val)
* 说明：

  获取function

* 参数：

  * {Object} target：必需。function定义的上下文。
  * {String} value：必需。function名称。
* 返回值：

  {function}获取到的function
* 用法：
  ​
  	u.getFunction(window,'funName1');	 


### getJSObject(target, names)
* 说明：

  获取Object对象

* 参数：

  * {Object} target：必需。Object定义的上下文。
  * {String} names：必需。Objcet名称。
* 返回值：

  {Object}获取到的Object
* 用法：​
  	u.getJSObject(window,'funName1'); //获取window对象上的funName1对象


### each(obj,callback)
* 说明：

  遍历传入的obj执行callback方法

* 参数：

  * {Object}/{Array} obj：必需。需要进行遍历的对象或数组。
  * {function} callback：必需。需要执行的function。
* 返回值：

  无
* 用法：​
  	var tmpdata = [];
  	u.each(target_div.querySelectorAll(".m_context"),function(i,node){
  			tmpdata[i] = node.innerHTML
  		})
  	//遍历将class为m_context的HTML的内容翻入数组tmpdata中。


### getStyle(element,key)
* 说明：

  获取HTML元素的style属性。

* 参数：
  * {HTMLElement} element：必需。HTML元素。
  * {String} key：必需。需要获取的style属性名称。
* 返回值：

  HTML元素的style属性值
* 用法：​
  	u.getStyle(document.getElementById('id1'), 'width');	 

### getZIndex()
* 说明：

  统一zindex值, 不同控件每次显示时都取最大的zindex，防止显示错乱

* 参数：

  无

* 返回值：

  新的zindex最大值
* 用法：​
  	u.getZIndex();




### getOffset(ele, offset)
* 说明：

  获取/设置元素`ele`相对顶层`body`的偏移量

* 参数：
  * {HTMLElement} element：必需。目标对象
  * {Object} config：可选。设置的元素偏移量。默认则最终返回`ele`相对`body`的偏移量
* 返回值：

  {Object}：包含`top`,`left`值
* 用法：
  	var offsetObj = {
  		top : 10,
  		left : 20
  	};
  	var ele = document.getElementById('tit');

  	u.getOffset(ele,offsetObj) // {top: 120, left:100}



### getScroll(ele, offset)

- 说明：

  获取/设置元素`ele`滚动的偏移量

- 参数：

  - {HTMLElement} element：必需。目标对象
  - {Object} config：可选。设置的元素偏移量。默认则最终返回`ele`相对浏览器顶部的偏移量

- 返回值：

  {Object}：包含`top`,`left`值

- 用法：

  ```
  同getOffset
  ```



### ajax({...})

- 说明：

  执行Ajax数交互

- 参数：

  ```
  {
    url: 'test.html',
    type: 'GET'
    success: function(){},
    async: true,
    error: function(){},
  }
  ```

  ​

  - {String} url：必需，文件在服务器上的位置
  - {String} type：可选，默认为`post`
  - {Function} success：可选，回调函数
  - {Function} error：可选，回调函数
  - {Boolean} async: 可选，默认为`true`

- 返回值：

  {Object}

- 用法：

  ```

  document.getElementById('btn').addEventListener('click', function(){
      u.ajax({
          url: './package.json',
          type: 'GET',
          success: function(data){
              alert(data)
          },
          error: function(){
              alert("error")
          }
      })
  })
  ```
