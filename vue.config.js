const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/yuqing-Toolkits/topTenForeignNews.asmx': {
        target: 'http://119.12.171.133',
        changeOrigin: true,

      },
    },
  },
  publicPath: './',
  // 去除打包后的map文件,提高打包速度和减小体积
  productionSourceMap: false,
})
