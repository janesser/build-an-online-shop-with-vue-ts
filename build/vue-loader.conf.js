'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = process.env.NODE_ENV === 'development'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

const vueI18nextLoader = require.resolve('./custom-loaders/vue-i18next-loader')

module.exports = {
  loaders: Object.assign({},
    utils.scriptLoaders({ts: {transpileOnly: isDevelopment}}),
    utils.cssLoaders({
      sourceMap: sourceMapEnabled,
      extract: isProduction
    }),
    {'i18n': vueI18nextLoader}
  ),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
