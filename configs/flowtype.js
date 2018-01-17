module.exports = {
  parser: 'babel-eslint', // ESLint parser does not support type annotations.
  extends: ['plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
}
