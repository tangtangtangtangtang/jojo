module.exports = function (api) {
  api && api.cache(true)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: false
        }
      ]
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime'
      ],
      '@babel/plugin-transform-object-assign'
    ]
  }
}
