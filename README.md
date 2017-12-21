# eslint-config-rise
ESLint configurations used by us in Rise, we thought you might love them too.

## Install
`yarn add --dev eslint @rise-digital/eslint-config-rise`

## Configurations

### Standard
JavaScript Standard Style linting rules.

```js
// .eslintrc.js
module.exports = {
  extends: '@rise-digital/rise'
}
```

### Flowtype
Flow type linting rules.

```js
// .eslintrc.js
module.exports = {
  extends: [
    /* ... */
    '@rise-digital/rise/flowtype'
  ]
}
```

### React
React linting rules.

```js
// .eslint.js
module.exports = {
  extends: [
    /* ... */
    '@rise-digital/rise/react'
  ]
}
```

### React Native
React Native linting rules.

```js
// .eslintrc.js
module.exports = {
  extends: [
    /* ... */
    '@rise-digital/rise/react',
    '@rise-digital/rise/react-native'
  ]
}
```