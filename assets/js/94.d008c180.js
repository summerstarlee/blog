(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{444:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"自定义组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件"}},[s._v("#")]),s._v(" 自定义组件")]),s._v(" "),a("blockquote",[a("p",[s._v("小程序开发语言虽然只能运行在微信小程序中， 但是它的设计同样遵循了主流前端框架的主要特征——组件化，在小程序中组件化的实现有两种方式: "),a("code",[s._v("template 模版")]),s._v(" 和 "),a("code",[s._v("Component 组件")]),s._v("。 这两种方式分别适用于不同的场景。")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("template 模版")]),s._v(" 主要用于展示，模版中不涉及事件处理， 需要处理的事件逻辑放在调用模版的页面中。 一个 "),a("code",[s._v("template 模版")]),s._v(" 只包含 "),a("code",[s._v("wxml")]),s._v(" "),a("code",[s._v("wxss")]),s._v(" 文件。")]),s._v(" "),a("li",[a("code",[s._v("Component 组件")]),s._v(" 作为一个单独的功能模块，不仅可以包含页面展示还可以包含该模块的事件逻辑处理。 像一个页面一样， "),a("code",[s._v("Component 组件")]),s._v(" 可以包含 "),a("code",[s._v("wxml")]),s._v(" "),a("code",[s._v("wxss")]),s._v(" "),a("code",[s._v("js")]),s._v(" "),a("code",[s._v("json")]),s._v(" 文件。")])])]),s._v(" "),a("p",[s._v("在上一篇 "),a("a",{attrs:{href:"https://juejin.im/post/6844903817146793997",target:"_blank",rel:"noopener noreferrer"}},[s._v("小程序 template 模版使用方法"),a("OutboundLink")],1),s._v("讲解了 "),a("code",[s._v("template 模板")]),s._v(" 的使用方法。 这次看一下自定义的组件的使用方法。")]),s._v(" "),a("h2",{attrs:{id:"初试自定义组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初试自定义组件"}},[s._v("#")]),s._v(" 初试自定义组件")]),s._v(" "),a("h3",{attrs:{id:"快速创建自定义组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速创建自定义组件"}},[s._v("#")]),s._v(" 快速创建自定义组件")]),s._v(" "),a("p",[s._v("一个自定义组件包含 "),a("code",[s._v("wxml")]),s._v(" "),a("code",[s._v("wxss")]),s._v(" "),a("code",[s._v("json")]),s._v(" "),a("code",[s._v("js")]),s._v(" 4个文件， 使用微信开发者工具可以快速创建一个自定义组件的这四个文件。")]),s._v(" "),a("h3",{attrs:{id:"创建-product-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-product-组件"}},[s._v("#")]),s._v(" "),a("strong",[s._v("创建 product 组件")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/12/16a10fe76cddfd5b?w=311&h=480&f=png&s=34011",alt:""}}),s._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/12/16a10ff557924d01?w=307&h=149&f=png&s=6469",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"自定义组件的-json-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件的-json-文件"}},[s._v("#")]),s._v(" 自定义组件的 "),a("code",[s._v("json")]),s._v(" 文件")]),s._v(" "),a("p",[s._v("一个组件的确定首先需要在组件的 "),a("code",[s._v("json")]),s._v(" 文件中声明定义\n"),a("strong",[s._v("product.json")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"component"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"usingComponents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"自定义组件的-wxml-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件的-wxml-文件"}},[s._v("#")]),s._v(" 自定义组件的 "),a("code",[s._v("wxml")]),s._v(" 文件")]),s._v(" "),a("p",[a("strong",[s._v("product.wxml")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("text")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("custome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{{msg}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"自定义组件的-wxss-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件的-wxss-文件"}},[s._v("#")]),s._v(" 自定义组件的 "),a("code",[s._v("wxss")]),s._v(" 文件")]),s._v(" "),a("blockquote",[a("p",[s._v("组件内部的样式默认情况下只对该组件生效。 即组件内部的样式不会影响到外部页面的样式， 同样外部的样式也不会影响到组件的样式。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    .custome {\n        color: #cccccc;\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"自定义组件的-js-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件的-js-文件"}},[s._v("#")]),s._v(" 自定义组件的 "),a("code",[s._v("js")]),s._v(" 文件")]),s._v(" "),a("p",[s._v("自定义组件的 "),a("code",[s._v("js")]),s._v(" 文件不同于页面的 "),a("code",[s._v("js")]),s._v(" 文件。 它是由一个 "),a("code",[s._v("Component")]),s._v(" 构造器来定义的; 当使用自定义的组件的时候，会使用 "),a("code",[s._v("Component")]),s._v(" 构造器来指定组件的属性，数据，方法等。\n"),a("strong",[s._v("product.json")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    properties"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 定义组件内部使用的数据*/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*自定义的方法*/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("当使用开发者工具生成自定义组件模板的时候， 会在该组件的 "),a("code",[s._v("js")]),s._v(" 文件中生成 "),a("code",[s._v("Component")]),s._v(" 的三个属性。")]),s._v(" "),a("h4",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[s._v("#")]),s._v(" properties")]),s._v(" "),a("p",[s._v("接收调用页面传递的数据， 使用场景和 "),a("code",[s._v("vue")]),s._v(" 框架组件中的 "),a("code",[s._v("props")]),s._v(" 相似。\n对于需要接收的字段可以限制数据类型和定义默认值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("properties: {\n    msg: {\n        type: String,  \n        value: 'some message !'\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"使用自定义组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义组件"}},[s._v("#")]),s._v(" 使用自定义组件")]),s._v(" "),a("p",[s._v("使用自定义组件， 需要先在调用页面的 "),a("code",[s._v("json")]),s._v(" 文件中进行引用声明。")]),s._v(" "),a("p",[a("strong",[s._v("index.json 引用生命")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"usingComponents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../../components/product/index"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这样在页面中就可以像小程序的基础组件一样使用自定义组件。\n"),a("strong",[s._v("index.wxml")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("product")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("msg")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("index usr message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);