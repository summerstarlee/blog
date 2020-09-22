# 样式打包配置

## style-loader 
负责将上个 loader(css-loader) 转换后的 css 代码插入到 DOM 中.

### style-loader 配置
```javascript   
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
```

### style-loader options 配置
|属性名|类型|默认|描述|
|:--:|:--:|:--:|:--:|
|injectType|string|styleTag|设置样式如何插入到 DOM 中|

## mini-css-extract-plugin
代替 style-loader， 将 css 代码打包抽离成单独的 css 文件， 在 index.html 中以 link.href 方式引入 

### mini-css-extract-plugin 使用方式
需要将 MiniCssExtractPlugin.loader 代替 style.loader
```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}
```

## autoprefixer 自动添加前缀
使用 `autuprefixer` 可以为 css 属性添加浏览器前缀。 
需要配合 `postcss-loader` 和 `.borswerlistrc` 一同使用。

### autoprefixer 使用方式
```javascript
// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }
        ]
    }
}
```

```javascript
// postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
```

```
// .browserslistrc
> 1%,
last 2 versions,
mot ie <= 8
```

## css 压缩
配置 optimization 属性，使用 optimize-css-assets-webpack-plugin 将打包后的 css 文件进行压缩.

### css 压缩配置
```javascript
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-webpack-plugin')

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCssAssetsPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}
```
> 使用 optimization 配置 minimizer 需要先设置 minimize 为 true, 告诉 webpack 允许使用 minimizer 配置自定义压缩。
> minimizer 是一个数组， 这是因为通常情况下需要使用 terser-webpack-plugin 配置 js 压缩。

下面是一个完整的使用 scss 语法，对 css 代码进行自动添加前缀、文件抽离、压缩(涵js压缩)的 webpack 配置。

```javascript
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader(),
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    }
}
```

```javascript
// postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
```

```
// .browserslistrc
> 1%,
last 2 versions,
not ie <= 8
```

> 需要安装的npm包 
```bash
yarn add terser-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin  css-loader postcss-loader node-sass sass-loader autoprefixer -D
```