<!-- Badges -->
[src-version]: https://img.shields.io/npm/v/eslint-preset-svelte?style=flat&color=444&label=version
[src-download]: https://img.shields.io/npm/dm/eslint-preset-svelte?style=flat&color=444&label=download
[href-npm]: https://npmjs.com/package/eslint-preset-svelte

<img src="https://api.iconify.design/logos:eslint.svg" alt="ESLint" align="right" width="140" height="140" />

[![version][src-version]][href-npm]
[![downloads][src-download]][href-npm]

Shareable ESLint preset for svelte.

## Usage

1. Install package:

```sh
pnpm add --save-dev eslint eslint-preset-basic eslint-preset-svelte
```

2. Create ESLint configuration file `eslint.config.js`:

```js
import { defineFlatConfig, presetBasic } from 'eslint-preset-basic'
import { presetSvelte } from 'eslint-preset-svelte'

export default defineFlatConfig([
  presetBasic({ enableTs: true }),
  presetSvelte({ enableTs: true }),
  // {
  //   rules: {...}
  // }
])
```

> If your project does not specify `"type":"module"` in its package.json file,
> then `eslint.config.js` must be in CommonJS format, such as:

```js
module.exports = (async () => {
  const { defineFlatConfig, presetBasic } = await import('eslint-preset-basic')
  const { presetSvelte } = await import('eslint-preset-svelte')
  return defineFlatConfig([
    presetBasic({ enableTs: true }),
    presetSvelte({ enableTs: true }),
    // {
    //   rules: {...}
    // }
  ])
})()
```

3. Add script for package.json:

```json
{
  "scripts": {
    "lint": "eslint .",
  }
}
```

## VS Code support

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your project setting `.vscode/settings.json`:

```jsonc
{
  // Auto fix
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },

  // Enable the flat config support
  "eslint.experimental.useFlatConfig": true,

  // Enable eslint for supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "svelte"
  ]
}
```

> Please support this project by simply putting a star.
>
> And, enjoy :)
