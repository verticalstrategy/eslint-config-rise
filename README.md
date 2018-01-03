# eslint-config-rise
ESLint configurations used by us in Rise, we thought you might love them too.

## Setup

### Quick 'one' liner

Installs `eslint`, `prettier` & `@rise-digital/eslint-config-rise`,
and sets up the default `.eslintrc.js` (Warning: this will overwrite an existing `.eslintrc.js`)

```sh
yarn add --dev \
eslint \
prettier \
@rise-digital/eslint-config-rise \
&& \
printf '%s\n%s\n' \
"const config = require('@rise-digital/eslint-config-rise')" \
'module.exports = config()' \
> .eslintrc.js
```

### Install
```sh
yarn add --dev \
eslint \
prettier \
@rise-digital/eslint-config-rise
```

### Configuration

Default configuration:

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

### Current supported packages

By default `standard` & `prettier` is included in the config.

* Config is extended with Flowtype support, if `package.json` includes `flow-bin`
* Config is extended with React support, if `package.json` includes `react`
* Config is extended with React Native support,if `package.json` includes `react-native`


## Editor integration setup

Generally we want the editor to lint (`eslint`) while typing, and only fix errors (`eslint --fix`) on save.

### Visual Studio Code

Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), and use/add the following configuration on your `User Settings`:

```json
{
  // linting & formatting
  "editor.formatOnSave": false,
  "eslint.enable": true,
  "eslint.run": "onType",
  "eslint.autoFixOnSave": true,
}
```

### Atom

[linter-eslint](https://atom.io/packages/linter-eslint)

Change/add the following in your `config.cson`:

```cson
"linter-eslint":
  fixOnSave: true
```

### Sublime Text

[Sublime​Linter](https://packagecontrol.io/packages/SublimeLinter) + [Sublime​Linter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)
[ESLint-Formatter](https://packagecontrol.io/packages/ESLint-Formatter)

Turn on automatic formatting on save, in the package-settings:

```json
{
  "format_on_save": false,
}
```
