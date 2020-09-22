# template 模板使用总结
小程序开发语言虽然只能运行在微信小程序中， 但是它的设计同样遵循了主流前端框架的主要特征——组件化，在小程序中组件化的实现有两种方式: `template 模版` 和 `Component 组件`。 这两种方式分别适用于不同的场景。

1. `template 模版` 主要用于展示，模版中不涉及事件处理， 需要处理的事件逻辑放在调用模版的页面中。 一个 `template 模版` 只包含 `wxml` `wxss` 文件。
2. `Component 组件` 作为一个单独的功能模块，不仅可以包含页面展示还可以包含该模块的事件逻辑处理。 像一个页面一样， `Component 组件` 可以包含 `wxml` `wxss` `js` `json` 文件。

## 1. 创建 `template` 模版
不同于 `page` 和 `Component` 的创建， 在开发者工具中并不能快速创建一个 `template 模版`。所以需要单独创建 `wxss` `wxml` 文件。

![](https://user-gold-cdn.xitu.io/2019/4/11/16a0cebe8451b0fc?w=1012&h=656&f=png&s=414728)

### `template.wxml` 文件语法
一个 `template.wxml` 文件中使用 `<template>` 标签包含一个模版， 一个 `template.wxml` 文件可以包含多个 `<template>`模版， 使用 `name` 属性作为模版的名称。

在模版中可以接受变量， 使用 `{{}}` 展示。 为变量的传递者由调用该模版的页面传递。
```html
<template name="A">
    <text>template name: {{name}}</text>
</template>
<template name="B">
    <text>template name: {{name}} {{msg}}</text>
</template>
```

### `template.wxss` 模版样式文件
模版可以拥有自己的样式文件
```
text{
    color: #cccccc;
}
```

## 2. 引用 `template` 模版
1. `template` 模版的引用需要使用 `<import>` 标签。 该标签的 `src` 属性为需要引用模版的路径。
2. `template` 模版的使用用 `<template>` 标签。 使用 `is` 属性来区别模版文件中定义的模版。
3. 使用 `data` 传入模版中的数据。

**index.wxml**
```html
<import src="../tpls/template.wxml" />

<view>
    <template is="A" data="{{name}}"/>
    <template is="B" data="{{name, msg}}"/>
<view>
```

## 3. 引用模版样式
在 调用页面的 `wxml` 中引用了 `template.wxml` 后，模版的样式并不会引用， 需要在调用页面的 `wxss` 中单独引用 `template.wxss` 文件。

**index.wxss**
```css
@import "./tpls/template.wxss"
```

## 4. 模版文件中的事件处理
在模版中定义的事件, 需要调用页面中执行。
**template.wxml**
```html
<template name="A">
    <text bindtap="handleTap">template name: {{name}}</text>
</template>
```

**index.js**
```
Page({
    data: {},
    handleTap() {
        console.log('template 模版 click')
    }
})
```

## 5.  import 有作用域
import 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件中 import 的 template，简言之就是 import 不具有递归的特性。

例如：C 引用 B，B 引用A，在C中可以使用B定义的 template，在B中可以使用A定义的 template ，但是C不能使用A定义的template 

## 6. include 配合 template 模版
如同使用 `<import src="xx/xx/xx.wxml">  <tempalte is="A" />` 引用和使用模版一样， 同样也可以使用 `<include src="xx/xx/xx.wxml />"` 来引用一个模版。

需要注意的是： 
1. 使用 `<include>` 引用模版文件时， 并不能分别出模版文件的模版块， 所以使用 `<include>` 引用的模版文件中只能定义一个模版块。
2. include 可以将目标文件中除了 `<template/> <wxs/>` 外的整个代码引入，相当于是拷贝到 include 位置。

```html
<!-- index.wxml -->
<include src="header.wxml"/>

<view> body </view>

<include src="footer.wxml"/>
```

```html
<!-- header.wxml -->
<view> header </view>
```

```html
<!-- footer.wxml -->
<view> footer </view>
```












