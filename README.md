# Webpack Starter

![Issues](https://img.shields.io/github/issues/paullaros/webpack-starter.svg)
![Forks](https://img.shields.io/github/forks/paullaros/webpack-starter.svg)
![Stars](https://img.shields.io/github/stars/paullaros/webpack-starter.svg)
![License](https://img.shields.io/github/license/paullaros/webpack-starter.svg)

Webpack Starter can be used to quickly set-up a webpack based project. This starter kit is mainly meant for projects that heavily use server-side languages, such as .NET, and serve prerendered HTML. The main use case of this starter kit is bundling JavaScript & CSS and writing those files to disk. Features as hot module replacement and generating HTML are not included.

## Features

- webpack 4
- webpack-serve
- es8: by babel, presets & plugins
- sass support: with autoprefixer
- copy tasks for fonts & images
- eslint: with babel-eslint
- production & development (watch) tasks

## Quick start

```shell
# Clone our repository
git clone  https://github.com/paullaros/webpack-starter.git

# Navigate to folder
cd webpack-starter

# Install dependencies
npm install

# Run development build
npm start

# Start webpack dev server on http://localhost:8080
npm run serve

# Run production build
npm run build
```
