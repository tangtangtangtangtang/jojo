/*
 * @Description: 单测
 * @产品wiki地址:
 * @接口wiki地址:
 * @Author: TangXiaozhuo
 * @Date: 2019-08-13 17:08:43
 * @LastEditTime: 2019-10-14 20:25:45
 * @LastEditors: Tang
 */
/* eslint-disable */
const URL = require('../src/url/index')
test('测试objectToQueryString', () => {
  // 默认行为
  expect(URL.objectToQueryString(undefined)).toBe('')
  expect(URL.objectToQueryString(null)).toBe('')
  expect(URL.objectToQueryString()).toBe('')
  expect(URL.objectToQueryString({})).toBe('')
  expect(URL.objectToQueryString({ 'key': 'value' })).toBe('key=value')
  expect(URL.objectToQueryString({ 'key': 'value', '': 'value', 'key3': '', 'key2':'value2' })).toBe('key=value&key3=&key2=value2')
  // 加参数options
  const options = { strict: true }
  expect(URL.objectToQueryString(undefined, options)).toBe('')
  expect(URL.objectToQueryString(null, options)).toBe('')
  expect(URL.objectToQueryString(undefined, options)).toBe('')
  expect(URL.objectToQueryString({}, options)).toBe('')
  expect(URL.objectToQueryString({ key: '1', key2: null, key3: '', key4: undefined, key5: 0}, options)).toBe('key=1&key5=0')
  expect(URL.objectToQueryString({ 'key': 'value' }, options)).toBe('key=value')
  expect(URL.objectToQueryString({ 'key': 'value', '': 'value', 'key3': '', 'key2':'value2' }, options)).toBe('key=value&key2=value2')
  // encode false
  expect(URL.objectToQueryString({ 'key': 'value/' }, { encode: false })).toBe('key=value/')
})

test('test测试queryStringToObject', () => {
  // 默认行为
  expect(URL.queryStringToObject(undefined)).toStrictEqual({})
  expect(URL.queryStringToObject(null)).toStrictEqual({})
  expect(URL.queryStringToObject()).toStrictEqual({})
  expect(URL.queryStringToObject('')).toStrictEqual({})
  expect(URL.queryStringToObject('a=b')).toStrictEqual({a: 'b'})
  expect(URL.queryStringToObject('a=b&c=d')).toStrictEqual({a: 'b', c: 'd'})
  expect(URL.queryStringToObject('?a=b&c=d')).toStrictEqual({a: 'b', c: 'd'})
})

test('test测试getUrlParam', () => {
  expect(URL.getUrlParam('https://www.baidu.com/some/path?key=value&key2=value2', 'key2')).toStrictEqual('value2')
  expect(URL.getUrlParam('https://www.baidu.com/some/path?key=value&key2=value2', 'key3')).toStrictEqual('')
})