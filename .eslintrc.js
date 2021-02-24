module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  plugins: ['react', 'html'],
  rules: {
    'space-before-function-paren': 0
  }
}
