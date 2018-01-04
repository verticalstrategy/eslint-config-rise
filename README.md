# eslint-config-rise
ESLint configurations used by us in Rise, we thought you might love them too.

## Setup

### Quick *one*-liner (install & configuration)

Installs `eslint`, `prettier` & `@rise-digital/eslint-config-rise`,
and sets up the default `.eslintrc.js`
(Warning: this will overwrite an existing `.eslintrc.js`)

```sh
yarn add --dev \
eslint \
prettier \
@rise-digital/eslint-config-rise \
&& \
printf '%s\n%s\n' \
"const config = require('@rise-digital/eslint-config-rise')" \
"module.exports = config()" \
> .eslintrc.js
```

### Install

Install the necessary packages: `eslint`, `prettier` & `@rise-digital/eslint-config-rise`

```sh
yarn add --dev \
eslint \
prettier \
@rise-digital/eslint-config-rise
```

### Configuration

A default configuration look like this.
Please note that the rc-file is a `js` file and not `json`, as we look up which packages to support.

```js
// .eslintrc.js
const config = require('@rise-digital/eslint-config-rise')
module.exports = config()
```

The config creator take an optional options object, to extend or disable specific rules.

```js
// .eslintrc.js
const config = require('@rise-digital/eslint-config-rise')
module.exports = config({
  rules: {
    'rule/to-disable': 0,
  },
  env: {
    node: true,
  },
  globals: {
    logger: true,
  }
})
```

### Current supported packages

By default `standard` & `prettier` is included in the config.

* Config is extended with Flowtype support, if `package.json` includes `flow-bin`
* Config is extended with React support, if `package.json` includes `react`
* Config is extended with React Native support,if `package.json` includes `react-native`


## Editor integration setup

Generally we want the editor to lint (run `eslint`) while typing, and only fix errors (run `eslint --fix`) on save.
Here are some extensions/packages for various editors:

### Visual Studio Code

[ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Use/add the following configuration in your `User Settings`:

```json
{
  "editor.formatOnSave": false,
  "eslint.enable": true,
  "eslint.run": "onType",
  "eslint.autoFixOnSave": true
}
```

### Atom

[linter-eslint package](https://atom.io/packages/linter-eslint)

Use/add the following  configuration in `Your Config` (`config.cson`):

```cson
"linter-eslint":
  fixOnSave: true
```

### Sublime Text

[Sublime​Linter package](https://packagecontrol.io/packages/SublimeLinter) + [Sublime​Linter-contrib-eslint package](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)
[ESLint-Formatter package](https://packagecontrol.io/packages/ESLint-Formatter)

Enable automatic formatting on save, in the package-settings:

```json
{
  "format_on_save": false
}
```
