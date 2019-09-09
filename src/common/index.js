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
export const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * @description 去除kv里v为false的值
 * @param {Object} obj
 */
export const filteFalseValue = (obj = {}) => {
  for (let i in obj) {
    if (!obj[i]) delete obj[i]
  }
  return obj
}
