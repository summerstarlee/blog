# webpack 性能优化分析篇
## 分析工具
webpack 提供了 stats.json 文件帮助分析打包结果， 使用下面的命令生成 stats.json  文件夹

```bash
# 配合 npx 使用
webpack --profile --json > stats.json
```
> 上面的命令首先使用 webpack 对文件进行打包， 然后将打包后的文件模块进分析，并将分析后的结果以 json 的形式输出到 stats.json 文件。

生成的文件在通过官网的 [说明](https://webpack.docschina.org/api/stats/#%E7%BB%93%E6%9E%84-structure-) 可以对打包结果的性能进行分析， 除此外 webpack 官网提供了在线分析的 [分析工具](http://webpack.github.io/analyse/), 通过上传生成的 stats.json 文件，可以更直观的分析打包模块.

## webpack-bundle-analyzer
除了上述的方式外，使用第三方工具 `webpack-bundle-analyzer` 可以更方便的查看模块打包的情况.

### 使用方法
1. 安装
```bash
yarn add webpack-bundle-analyzer -D
```

2. 使用
情况一： 分析已经存在的 `stats.json` 文件。
```bash
webpack-bundle-analyzer stats.json
```

情况二： 打包后进行分析。这种情况需要在 webpack 的配置文件中添加配置。

```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    plugins: [
        new BundleAnalyzerPlugin({/** 配置 **/})
    ]
}
```
这样的话当每次打包文件后都会自动打开一个基于打包模块分析的交互式的页面。
![](https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif)

3. 配置选项。
默认情况下， webpack-bundle-analyzer 会自动打开一个端口为 8888 的本地网页。 当使用 webpack-dev-server 进行开发时，我们往往希望运行 webpack-dev-server 打开的是项目网站而不是分析页面，这就需要对 webpack-bundle-analyzer 添加更多的配置。

|属性|类型|描述|
|----|----|----|
|analyzerMode|{String} server, static, json, disabled 中的一个|server: 以 http 服务的形式展示打包分析报告(默认); static: 将打包分析以 html 输出为静态文件; json: 将分析结构以 json 形式输出; disabled: 不做任何动作行为|
|analyzerHost|{String}|当 analyzerMode 为 server 时, 打开的服务路径， 默认 127.0.0.1|
|analyzerPort|{Number} 或者 auto |当 analyzerMode 为 server 时打开的服务端口, 默认为 8888|
|reportFilename|{String}|当 analyzerMode 为 static/json 时输出的文件路路径, 可以是一个绝对路径或者相对路径, 当为相对路径时以打包输出路径为七起点路径， 默认 report.html|
|defaultSizes|{String} stats、 parsed、 gzip |定义在报告中的模块大小是什么意思， 默认为 parsed 的大小|
|openAnalyzer|{Boolean}|analyzerMode 为 server 时是否自动打开浏览器。默认为 true。 **开发阶段，建议设置为 false**|
|generateStatsFile|{Boolean}|如果为 true 将会在打包输入目录生成 webpack 打包的 stats.json 文件。默认为 false|
|statsFilename|{String}|当 generateStatsFile 为 true 时， 设置 stats.json 的路径， 可以是绝对路径或相对路径， 为相对路径时以输出目录为起点路径。 默认为 stats.json|
|statsOptions|null 或者 {Object}|配置更多的 [stats options](https://webpack.js.org/configuration/stats/#stats-options)。 默认 null|
|excludeAssets|null、pattern、 pattern数组, pattern可以是字符串、RegExp、函数|设置不包含在分析报告中的资源， 默认为 null |
|logLevel|{String} info, warn, error, silent中的一个|设置报告中展示的细节等级, 默认为 info|


## speed-measure-webpack-plugin 分析打包速度
除了可以对打包后的模块大小进行分析， 还可以在打包过程中对使用的 loader 和 plugin 进行打包速度分析。

### 使用方法
1. 安装
```bash
yarn add speed-measure-webpack-plugin -D
```

2. 配置
speed-measure-webpack-plugin 插件同其他的 webpack 插件使用方式不同， 它需要生成一个插件实例，并通过实例的 wrap 方法包裹 webpack 的配置。

```javascript
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp =new SpeedMeasurePlugin({/**options**/})

module.exports = smp.wrap({
    module: {
        // ...
    },
    plugins: [
        // ...
    ]
})
```
执行打包命令后，输出结果中添加了对 loader 和 plugin 打包速度的分析。
![](https://user-gold-cdn.xitu.io/2020/5/3/171d8a2914e41867?w=398&h=411&f=png&s=43093)

