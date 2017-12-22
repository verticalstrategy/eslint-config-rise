module.exports = {
  parser: 'babel-eslint', // ESLint parser does not support React Native recommendations.
  extends: 'plugin:react-native/all',
  plugins: [
    'react-native',
  ],
  globals: {
    '__DEV__': true,
    fetch: true,
  },
}
