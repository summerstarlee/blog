(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{439:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"template-模板使用总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-模板使用总结"}},[t._v("#")]),t._v(" template 模板使用总结")]),t._v(" "),s("p",[t._v("小程序开发语言虽然只能运行在微信小程序中， 但是它的设计同样遵循了主流前端框架的主要特征——组件化，在小程序中组件化的实现有两种方式: "),s("code",[t._v("template 模版")]),t._v(" 和 "),s("code",[t._v("Component 组件")]),t._v("。 这两种方式分别适用于不同的场景。")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("template 模版")]),t._v(" 主要用于展示，模版中不涉及事件处理， 需要处理的事件逻辑放在调用模版的页面中。 一个 "),s("code",[t._v("template 模版")]),t._v(" 只包含 "),s("code",[t._v("wxml")]),t._v(" "),s("code",[t._v("wxss")]),t._v(" 文件。")]),t._v(" "),s("li",[s("code",[t._v("Component 组件")]),t._v(" 作为一个单独的功能模块，不仅可以包含页面展示还可以包含该模块的事件逻辑处理。 像一个页面一样， "),s("code",[t._v("Component 组件")]),t._v(" 可以包含 "),s("code",[t._v("wxml")]),t._v(" "),s("code",[t._v("wxss")]),t._v(" "),s("code",[t._v("js")]),t._v(" "),s("code",[t._v("json")]),t._v(" 文件。")])]),t._v(" "),s("h2",{attrs:{id:"_1-创建-template-模版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建-template-模版"}},[t._v("#")]),t._v(" 1. 创建 "),s("code",[t._v("template")]),t._v(" 模版")]),t._v(" "),s("p",[t._v("不同于 "),s("code",[t._v("page")]),t._v(" 和 "),s("code",[t._v("Component")]),t._v(" 的创建， 在开发者工具中并不能快速创建一个 "),s("code",[t._v("template 模版")]),t._v("。所以需要单独创建 "),s("code",[t._v("wxss")]),t._v(" "),s("code",[t._v("wxml")]),t._v(" 文件。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/11/16a0cebe8451b0fc?w=1012&h=656&f=png&s=414728",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"template-wxml-文件语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-wxml-文件语法"}},[t._v("#")]),t._v(" "),s("code",[t._v("template.wxml")]),t._v(" 文件语法")]),t._v(" "),s("p",[t._v("一个 "),s("code",[t._v("template.wxml")]),t._v(" 文件中使用 "),s("code",[t._v("<template>")]),t._v(" 标签包含一个模版， 一个 "),s("code",[t._v("template.wxml")]),t._v(" 文件可以包含多个 "),s("code",[t._v("<template>")]),t._v("模版， 使用 "),s("code",[t._v("name")]),t._v(" 属性作为模版的名称。")]),t._v(" "),s("p",[t._v("在模版中可以接受变量， 使用 "),s("code",[t._v("{{}}")]),t._v(" 展示。 为变量的传递者由调用该模版的页面传递。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("template name: {{name}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("template name: {{name}} {{msg}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"template-wxss-模版样式文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-wxss-模版样式文件"}},[t._v("#")]),t._v(" "),s("code",[t._v("template.wxss")]),t._v(" 模版样式文件")]),t._v(" "),s("p",[t._v("模版可以拥有自己的样式文件")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("text{\n    color: #cccccc;\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"_2-引用-template-模版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-引用-template-模版"}},[t._v("#")]),t._v(" 2. 引用 "),s("code",[t._v("template")]),t._v(" 模版")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("template")]),t._v(" 模版的引用需要使用 "),s("code",[t._v("<import>")]),t._v(" 标签。 该标签的 "),s("code",[t._v("src")]),t._v(" 属性为需要引用模版的路径。")]),t._v(" "),s("li",[s("code",[t._v("template")]),t._v(" 模版的使用用 "),s("code",[t._v("<template>")]),t._v(" 标签。 使用 "),s("code",[t._v("is")]),t._v(" 属性来区别模版文件中定义的模版。")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("data")]),t._v(" 传入模版中的数据。")])]),t._v(" "),s("p",[s("strong",[t._v("index.wxml")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("../tpls/template.wxml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("is")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{name}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("is")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{name, msg}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"_3-引用模版样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-引用模版样式"}},[t._v("#")]),t._v(" 3. 引用模版样式")]),t._v(" "),s("p",[t._v("在 调用页面的 "),s("code",[t._v("wxml")]),t._v(" 中引用了 "),s("code",[t._v("template.wxml")]),t._v(" 后，模版的样式并不会引用， 需要在调用页面的 "),s("code",[t._v("wxss")]),t._v(" 中单独引用 "),s("code",[t._v("template.wxss")]),t._v(" 文件。")]),t._v(" "),s("p",[s("strong",[t._v("index.wxss")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("@import "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tpls/template.wxss"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"_4-模版文件中的事件处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-模版文件中的事件处理"}},[t._v("#")]),t._v(" 4. 模版文件中的事件处理")]),t._v(" "),s("p",[t._v("在模版中定义的事件, 需要调用页面中执行。\n"),s("strong",[t._v("template.wxml")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleTap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("template name: {{name}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("strong",[t._v("index.js")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Page({\n    data: {},\n    handleTap() {\n        console.log('template 模版 click')\n    }\n})\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"_5-import-有作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-import-有作用域"}},[t._v("#")]),t._v(" 5.  import 有作用域")]),t._v(" "),s("p",[t._v("import 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件中 import 的 template，简言之就是 import 不具有递归的特性。")]),t._v(" "),s("p",[t._v("例如：C 引用 B，B 引用A，在C中可以使用B定义的 template，在B中可以使用A定义的 template ，但是C不能使用A定义的template")]),t._v(" "),s("h2",{attrs:{id:"_6-include-配合-template-模版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-include-配合-template-模版"}},[t._v("#")]),t._v(" 6. include 配合 template 模版")]),t._v(" "),s("p",[t._v("如同使用 "),s("code",[t._v('<import src="xx/xx/xx.wxml"> <tempalte is="A" />')]),t._v(" 引用和使用模版一样， 同样也可以使用 "),s("code",[t._v('<include src="xx/xx/xx.wxml />"')]),t._v(" 来引用一个模版。")]),t._v(" "),s("p",[t._v("需要注意的是：")]),t._v(" "),s("ol",[s("li",[t._v("使用 "),s("code",[t._v("<include>")]),t._v(" 引用模版文件时， 并不能分别出模版文件的模版块， 所以使用 "),s("code",[t._v("<include>")]),t._v(" 引用的模版文件中只能定义一个模版块。")]),t._v(" "),s("li",[t._v("include 可以将目标文件中除了 "),s("code",[t._v("<template/> <wxs/>")]),t._v(" 外的整个代码引入，相当于是拷贝到 include 位置。")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- index.wxml --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("header.wxml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" body "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("footer.wxml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- header.wxml --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" header "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- footer.wxml --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" footer "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);