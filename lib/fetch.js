import { extend } from './extend';
var getHost = function getHost() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'api';

    var hosts = {
        api: {
            production: process.env.HOST || "",
            development: process.env.HOST || ""
        }
    };
    return hosts[key][process.env.NODE_ENV];
};

var fetchTools = {
    params: function params(_params) {
        try {
            return Object.keys(_params).map(function (key) {
                var param = _params[key];
                switch (typeof param === 'undefined' ? 'undefined' : babelHelpers['typeof'](param)) {
                    case 'object':
                        param = escape(JSON.stringify(param));
                        break;
                    case 'undefined':
                        param = '';
                        break;
                    default:
                        break;
                }
                return key + '=' + param;
            }).join('&');
        } catch (e) {
            console.log('error in urlParams');
            return '';
        }
    },
    fetch: function (_fetch) {
        function fetch(_x2, _x3) {
            return _fetch.apply(this, arguments);
        }

        fetch.toString = function () {
            return _fetch.toString();
        };

        return fetch;
    }(function (url, options) {
        return fetch(url, options).then(function (response) {
            if (response.ok) {
                return response.text().then(function (text) {
                    if (text) {
                        var result = {
                            success: false,
                            message: '接口请求失败'
                        };
                        try {
                            result = JSON.parse(text);
                        } catch (e) {
                            return Promise.reject(new Error('接口返回数据无法解析'));
                        }
                        var _result = result,
                            success = _result.success,
                            data = _result.data,
                            message = _result.message;

                        if (success) {
                            return Promise.resolve(data);
                        }
                        return Promise.reject(message);
                    }
                    return Promise.reject(new Error('接口未返回数据'));
                });
            }
            return Promise.reject(new Error('请求失败'));
        });
    }),
    options: function options() {
        var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'get';

        var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return extend({
            method: method.toUpperCase(),
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'isAjax': 1
            }
        }, _options);
    },
    urlMaker: function urlMaker(url) {
        if (!url) {
            throw new Error('has no url!');
        } else if (url.indexOf('http') !== 0) {
            url = '' + getHost() + url;
        }
        return url;
    }
};

export function post(oriUrl) {
    var oriParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var params = fetchTools.params,
        fetch = fetchTools.fetch,
        optionsMaker = fetchTools.options,
        urlMaker = fetchTools.urlMaker;

    var data = params(oriParams);
    var options = optionsMaker('post');
    options.headers['Content-Type'] = 'application/json;charset=UTF-8';
    try {
        options.body = JSON.stringify(oriParams);
    } catch (e) {
        return Promise.reject(e);
    }
    return fetch(urlMaker(oriUrl), options);
}

export function get(oriUrl) {
    var oriParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var params = fetchTools.params,
        fetch = fetchTools.fetch,
        options = fetchTools.options,
        urlMaker = fetchTools.urlMaker;


    var data = params(oriParams);
    var url = urlMaker(oriUrl);
    if (data) {
        url = url + '?' + data;
    }
    return fetch(url, options());
}