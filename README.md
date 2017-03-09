# tinper sparrow
<img src="http://tinper.org/assets/images/sparrow.png" width="120" style="max-width:100%;"/>

[中文文档](./README_CN.md)
##  Introduction
`sparrow.js` is a front-end base library, which contains the basic operation of DOM, browser and device judgments, Cookies operations, as well as the browser's own function expansion, etc..

## Quickstart

###  Get sparrow

* npm 
```
	npm install tinper-sparrow
```

* cdn 
```
	//design.yyuap.com/static/tinper-sparrow/latest/js/tinper-sparrow.js
```
### Introducing sparrow
- ES6
```
import { sparrow} from "tinper-sparrow"

```
* HTML

```
	<script src="//design.yyuap.com/static/jquery/jquery-1.11.2.js"></script>
    <script src="//design.yyuap.com/static/tinper-sparrow/latest/js/tinper-sparrow.js"></script>
```
**Note**： sparrow is dependent on jQuery

### Use
```
	sparrow.isIE //IE browser returns true, others return to false

	sparrow.isDate(new Date()); //Date Object returns true, others return to false

```
Read the [Develop documentation](http://tinper.org/dist/sparrow/index.html) 

## Contributing

### Develop

Developers can participate in the development of sparrow,  but also can be based on sparrow two development

clone：

```
$ git clone git@github.com:iuap-design/tinper-sparrow.git
```

install：

```
$ npm install
```

build：

```
$ npm run product
```

### Feedback

If you encounter any problems , submit [issues]((https://github.com/iuap-design/tinper-sparrow/issues),or pull request。
