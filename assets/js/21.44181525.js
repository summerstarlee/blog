(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{367:function(s,n,a){"use strict";a.r(n);var t=a(42),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"npm-切换源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-切换源"}},[s._v("#")]),s._v(" npm 切换源")]),s._v(" "),a("p",[s._v("查看源：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config list   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前配置 包含当前源字段： metrics-registry ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" get registry  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接获取当前源")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"使用-config-命令切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-config-命令切换"}},[s._v("#")]),s._v(" 使用 config 命令切换")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换为 淘宝源 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"编辑-npmrc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑-npmrc"}},[s._v("#")]),s._v(" 编辑 ~/.npmrc")]),s._v(" "),a("p",[s._v("修改该文件中 registry 的值")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("registry "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" https://registry.npm.taobao.org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"使用-nrm-进行源管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-nrm-进行源管理"}},[s._v("#")]),s._v(" 使用 nrm 进行源管理")]),s._v(" "),a("ol",[a("li",[s._v("安装 nrm")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" global nrm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("常用的 nrm 命令")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前使用的源")]),s._v("\nnrm current\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换源")]),s._v("\nnrm use cnpm  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 源名称")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有源")]),s._v("\nnrm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加源")]),s._v("\nnrm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" 源名称 源地址\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除源")]),s._v("\nnrm del 源名称\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试源的速度")]),s._v("\nnrm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看全部的源的速度")]),s._v("\nnrm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" 源名称  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看单个源的网速")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);