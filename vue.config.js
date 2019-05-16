const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// 生产环境部署的路径
const BASE_URL = process.env.NODE_ENV === 'production' ? '/frog-pay/' : '/'

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'dist',
  assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined,
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
    config.resolve.extensions
      .add('*', '.js', '.json', '.vue')
  },
  devServer: {
    port: 8085, // 端口号
    https: false, // https:{type:Boolean}
    open: true // 配置自动启动浏览器
  }
}
