/**
 * @description 判断是否是Object
 * @param {*} obj
 */
export const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
