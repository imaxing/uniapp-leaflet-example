const { WeappTailwindcssDisabled } = require('./platform')
const { UniAppWeappTailwindcssWebpackPluginV4 } = require('weapp-tailwindcss-webpack-plugin')
const TransformPages = require('uni-read-pages')
const tfPages = new TransformPages()
module.exports = {
  transpileDependencies: ['uview-ui'],
  configureWebpack: {
    plugins: [
      new UniAppWeappTailwindcssWebpackPluginV4({
        disabled: WeappTailwindcssDisabled
      }),
      new tfPages.webpack.DefinePlugin({
        ROUTES: JSON.stringify(tfPages.routes)
      })
    ]
  }
}
