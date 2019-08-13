/*
 * @Description: url相关工具类
 * @产品wiki地址:
 * @接口wiki地址:
 * @Author: TangXiaozhuo
 * @Date: 2019-08-13 17:08:43
 * @LastEditTime: 2019-08-13 17:16:13
 * @LastEditors: Tang
 */
const common = require('../common')

/**
 * @description 把对象变成urlencoded字符串
 * @param obj {Object} {'a':'b','c':'d','e':'','':'f'}
 * @return a=b&c=d
 */
export const objectToQueryString = (obj, options = {}) => {
  if (!common.isObject(obj)) return ''
  return Object.keys(obj)
    .map(key => {
      if (!key) return ''
      if (options.strict && !obj[key]) return ''
      return `${key}=${encodeURIComponent(obj[key] || '')}`
    })
    .filter(item => item !== '')
    .join('&')
}

/**
 * @description 把urlencoded字符串变成对象
 * @param str {String} a=b&c=d
 * @return {Object} {'a':'b', 'c':'d'}
 */
export const queryStringToObject = (str) => {
  const result = {}
  if (typeof str !== 'string') return result
  if (str.startsWith('?')) str = str.slice(1)
  str.split('&')
    .forEach(item => {
      if (!item) return
      result[item.split('=')[0]] = item.split('=')[1]
    })
  return result
}

/**
 * @description 获取url中的某个参数
 * @param {String} url http://www.baidu.com?a=1&b=2
 * @param {String} name a
 * @return {String} 1
 */
export const getUrlParam = (url, name) => {
  const search = url.split('?')[1]
  if (!search || !name) return ''
  const obj = queryStringToObject(search)
  return obj[name] || ''
}
