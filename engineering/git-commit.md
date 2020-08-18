# 项目中的 git message 规范

Git 每次提交代码，都要写 Commit message 来说明本次的提交内容。

```bash
git commit -m "hello word"
```

当提交的内容比较多的时候， 可以执行 `git commit`, 使用跳出来的文本来编辑提交信息。

```bash
git commit 
```

在项目开发过程中， 使用 git commit 提交的信息可以很好的反应项目的开发进展情况。 所以应当规范 git message 的格式， 来更加清晰明了的说明每次的提交目的。

![](http://ww2.sinaimg.cn/large/006tNc79gy1g5wzm53crej31900egjt5.jpg)

## Angular Commit message 
关于 Git message 的写法规范社区中有很多种， 目前使用较为广泛的是 [Angular 规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)

在 `Angular` 规范中， 每次提交， Commit message  都包括三个部分： Header、Body 和 Footer;

```bash
<type>(<scope>):<subject>  ## header 部分
// 空一行
<body>   ## body  部分
// 空一行
<footer>  ## footer 部分
```

::: tip
1. 这三个部分种， Header 是必须的， Body 和 Footer 可以省略。
2. 不管哪个部分，为了在输出 log 时的美观，任何一行的都不得超过 72 个字符。 
:::

### Header 部分
Header 部分只有一行， 包括三个字段： `type`(必须)、`scope`(可选)、`subject`(必须);

#### type
`type` 用于说明 commit 的类型， 在 `Angular 规范` 种， 只允许 7 种常用类型和一种特殊类型(revert):

```
feat: 新功能 (feature)
fix: 修补 bug
docs: 文档 (ocumentation)
style: 格式 (不影响代码运行)
refactory: 重构 (既不是新增功能， 也不是修改 bug 的代码改动)
test: 增加测试
chore: 构建过程或辅助工具的变动
revert: 撤销以前的 commit； header 部分需要跟被撤销 Commit 的 Header 
```

#### scope
`scope` 用于说明 `commit` 影响的范围， 比如说数据层、控制层、视图层等等

#### subject 
`subject` 是 `commit` 的简短描述， 不超过 50 个字符。

::: tip
以动词开头， 使用第一人称现在时， 比如 `change` 而不是 `changed` 或者 `changes`
第一个字母小写
结尾不加句号
:::

#### body
`body` 部分是对本次 `commit` 的详细描述， 可以分为多行。

#### footer
在很多情况下， 是不使用这部分的内容的， 但是在下面两种情况下，回使用到 `footer`

1. 不兼容变动说明
如果当前代码与上一个版本不兼容， 则 `footer` 部分需要使用 `BREAKING CHANGE` 开头， 后面是对变动的描述以及变动理由和变动方法.

```
BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```

2. 关闭 Issue
如果当前 commit 是针对 某个或者某几个 `issue`, 那个可以在 footer 部分关闭 `issue`

```
Closes #123
```

关闭多个 issue

```
Closes #123, #234, #345
```

## Commitizen
在项目的开发过程中，编程人员遵守 `Angular 规范` 需要编写更多的 git message 信息, 使用 [Commitizen](https://github.com/commitizen/cz-cli) 来进行交互式的 message 输入。

* 安装
```bash
npm install -g commitizen
# or yarn
yarn global add commitizen
```

然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。

```bash
commitizen init cz-conventional-changelog --save --save-exact
# or yarn 
commitizen init cz-conventional-changelog --yarn --dev --exact
```

当需要 `git commit` 的时候使用 `git cz` 来生成符合规范的 git message.
![](http://ww1.sinaimg.cn/large/006tNc79gy1g5wzn2zg44j30tx08b74z.jpg)


## commitlint 校验 message 
`git cz`  命令为 git message 提供了一个规范的 message 模板， 这时使用 `git commit -m` 或者 使用 `git cz` 依旧不能严格限制 git message 内容， 为了严格规范需要使用 [commitlint](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) 来拒绝不规范的 git message 内容。

* 安装

```bash
npm install --save-dev @commitlint/config-conventional @commitlint/cli
# or yarn 
yarn add -D @commitlint/config-conventional @commitlint/cli
```

* 添加配置文件 (为了使 commitlint 生效)

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

* 或者在 `package.json` 文件中添加
```
"commitlint": {
    extnds: [
        "@commitlint/config-conventional"
    ]
}
```

## 触发 commitlint 
配置好 `commitlint`, 还需要设置 触发 `commitlint` 的时机。 

`Git` 中自带不同的 `hook`， 当某些事件发生的时候，会触发相对应的 `hook`, 这些 `hook` 脚本存放在项目根目录的 `.git/hooks` 目录下。 

`commit-msg` 是其中一个 `hook`, 在 `git commit` 提交的时候触发。 可以使用 [husky](https://github.com/typicode/husky) 或者 [yorkie](https://www.npmjs.com/package/yorkie) 来自定义 `commit-msg` 触发时候的事件。

### 选择一: husky 

* 安装 
``` npm install husky  -D ```

* 在 `package.json` 中添加代码

```json
"husky": {
    "ghooks": {
      "commit-msg": "commitlint -e $GIT_PARAMS"
    }
  }
```

### 选择二: yorkie
* 安装 yorkie
```npm install yorkie -D```

* 在 `package.json` 中添加代码

```json
  "gitHooks": {
    "commit-msg": "commitlint -e $GIT_PARAMS"
  },
```

> 在 `git commit-msg` 这个钩子中会触发 `commitlint` 的操作。

## 配合 lint-staged 进行代码检验和修复  
在完成了 `git message` 的校验之后， 可以继续使用 [lint-staged](https://github.com/okonet/lint-staged) 和 `git hooks` 来进行代码提交前的语法、风格的验证和修复。 

1. 安装
``` npm install -D lint-staged ```

2. 在跟目录下创建 `.lintstagedrc`, 并写入

```
{
    "*.{js,vue}": ["eslint --fix", "git add"]
}

```

* 或者在 `package.json` 中写入

```
"lint-staged": {
    "*.{js,vue}": ["eslint --fix", "git add"]
}
```

3. 在 `husky` 或者 `yorkie` 配置中添加触发时机
```
// husky 配置方式
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -e $GIT_PARAMS"
  }
}

// yorkie 配置方式
 "gitHooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -e $GIT_PARAMS"
  }
```

这样在每次提交之前都会触发 `pre-commit` 这个 `hook`, 从而触发 `.lintstagedrc` 或者 `package.json` 中的 `lint-staged` 里面的配置。 在例子中，我们配置了对所有 `.js` 或者 `.vue` 结尾的文件进行 `eslint` 的修复， 并且当修复之后再次执行 `git add` 将修改后的文件再次放到暂存区。 这样就可以保证每次提交的代码都是统一风格的代码了。

::: tip
 `lint-staged` 只对此次提交所在暂存区的文件（git add后的文件）进行一系列的检查、修复、格式化操等作。
:::

## 自动生成 Change log 并更新 Version 
当使用 `Angular 规范` 提交 `git message`, 还可以使用 [standard-version](https://github.com/conventional-changelog/standard-version)生成 `Change log` 文档。
生成的文档将会包括下面三个部分。

```
new features   // 新增功能记录
bug fixes   // 解决 bug 记录 
breaking changes   // 不兼容变动记录
```

每一部分都会列出相关的 `commit`, 并且指向这些 `commit` 的连接。 `conventional-changelog` 使用如下：

1. 安装
```
npm install -g standard-version
```

2. 在 `package.json` 中添加 `script` 字段
```
"script": {
  "release": "standard-version"
}
```

运行 `npm run release` 将会执行下面的步骤。
```
1. 修改 package.json package-lock.json 中的版本号
2. 生成 CHANGELOG.md 文件。 
3. 提交  package.json package-lock.json CHANGELOG.md 文件
4. 给本次提交打上 tag
```

![](http://ww3.sinaimg.cn/large/006tNc79gy1g5wzem0mk4j30w00gy778.jpg)

更多 `stardard-version` 请参考 [stardard-version](/npm/standard-version)



