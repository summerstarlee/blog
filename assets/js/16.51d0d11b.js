(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{362:function(e,a,s){"use strict";s.r(a);var t=s(42),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"element-ui-中-make-自动化构建分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-ui-中-make-自动化构建分析"}},[e._v("#")]),e._v(" Element-UI 中 make 自动化构建分析")]),e._v(" "),s("p",[e._v("在习惯了使用 "),s("code",[e._v("package.json")]),e._v(" 中的 "),s("code",[e._v("src")]),e._v(" 来书写构建命令之后，看到了 "),s("a",{attrs:{href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("Element-ui")]),s("OutboundLink")],1),e._v(" 的代码仓库中有 "),s("code",[e._v("Makefile")]),e._v(" 这样一个文件。于是\nGoogle 一下，发现了这个东西的强大。")]),e._v(" "),s("p",[s("code",[e._v("Makefile")]),e._v(" 是一个适用于 "),s("code",[e._v("C/C++")]),e._v(" 的工具，较早作为工程化工具出现在 "),s("code",[e._v("UNIX")]),e._v(" 系统中， 通过 "),s("code",[e._v("make")]),e._v(" 命令来执行一系列的编译和连接操作。在拥有 "),s("code",[e._v("make")]),e._v(" 环境的目录下， 如果存在一个 "),s("code",[e._v("Makefile")]),e._v(" 文件。 那么输入 "),s("code",[e._v("make")]),e._v(" 命令将会执行 "),s("code",[e._v("Makefile")]),e._v(" 文件中的某个目标命令。")]),e._v(" "),s("h2",{attrs:{id:"初识-makefile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初识-makefile"}},[e._v("#")]),e._v(" 初识 "),s("code",[e._v("Makefile")])]),e._v(" "),s("p",[e._v("直接用 "),s("code",[e._v("Element-UI")]),e._v(" 的 "),s("code",[e._v("Makefile")]),e._v(" 文件作为例子来做演示。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('.PHONY: dist test\ndefault: help\n\ninstall:\n\tnpm install\n\nnew:\n\tnode build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))\n\ndeploy:\n\t@npm run deploy\n\nhelp:\n\t@echo "   \\033[35mmake\\033[0m \\033[1m命令使用说明\\033[0m"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("blockquote",[s("p",[e._v("mac 中，是直接可以执行 make 命令的。 "),s("a",{attrs:{href:"http://gnuwin32.sourceforge.net/packages/make.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows下载 make 的 GUN 工具"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("如果电脑中已经在全局安装了 "),s("code",[e._v("make")]),e._v(" 命令，那么当我们 clone "),s("code",[e._v("element")]),e._v(" 的代码之后，在根目录执行 "),s("code",[e._v("make install")]),e._v(" 这句命令将会起到和 "),s("code",[e._v("npm install")]),e._v(" 一样的效果。\n来看一下 "),s("code",[e._v("make install")]),e._v(" 做了什么。")]),e._v(" "),s("ol",[s("li",[e._v("执行 "),s("code",[e._v("make")]),e._v(" 命令， 在该目录下找到 "),s("code",[e._v("Makefile")]),e._v(" 文件。")]),e._v(" "),s("li",[e._v("找到 "),s("code",[e._v("Makefile")]),e._v(" 文件中对应命令行参数的 "),s("code",[e._v("install")]),e._v(" 的目标。这里的目标就是 "),s("code",[e._v("install:")])]),e._v(" "),s("li",[e._v("执行 "),s("code",[e._v("npm install")]),e._v(" 下面的语句。 "),s("code",[e._v("npm run dev")])])]),e._v(" "),s("h2",{attrs:{id:"makefile-文件格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#makefile-文件格式"}},[e._v("#")]),e._v(" "),s("code",[e._v("Makefile")]),e._v(" 文件格式")]),e._v(" "),s("p",[s("code",[e._v("make")]),e._v(" 命令本身并不难， 它只是执行其后跟的 "),s("code",[e._v("target")]),e._v("。而 "),s("code",[e._v("target")]),e._v(" 具体的内容体现在 "),s("code",[e._v("Makefile")]),e._v(" 文件当中。")]),e._v(" "),s("p",[s("code",[e._v("Makefile")]),e._v(" 文件由一系列规则构成，每一条的规则需要明确两件事情：构建目标是什么，以及如何构建。 每一条的规则都遵循一下格式:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<target> : <prerequisites>\n[tab] <commands>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"第一行被-分为了两部分。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一行被-分为了两部分。"}},[e._v("#")]),e._v(" 第一行被 "),s("code",[e._v(":")]),e._v(" 分为了两部分。")]),e._v(" "),s("ul",[s("li",[e._v("前面部分为目标"),s("code",[e._v("target")]),e._v(", 是执行 "),s("code",[e._v("make target")]),e._v(" 命令时可以匹配到的目标。")]),e._v(" "),s("li",[e._v("后一部分为前置条件(依赖目标), 如果第一行写为 "),s("code",[e._v("target1: target2 target3")]),e._v(", 那么在执行 "),s("code",[e._v("make target1")]),e._v(" 的时候，需要先执行 "),s("code",[e._v("make target2")]),e._v(" "),s("code",[e._v("make target3")]),e._v(" 最后才会执行 "),s("code",[e._v("target1")]),e._v(" 下面的  "),s("code",[e._v("commonds")]),e._v(" 语句。")])]),e._v(" "),s("h3",{attrs:{id:"第二行必须由一个-tab键开始-后面跟着需要执行的语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二行必须由一个-tab键开始-后面跟着需要执行的语句"}},[e._v("#")]),e._v(" 第二行必须由一个 "),s("code",[e._v("tab")]),e._v("键开始，后面跟着需要执行的语句")]),e._v(" "),s("blockquote",[s("p",[e._v("每一个规则的 "),s("code",[e._v("target")]),e._v(" 都是必须的， "),s("code",[e._v("prerequisites")]),e._v(" 和 第二行都是可选的， 但是两者之间必须至少存在一个。")])]),e._v(" "),s("p",[e._v("只是这一点 "),s("code",[e._v("Element-UI")]),e._v(" 项目中的 "),s("code",[e._v("Makefile")]),e._v(" 代码就已经可以明白大部分了。但是看到代码中的第一行 "),s("code",[e._v(".PHONY: dist test")]),e._v(" 这又是什么呢？")]),e._v(" "),s("h2",{attrs:{id:"目标-target-与伪目标-phony-target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目标-target-与伪目标-phony-target"}},[e._v("#")]),e._v(" 目标(target)与伪目标(phony target)")]),e._v(" "),s("p",[e._v("每一个规则都会包含一个 "),s("code",[e._v("target")]),e._v(", 在 "),s("code",[e._v("make")]),e._v(" 中， "),s("code",[e._v("target")]),e._v(" 通常是文件名， 指明这条规则需要构建的对象。"),s("strong",[e._v("目标可以是一个或者多个文件名， 之间用空格隔开")]),e._v("。")]),e._v(" "),s("p",[e._v("当然，除了文件名， "),s("code",[e._v("target")]),e._v(" 的名字还可以是具体的操作名称，这类 "),s("code",[e._v("target")]),e._v(" 又被称为 "),s("code",[e._v("伪目标(phony target)")]),e._v("。例如下面的 "),s("code",[e._v("remove")]),e._v(" 就是一个伪目标。他的作用是删除文件。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("remove:\n\trm *.js\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("但是再执行 "),s("code",[e._v("make remove")]),e._v(" 的时候，这个目录下刚好也有一个文件叫做remove,那么这条命令是不会被执行的，因为 Make 发现该文件已经存在，就没有必要重新构建了，就会忽略掉这条命令。")]),e._v(" "),s("p",[e._v("为了避免这种情况的发生，可以主动声明 remove 是伪目标。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".PHONY: remove\nremove:\n\trm *.js\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("当使用 "),s("code",[e._v(".PHONY:")]),e._v(" 主动声明 remove 是伪目标之后，make 就不会检查是否存在有 remove 的文件，而是每次都执行 remove 命令。\n同样可以看到在 Element 项目中的 Makefile 文件中的第一行就声明了 "),s("code",[e._v(".PHONY: dist test")]),e._v(", 也是为了避免目录中已经存在的文件名导致该命令无法正常执行。")]),e._v(" "),s("h2",{attrs:{id:"回声"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回声"}},[e._v("#")]),e._v(" 回声 @")]),e._v(" "),s("p",[e._v("在 Makefile 文件中 "),s("code",[e._v("#")]),e._v(" 表示注释。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("test:\n\t# 这是一条注释\n\ttouch a.js\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("当执行 "),s("code",[e._v("make test")]),e._v(" 之后，会打印一条注释，然后再创建 a.js 这个文件。")]),e._v(" "),s("p",[e._v("当在命令的前面加上 "),s("code",[e._v("@")]),e._v("， 就可以关闭回声。(由于 "),s("code",[e._v("echo")]),e._v(" 也相当于输入回声，所以通常在注释和 "),s("code",[e._v("echo")]),e._v(" 前面都加上 "),s("code",[e._v("@")]),e._v(")")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("test:\n\t@# 这是测试\n\t@echo some\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("blockquote",[s("p",[e._v("在 Element 中， 如果执行 "),s("code",[e._v("make new some")]),e._v(" 项目中就会生成一个新的组件, 让我们分析 "),s("code",[e._v("node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))")]),e._v(" 这条命令，看一下涉及到的 make 知识。")])]),e._v(" "),s("h2",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[e._v("#")]),e._v(" 变量")]),e._v(" "),s("p",[e._v("Makefile 允许使用等号来自定义变量, 使用 "),s("code",[e._v("$()")]),e._v(" 来调用变量。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("txt = hello world\ntest: \n\t@echo $(txt)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"自动变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动变量"}},[e._v("#")]),e._v(" 自动变量 "),s("code",[e._v("$@")])]),e._v(" "),s("p",[e._v("Make 命令还提供了一些自动变量，他们的值与当前的规则有关。")]),e._v(" "),s("p",[s("code",[e._v("$@")]),e._v(" 指代的是当前的目标，就是执行 make 命令所匹配的目标。比如执行 "),s("code",[e._v("make foo")]),e._v(" 时， "),s("code",[e._v("$@")]),e._v(" 就是指 "),s("code",[e._v("foo")])]),e._v(" "),s("p",[e._v("利用这个变量可以完成对当前目标的简写：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("a.js b.js c.js:\n\ttouch $@\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"特殊变量-makecmdgoals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊变量-makecmdgoals"}},[e._v("#")]),e._v(" 特殊变量 "),s("code",[e._v("MAKECMDGOALS")])]),e._v(" "),s("p",[e._v("make 在执行时， 会设置一个特殊的变量 "),s("code",[e._v("MAKECMDGOALS")]),e._v(", 该变量记录了命令行参数指定的目标列表。也就是说使用这个变量，我们可以得到命令行的参数。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("create:\n\t@echo $(MAKECMDGOALS)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("执行命令 "),s("code",[e._v("make create newCom")]),e._v("  将会打印出 "),s("code",[e._v("create newCom")]),e._v(" 这两个字段。")]),e._v(" "),s("h2",{attrs:{id:"函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[e._v("#")]),e._v(" 函数")]),e._v(" "),s("p",[e._v("make 还可以使用函数， 格式如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$(function arguments)\n# 或者\n${function arguments}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"filter-out-反过滤函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter-out-反过滤函数"}},[e._v("#")]),e._v(" "),s("code",[e._v("filter-out")]),e._v(" 反过滤函数")]),e._v(" "),s("p",[e._v("过滤掉 objs 中所有含有 pattert 的内容， 格式:")]),e._v(" "),s("p",[s("code",[e._v("$(filter-out pattert, objs)")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("objs = aa bb cc dd ee \npattert = bb cc ee \nout: \n\t@echo $(filter-out $(pattert), $(objs))\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("执行 "),s("code",[e._v("make out")]),e._v(" 输出 "),s("code",[e._v("aa dd")])]),e._v(" "),s("h2",{attrs:{id:"node-build-bin-new-js-filter-out-makecmdgoals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-build-bin-new-js-filter-out-makecmdgoals"}},[e._v("#")]),e._v(" "),s("code",[e._v("node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))")])]),e._v(" "),s("p",[e._v("在 Element 中 无论是执行 "),s("code",[e._v("make new some")]),e._v(" 还是执行 "),s("code",[e._v("make new-lang some")]),e._v(" 逻辑都是向某一个脚本文件传递一个参数。\n这条命令首先使用 "),s("code",[e._v("node")]),e._v(" 来运行 "),s("code",[e._v("build/bin/new.js")]),e._v(" 这个文件， 并且使用 "),s("code",[e._v("filter-out")]),e._v(" 函数在命令行的参数中把当前目标去掉。")]),e._v(" "),s("p",[e._v("我们可以新建一个 "),s("code",[e._v("build/bin/new.js")]),e._v(" 文件， 写入下面的代码，看一下输入内容。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" \x3c!-- build/bin/new.js --\x3e\nconsole.log(process.argv)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[s("strong",[e._v("Makefile")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("new:\n\tnode build/bin/new.js $(filter-out $@, $(MAKECMDGOALS))\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("执行命令： "),s("code",[e._v("make new testCom")]),e._v(" 输出。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[ 'C:\\\\Program Files\\\\nodejs\\\\node.exe',\n  'C:\\\\Users\\\\***\\\\Desktop\\\\***\\\\a.js',\n  'testCom' ]\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("在 new.js 中我们就可以通过 "),s("code",[e._v("process.argv[2]")]),e._v(" 来拿到命令行的参数，来进一步编写脚本。")])])}),[],!1,null,null,null);a.default=n.exports}}]);