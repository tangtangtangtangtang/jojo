const common = require('../common')

/**
 * @description 把对象变成urlencoded字符串
 * @param obj {Object} {'a':'b','c':'d','e':'','':'f'}
 * @return a=b&c=d
 */
export const objectToQueryString = (obj) => {
  if (!common.isObject(obj)) return ''
  if (Object.prototype.toString.call(obj) !== '[object Object]') return ''
  return Object.keys(obj)
    .map(key => {
      if (!key || !obj[key]) return ''
      return `${key}=${encodeURIComponent(obj[key])}`
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
