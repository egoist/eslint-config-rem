module.exports = {
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  plugins: ['babel'],
  rules: {
    semi: [2, 'never']
  },
  env: {
    node: true,
    es6: true,
    browser: true
  }
}
