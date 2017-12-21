'use strict'

const rootPackageJson = module.parent
  ? module.parent.require('./package.json')
  : require('./package.json')

const prefix = '@rise-digital/rise/configs'
const packages = Object.assign({}, rootPackageJson.dependencies, rootPackageJson.devDependencies)

module.exports = (overrides = {}) => {
  // initial config
  let config = {
    extends: [
      `${prefix}/standard`,
    ],
  }

  if (packages['react']) {
    config.extends.push(`${prefix}/react`)
  }

  if (packages['react-native']) {
    config.extends.push(`${prefix}/react-native`)
  }

  if (packages['flow-bin']) {
    config.extends.push(`${prefix}/flowtype`)
  }

  // note: always add this as the last extension
  config.extends.push(`${prefix}/prettier`)

  return Object.assign(config, overrides)
}