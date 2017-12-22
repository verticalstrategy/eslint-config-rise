# eslint-config-rise
ESLint configurations used by us in Rise, we thought you might love them too.

## Install
`yarn add --dev eslint prettier @rise-digital/eslint-config-rise`

## Configuration

```js
// .eslintrc.js
const config = require('@rise-digital/eslint-config-rise')
module.exports = config()
```

The config creator take an optional argument in form of `overrides`.
(currently needed to set `env.node = true`, to accept `__dirname`, `__filename` etc.)

```js
// .eslintrc.js
const config = require('@rise-digital/eslint-config-rise')
module.exports = config({
  rules: {
    'rule/to-disable': 0
  },
  env: {
    node: true
  },
  globals: {
    logger: true
  }
})
```

## Current supported packages

By default `standard` & `prettier` is included in the config.

* Config is extended with Flowtype support, if `package.json` includes `flow-bin`
* Config is extended with React support, if `package.json` includes `react`
* Config is extended with React Native support,if `package.json` includes `react-native`
