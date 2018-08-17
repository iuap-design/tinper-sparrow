import { extend } from './extend';
const getHost = (key = 'api') => {
  const hosts = {
      api: {
          production: process.env.HOST || "",
          development: process.env.HOST || "",
      }
  };
  return hosts[key][process.env.NODE_ENV];
};

const fetchTools = {
  params(params) {
      try {
          return Object.keys(params).map((key) => {
              let param = params[key];
              switch (typeof param) {
                  case 'object':
                      param = escape(JSON.stringify(param));
                      break;
                  case 'undefined':
                      param = '';
                      break;
                  default:
                      break;
              }
              return `${key}=${param}`;
          }).join('&');
      } catch (e) {
          console.log('error in urlParams');
          return '';
      }
  },
  fetch(url, options) {
      return fetch(url, options).then((response) => {
          if (response.ok) {
              return response.text().then((text) => {
                  if (text) {
                      let result = {
                          success: false,
                          message: '接口请求失败',
                      };
                      try {
                          result = JSON.parse(text);
                      } catch (e) {
                          return Promise.reject(new Error('接口返回数据无法解析'));
                      }
                      const { success, data, message } = result;
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
  },
  options(method = 'get', options = {}) {
      return extend({
          method: method.toUpperCase(),
          credentials: 'include',
          cache: 'no-cache',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              'isAjax': 1,
          },
      },options);
  },
  urlMaker(url) {
      if (!url) {
          throw new Error('has no url!');
      } else if (url.indexOf('http') !== 0) {
          url = `${getHost()}${url}`;
      }
      return url;
  },
};

export function post(oriUrl, oriParams = {}) {
  const {
      params,
      fetch,
      options: optionsMaker,
      urlMaker,
  } = fetchTools;
  const data = params(oriParams);
  const options = optionsMaker('post');
  options.headers['Content-Type'] = 'application/json;charset=UTF-8';
  try {
      options.body = JSON.stringify(oriParams);
  } catch (e) {
      return Promise.reject(e);
  }
  return fetch(urlMaker(oriUrl), options);
}

export function get(oriUrl, oriParams = {}) {
  const {
      params,
      fetch,
      options,
      urlMaker
  } = fetchTools;

  const data = params(oriParams);
  let url = urlMaker(oriUrl);
  if (data) {
      url = `${url}?${data}`;
  }
  return fetch(url, options());
}