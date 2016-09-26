**My personal ESLint config**:

|Type|Extends|
|---|---|
|Default (optional ES2015+)|egoist|
|Browser|egoist/browser|
|Enforce ES2015+|egoist/esnext|
|Enforce ES2015+ in Browser **only**|egoist/exnext-browser|

**Notes**:

Vue requires `eslint-plugin-html`

## Install

```bash
$ npm install -D eslint eslint-config-egoist
```

## Usage

```js
{
  // egoist | egoist/browser | egoist/esnext | egoist/esnext-browser
  "extends": "egoist"
}
```

You may also like [eslint-config-egoist-vue](https://github.com/egoist/eslint-config-egoist-vue) for linting Vue projects.