/* eslint-disable */
const URL = require('../src/url/index')
test('测试objectToQueryString', () => {
  expect(URL.objectToQueryString({ 'key': 'value' })).toBe('key=value')
  expect(URL.objectToQueryString({ 'key': 'value', '': 'value', 'key3': '', 'key2':'value2' })).toBe('key=value&key2=value2')
})

test('test测试queryStringToObject', () => {
  expect(URL.queryStringToObject('')).toStrictEqual({})
  expect(URL.queryStringToObject('a=b')).toStrictEqual({a: 'b'})
  expect(URL.queryStringToObject('a=b&c=d')).toStrictEqual({a: 'b', c: 'd'})
})

test('test测试getUrlParam', () => {
  expect(URL.getUrlParam('https://www.baidu.com/some/path?key=value&key2=value2', 'key2')).toStrictEqual('value2')
  expect(URL.getUrlParam('https://www.baidu.com/some/path?key=value&key2=value2', 'key3')).toStrictEqual('')
})