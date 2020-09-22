#  项目分析

## 使用 `vue init webpack-simple productName` 初始化项目

> 前提环境： `node` `npm` `vue-cli` 

```bash
# init
vue init webpack-simple my-project

# run 
cd my-project
npm install 
npm run dev
``` 

## 在项目中 安装 Element

```bash
npm install element-ui --save-dev
```

## 目录结构
安装 `element-ui` 之后，打开 `node_modules/element-ui` 目录

> Element 的源码分为 [源码版本](https://github.com/ElemeFE/element)  和  发布版本（npm install element-ui 时安装到 node_modules 中的 element-ui 文件），发布版本少了很多源码文件的webpack 等配置文件，项目结构也更加清晰，方便理解。 这里分析的就是发布版本。

![Element ui 目录结构](https://user-gold-cdn.xitu.io/2018/9/7/165b1ffa12ca4e54?w=293&h=249&f=png&s=4392)

```js
element-ui
    |--- lib                        // 存放 打包后问文件目录
    |--- packages                   // 组件的源码目录
        |--- alert                  // 组件的源码包
            |--- src                // 组件bao
            |--- index.js           // 组件的入口文件
    |--- src                        // 源码目录
        |--- directive              // 实现滚动优化，鼠标点击优化
        |--- locale                 // i18n 国际化
        |--- mixins                 // Vue 混合器
        |--- transition             // 样式过渡效果
        |--- utils                  //工具类包
        |--- index.js               //源码入口文件
    |--- types                      //typescript 文件包
    |--- package.json               //npm 包依赖、文件配置
```

上面也提到了 `Element-ui` 的源码是分为 [源码版本](https://github.com/ElemeFE/element)  和 发布版本， 从源码版本的 `build/webpack.common.js` 文件中的 `webpack` 配置的 `entry` 可以看到 `Element` 的文件入口是 `src/index.js` 那么我们的分析也从 `src/index` 入手。  

## src/index.js 


```js
// src/index.js

import Pagination from '../packages/pagination/index.js'
import Dialog from '../packages/dialog/index'
...   //packages 下的导入组件包

const components = [   // 讲所有的组件统一放到 components 中
    Pagination,
    Dialog,
    ...
]

const install = function(Vue,opts = {}) {

    components.map(component => {
        // 遍历将组件加入到Vue中
        Vue.component(component.name, component);
    });

    // 加载中
    Vue.use(Loading.directive);

    // 定义Vue的原型 prototype
    Vue.prototype.$ELEMENT = {
        size: opts.size || '',
        zIndex: opts.zIndex || 2000
    };

    Vue.prototype.$alert = MessageBox.alert;
}

```
`Element-ui` 的入口文件，遵循于 [vue插件开发](https://juejin.im/post/6844903671793188877) 的开发方式。

文件的头部引入了 `packages/xx/index.js`, 这个是 `Element` 内置组件的入口文件。

`install` 是 `vue` 插件的公开方法。当使用 `Vue.use(element)` 的时候将会调用这个方法。 这个方法的第一个参数是 `Vue` 构造器， 第二个参数是一个可选的对象。 


在 [vue插件开发](https://juejin.im/post/6844903671793188877)中提到插件的第二种形式 -- 添加全局资源: 指令/过滤器/过渡/组件
在 `install` 中,将 内置的文件通过 组件注册的形式将 组件添加到了 `Elemnet` 的全局资源中。在使用 `Element` 的项目中， 我们会直接使用 `<el-input />`, 这便是 `Vue.component(component.name,component)` 这句话的功劳。  如果对于组件注册不熟悉  可以看 [官网 组件注册](https://cn.vuejs.org/v2/guide/components-registration.html)

```js
    Vue.use(Loading.directive);
```

这行代码同样是插件开发的第二种形式，它将 Loading 组件的 `directive` 挂载到全局资源。


同样也使用到了[vue插件开发](https://juejin.im/post/6844903671793188877)中提到插件的第四种形式 -- 添加 `vue` 实例方法

```js
    Vue.prototype.$alert = MessageBox.alert;
```

在使用 `Element` 的时候，我们就可以使用 `this.$alert('xxxx')` 这种写法了。


```js
    if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
    }
```
当检测到 Vue 是全局变量的时候，自动将 执行 `install` 方法


```js
module.exports = {
    version: 'xxx',
    install,
    CollapseTransition,
    Loading,
    Pagination,
    Dialog,
    ...
}
module.exports.default = module.exports;
```

导出 `Element`,这里导出的就是 使用 `import Element from 'Element'` 接收到的对象。
可以看出 `src/index.js` 文件不仅导出了 `version` `install`, 同时还导出了 `Dialog`  `Loading` 组件，这是因为 `Element` 的组件是可以单独引入项目，内置的每一个组件也同样有一个 `install` 方法。

## packages/button/src/index.js 
在分析完 `src/index.js` 文件之后，可以看到， `Element` 的核心就是它的组件，不同功能的组件使得 `Element` 可以适用于很多场景。

我们从最常见的  `button` 的入口分析，`Element` 中一个组件的构成。  

```js
import ElButton from './src/button';

/* istanbul ignore next */
ElButton.install = function(Vue) {
  Vue.component(ElButton.name, ElButton);
};

export default ElButton;


```
 
 可以看出这个文件是 `src/index` 的简单版本，返回 `ElButton` 对象，该对象包含一个 `install` 方法。 并且在 `install` 方法中给 `Vue` 挂在了一个 `ElButton` 组件资源。

 而在 `src/index.js` 文件中 `Element` 又导入了这个 `ElButton` 组件。
 我们知道在使用 `Element` 单个组件的时候我们这样写

 ```js
    import {Button} from 'element-ui'
    Vue.use(Button)
 ```

 这里 `Vue.use(Button)` 就会找到 Button 组件的 `install` 方法，并给 Vue 挂载了一个 `ElButton` 组件资源。

> 说过了 [vue插件开发](https://juejin.im/post/6844903671793188877), 也看过了 `Element-ui` 的项目结构和项目入口文件。下一节 我们将会讲述如何 在 [npm](https://www.npmjs.com/) 上面发布一个我们仿照 `Element-ui` 的项目。

