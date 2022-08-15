# Starter for statik files based on [11ty](https://www.11ty.dev/) - Eleventy, a simpler static site generator.

_ver. 0.0.3 on 2022.08.15_


Starter uses npm command for front-end's works. On board: [HTML-Minifier](https://github.com/kangax/html-minifier), [TailwindCSS](https://github.com/tailwindlabs/tailwindcss), nesting and import suntax on base [PostCSS](https://github.com/postcss/postcss) witch Autoprefixer and Nanocss plugins, [Rollup](https://github.com/rollup/rollup) witch JSON and [Terser](https://github.com/terser/terser) plufins. Markdown parser [markdown-it](https://github.com/markdown-it/markdown-it).

## Getting started

Install the [node](https://nodejs.org) and the [npm](https://www.npmjs.com/) package manager, clone this repository in project folder and type this command into the wsl or mac terminal:
```
npm install
```

Default directory:
- For development source files: `src`,
- For server and production: `dist` (will be created after run "dev" or "build")

## Commands

### Develop in browser (default 'firefox'), watching files and live server reload.
_You can open this in any browser: `http://localhost:3000`_
```
npm run dev
```

### Building files for production.
```
npm run build
```

### Run server (if "dist" exist :) in browser.
```
npm run serve
```

## Settings

Use `package.json` and config files for change settings.

----

&copy;&nbsp;2022 [llcawc](https://github.com/llcawc), all rights reserved. Made&nbsp;with&nbsp;<span style="color: #e60f0a;">&#10084;</span>&nbsp;for&nbsp;the&nbsp;best&nbsp;architecture.
