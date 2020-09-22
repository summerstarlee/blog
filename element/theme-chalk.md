# theme-chalk 分析 
# 组件库样式
一个组件的实现除了能实现复杂的逻辑,多样化的组件样式也是非常重要的，这一节我们将会分析 `Element` 的样式文件的目录结构，并且搭建一套自己的样式代码库

## Element theme-chalk 分析

在 `Element` 官网中 [theme-chalk](https://github.com/ElemeFE/element/tree/dev/packages/theme-chalk) 的文件目录结构

![theme-chalk](https://user-gold-cdn.xitu.io/2018/9/7/165b368e17163878?w=397&h=179&f=png&s=5656)

很明显, `Element` 的样式文件 `theme-chalk` 是一个 `gulp` 打包的项目。 

打开 `package.json` 文件。

```js
  "scripts": {
    "build": "gulp build"
  },
```

看出来项目的构建是从 `gulp build ` 开始的。

那就再打开 `gulpfile.js` 文件。
 
整个的配置文件内容也比较少，就直接把解释写在代码中了。更详细的 `gulp` 资料，查看 [gulp](https://www.gulpjs.com.cn/docs/getting-started/)

```js

'use strict';

var gulp = require('gulp');   
var sass = require('gulp-sass');   // gulp 编译 scss文件的插件
var autoprefixer = require('gulp-autoprefixer'); // 根据设置浏览器版本自动处理浏览器前缀的插件
var cssmin = require('gulp-cssmin');  // 压缩css文件的插件

gulp.task('compile', function() { // 新建 compile 任务
  return gulp.src('./src/*.scss')  // 匹配所有的 src目录下的 scss 文件
    .pipe(sass.sync())  // 同步编译匹配的文件
    .pipe(autoprefixer({ // 设置浏览器自动前缀
      browsers: ['ie > 9', 'last 2 versions'],   // 兼容 ie9 以上的版本  以及 其他浏览器最后的2个版本
      cascade: false   //文件不缓存
    }))
    .pipe(cssmin())   //编译后的scss文件进行压缩
    .pipe(gulp.dest('./lib'));   //将编译后的文件放在 lib 目录下
});

gulp.task('copyfont', function() {    // iconfont 图标编译任务
  return gulp.src('./src/fonts/**')   // 匹配 iconfont 目录下的所有文件 
    .pipe(cssmin())   // 压缩匹配文件
    .pipe(gulp.dest('./lib/fonts'));   // 将文件输出带 lib/fonts 目录下
});

gulp.task('build', ['compile', 'copyfont']);   // 执行gulp 

```

简单的看过 `gulpfile.js`  文件之后，也就清楚了为什么我们执行 `npm install Element-ui` 之后，样式文件为什么会跑到了 `element/lib/` 下去了。

接下来，我们就开始看 `theme-chalk` 的源码文件 -- `src` 文件

```js
// src 目录
|-- common  // 公共样式
    |-- popup.scss   // 定义弹出组件的样式
    |-- transition.scss  // 定义Element css动画样式
    |-- var.scss  // 定义变量
|-- date-picker  // 定义时间日期选择样式
|-- fonts //icon 字体
|-- mixins  // 混合样式  包含一些全局的函数 等
    |-- _button.scss   // button 组件样式 
    |-- config.scss   // 配置文件 例如 样式库前缀名配置
    |-- function.scss   // 全局的样式函数
    |-- mixins.scss   // 全局的样式混合定义
    |-- utils.scss  // 工具样式混合定义
|-- alert.scss   // 单独 Alert  组件 的样式定义 
...
|-- index.scss   // Element 库 全部的组件样式文件

```