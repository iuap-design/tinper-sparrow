var fs = require('fs');
var path = require('path');
var env = require('yargs').argv.mode;
// 读取package.json，将里面内容生成头信息
var data = fs.readFileSync('./package.json', 'utf8');
var packageObj = JSON.parse(data);
var filesArr = [];
if(env=="dev"){
	filesArr.push('./dist/sparrow.js');
}else if(env=="build"){
	filesArr.push('./dist/sparrow.min.js');
}
var headerStr = '/** \r\n';
headerStr += ' * ' + packageObj.name + ' v' + packageObj.version + '\r\n';
headerStr += ' * ' + packageObj.description + '\r\n';
headerStr += ' * author : ' + packageObj.author + '\r\n';
headerStr += ' * homepage : ' + packageObj.homepage + '\r\n';
headerStr += ' * bugs : ' + packageObj.bugs.url + '\r\n';
headerStr += ' **/ \r\n';

for(var i = 0; i < filesArr.length; i++) {
	var filePath = filesArr[i]
	var data = fs.readFileSync(filePath, 'utf8');
	data = headerStr + data;
	fs.writeFileSync(filePath, data);
}
