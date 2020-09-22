# 自定义组件

>小程序开发语言虽然只能运行在微信小程序中， 但是它的设计同样遵循了主流前端框架的主要特征——组件化，在小程序中组件化的实现有两种方式: `template 模版` 和 `Component 组件`。 这两种方式分别适用于不同的场景。
> 1. `template 模版` 主要用于展示，模版中不涉及事件处理， 需要处理的事件逻辑放在调用模版的页面中。 一个 `template 模版` 只包含 `wxml` `wxss` 文件。
>2. `Component 组件` 作为一个单独的功能模块，不仅可以包含页面展示还可以包含该模块的事件逻辑处理。 像一个页面一样， `Component 组件` 可以包含 `wxml` `wxss` `js` `json` 文件。

在上一篇 [小程序 template 模版使用方法](https://juejin.im/post/6844903817146793997)讲解了 `template 模板` 的使用方法。 这次看一下自定义的组件的使用方法。

## 初试自定义组件

### 快速创建自定义组件
一个自定义组件包含 `wxml` `wxss` `json` `js` 4个文件， 使用微信开发者工具可以快速创建一个自定义组件的这四个文件。

### **创建 product 组件**

![](https://user-gold-cdn.xitu.io/2019/4/12/16a10fe76cddfd5b?w=311&h=480&f=png&s=34011)
![](https://user-gold-cdn.xitu.io/2019/4/12/16a10ff557924d01?w=307&h=149&f=png&s=6469)


###  自定义组件的 `json` 文件
一个组件的确定首先需要在组件的 `json` 文件中声明定义
**product.json**

```json
{
  "component": true,
  "usingComponents": {}
}
```

### 自定义组件的 `wxml` 文件

**product.wxml**
```html
    <view>
        <text class="custome">{{msg}}</text>
    </view>
```

### 自定义组件的 `wxss` 文件
> 组件内部的样式默认情况下只对该组件生效。 即组件内部的样式不会影响到外部页面的样式， 同样外部的样式也不会影响到组件的样式。
```
    .custome {
        color: #cccccc;
    }
```

### 自定义组件的 `js` 文件
自定义组件的 `js` 文件不同于页面的 `js` 文件。 它是由一个 `Component` 构造器来定义的; 当使用自定义的组件的时候，会使用 `Component` 构造器来指定组件的属性，数据，方法等。
**product.json**
```js
Component({
    properties: {}, 
    data: {/* 定义组件内部使用的数据*/},
    methods: {/*自定义的方法*/}
})
```
当使用开发者工具生成自定义组件模板的时候， 会在该组件的 `js` 文件中生成 `Component` 的三个属性。
#### properties
 接收调用页面传递的数据， 使用场景和 `vue` 框架组件中的 `props` 相似。
 对于需要接收的字段可以限制数据类型和定义默认值
 
```
properties: {
    msg: {
        type: String,  
        value: 'some message !'
    }
}
```

### 使用自定义组件
使用自定义组件， 需要先在调用页面的 `json` 文件中进行引用声明。

**index.json 引用生命**
```json 
{
    "usingComponents": {
        "product": "../../components/product/index"
    }
}
```
这样在页面中就可以像小程序的基础组件一样使用自定义组件。
**index.wxml**

```html
<product msg="index usr message"/>
```