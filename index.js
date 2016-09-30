'use strict'

module.exports = {
  extends: 'xo',
  rules: {
    "indent": [2, 2, {SwitchCase: 1}],
    "semi": [2, "never"],
    "quote-props": ["error", "as-needed"],
    "curly": ["error", "multi-line", "consistent"],
    // "no-unused-vars": [2, { "vars": "all", "args": "none" }],
    "guard-for-in": 0,
    "no-warning-comments": 0,
    "new-cap": [2, { "newIsCap": true, "capIsNew": false }]
  }
}