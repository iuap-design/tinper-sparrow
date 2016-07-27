/**
 * Module : Sparrow entry index
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

//对外暴露接口用于外部访问
var u = window.u || {};
window.u = u;
//相关依赖导入
import extend from './extend';
import { setCookie, getCookie } from './cookies';
import { createShellObject,execIgnoreError } from './util';
import { env } from './env';
import { on,off,trigger,stopEvent } from './event';
import { addClass,removeClass,hasClass,toggleClass,closest } from './dom';


//公开接口、属性对外暴露
u.extend = extend;
u.extend(u,{setCookie:setCookie,getCookie:getCookie});
u.extend(u,{createShellObject:createShellObject,execIgnoreError:execIgnoreError});
u.extend(u,env);
u.extend(u,{on:on,off:off,trigger:trigger,stopEvent:stopEvent});
u.extend(u,{ addClass:addClass,removeClass:removeClass,hasClass:hasClass,toggleClass:toggleClass,closest:closest });

console.log(u);