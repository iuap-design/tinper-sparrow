/**
 * Module : Sparrow i18n
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 20:42:17
 */
import {uuii18n} from '?';
var trans = function (key, dftValue) {
    return  uuii18n ?  uuii18n.t('uui-trans:' + key) : dftValue;
};

export {trans};
