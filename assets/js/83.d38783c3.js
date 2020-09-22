(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{429:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-性能优化分析篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-性能优化分析篇"}},[t._v("#")]),t._v(" webpack 性能优化分析篇")]),t._v(" "),a("h2",{attrs:{id:"分析工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析工具"}},[t._v("#")]),t._v(" 分析工具")]),t._v(" "),a("p",[t._v("webpack 提供了 stats.json 文件帮助分析打包结果， 使用下面的命令生成 stats.json  文件夹")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配合 npx 使用")]),t._v("\nwebpack --profile --json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" stats.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("blockquote",[a("p",[t._v("上面的命令首先使用 webpack 对文件进行打包， 然后将打包后的文件模块进分析，并将分析后的结果以 json 的形式输出到 stats.json 文件。")])]),t._v(" "),a("p",[t._v("生成的文件在通过官网的 "),a("a",{attrs:{href:"https://webpack.docschina.org/api/stats/#%E7%BB%93%E6%9E%84-structure-",target:"_blank",rel:"noopener noreferrer"}},[t._v("说明"),a("OutboundLink")],1),t._v(" 可以对打包结果的性能进行分析， 除此外 webpack 官网提供了在线分析的 "),a("a",{attrs:{href:"http://webpack.github.io/analyse/",target:"_blank",rel:"noopener noreferrer"}},[t._v("分析工具"),a("OutboundLink")],1),t._v(", 通过上传生成的 stats.json 文件，可以更直观的分析打包模块.")]),t._v(" "),a("h2",{attrs:{id:"webpack-bundle-analyzer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-bundle-analyzer"}},[t._v("#")]),t._v(" webpack-bundle-analyzer")]),t._v(" "),a("p",[t._v("除了上述的方式外，使用第三方工具 "),a("code",[t._v("webpack-bundle-analyzer")]),t._v(" 可以更方便的查看模块打包的情况.")]),t._v(" "),a("h3",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("ol",[a("li",[t._v("安装")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" webpack-bundle-analyzer -D\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用\n情况一： 分析已经存在的 "),a("code",[t._v("stats.json")]),t._v(" 文件。")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("webpack-bundle-analyzer stats.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("情况二： 打包后进行分析。这种情况需要在 webpack 的配置文件中添加配置。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" BundleAnalyzerPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack-bundle-analyzer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BundleAnalyzerPlugin\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BundleAnalyzerPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 配置 **/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("这样的话当每次打包文件后都会自动打开一个基于打包模块分析的交互式的页面。\n"),a("img",{attrs:{src:"https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("配置选项。\n默认情况下， webpack-bundle-analyzer 会自动打开一个端口为 8888 的本地网页。 当使用 webpack-dev-server 进行开发时，我们往往希望运行 webpack-dev-server 打开的是项目网站而不是分析页面，这就需要对 webpack-bundle-analyzer 添加更多的配置。")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("analyzerMode")]),t._v(" "),a("td",[t._v("{String} server, static, json, disabled 中的一个")]),t._v(" "),a("td",[t._v("server: 以 http 服务的形式展示打包分析报告(默认); static: 将打包分析以 html 输出为静态文件; json: 将分析结构以 json 形式输出; disabled: 不做任何动作行为")])]),t._v(" "),a("tr",[a("td",[t._v("analyzerHost")]),t._v(" "),a("td",[t._v("{String}")]),t._v(" "),a("td",[t._v("当 analyzerMode 为 server 时, 打开的服务路径， 默认 127.0.0.1")])]),t._v(" "),a("tr",[a("td",[t._v("analyzerPort")]),t._v(" "),a("td",[t._v("{Number} 或者 auto")]),t._v(" "),a("td",[t._v("当 analyzerMode 为 server 时打开的服务端口, 默认为 8888")])]),t._v(" "),a("tr",[a("td",[t._v("reportFilename")]),t._v(" "),a("td",[t._v("{String}")]),t._v(" "),a("td",[t._v("当 analyzerMode 为 static/json 时输出的文件路路径, 可以是一个绝对路径或者相对路径, 当为相对路径时以打包输出路径为七起点路径， 默认 report.html")])]),t._v(" "),a("tr",[a("td",[t._v("defaultSizes")]),t._v(" "),a("td",[t._v("{String} stats、 parsed、 gzip")]),t._v(" "),a("td",[t._v("定义在报告中的模块大小是什么意思， 默认为 parsed 的大小")])]),t._v(" "),a("tr",[a("td",[t._v("openAnalyzer")]),t._v(" "),a("td",[t._v("{Boolean}")]),t._v(" "),a("td",[t._v("analyzerMode 为 server 时是否自动打开浏览器。默认为 true。 "),a("strong",[t._v("开发阶段，建议设置为 false")])])]),t._v(" "),a("tr",[a("td",[t._v("generateStatsFile")]),t._v(" "),a("td",[t._v("{Boolean}")]),t._v(" "),a("td",[t._v("如果为 true 将会在打包输入目录生成 webpack 打包的 stats.json 文件。默认为 false")])]),t._v(" "),a("tr",[a("td",[t._v("statsFilename")]),t._v(" "),a("td",[t._v("{String}")]),t._v(" "),a("td",[t._v("当 generateStatsFile 为 true 时， 设置 stats.json 的路径， 可以是绝对路径或相对路径， 为相对路径时以输出目录为起点路径。 默认为 stats.json")])]),t._v(" "),a("tr",[a("td",[t._v("statsOptions")]),t._v(" "),a("td",[t._v("null 或者 {Object}")]),t._v(" "),a("td",[t._v("配置更多的 "),a("a",{attrs:{href:"https://webpack.js.org/configuration/stats/#stats-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("stats options"),a("OutboundLink")],1),t._v("。 默认 null")])]),t._v(" "),a("tr",[a("td",[t._v("excludeAssets")]),t._v(" "),a("td",[t._v("null、pattern、 pattern数组, pattern可以是字符串、RegExp、函数")]),t._v(" "),a("td",[t._v("设置不包含在分析报告中的资源， 默认为 null")])]),t._v(" "),a("tr",[a("td",[t._v("logLevel")]),t._v(" "),a("td",[t._v("{String} info, warn, error, silent中的一个")]),t._v(" "),a("td",[t._v("设置报告中展示的细节等级, 默认为 info")])])])]),t._v(" "),a("h2",{attrs:{id:"speed-measure-webpack-plugin-分析打包速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speed-measure-webpack-plugin-分析打包速度"}},[t._v("#")]),t._v(" speed-measure-webpack-plugin 分析打包速度")]),t._v(" "),a("p",[t._v("除了可以对打包后的模块大小进行分析， 还可以在打包过程中对使用的 loader 和 plugin 进行打包速度分析。")]),t._v(" "),a("h3",{attrs:{id:"使用方法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-2"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("ol",[a("li",[t._v("安装")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" speed-measure-webpack-plugin -D\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("配置\nspeed-measure-webpack-plugin 插件同其他的 webpack 插件使用方式不同， 它需要生成一个插件实例，并通过实例的 wrap 方法包裹 webpack 的配置。")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" SpeedMeasurePlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'speed-measure-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" smp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpeedMeasurePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**options**/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" smp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("执行打包命令后，输出结果中添加了对 loader 和 plugin 打包速度的分析。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/3/171d8a2914e41867?w=398&h=411&f=png&s=43093",alt:""}})])])}),[],!1,null,null,null);s.default=n.exports}}]);