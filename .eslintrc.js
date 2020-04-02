module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.common.js',
      },
    },
  },
};
