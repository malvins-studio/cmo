module.exports = {
  env: {
    commonjs: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:css-modules/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['css-modules'],
  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
