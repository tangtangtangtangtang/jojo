"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlParam = exports.queryStringToObject = exports.objectToQueryString = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.string.starts-with");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

/*
 * @Description: url相关工具类
 * @产品wiki地址:
 * @接口wiki地址:
 * @Author: TangXiaozhuo
 * @Date: 2019-08-13 17:08:43
 * @LastEditTime: 2019-09-09 20:11:54
 * @LastEditors: Tang
 */
var common = require('../common');
/**
 * @description 把对象变成urlencoded字符串
 * @param obj {Object} {'a':'b','c':'d','e':'','':'f'}
 * @return a=b&c=d
 */


var objectToQueryString = function objectToQueryString(obj) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!common.isObject(obj)) return '';
  return Object.keys(obj).map(function (key) {
    if (!key) return '';
    if (options.strict && [null, undefined, ''].indexOf(obj[key]) > -1) return '';
    return "".concat(key, "=").concat(encodeURIComponent(obj[key]));
  }).filter(function (item) {
    return item !== '';
  }).join('&');
};
/**
 * @description 把urlencoded字符串变成对象
 * @param str {String} a=b&c=d
 * @return {Object} {'a':'b', 'c':'d'}
 */


exports.objectToQueryString = objectToQueryString;

var queryStringToObject = function queryStringToObject(str) {
  var result = {};
  if (typeof str !== 'string') return result;
  if (str.startsWith('?')) str = str.slice(1);
  str.split('&').forEach(function (item) {
    if (!item) return;
    result[item.split('=')[0]] = item.split('=')[1];
  });
  return result;
};
/**
 * @description 获取url中的某个参数
 * @param {String} url http://www.baidu.com?a=1&b=2
 * @param {String} name a
 * @return {String} 1
 */


exports.queryStringToObject = queryStringToObject;

var getUrlParam = function getUrlParam(url, name) {
  var search = url.split('?')[1];
  if (!search || !name) return '';
  var obj = queryStringToObject(search);
  return obj[name] || '';
};

exports.getUrlParam = getUrlParam;