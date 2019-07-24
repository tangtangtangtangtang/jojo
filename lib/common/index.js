"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

/**
 * @description 判断是否是Object
 * @param {*} obj
 */
var isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

exports.isObject = isObject;