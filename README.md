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

Or, if running a node app (notice the argument `'node'` passed to the config creator):

```js
// .eslintrc.js
const config = require('@rise-digital/eslint-config-rise')
module.exports = config('node')
```

## Current supported packages

Ass default `standard` & `prettier` is included in the config.

* Config is extended with Flowtype support, if `package.json` includes `flow-bin`
* Config is extended with React support, if `package.json` includes `react`
* Config is extended with React Native support,if `package.json` includes `react-native`
