/*
 * @Description: desc
 * @产品wiki地址:
 * @接口wiki地址:
 * @Author: TangXiaozhuo
 * @Date: 2019-08-13 17:08:43
 * @LastEditTime: 2019-08-13 17:09:29
 * @LastEditors: Tang
 */
module.exports = function (api) {
  api && api.cache(true)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: false,
          useBuiltins: true
        }
      ]
    ]
  }
}
