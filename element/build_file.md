# "build:file" 分析

 `build:file` 脚本的执行目的是生成包括 `icon`, `入口文件`, `i18n 国际化`, `version` 在内的文件， 内容为： 
 ```js
    node build/bin/iconInit.js & node build/bin/build-entry.js & node build/bin/i18n.js & node build/bin/version.js
 ```

 ## node build/bin/iconInit.js
执行这个脚本的作用是：读取 `packages/theme-chalk/src/icon.scss` 文件， 对文件中的所有类似于 `el-icon-close` 这样的图标类名进行正则匹配，把所有符合正则的图标类名组成一个图标数组，最后把图标数组写入到 `example/icon.json`。

### 前提知识点

**postcss**

[PostCSS](https://postcss.org/) 是一个允许使用 `JS` 插件转换样式的工具。 `PostCSS` 接受一个 `CSS` 文件并提供了一个 API 来分析、修改它的规则(通过把 `CSS` 转换成一个 `AST` 抽象语法树的方式。 [PostCSS 更多说明](https://github.com/postcss/postcss/blob/HEAD/README-cn.md), [PostCSS API](http://api.postcss.org/postcss.html#.parse))。


**postcss.parse**

解析一个 `css` 文件， 返回文件中所包含的 `css` 节点。

```css 
/* icon.scss  */

.el-icon-info:before { content: "\e61a"; }

```

```js
const postcss = require('postcss')
const fs = require('fs')
const fontFile = fs.readFileSync('./testIcon.scss', 'utf-8')
const nodes = postcss.parse(fontFile).nodes

console.log(nodes)
```

打印出来的结果为：

```js
[
    Rule {
		raws: {
			before: '\r\n\r\n',
			between: ' ',
			semicolon: true,
			after: '\r\n'
		},
		type: 'rule',
		nodes:[...],
		parent:
		Root {
			raws: [Object],
			type: 'root',
			nodes: [Circular],
			source: [Object]
		},
		source: {
			start: [Object],
			input: [Object],
			end: [Object]
		},
		selector: '[class^="el-icon-"], [class*=" el-icon-"]'
	}
]

```

对上面的前提知识了解后,开始看执行的脚本代码逻辑

### iconInit.js 逻辑分析

``` js
var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
var fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'), 'utf8');
var nodes = postcss.parse(fontFile).nodes;
var classList = [];

nodes.forEach((node) => {
  var selector = node.selector || '';
  var reg = new RegExp(/\.el-icon-([^:]+):before/);
  var arr = selector.match(reg);

  if (arr && arr[1]) {
    classList.push(arr[1]);
  }
});

fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(classList), () => {});

```
循环中的逻辑：

1. 使用 `forEach` 遍历取到的所有 `css` 文件节点。 
2. 首先拿到节点的 `选择器` 属性(包含 `class` 类、 `id`) `selector`。
3.  使用正则表达式 `/\.el-icon-([^:]+):before/` 匹配所有满足 `Element iocn` 命名规则的 `selector`。 这里使用 字符串的 `match` 方法。它将返回所有匹配项。
4. 如果匹配结果为真(`match`匹配不到结果时返回 `null`)，并且匹配的第一个结果也为真时。 **为了避免重复** 只将第一个匹配结果放在 `classList` 数组中。

最后将 生成的 `classList` 以字符串的形式写入到 `examples/icon.js`


## node build/bin/build-entry.js
执行这个文件的目的是自动生成 整个 `Elemnet` 框架的入口文件。 这个入口文件需要暴露 一个 默认对象, 这个对象上包括 `install` 方法， `install` 方法中需要在传入的 `Vue` 参数上添加 全部的组件、指令、全局挂载的方法。除了 `install` 方法外，为了支持单组件的使用， 还需要在这个默认对象上面添加 全部的组件作为该对象的属性。( [关于 `vue` 插件的开发](https://juejin.im/post/6844903671793188877) , 和 [`Element` 入口文件的分析](https://juejin.im/post/6844903671793205256))。

### 前提知识
**json-templater/String**

一种模板语言实现。可以预先写一个字符串模板，在这个字符串模板中可以存在 以***双大括号***包裹的变量， 使用该方法可以将字符串中的变量替换为其他值。

```js
    var render = require('json-templater/string');
    let template = `A {{platform}} UI Library `
    render(template, { platform: 'Desktop'});
```

**uppercamelcase**

将给定字符串转换成 驼峰写法

**os.EOL**

一个字符串常量,定义操作系统相关的行末标志:
* `\n` 在 POSIX 系统上
* `\r\n` 在 Windows系统上

### 依赖文件分析
**components.json**

以每一个组件名为对象的 `key`, 以该组件的所在目录为 `value` 组成的对象。

```json
{
  "pagination": "./packages/pagination/index.js",
  "dialog": "./packages/dialog/index.js",
  "autocomplete": "./packages/autocomplete/index.js",
  "dropdown": "./packages/dropdown/index.js",
  "dropdown-menu": "./packages/dropdown-menu/index.js"
}
```

### build-entry.js

```js 
// 组件-组件地址 json 对象
var Components = require('../../components.json');
var fs = require('fs');
// 替换 json 模板中的变量的方法
var render = require('json-templater/string');
// 字符串转换为 驼峰写法
var uppercamelcase = require('uppercamelcase');
var path = require('path');
// 当前操作系统的 换行符
var endOfLine = require('os').EOL;


// 将字符串文件模板输出的文件地址， 这个地址就是项目的入口文件的地址
var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
// 文件模板头部的 import 引用 字符串模板
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}/index.js\';';
// 文件模板中的 component 的字符串模板
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
// 整个文件模板中 主体字符串模板 里面有四个替代变量，分别是 include、 install、version、list
var MAIN_TEMPLATE = `......` 


delete Components.font;

var ComponentNames = Object.keys(Components);
// 替换 include 的变量数组
var includeComponentTemplate = [];
// 替换 install 的变量数组
var installTemplate = [];
// 替换 list 的变量数组
var listTemplate = [];

// 循环 component.json 中的 key 组成的对象
ComponentNames.forEach(name => {
    // 组件名 转换为 驼峰写法
  var componentName = uppercamelcase(name);
    // include 变量数组中添加 变量替换后的  IMPORT_TEMPLATE 字符串
  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  }));
 // install 变量数组中添加 变量替换后的  INSTALL_COMPONENT_TEMPLATE 字符串 这里排除 'Loading', 'MessageBox', 'Notification', 'Message' 是因为这几个组件将会全局挂载到 Vue 的实例上。
  if (['Loading', 'MessageBox', 'Notification', 'Message'].indexOf(componentName) === -1) {
    installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    }));
  }
    // list 的变量数组 中添加 组件的 key 的驼峰写法的字符串
  if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
})

// 最终将 MAIN_TEMPLATE 模板中的变量进行替换，生成最终的 框架入口文件的 字符串模板 
var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  install: installTemplate.join(',' + endOfLine),
  version: process.env.VERSION || require('../../package.json').version,
  list: listTemplate.join(',' + endOfLine)
});

// 将生成的 字符串模板写入到 框架入口文件
fs.writeFileSync(OUTPUT_PATH, template);

```

> 关于 `MAIN_TEMPLATE` 字符串模板的写法分析，可以看 [Element UI 项目分析](https://juejin.im/post/6844903671793205256)

## node build/bin/i18n.js
这个 文件中是通过循环已经配置好的 `i18n` 形式的数据字典， 对每一个数据字典中语种对象都生成一个 语种目录，在每一个目录中， 根据 模板引擎 生成 不同语种对应的模板。 之后 根据数据字典中的 `pages` 属性里面的配置，替换掉模板中的变量。 最后写入到 `example/pages/`。 这样每一个语种都有一套对应的 `.vue` 代码。  

### 依赖文件

**page.json**

这个文件里面配置了 `i18n` 的数据字典数组。

```js
[
     {
    "lang": "zh-CN",
    "pages": {
      "index": { },
      "component": {},
      "changelog": {},
      "design": {},
      "guide": {},
      "nav": {},
      "resource": {}
    }
  }
  ...
]
```

### i18n.js

```js
var fs = require('fs');
var path = require('path');
var langConfig = require('../../examples/i18n/page.json');

langConfig.forEach(lang => {
    // 在../../examples/pages 文件夹下 读取 与 `lang.lang` (指 zh-CN、 en-US、 es ) 对应的文件信息， 如果抛出异常，说明该文件夹下没有改文件，就新建一个对应 `lang.lang` 的文件
  try {
    fs.statSync(path.resolve(__dirname, `../../examples/pages/${ lang.lang }`));
  } catch (e) {
    fs.mkdirSync(path.resolve(__dirname, `../../examples/pages/${ lang.lang }`));
  }

// pages 里面包含 index component changelog design guide nav resource
  Object.keys(lang.pages).forEach(page => {
      // 模板地址
    var templatePath = path.resolve(__dirname, `../../examples/pages/template/${ page }.tpl`);
    // 输出地址
    var outputPath = path.resolve(__dirname, `../../examples/pages/${ lang.lang }/${ page }.vue`);

    var content = fs.readFileSync(templatePath, 'utf8');
    var pairs = lang.pages[page]; // 就是本次循环里的 page 

    // 将 page 再次遍历， 并将 与 page 变量相对应的 模板中的 变量 替换成 page 对象中的 value
    Object.keys(pairs).forEach(key => {
      content = content.replace(new RegExp(`<%=\\s*${ key }\\s*>`, 'g'), pairs[key]);
    });
    
    // 最终将 替换后的 模板写入到 输入地址
    fs.writeFileSync(outputPath, content);
  });
});
```

## node build/bin/version.js
这个文件是根据 命令行参数 `process.env.VERSION` 或者 `package.json` 中的 `version` 的值， 来生成 框架的版本对象，并最终在 `examples` 下生成 `version.json` 文件

```js
var fs = require('fs');
var path = require('path');
var version = process.env.VERSION || require('../../package.json').version;
var content = { '1.4.13': '1.4', '2.0.11': '2.0', '2.1.0': '2.1', '2.2.2': '2.2', '2.3.9': '2.3' };
if (!content[version]) content[version] = '2.4';
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content));
```
