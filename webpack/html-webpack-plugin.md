# html-webpack-plugin 使用总结
`html-webpack-plugin` 的作用是：当使用 `webpack`打包时，创建一个 `html` 文件，并把 `webpack` 打包后的静态文件自动插入到这个 `html` 文件当中。

## 使用
### 安装
```
npm install html-webpack-plugin --save-dev
```
### 使用默认配置
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
```

`html-webpack-plugin` 默认将会在 `output.path` 的目录下创建一个 `index.html` 文件， 并在这个文件中插入一个 `script` 标签，标签的 `src` 为  `output.filename`。

生成的文件如下：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack App</title>
  </head>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```

> 当配置多个入口文件 `entry` 时， 生成的将都会使用 `script` 引入。

> 如果 `webpack` 的输出中有任何CSS资源 (例如，使用 `mini-css-extract-plugin` 提取的 `CSS`)，那么这些资源将包含在
`HTML` 头部的 `link` 标记中。



## 更多配置
在实际的项目中，需要自定义一些 `html-webpack-plugin` 的配置， 像指定生成目录和文件， 使用指定模版生成文件， 更改 `document.title` 信息等， 这就更改默认配置来实现。

属性名|字段类型|默认值|说明
--|:--:|:--:|:--
**title**|String|Webpack App|网页 `document.title` 的配置, 在index.html 文件中可以使用 `<%= htmlWebpackPlugin.options.title %>` 设置网页标题为这里设置的值。
**filename**|String|index.html|`html` 文件生成的名称，可以使用 `assets/index.html` 来指定生成的文件目录和文件名, **重点1:生成文件的跟路径为`ouput.path`的目录。 重点2: ‘assets/index.html’ 和 `./assets/index.html` 这两种方式的效果时一样的， 都是在 `output.path` 目录下生成 `assets/index.html`** 
**template**|String|空|生成 `filename` 文件的模版， 如果存在 `src/index.ejs`， 那么默认将会使用这个文件作为模版。 **重点：与 `filename` 的路径不同， 当匹配模版路径的时候将会从项目的跟路径开始**
**templateParameters**|Boolean\|Object\|Function|空|覆盖默认的模版中使用的参数
**inject**|Boolean\|String|true|制定 `webpack` 打包的 `js` `css` 静态资源插入到 `html` 的位置， 为 `true` 或者 `body` 时， 将会把 `js` 文件放到 `body` 的底部， 为 `head` 时， 将 `js` 脚本放到 `head` 元素中。 
**favicon**|String|空|为生成的 `html` 配置一个 `favicon`
**mete**|Object|{}|为生成的 `html` 文件注入一些 `mete` 信息， 例如： `{viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}`
**base**|Object\|String\|false|false|在生成文件中注入 `base` 标签， 例如 `base: "https://example.com/path/page.html` **`<base>` 标签为页面上所有的链接规定默认地址或默认目标**
**minify**|Boolean\|Object|如果 `mode` 设置为 `production` 默认为 `true` 否则设置为 `false` | 设置静态资源的压缩情况
**hash**|Boolean|false| 如果为真，则向所有包含的 `js` 和 `CSS` 文件附加一个惟一的 `webpack` 编译散列。这对于更新每次的缓存文件名称非常有用
**cache**|Boolean|true|设置 `js` `css` 文件的缓存，当文件没有发生变化时， 是否设置使用缓存
**showErrors**|Boolean|true|当文件发生错误时， 是否将错误显示在页面
**xhtml**|Boolean|false| 当设置为 `true` 的时候，将会讲 `<link>` 标签设置为符合 `xhtml` 规范的自闭合形式


## 属性的使用方法
**webpack.config.js**
```js
{
  entry: 'index.js',
  output: {
    path: __dirname + '/dist', 
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App', 
      filename: 'assets/admin.html'  // 在  output.path 目录下生成 assets/admin.html 文件
    })
  ]
}
```

##  生成多个 `html` 文件
生成多个 `html` 文件只需要多次在 `plugins` 中使用 `HtmlWebpackPlugin`
**webpack.config.js**
```js
{
  entry: 'index.js',
  output: {
    path: __dirname + '/dist', 
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App', 
      filename: 'assets/admin.html'  // 在  output.path 目录下生成 assets/admin.html 文件
    })
  ]
}
```

## 使用自定义模版生成 `html` 文件
如果默认的 `html` 模版不能满足业务需求， 比如需要蛇生成文件里提前写一些 `css` 'js' 资源的引用， 最简单的方式就是新建一个模版文件， 并使用 `template` 属性指定模版文件的路径，`html-webpack-plugin` 插件将会自动向这个模版文件中注入打包后的 `js` 'css' 文件资源。

**webpack.config.js**
```js
plugins: [
  new HtmlWebpackPlugin({
    title: 'My App', 
    template: 'public/index.html'
  })
]
```

**public/index.html**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title><%= htmlWebpackPlugin.options.title %></title>
    <link src="xxx/xxx.css">
  </head>
  <body>
  </body>
</html>
```
> 使用自定义的模版接收 `HtmlWebpackPlugin` 中定义的 `title` 需要使用 `<%= htmlWebpackPlugin.options.title %>`


## Minification
如果 `minify` 选项设置为 `true` (webpack模式为 `production` 时的默认值)，生成的 `HTML` 将使用 `HTML-minifier` 和以下选项进行压缩:
```js
{
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
}
```

> 若要使用自定义 `html` 压缩器选项，请传递一个对象来配置。此对象不会与上面的默认值合并。

> 若要在生产模式期间禁用 `minification`，请将 `minify` 选项设置为 `false`。