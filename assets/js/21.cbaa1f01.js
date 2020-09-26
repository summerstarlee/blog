(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{371:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"项目分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目分析"}},[s._v("#")]),s._v(" 项目分析")]),s._v(" "),a("h2",{attrs:{id:"使用-vue-init-webpack-simple-productname-初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vue-init-webpack-simple-productname-初始化项目"}},[s._v("#")]),s._v(" 使用 "),a("code",[s._v("vue init webpack-simple productName")]),s._v(" 初始化项目")]),s._v(" "),a("blockquote",[a("p",[s._v("前提环境： "),a("code",[s._v("node")]),s._v(" "),a("code",[s._v("npm")]),s._v(" "),a("code",[s._v("vue-cli")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# init")]),s._v("\nvue init webpack-simple my-project\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# run ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my-project\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"在项目中-安装-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在项目中-安装-element"}},[s._v("#")]),s._v(" 在项目中 安装 Element")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" element-ui --save-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("p",[s._v("安装 "),a("code",[s._v("element-ui")]),s._v(" 之后，打开 "),a("code",[s._v("node_modules/element-ui")]),s._v(" 目录")]),s._v(" "),a("blockquote",[a("p",[s._v("Element 的源码分为 "),a("a",{attrs:{href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"}},[s._v("源码版本"),a("OutboundLink")],1),s._v("  和  发布版本（npm install element-ui 时安装到 node_modules 中的 element-ui 文件），发布版本少了很多源码文件的webpack 等配置文件，项目结构也更加清晰，方便理解。 这里分析的就是发布版本。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/7/165b1ffa12ca4e54?w=293&h=249&f=png&s=4392",alt:"Element ui 目录结构"}})]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("element"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ui\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" lib                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存放 打包后问文件目录")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" packages                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 组件的源码目录")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" alert                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 组件的源码包")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" src                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 组件bao")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 组件的入口文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" src                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 源码目录")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" directive              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实现滚动优化，鼠标点击优化")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" locale                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// i18n 国际化")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" mixins                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Vue 混合器")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" transition             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 样式过渡效果")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" utils                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//工具类包")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//源码入口文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" types                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//typescript 文件包")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//npm 包依赖、文件配置")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("上面也提到了 "),a("code",[s._v("Element-ui")]),s._v(" 的源码是分为 "),a("a",{attrs:{href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"}},[s._v("源码版本"),a("OutboundLink")],1),s._v("  和 发布版本， 从源码版本的 "),a("code",[s._v("build/webpack.common.js")]),s._v(" 文件中的 "),a("code",[s._v("webpack")]),s._v(" 配置的 "),a("code",[s._v("entry")]),s._v(" 可以看到 "),a("code",[s._v("Element")]),s._v(" 的文件入口是 "),a("code",[s._v("src/index.js")]),s._v(" 那么我们的分析也从 "),a("code",[s._v("src/index")]),s._v(" 入手。")]),s._v(" "),a("h2",{attrs:{id:"src-index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-index-js"}},[s._v("#")]),s._v(" src/index.js")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src/index.js")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Pagination "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../packages/pagination/index.js'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Dialog "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../packages/dialog/index'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//packages 下的导入组件包")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" components "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 讲所有的组件统一放到 components 中")]),s._v("\n    Pagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    Dialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("opts "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("component")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 遍历将组件加入到Vue中")]),s._v("\n        Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加载中")]),s._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Loading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("directive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义Vue的原型 prototype")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ELEMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        zIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$alert "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MessageBox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[a("code",[s._v("Element-ui")]),s._v(" 的入口文件，遵循于 "),a("a",{attrs:{href:"https://juejin.im/post/6844903671793188877",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue插件开发"),a("OutboundLink")],1),s._v(" 的开发方式。")]),s._v(" "),a("p",[s._v("文件的头部引入了 "),a("code",[s._v("packages/xx/index.js")]),s._v(", 这个是 "),a("code",[s._v("Element")]),s._v(" 内置组件的入口文件。")]),s._v(" "),a("p",[a("code",[s._v("install")]),s._v(" 是 "),a("code",[s._v("vue")]),s._v(" 插件的公开方法。当使用 "),a("code",[s._v("Vue.use(element)")]),s._v(" 的时候将会调用这个方法。 这个方法的第一个参数是 "),a("code",[s._v("Vue")]),s._v(" 构造器， 第二个参数是一个可选的对象。")]),s._v(" "),a("p",[s._v("在 "),a("a",{attrs:{href:"https://juejin.im/post/6844903671793188877",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue插件开发"),a("OutboundLink")],1),s._v("中提到插件的第二种形式 -- 添加全局资源: 指令/过滤器/过渡/组件\n在 "),a("code",[s._v("install")]),s._v(" 中,将 内置的文件通过 组件注册的形式将 组件添加到了 "),a("code",[s._v("Elemnet")]),s._v(" 的全局资源中。在使用 "),a("code",[s._v("Element")]),s._v(" 的项目中， 我们会直接使用 "),a("code",[s._v("<el-input />")]),s._v(", 这便是 "),a("code",[s._v("Vue.component(component.name,component)")]),s._v(" 这句话的功劳。  如果对于组件注册不熟悉  可以看 "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-registration.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网 组件注册"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Loading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("directive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这行代码同样是插件开发的第二种形式，它将 Loading 组件的 "),a("code",[s._v("directive")]),s._v(" 挂载到全局资源。")]),s._v(" "),a("p",[s._v("同样也使用到了"),a("a",{attrs:{href:"https://juejin.im/post/6844903671793188877",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue插件开发"),a("OutboundLink")],1),s._v("中提到插件的第四种形式 -- 添加 "),a("code",[s._v("vue")]),s._v(" 实例方法")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$alert "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MessageBox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在使用 "),a("code",[s._v("Element")]),s._v(" 的时候，我们就可以使用 "),a("code",[s._v("this.$alert('xxxx')")]),s._v(" 这种写法了。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" window "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'undefined'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("当检测到 Vue 是全局变量的时候，自动将 执行 "),a("code",[s._v("install")]),s._v(" 方法")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    CollapseTransition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    Loading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    Pagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    Dialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("导出 "),a("code",[s._v("Element")]),s._v(",这里导出的就是 使用 "),a("code",[s._v("import Element from 'Element'")]),s._v(" 接收到的对象。\n可以看出 "),a("code",[s._v("src/index.js")]),s._v(" 文件不仅导出了 "),a("code",[s._v("version")]),s._v(" "),a("code",[s._v("install")]),s._v(", 同时还导出了 "),a("code",[s._v("Dialog")]),s._v(" "),a("code",[s._v("Loading")]),s._v(" 组件，这是因为 "),a("code",[s._v("Element")]),s._v(" 的组件是可以单独引入项目，内置的每一个组件也同样有一个 "),a("code",[s._v("install")]),s._v(" 方法。")]),s._v(" "),a("h2",{attrs:{id:"packages-button-src-index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#packages-button-src-index-js"}},[s._v("#")]),s._v(" packages/button/src/index.js")]),s._v(" "),a("p",[s._v("在分析完 "),a("code",[s._v("src/index.js")]),s._v(" 文件之后，可以看到， "),a("code",[s._v("Element")]),s._v(" 的核心就是它的组件，不同功能的组件使得 "),a("code",[s._v("Element")]),s._v(" 可以适用于很多场景。")]),s._v(" "),a("p",[s._v("我们从最常见的  "),a("code",[s._v("button")]),s._v(" 的入口分析，"),a("code",[s._v("Element")]),s._v(" 中一个组件的构成。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ElButton "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* istanbul ignore next */")]),s._v("\nElButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ElButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ElButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" ElButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("可以看出这个文件是 "),a("code",[s._v("src/index")]),s._v(" 的简单版本，返回 "),a("code",[s._v("ElButton")]),s._v(" 对象，该对象包含一个 "),a("code",[s._v("install")]),s._v(" 方法。 并且在 "),a("code",[s._v("install")]),s._v(" 方法中给 "),a("code",[s._v("Vue")]),s._v(" 挂在了一个 "),a("code",[s._v("ElButton")]),s._v(" 组件资源。")]),s._v(" "),a("p",[s._v("而在 "),a("code",[s._v("src/index.js")]),s._v(" 文件中 "),a("code",[s._v("Element")]),s._v(" 又导入了这个 "),a("code",[s._v("ElButton")]),s._v(" 组件。\n我们知道在使用 "),a("code",[s._v("Element")]),s._v(" 单个组件的时候我们这样写")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element-ui'")]),s._v("\n   Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这里 "),a("code",[s._v("Vue.use(Button)")]),s._v(" 就会找到 Button 组件的 "),a("code",[s._v("install")]),s._v(" 方法，并给 Vue 挂载了一个 "),a("code",[s._v("ElButton")]),s._v(" 组件资源。")]),s._v(" "),a("blockquote",[a("p",[s._v("说过了 "),a("a",{attrs:{href:"https://juejin.im/post/6844903671793188877",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue插件开发"),a("OutboundLink")],1),s._v(", 也看过了 "),a("code",[s._v("Element-ui")]),s._v(" 的项目结构和项目入口文件。下一节 我们将会讲述如何 在 "),a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm"),a("OutboundLink")],1),s._v(" 上面发布一个我们仿照 "),a("code",[s._v("Element-ui")]),s._v(" 的项目。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);