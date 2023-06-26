const plugins = ['@babel/plugin-syntax-optional-chaining']
const UNI_PLATFORM = process.env.UNI_PLATFORM
const UNI_INPUT_DIR = process.env.UNI_INPUT_DIR
const UNI_OPT_TREESHAKINGNG = process.env.UNI_OPT_TREESHAKINGNG
const UNI_LIBRARIES = (process.UNI_LIBRARIES = process.UNI_LIBRARIES || ['@dcloudio/uni-ui'])
const path = require('path')
const normalizePath = v => (/^win/.test(process.platform) ? v.replace(/\\/g, '/') : v)

UNI_OPT_TREESHAKINGNG &&
  plugins.push(require('@dcloudio/vue-cli-plugin-uni-optimize/packages/babel-plugin-uni-api/index.js'))

if (
  (UNI_PLATFORM === 'app-plus' && process.env.UNI_USING_V8) ||
  (UNI_PLATFORM === 'h5' && process.env.UNI_H5_BROWSER === 'builtin')
) {
  try {
    plugins.push([
      require('@dcloudio/vue-cli-plugin-hbuilderx/packages/babel-plugin-console'),
      {
        file(file) {
          file = normalizePath(file)
          if (file.indexOf(normalizePath(UNI_INPUT_DIR)) === 0) {
            return path.relative(normalizePath(UNI_INPUT_DIR), file)
          }
          return false
        }
      }
    ])
  } catch (e) {}
}

UNI_LIBRARIES.forEach(ln => plugins.push(['import', { libraryName: ln, customName: n => `${ln}/lib/${n}/${n}` }]))
module.exports = {
  presets: [
    [
      '@vue/app',
      {
        modules: 'commonjs',
        useBuiltIns: UNI_PLATFORM === 'h5' ? 'usage' : 'entry'
      }
    ]
  ],
  plugins
}
