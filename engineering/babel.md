# Babel 教程 
![](http://ww2.sinaimg.cn/large/006tNc79ly1g5xaal5mtsj31060f2wto.jpg)
Babel 是一个 JavaScript 编译器.各个浏览器对 JavaScript 版本的支持各不相同，有很多优秀的新语法都不能直接在浏览器中运行。为了解决这个“沟通不畅”的问题，所以就有了 Babel，Babel 的出现使得我们可以无须顾忌的去使用 ES6+ 的语法

## 使用 @babel/cli 
babel 提供了 `@babel/cli` 命令行工具， 用于命令行下编译源码。

1. 为了使用 `@babel/cli` 工具需要在全局或项目中安装 `@babel/core`  `@babel/cli`。 
> `@babel/core` 中包含了 babel 的核心模块， babel 的核心 api 都存在于这个模块中。 使用 babel 必须要安装这个模块。

```bash
# 快速初始化项目
yarn init -y
# 本地下载依赖
yarn add @babel/cli @babel/core -D 
```

2. 在项目中新建 `test.js` 文件， 并写入内容。
```js
const fn = () => console.log('hello word')
```
3. 使用 `npx babel test.js` 快速编译文件
```bash
npx babel test.js
const fn = () => console.log('hello word')
```

编译后的文件并没有发生任何变化， 这是因为 babel 在 6 版本以上做了大量的模块化的工作，将原本集成一体的编译功能分离成一个个独立的插件，在没有使用任何插件时， babel 默认并不会做任何编译的工作。

## 使用 babel 插件
babel 提供了众多的插件来处理 js 语法的转换， 像上面用到的箭头函数， babel 提供了 `@babel/plugin-transform-arrow-functions` 插件把箭头函数转换成普通函数。
1. 安装
```bash
yarn add @babel/plugin-transform-arrow-functions -D
```

2. 命令行编译
```bash
npx babel --plugins @babel/plugin-transform-arrow-functions test.js
```
箭头函数被编译成了普通函数
![](http://ww4.sinaimg.cn/large/006tNc79gy1g5xs68b8iyj31q406mmy4.jpg)

## babel 配置文件
 当使用插件增多，所有的插件都写在命令行中，命令行参数会越来越长， babel 提供了配置文件来解决这个问题。 配置文件可以是一下几种方式:

 1. `babel.config.js`

使用 `babel.config.js` 可以用编程的方式创建配置文件， 使用这种方式还可以选择编译 node_modules 目录下的模块。
```js
module.exports = {
  plugins: ["@babel/plugin-transform-arrow-functions"]
}
```

 2. `.babelrc`

 适用于不含逻辑处理的简单配置
 ```json
{
  "plugins": ["@babel/plugin-transform-arrow-functions]
}
 ```

 3. `.babelrc.js`

 可以使用 `module.exports` 暴露一个同 `.babelrc` 相同的配置对象。
 ```js
module.exports = {
  plugins: ["@babel/plugin-transform-arrow-functions"]
}
```
 4. `package.json`

babel 的配置文件除了单独作为一个文件外， 还可以在 package.json  文件中添加 `babel` 字段来添加配置信息。
{
  "babel": {
    "plugins": ["@babel/plugin-transform-arrow-functions"]
  }
}

> 有了配置文件， 在使用命令行的时候直接运行 `npx babel test.js` 编译代码， babel 会自动读取上述讲到的配置文件并应用到编译中.

## preset 预设
当代码中使用了更多新增的 js 高级语法，为了考虑浏览器的支持，需要转换这些高级语法。 这时候我们可能需要在配置文件中添加 `@babel/plugin-transform-block-scoping`插件转换 `const` `let` 语法、添加 `@babel/plugin-transform-classes` 插件转换 `calss` 语法。 显然这种方式是繁琐的，我们不仅要关注业务逻辑，还要关注 es6 语法的支持情况。

babel 提供了 `preset(预设)` 概念，可以把它看作是 `套餐` 的概念。在每一个套餐里面包含了不同的 `plugins`, 这样只要安装了一个 `preset`, 就等同于安装了众多的 babel 插件。

babel 官方提供了几组常用环境的编译 preset:
1. `@babel/preset-env`  允许使用最新 js 语法的预设
2. `@bable/preset-flow` 允许使用 flow 静态类型检查的预设
3. `@babel/preset-react` 允许使用 react jsx 语法的预设
4. `@babel/preset-typescript` 允许使用 typescript 语法的预设

以 `@babel/preset-env` 为例，看一下 preset 的使用方法

1. 安装 preset
```bash
yarn add @babel/preset-env -D
```

2. 配置 preset

以 .babelrc 文件配置为例
``` json
{
  "presets": ["@babel/preset-env"]
}
```

3. 在 test.js 文件中增加更多的 es6 语法。
```js
const fn = () => console.log('hello babel.js')

class Persion {
  constructor() {
    console.log('hello class')
  }
}

let word = 'hello word!'

let p = new Persion()
```

4. 验证 perset 
```bash
npx babel test.js
```
箭头函数、let/const、class 这些高级语法都被向下转译
![](http://ww3.sinaimg.cn/large/006tNc79gy1g5xuelundbj31i40lq78k.jpg)

5. `@babel/perset-env` 参数配置

当代码确定不会运行在更低的浏览器环境， 或者很清楚代码需要运行在某个浏览器环境中， 可以传递给 `@babel/perset-env` 更多的参数来实现。
> 当给 perset 设置参数时， 需要把这个 perset 作为一个数组写在 `persets` 数组中， 这个 perset 数组包含两个值， 第一个是当前 perset 的名称， 第二个是这个 preset 的参数对象。 
```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["last 1 Chrome versions"]
      }
    }]
  ]
}
```
在配置文件中配置了代码的运行目标是最近一个版本的 Chrome 浏览器， 因为 Chrome 浏览器对新的 es6 语法的支持， balbel 并没有对代码进行语法转换
![](http://ww4.sinaimg.cn/large/006tNc79gy1g5xuwlvoxrj317o0k2wgd.jpg)

## @babel/polyfill
在 es6 中 js 有了很多改变，总的来说这些改变包含了两个方面: 

1. syntax 语法的改变。这类改变表现在对 es5 中存在的 API 的优化， 如 let、const、 class 等。
2. 新增的 API。 es6 在 es5 的基础上增加了像 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 和 Object.assign 这样的全局对象和对象方法。这些对象和方法在 es5 中是没有的。

`@babel/preset-env` 实现了 syntax 高级语法的向下转译， 但是对新增 API `@babel/preset-env` 并不能识别，所以在向下转译的时候也就不能转译这些API。

浏览器会针对这些新增的 API 实现自己的兼容方式，以数组的 `includes` 方法为例。

```js
if (!Array.prototype.includes) {
  // 实现兼容方法
}
```
这种实现新的 js API 语法兼容的过程就是 `polyfill`，即`垫片`。

 但是不同的浏览器对某一特性的兼容方法并不相同，并且,并不是所有的浏览器都实现了所有 API 的兼容。

 `@babel/polyfill` 为解决这种情况提供了一种方案。他对所有新增的 es6 API 实现了一套统一的兼容方案，让所有的浏览器针对所有的 es6 API 都站到统一的起跑线上。

 下面看一下 `@babel/polyfill` 的使用方法

 1. 安装 
 ```bash
yarn add @babel/polyfill -D
 ```

 2. 在代码的入口文件顶部引用 `@babel/polyfill`
```js
require('@babel/polyfill')
const fn = () => console.log('hello babel.js')

class Persion {
  constructor() {
    console.log('hello class')
  }
}

let word = 'hello word!'

let p = new Persion()

console.log(['babababelss'].includes('babel'));
```

* @babel/polyfill 的弊端

为了实现浏览器兼容， @babel/polyfill 必须要实现所有 es6 API 的兼容处理, 并且他会对一些全局的方法重写， 因此会存在弊端:

1. 体积较大， 当项目中只使用一小部分特性时， 会造成资源浪费。
2. 会污染全局环境，对一些方法重写。

## @babel/runtime
使用了 `@babel/ployfill` + `@babel/preset-env` babel 已经可以处理 es6 新语法特性在浏览器中的兼容问题了， 那 `@babel/runtime` 的必要性又是什么呢？

以 es6 中的 `Object.assign()` 为例子，代码中如果需要使用这一特性，考虑到要避免上面列出的 `@babel/polyfill` 的弊端，可以单独引入 `@babel/plugin-transform-object-assign` 插件转译代码。

1. 安装 

```bash
yarn add @babel/plugin-transform-object-assign -D
```
 2. 配置
```
{
  "presets": ["@babel/preset-env"], 
  "plugins": ["@babel/plugin-transform-object-assign"]
}
```

3.  准备测试文件
```
let a = {x:1}
let b = {y:2}
Object.assign(a, b);
```
4. 运行 
```
$ npx babel test.js

"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var a = {
  x: 1
};
var b = {
  y: 2
};

_extends(a, b);
```
 可以看到如果没有使用 `@babel/polyfill` 的话， babel 会将 `Object.assign()` 方法替换为 `_extends()` 方法。

 现在我们新增一个 test1.js 文件， 在里面也写一个 `Object.assign()` 方法。
 ```js
Object.assign({}, {});
 ```
 现在使用 `npx babel test.js test1.js` 编译两个文件。
```bash
$ npx babel test.js test1.js

# test.js 文件编译结果
"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var a = {
  x: 1
};
var b = {
  y: 2
};

_extends(a, b);

# test1.js 编译结果
"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_extends({}, {});
```

可以看到在多个文件中使用 `Object.assign()` 方法时，会重复创建 `_extends` 方法，这种情况需要: 

1. 将 `_extends()` 方法提取成一个公共的方法
2. 将提取出来的 `_extends()` 方法插入到各个文件中

`@babel/runtime` 实现了第一个步骤， 它里面包含了众多的工具函数，像上面提到的 `_extends()` 用来替换 `object.assign()`、`_classCallCheck()` 用来替换 `class`。

`@babel/plugin-transform-runtime` 能够实现步骤2的功能， 他能够向代码中注入当前文件中需要的 `@babel/runtime` 工具函数，来避免工具函数的重复定义。

使用方法：

1. 安装
```bash
yarn add @babel/runtime
yarn add @babel/plugin-transform-runtime -D
```
> 值得关注的是  `@babel/runtime` 选择的是生产依赖，而 `@babel/plugin-transform-runtime` 选择的是开发依赖， 这是因为 `@babel/runtime` 提供的工具函数最终需要编译代码中，而 `@babel/plugin-transform-runtime` 只是在开发的时候用来像源码文件中注入工具函数。

2. .babelrc 配置
```json
{
  "plugins": [
    "@babel/plugin-transform-object-assign",
    "@babel/plugin-transform-runtime"
  ]
}
```

3. 编译文件
``` bash
$ npx babel test.js test1.js

# test.js 编译结果
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var a = {
  x: 1
};
var b = {
  y: 2
};
(0, _extends2["default"])(a, b);

# test1.js 编译结果
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

(0, _extends2["default"])({}, {});
```

可以看到使用 `@babel/runtime` + `@babel/plugin-transform-runtime` 之后实现 `_extend()` 方法的抽离和代码的注入。

> * @babel/runtime 的弊端: @bable/runtime 不能提供实例上面的方法的转换， 像 Array.includes()、 Array.form() @babel/runtime 并不能转换


## @babel/polyfill 和 @babel/runtime 的区别
1. 实现方式不同
  * `@babel/polyfill` 为了兼容新的 js API, 用低版本语法实现对新出现 API 的**重写**
  * `@babel/runtime` 用低版本语法实现的工具函数**替代**新的 API

2. 结果的不同, 以 `Object.assign()` 为例
  * `@babel/polyfill` 转译后的代码中存在 `Object.assign()` 方法
  * `@babel/runtime` 转译后的代码不存在 `Object.assign()` 方法 

> 总结: 对新增的 API 前者改变它， 后者替换它。

3. 配置不同
  * `@babel/polyfill` 不用关心新的 API 对应的 `plugin`, 一次引用，不再担心兼容，而且它就是全局下的包，代码的任何地方都可以使用。
  *  `@babel/runtime` 是利用 plugin 自动识别并替换代码中的新特性, 虽然只要装好 `@babel/runtime` 和 `@babel/plugin-transform-runtime` 就可以使用， 但是针对新的 API 要引入对应`plugin` 做处理。

4. 范围不同
`@babel/runtime` 不能实现实例方法的转换， 像 

### @babel/register

`@babel/register` 是一个动态的编译器。上面讲到的 babel 使用，都是通过编译源码文件生成一个新的文件(通过命令 `npx babel test.js -o bundle.js`), 最终我们使用的代码是 `bundle.js`。 

`@babel/register` 提供了一种动态编译的功能， 当在代码顶部引用 `@babel/register` 之后， 使用 `node test.js` 可以直接运行源码文件， 在运行的时候，`@babel/register` 会动态编译代码。

使用方式: 

1. 安装
```bash
yarn add @babel/register -D
```

2. 入口文件引入
```js
require('@babel/register')

class Persion {
  constructor () {
    console.log('new a persion')
  }
}

let p = new Persion()
```

3. 执行文件　
```bash
$ node test.js
new a persion
```

### @babel/node 

`@babel/node` 是一个动态编译命令， 上面说到的 `@babel/register` 需要手动的在入口文件中添加 `@baebl/register` 依赖， 而使用 `@babel/node` 可以省去这一步骤， 直接通过 `npx @babel/node test.js` 就可以运行代码。

使用方式如下:

1. 安装, `@babel/cli` 中包含了 `@babel/node` 如果安装了 `@babel/cli` 就不用单独安装.
```bash
yarn add @babel/node -D
```

2. 创建执行文件
```js
require('@babel/register')

class Persion {
  constructor () {
    console.log('new a persion')
  }
}

let p = new Persion()
```

3. 执行 @babel/node 命令
```bash
$ npx @babel/node test.js
new a persion
```

> 1. `@babel/register` 和 `@babel/node` 都依赖于 `@babel/core` 如果需要单独使用需要一并安装 `@babel/core`
> 2. `@babel/register` 和 `@babel/node` 因为都是动态编译， 速度较慢， 建议只在开发环境中使用。


### babel 基础总结

总的来说， Babel 由一下几部分构成。

![](http://ww3.sinaimg.cn/large/006tNc79gy1g5yzsi7nrsj30je0awtce.jpg)

1. `@babel/core` 

是 babel 核心 API 所在， babel 的所有功能都基于这个模块。

2. `@babel/preset-xx` 

插件集合。里面由一个个转译 es6 高级语法的插件构成, 不同的插件组合为一个 `preset`  例如 `@babel/preset-env`

3. `@babel/polyfill`

 当新的 es API 不能被 `@babel/preset-xx` 转译的时候， 浏览器会提供自己的 `polyfill` 来新增或者重写 新增 es API 特性， `@babel/polyfill` 提供了一套对新增 es API 特性**重写**的 `polyfill`， 统一浏览器 `polyfill` 的起跑线。

4. `@babel/runtime` & `@babel/plugin-transform-runtime` 

 `@babel/runtime` 负责提供 **替换** 新增 es API 特性的工具库， `@babel/plugin-transform-runtime` 负责根据文件需要，自动**插入**替换后的工具函数。

5. `preset` 和 `plugins` 的参数模块

babel 为 preset 和 plugins 提供的针对规则集合、环境信息集合、布丁集合的参数配置

6. 动态编译模块 

包含 `@babel/register` 和 `@babel/node` 前者基于代码动态编译，后者基于命令行动态编译

7. 命令行模块

包含 `@babel/cli` 和 `@babel/node` 前者是对 js 进行转化和输入的工具， 后者为 动态编译执行 js 的工具 









