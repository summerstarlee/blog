(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{355:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"项目中的-git-message-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目中的-git-message-规范"}},[t._v("#")]),t._v(" 项目中的 git message 规范")]),t._v(" "),e("p",[t._v("Git 每次提交代码，都要写 Commit message 来说明本次的提交内容。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello word"')]),t._v("\n")])])]),e("p",[t._v("当提交的内容比较多的时候， 可以执行 "),e("code",[t._v("git commit")]),t._v(", 使用跳出来的文本来编辑提交信息。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit \n")])])]),e("p",[t._v("在项目开发过程中， 使用 git commit 提交的信息可以很好的反应项目的开发进展情况。 所以应当规范 git message 的格式， 来更加清晰明了的说明每次的提交目的。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ww2.sinaimg.cn/large/006tNc79gy1g5wzm53crej31900egjt5.jpg",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"angular-commit-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#angular-commit-message"}},[t._v("#")]),t._v(" Angular Commit message")]),t._v(" "),e("p",[t._v("关于 Git message 的写法规范社区中有很多种， 目前使用较为广泛的是 "),e("a",{attrs:{href:"https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular 规范"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("Angular")]),t._v(" 规范中， 每次提交， Commit message  都包括三个部分： Header、Body 和 Footer;")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("scope"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("subject"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## header 部分")]),t._v("\n// 空一行\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## body  部分")]),t._v("\n// 空一行\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("footer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## footer 部分")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("ol",[e("li",[t._v("这三个部分种， Header 是必须的， Body 和 Footer 可以省略。")]),t._v(" "),e("li",[t._v("不管哪个部分，为了在输出 log 时的美观，任何一行的都不得超过 72 个字符。")])])]),t._v(" "),e("h3",{attrs:{id:"header-部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#header-部分"}},[t._v("#")]),t._v(" Header 部分")]),t._v(" "),e("p",[t._v("Header 部分只有一行， 包括三个字段： "),e("code",[t._v("type")]),t._v("(必须)、"),e("code",[t._v("scope")]),t._v("(可选)、"),e("code",[t._v("subject")]),t._v("(必须);")]),t._v(" "),e("h4",{attrs:{id:"type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),e("p",[e("code",[t._v("type")]),t._v(" 用于说明 commit 的类型， 在 "),e("code",[t._v("Angular 规范")]),t._v(" 种， 只允许 7 种常用类型和一种特殊类型(revert):")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("feat: 新功能 (feature)\nfix: 修补 bug\ndocs: 文档 (ocumentation)\nstyle: 格式 (不影响代码运行)\nrefactory: 重构 (既不是新增功能， 也不是修改 bug 的代码改动)\ntest: 增加测试\nchore: 构建过程或辅助工具的变动\nrevert: 撤销以前的 commit； header 部分需要跟被撤销 Commit 的 Header \n")])])]),e("h4",{attrs:{id:"scope"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[t._v("#")]),t._v(" scope")]),t._v(" "),e("p",[e("code",[t._v("scope")]),t._v(" 用于说明 "),e("code",[t._v("commit")]),t._v(" 影响的范围， 比如说数据层、控制层、视图层等等")]),t._v(" "),e("h4",{attrs:{id:"subject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[t._v("#")]),t._v(" subject")]),t._v(" "),e("p",[e("code",[t._v("subject")]),t._v(" 是 "),e("code",[t._v("commit")]),t._v(" 的简短描述， 不超过 50 个字符。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("以动词开头， 使用第一人称现在时， 比如 "),e("code",[t._v("change")]),t._v(" 而不是 "),e("code",[t._v("changed")]),t._v(" 或者 "),e("code",[t._v("changes")]),t._v("\n第一个字母小写\n结尾不加句号")])]),t._v(" "),e("h4",{attrs:{id:"body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" body")]),t._v(" "),e("p",[e("code",[t._v("body")]),t._v(" 部分是对本次 "),e("code",[t._v("commit")]),t._v(" 的详细描述， 可以分为多行。")]),t._v(" "),e("h4",{attrs:{id:"footer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#footer"}},[t._v("#")]),t._v(" footer")]),t._v(" "),e("p",[t._v("在很多情况下， 是不使用这部分的内容的， 但是在下面两种情况下，回使用到 "),e("code",[t._v("footer")])]),t._v(" "),e("ol",[e("li",[t._v("不兼容变动说明\n如果当前代码与上一个版本不兼容， 则 "),e("code",[t._v("footer")]),t._v(" 部分需要使用 "),e("code",[t._v("BREAKING CHANGE")]),t._v(" 开头， 后面是对变动的描述以及变动理由和变动方法.")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("BREAKING CHANGE: isolate scope bindings definition has changed.\n\n    To migrate the code follow the example below:\n\n    Before:\n\n    scope: {\n      myAttr: 'attribute',\n    }\n\n    After:\n\n    scope: {\n      myAttr: '@',\n    }\n\n    The removed `inject` wasn't generaly useful for directives so there should be no code using it.\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("关闭 Issue\n如果当前 commit 是针对 某个或者某几个 "),e("code",[t._v("issue")]),t._v(", 那个可以在 footer 部分关闭 "),e("code",[t._v("issue")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Closes #123\n")])])]),e("p",[t._v("关闭多个 issue")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Closes #123, #234, #345\n")])])]),e("h2",{attrs:{id:"commitizen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commitizen"}},[t._v("#")]),t._v(" Commitizen")]),t._v(" "),e("p",[t._v("在项目的开发过程中，编程人员遵守 "),e("code",[t._v("Angular 规范")]),t._v(" 需要编写更多的 git message 信息, 使用 "),e("a",{attrs:{href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commitizen"),e("OutboundLink")],1),t._v(" 来进行交互式的 message 输入。")]),t._v(" "),e("ul",[e("li",[t._v("安装")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g commitizen\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or yarn")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" commitizen\n")])])]),e("p",[t._v("然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("commitizen init cz-conventional-changelog --save --save-exact\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or yarn ")]),t._v("\ncommitizen init cz-conventional-changelog --yarn --dev --exact\n")])])]),e("p",[t._v("当需要 "),e("code",[t._v("git commit")]),t._v(" 的时候使用 "),e("code",[t._v("git cz")]),t._v(" 来生成符合规范的 git message.\n"),e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/006tNc79gy1g5wzn2zg44j30tx08b74z.jpg",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"commitlint-校验-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commitlint-校验-message"}},[t._v("#")]),t._v(" commitlint 校验 message")]),t._v(" "),e("p",[e("code",[t._v("git cz")]),t._v("  命令为 git message 提供了一个规范的 message 模板， 这时使用 "),e("code",[t._v("git commit -m")]),t._v(" 或者 使用 "),e("code",[t._v("git cz")]),t._v(" 依旧不能严格限制 git message 内容， 为了严格规范需要使用 "),e("a",{attrs:{href:"https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint"),e("OutboundLink")],1),t._v(" 来拒绝不规范的 git message 内容。")]),t._v(" "),e("ul",[e("li",[t._v("安装")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev @commitlint/config-conventional @commitlint/cli\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or yarn ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @commitlint/config-conventional @commitlint/cli\n")])])]),e("ul",[e("li",[t._v("添加配置文件 (为了使 commitlint 生效)")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"module.exports = {extends: ['@commitlint/config-conventional']};\"")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" commitlint.config.js\n")])])]),e("ul",[e("li",[t._v("或者在 "),e("code",[t._v("package.json")]),t._v(" 文件中添加")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"commitlint": {\n    extnds: [\n        "@commitlint/config-conventional"\n    ]\n}\n')])])]),e("h2",{attrs:{id:"触发-commitlint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触发-commitlint"}},[t._v("#")]),t._v(" 触发 commitlint")]),t._v(" "),e("p",[t._v("配置好 "),e("code",[t._v("commitlint")]),t._v(", 还需要设置 触发 "),e("code",[t._v("commitlint")]),t._v(" 的时机。")]),t._v(" "),e("p",[e("code",[t._v("Git")]),t._v(" 中自带不同的 "),e("code",[t._v("hook")]),t._v("， 当某些事件发生的时候，会触发相对应的 "),e("code",[t._v("hook")]),t._v(", 这些 "),e("code",[t._v("hook")]),t._v(" 脚本存放在项目根目录的 "),e("code",[t._v(".git/hooks")]),t._v(" 目录下。")]),t._v(" "),e("p",[e("code",[t._v("commit-msg")]),t._v(" 是其中一个 "),e("code",[t._v("hook")]),t._v(", 在 "),e("code",[t._v("git commit")]),t._v(" 提交的时候触发。 可以使用 "),e("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),e("OutboundLink")],1),t._v(" 或者 "),e("a",{attrs:{href:"https://www.npmjs.com/package/yorkie",target:"_blank",rel:"noopener noreferrer"}},[t._v("yorkie"),e("OutboundLink")],1),t._v(" 来自定义 "),e("code",[t._v("commit-msg")]),t._v(" 触发时候的事件。")]),t._v(" "),e("h3",{attrs:{id:"选择一-husky"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择一-husky"}},[t._v("#")]),t._v(" 选择一: husky")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("安装\n"),e("code",[t._v("npm install husky -D")])])]),t._v(" "),e("li",[e("p",[t._v("在 "),e("code",[t._v("package.json")]),t._v(" 中添加代码")])])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ghooks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit-msg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -e $GIT_PARAMS"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"选择二-yorkie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择二-yorkie"}},[t._v("#")]),t._v(" 选择二: yorkie")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("安装 yorkie\n"),e("code",[t._v("npm install yorkie -D")])])]),t._v(" "),e("li",[e("p",[t._v("在 "),e("code",[t._v("package.json")]),t._v(" 中添加代码")])])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gitHooks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit-msg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -e $GIT_PARAMS"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("在 "),e("code",[t._v("git commit-msg")]),t._v(" 这个钩子中会触发 "),e("code",[t._v("commitlint")]),t._v(" 的操作。")])]),t._v(" "),e("h2",{attrs:{id:"配合-lint-staged-进行代码检验和修复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配合-lint-staged-进行代码检验和修复"}},[t._v("#")]),t._v(" 配合 lint-staged 进行代码检验和修复")]),t._v(" "),e("p",[t._v("在完成了 "),e("code",[t._v("git message")]),t._v(" 的校验之后， 可以继续使用 "),e("a",{attrs:{href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"}},[t._v("lint-staged"),e("OutboundLink")],1),t._v(" 和 "),e("code",[t._v("git hooks")]),t._v(" 来进行代码提交前的语法、风格的验证和修复。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("安装\n"),e("code",[t._v("npm install -D lint-staged")])])]),t._v(" "),e("li",[e("p",[t._v("在跟目录下创建 "),e("code",[t._v(".lintstagedrc")]),t._v(", 并写入")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "*.{js,vue}": ["eslint --fix", "git add"]\n}\n\n')])])]),e("ul",[e("li",[t._v("或者在 "),e("code",[t._v("package.json")]),t._v(" 中写入")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"lint-staged": {\n    "*.{js,vue}": ["eslint --fix", "git add"]\n}\n')])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("在 "),e("code",[t._v("husky")]),t._v(" 或者 "),e("code",[t._v("yorkie")]),t._v(" 配置中添加触发时机")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// husky 配置方式\n"husky": {\n  "hooks": {\n    "pre-commit": "lint-staged",\n    "commit-msg": "commitlint -e $GIT_PARAMS"\n  }\n}\n\n// yorkie 配置方式\n "gitHooks": {\n    "pre-commit": "lint-staged",\n    "commit-msg": "commitlint -e $GIT_PARAMS"\n  }\n')])])]),e("p",[t._v("这样在每次提交之前都会触发 "),e("code",[t._v("pre-commit")]),t._v(" 这个 "),e("code",[t._v("hook")]),t._v(", 从而触发 "),e("code",[t._v(".lintstagedrc")]),t._v(" 或者 "),e("code",[t._v("package.json")]),t._v(" 中的 "),e("code",[t._v("lint-staged")]),t._v(" 里面的配置。 在例子中，我们配置了对所有 "),e("code",[t._v(".js")]),t._v(" 或者 "),e("code",[t._v(".vue")]),t._v(" 结尾的文件进行 "),e("code",[t._v("eslint")]),t._v(" 的修复， 并且当修复之后再次执行 "),e("code",[t._v("git add")]),t._v(" 将修改后的文件再次放到暂存区。 这样就可以保证每次提交的代码都是统一风格的代码了。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("code",[t._v("lint-staged")]),t._v(" 只对此次提交所在暂存区的文件（git add后的文件）进行一系列的检查、修复、格式化操等作。")])]),t._v(" "),e("h2",{attrs:{id:"自动生成-change-log-并更新-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动生成-change-log-并更新-version"}},[t._v("#")]),t._v(" 自动生成 Change log 并更新 Version")]),t._v(" "),e("p",[t._v("当使用 "),e("code",[t._v("Angular 规范")]),t._v(" 提交 "),e("code",[t._v("git message")]),t._v(", 还可以使用 "),e("a",{attrs:{href:"https://github.com/conventional-changelog/standard-version",target:"_blank",rel:"noopener noreferrer"}},[t._v("standard-version"),e("OutboundLink")],1),t._v("生成 "),e("code",[t._v("Change log")]),t._v(" 文档。\n生成的文档将会包括下面三个部分。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("new features   // 新增功能记录\nbug fixes   // 解决 bug 记录 \nbreaking changes   // 不兼容变动记录\n")])])]),e("p",[t._v("每一部分都会列出相关的 "),e("code",[t._v("commit")]),t._v(", 并且指向这些 "),e("code",[t._v("commit")]),t._v(" 的连接。 "),e("code",[t._v("conventional-changelog")]),t._v(" 使用如下：")]),t._v(" "),e("ol",[e("li",[t._v("安装")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install -g standard-version\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("在 "),e("code",[t._v("package.json")]),t._v(" 中添加 "),e("code",[t._v("script")]),t._v(" 字段")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"script": {\n  "release": "standard-version"\n}\n')])])]),e("p",[t._v("运行 "),e("code",[t._v("npm run release")]),t._v(" 将会执行下面的步骤。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1. 修改 package.json package-lock.json 中的版本号\n2. 生成 CHANGELOG.md 文件。 \n3. 提交  package.json package-lock.json CHANGELOG.md 文件\n4. 给本次提交打上 tag\n")])])]),e("p",[e("img",{attrs:{src:"http://ww3.sinaimg.cn/large/006tNc79gy1g5wzem0mk4j30w00gy778.jpg",alt:""}})]),t._v(" "),e("p",[t._v("更多 "),e("code",[t._v("stardard-version")]),t._v(" 请参考 "),e("a",{attrs:{href:"/npm/standard-version"}},[t._v("stardard-version")])])])}),[],!1,null,null,null);a.default=n.exports}}]);