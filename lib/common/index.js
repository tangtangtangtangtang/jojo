"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filteFalseValue = exports.isObject = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

/*
 * @Description: desc
 * @Author: TangXiaozhuo
 * @Date: 2019-05-28 18:13:04
 * @LastEditTime: 2019-08-13 17:50:06
 * @LastEditors: Tang
 */

/**
 * @description 判断是否是Object
 * @param {*} obj
 */
var isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
/**
 * @description 去除kv里v为false的值
 * @param {Object} obj
 */


exports.isObject = isObject;

var filteFalseValue = function filteFalseValue() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (var i in obj) {
    if (!obj[i]) delete obj[i];
  }

  return obj;
};

exports.filteFalseValue = filteFalseValue;