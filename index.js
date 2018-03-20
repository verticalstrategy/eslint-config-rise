'use strict'

const rootPackageJson = module.parent
  ? module.parent.require('./package.json')
  : require('./package.json')

const packages = Object.assign(
  {},
  rootPackageJson.dependencies,
  rootPackageJson.devDependencies,
  rootPackageJson.peerDependencies
)
const isLocal = !packages['@rise-digital/eslint-config-rise']
const prefix = isLocal ? './configs' : '@rise-digital/rise/configs'

module.exports = (overrides = {}) => {
  // initial config
  let config = {
    extends: ['eslint:recommended', `${prefix}/standard.js`],
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

  if (packages['jest']) {
    config.extends.push(`${prefix}/jest.js`)
  }

  // note: all extends (prettier excluded) should be loaded before this line

  // move any overrides.extends to current config
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

  // apply remaining overrides
  Object.assign(config, overrides)

  if (isLocal) {
    console.log('config', config) // eslint-disable-line
  }

  return config
}
