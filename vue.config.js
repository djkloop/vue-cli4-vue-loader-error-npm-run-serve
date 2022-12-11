const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(new VueLoaderPlugin())
  }
}