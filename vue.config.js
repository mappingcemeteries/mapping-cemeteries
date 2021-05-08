const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
module.exports = {
  publicPath: '',
  configureWebpack: { output: { filename: '[name].[hash].bundle.js' }},
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config
      .module
      .rule("csv")
      .test(/\.csv$/)
      .use("csv-loader")
      .loader("csv-loader")
      .options({
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true
      })
      .end();
  },
  lintOnSave: false,
}

