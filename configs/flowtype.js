module.exports = {
  parser: 'babel-eslint', // ESLint parser does not support type annotations.
  plugins: [
    'flowtype',
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
}