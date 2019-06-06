const path = require('path')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  }
}
