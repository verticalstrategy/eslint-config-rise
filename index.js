'use strict'

const isLocal = !!module.parent
const rootPackageJson = isLocal
  ? require('./package.json')
  : module.parent.require('./package.json')

const prefix = isLocal ? './configs' : '@rise-digital/rise/configs'
const packages = Object.assign(
  {},
  rootPackageJson.dependencies,
  rootPackageJson.devDependencies
)

module.exports = (overrides = {}) => {
  // initial config
  let config = {
    extends: [`${prefix}/standard.js`],
  }

  if (packages['react']) {
    config.extends.push(`${prefix}/react.js`)
  }

  if (packages['react-native']) {
    config.extends.push(`${prefix}/react-native.js`)
  }

  if (packages['flow-bin']) {
    config.extends.push(`${prefix}/flowtype.js`)
  }

  // move and remove any overrides extends
  if (overrides.extends) {
    if (Array.isArray(overrides.extends)) {
      Array.prototype.push.apply(config.extends, overrides.extends)
    } else {
      config.extends.push(overrides.extends)
    }
    delete overrides.extends
  }

  // note: always add this as the last extension
  config.extends.push(`${prefix}/prettier.js`)

  return Object.assign(config, overrides)
}
