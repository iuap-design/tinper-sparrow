# tinper sparrow
<img src="http://tinper.org/assets/images/sparrow.png" width="120" style="max-width:100%;"/>

[![npm version](https://img.shields.io/npm/v/tinper-sparrow.svg)](https://www.npmjs.com/package/tinper-sparrow)
[![Build Status](https://img.shields.io/travis/iuap-design/tinper-sparrow/master.svg)](https://travis-ci.org/iuap-design/tinper-sparrow)
[![devDependency Status](https://img.shields.io/david/dev/iuap-design/tinper-sparrow.svg)](https://david-dm.org/iuap-design/tinper-sparrow#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/tinper-sparrow.svg?style=flat)](https://npmjs.org/package/tinper-sparrow)


[English Document](./README.md)
##  介绍
`sparrow.js`是一个短小精悍的前端基础库，它包含对DOM、CSS基本操作、多平台浏览器移动设备判断、Cookies操作、事件的绑定、日期、数字、字符串相关判断、以及浏览器自身函数不足所扩展的一系列功能.

## 快速上手

### 获取sparrow

* npm 资源
```
	npm install tinper-sparrow
```

* cdn 资源
```
	//design.yyuap.com/static/tinper-sparrow/latest/tinper-sparrow.js
```
### 引入sparrow
- ES6语法
```
import { sparrow} from "tinper-sparrow"

```
* HTML直接引入

```
	<script src="//design.yyuap.com/static/jquery/jquery-1.11.2.js"></script>
    <script src="//design.yyuap.com/static/tinper-sparrow/latest/tinper-sparrow.js"></script>
```
**注**： sparrow依赖于jquery，引入资源时需先引入jquery

### 具体使用
```
	sparrow.isIE //IE浏览器返回true,其他返回false

	sparrow.isDate(new Date()); //传入对象为Date对象返回true否则返回false

```
开发文档详见[这里](http://tinper.org/dist/sparrow/index.html)

## 如何参与贡献

### 开发及构建

开发者可以一起参与为 sparrow贡献代码，同时也可以基于 sparrow进行二次开发或封装插件。

克隆项目文件:

```
$ git clone git@github.com:iuap-design/tinper-sparrow.git
```

然后进入目录安装依赖：

```
$ npm install
```

接下来，编译：

```
$ npm run product
```

### 反馈
如在使用过程中遇到任何问题，可以在[这里](https://github.com/iuap-design/tinper-sparrow/issues)提交issue反馈；

或者直接fork代码到你的github仓库，提交pull request给我们。
