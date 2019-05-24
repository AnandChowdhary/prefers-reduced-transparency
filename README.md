# 🎞️ Prefers reduced transparency

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/prefers-reduced-transparency.svg)](https://travis-ci.org/AnandChowdhary/prefers-reduced-transparency)
[![Coverage Status](https://coveralls.io/repos/github/AnandChowdhary/prefers-reduced-transparency/badge.svg?branch=master)](https://coveralls.io/github/AnandChowdhary/prefers-reduced-transparency?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/prefers-reduced-transparency.svg)](https://github.com/AnandChowdhary/prefers-reduced-transparency/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/prefers-reduced-transparency.svg)
![NPM type definitions](https://img.shields.io/npm/types/prefers-reduced-transparency.svg)
[![NPM](https://img.shields.io/npm/v/prefers-reduced-transparency.svg)](https://www.npmjs.com/package/prefers-reduced-transparency)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/prefers-reduced-transparency.svg)](https://www.npmjs.com/package/prefers-reduced-transparency)

[![NPM](https://nodei.co/npm/prefers-reduced-transparency.png)](https://www.npmjs.com/package/prefers-reduced-transparency)

Prefers reduced transparency is a package that tells you whether a user prefers less transparency. It's based on the CSS `@media (prefers-reduced-transparency)`, which is part of [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/). It's around 700 bytes minified, 300 bytes gzipped.

## ⭐ Usage

Add the dependency from NPM:

```bash
npm install prefers-reduced-transparency
```

Import the package:

```js
import prefersReducedTransparency from "prefers-reduced-transparency";
```

Then call the function:

```js
const contrastPreference = prefersReducedTransparency();
// Returns "reduce" or "no-preference"
```

## 💡 Browser support

This package only works in browsers that natively support `@media (prefers-reduced-transparency)`, so it just returns `"no-preference"` in unsupported browsers. [Current browser support](https://caniuse.com/#feat=prefers-reduced-transparency)

By passing `false` as the argument, you can get `"unsupported"` as the value for unsupported browsers:

```js
const contrastPreference = prefersReducedTransparency(false);
// Returns "reduce", "no-preference", or "unsupported"
```

## 🛠️ Development

Install dependencies:

```bash
yarn
```

Compile Typescript to ES6 before publishing to NPM:

```bash
yarn build
```

## 📀 Media Queries Level 5

- 🙅 `prefers-reduced-motion` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-motion) · [NPM](https://www.npmjs.com/package/prefers-reduced-motion)
- 🎨 `prefers-color-scheme` · [GitHub](https://github.com/AnandChowdhary/prefers-color-scheme) · [NPM](https://www.npmjs.com/package/prefers-color-scheme)
- 🕶️ `prefers-contrast` · [GitHub](https://github.com/AnandChowdhary/prefers-contrast) · [NPM](https://www.npmjs.com/package/prefers-contrast)
- 🎞️ `prefers-reduced-transparency` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-transparency) · [NPM](https://www.npmjs.com/package/prefers-reduced-transparency)
- 🌑 `inverted-colors` · [GitHub](https://github.com/AnandChowdhary/inverted-colors) · [NPM](https://www.npmjs.com/package/inverted-colors)
- 🧖 `environment-blending` · [GitHub](https://github.com/AnandChowdhary/environment-blending) · [NPM](https://www.npmjs.com/package/environment-blending)
- 💡 `light-level` · [GitHub](https://github.com/AnandChowdhary/light-level) · [NPM](https://www.npmjs.com/package/light-level-css)

## 📝 License

MIT
