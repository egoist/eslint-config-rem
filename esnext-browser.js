'use strict';
const path = require('path')

module.exports = {
  extends: path.join(__dirname, 'esnext.js'),
  env: {
    node: false,
    browser: true
  }
}