const baseConfig = require('./base.config')
const webpackMerge = require('webpack-merge')
module.exports = new webpackMerge(baseConfig,{
  devServer:{
    contentBase:'../dist',
    inline:true //自动更新
  }
})