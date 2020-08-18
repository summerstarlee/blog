# ESlint 基础
在编写 Js 代码时, 下面是两种常见的编程风格

```js
const foo = 'Foo'
```

```js
const foo = "Foo";
```

关于使用单引号还是双引号、 行末加不加 `;` 可以使用 [ESlint](https://cn.eslint.org/docs/user-guide/configuring) 在开发时统一编程风格。

> `ESlint` 工具不仅可以统一这种风格, 还可以在编写时就检查代码是否符合语法规范。

## eslint 使用

1. 安装 

```bash
npm install eslint -g  ## 为了使用 eslint cli 功能， 这里使用了全局安装
```

2. 在项目的根目录下新建 `.eslintrc` 文件

```json
{
    "rules": {
      "indent": 2,
      "no-unused-vars": 2,
      "no-alert": 2
    }, 
    "env": {
       "browser": true
    }
}
```

3. 新建 `index.js` 文件

```js
var unused = 'I have no purpose!'

alert(unused)

function foo () {
    var message = 'Hello, World!';
        alert(message);
}

foo()
```

4. 使用 `eslint index.js` 检查代码。

![](http://ww2.sinaimg.cn/large/006tNc79gy1g5wvsfevy6j30iv067glw.jpg)

在命令行中输出了三条错误， 并显示了错误出现的 `行:列` `错误等级` `错误说明` `对应的 eslint rule`

```
 7:1  error  Expected indentation of 4 spaces but found 8  indent
```

5. 使用 `--fix` 参数， 修复问题。

``` 
eslint index.js --fix
 ```

![](http://ww1.sinaimg.cn/large/006tNc79gy1g5wvtkix7tj30fk04i74d.jpg)

> `--fix` 该选项指示 ESLint 试图修复尽可能多的问题。修复只针对实际文件本身，而且剩下的未修复的问题才会输出。不是所有的问题都能使用这个选项进行修复。

## ESlint 配置方式

1. 使用 `eslintrc.js`、 `eslintrc.json`、 `eslintrc.yml`、 `.eslintrc` 文件配置。 

2. 除了使用配置文件, 也可以在文件内部以行内的形式来配置 `eslint` 规则。 

```JS
// index.js

var unused = 'I have no purpose!'

// eslint-disable-next-line no-alert  
alert(unused)

function foo () {
    var message = 'Hello, World!';
    // eslint-disable-next-line indent
        console.log(message);
}

foo()

```
3. 在 `package.json` 中使用 `eslintConfig` 字段进行配置

```json
{
    "eslintConfig": {
        "rules": {
            ...
        }, 
        "extends": []
    }
}
```

## 指定 JavaScript 支持版本

当在代码中使用 `const` `let` 等 `ES6` 语法时, `ESlint` 会报错。

![](https://user-gold-cdn.xitu.io/2019/6/29/16ba25dadf33652c?w=696&h=135&f=png&s=25683)

这是因为 `ESlint` 默认支持 `JavaScript` 3、5 版本。 对更高 `ES` 语法的支持需要手动配置。

`ESlint` 的解析器选项可以在配置文件中使用 `parserOptions` 属性设置。可用的选项有：

1. `ecmaVersion` 默认设置为3，5（默认）， 可以使用 6、7、8 或 9 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）

2. `sourceType` 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。

3. `ecmaFeatures` 这是个对象，表示你想使用的额外的语言特性:
    * `globalReturn` 允许在全局作用域下使用 return 语句
    * `impliedStrict` 启用全局 [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
    * `jsx` 启用 JSX
    * `experimentalObjectRestSpread` 启用实验性的 object rest/spread properties 支持 

```json
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    }
}
```

::: tip
1. ，对 JSX 语法的支持不同于对 React 的支持。React 使用了一些特定的 ESLint 无法识别的 JSX 语法。如果你正在使用 React 并且想要 React 语义支持，使用 [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)。
2. 支持 ES6 语法并不意味着同时支持新的 ES6 全局变量或类型(比如 Set 等新类型), 这时候除了需要使用 `{ "parserOptions": { "ecmaVersion": 6 } }` 来开启 `ES6` 语法支持, 还需要 `{"env": {"es6": true}}` (当开启了这个配置后会自动开启对 `ES6` 语法的支持) 
:::

## 配置运行环境

一个环境定义了一组预定义的全局变量。 `Js` 运行在不同的环境, 会有不同的全局变量, 例如在 `Node` 环境中会存在 `global` 变量, 当运行在 `browser` 中会存在 `window` 变量。
`ESlint` 会根据当前的运行环境来识别代码中的全局变量, 如果执行环境与全局变量不符合时, 将会报错。

使用 env 关键字在配置文件里指定想启用的环境，并设置它们为 true。

```
{
    "env": {
        "browser": true,
        "node": true
    }
}
```
> 更多的 `env` 配置参照 [Specifying Environments](https://cn.eslint.org/docs/user-guide/configuring#specifying-environments)

## 定义特殊的全局变量
当访问源文件未定义的变量名时, `no-undef` 将会发出警告。 这是可以在 `ESlint` 配置文件中使用 `globals` 单独设置一个全局变量。

```json
{
    "globals": {
        "var1": true,
        "var2": true
    }
}
```

这样在代码中就可以不定义 `var1` `var2` 这两个变量而直接使用了。


## Rules 配置
在 `ESlint` 附带有大量的规则， 可以使用上面提到的配置方式添加项目的 `rules` 规则。

以 `indent` 规则为例，默认时四个空格， 当需要更改这个规则时候， 可以有下面几种写法:

```js
// 使用默认4个空格。 错误等级为 2 
"indent": 2

// 使用 2 个空格。 错误等级为 2
"indent": [2, 2]

// 使用 tab 缩进。 错误等级为 2
"indent": [2, "tab"]

// 缩进为2个空格, 同时，switch...case结构的case也必须缩进
"indent": [2, 2, {"SwitchCase": 2}]
```
可以看到, `Rules` 的配置规则是一个可以包含三个参数的数组(只有第一个时可以为字符串)：
1. 第一个参数为错误级别， 可以使用 0 或者 `off`(关闭规则)、 1 或者 `warn`(开启规则, 使用警告级别的错误, 不会导致程序退出)、 2 或者 `error`(开启规则, 使用错误级别的错误, 会导致程序退出) 

2. 第二个参数为规则的选项， 在例子中分别配置了 `indent` 为默认4个空格、2个空格、`tab`缩进。

3. 第三个参数为额外参数, 例子中使用该参数开启了 `switch...case` 缩进验证。

## Extend 配置
`ESlint` 提供了众多可配置的 `Rules`, 一个一个配置是非常麻烦的。 `ESlint` 支持从已有的配置中继承启动的规则。

### eslint:recommended

`ESlint` 提供了 `eslint:recommended` 配置， 它提供了一系列核心规则， 可以使用 `extends` 属性来继承这些规则。

```json
"extends": "eslint:recommended"
```
::: tip
1. [eslint:recommended](https://cn.eslint.org/docs/rules/) 描述了每个规则的说明和默认配置。
2. `extends` 属性值当只有一个时可以是字符串, 多个时, 为字符串数组。 
:::

### 其他规则集
除了继承默认的 `eslint:recommended`, 还可以继承一些优秀的开源规则集， 如 `eslint-plugin-standard`, 使用方法也比较简单。

1. 安装 npm 包

```bash
npm install -D eslint-plugin-standard
```

2. 配置

```json
{
    "extends": ["eslint:recommended", "standard"]
}
```
::: tip
1. 在 ESlint 中, 使用外部 npm 包的时候， 省略前面 `exlint-plugin-`
2. 如果需要覆盖 `extends` 中的配置,  可以在 `rules` 字段中进行覆盖
:::

## Plugin 插件使用
插件是一个 `npm` 包，通常输出一个或多个命名的规则配置。 上面说到可以 `extends` 属性来继承规则， 我们可以使用 `plugins` 属性来引入 一个 `npm` 包, 然后使用 `extends` 属性来继承这个 `npm` 包的某个规则集。

1. 安装一个 `ESlint` 的 `npm` 包。 

```bash
npm install eslint-plugin-react --save-dev
```

2. 使用 `plugins` 属性引入插件

```json
{
    "plugins": "react"
}
```
::: tip
在 ESlint 中, 使用外部 npm 包的时候， 省略前面 `exlint-plugin-`
:::

3. 使用 `extends` 继承插件的某个规则

```json
{
    "plugins": "react", 
    "extends": ["eslint:recommended", "plugin:react/recommended"]
}
```

## ignore 文件配置
在项目根目录创建一个 `.eslintignore` 文件告诉 `ESLint` 去忽略特定的文件和目录。`.eslintignore` 文件是一个纯文本文件，其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测。例如，以下将忽略所有的 JavaScript 文件：

```
**/*.js
```

或者也可以在 `package.json` 文件中配置 `eslintIgnore` 字段来指定忽略文件

```json
{
    "eslintIgnore": ["hello.js", "world.js"]
}
```

