'use strict'
var base = require('./')

module.exports = Object.assign({}, base, {
  extends: ['xo/esnext', 'xo/browser'],
  plugins: ['vue']
})