# eslint-config-rise
ESLint configurations used by us in Rise, we thought you might love them too.

## Install
`yarn add --dev eslint prettier @rise-digital/eslint-config-rise`

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
// .eslintrc.js
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

### Prettier
Prettier formatting and linting rules.

_This needs to be added as the last rule, since it's overriding already existing rules._

```js
// .eslintrc.js
module.exports = {
  extends: [
    /* ... */
    '@rise-digital/rise/prettier'
  ]
}
```