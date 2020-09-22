# 参照 Element-ui 的目录结构发布自己的 vue-ui 包

## <span id="product">搭建项目</span> 
这里使用 vue 的脚手架来搭建项目。 vue的脚手架有不同的模板，我们使用 `webpack-simple` 模板。

### 初始化项目

> 提醒一下， 初始化 vue 脚手架的模板前需要安装 `vue-cli` 脚手架工具

```bash
    vue initialwebpack-simple vue-star-ui

    # to get started
        cd vue-star-ui
        npm install
        npm run dev 
```
![generated vue-product](https://user-gold-cdn.xitu.io/2018/9/7/165b200419c0f76c?w=523&h=337&f=jpeg&s=36716)

**注意：后期因为编写组件的样式文件我选择使用 sass 语法，所以最好在生成目录的时候选择使用sass **

生成初始化项目后，目录结构是这样的：

![初始化目录结构](https://user-gold-cdn.xitu.io/2018/9/7/165b20041ecf3795?w=376&h=428&f=jpeg&s=26096)

我们需要改造一下，把 `src` 下面的文件和目录全部删除，然后添加 `src` `src/index.js`  `packages` `packages/button/src/button.vue` `packages/button/index.js` 
修改后的目录结构是这样的：

![修改后目录结构](https://user-gold-cdn.xitu.io/2018/9/7/165b20041edc6ba6?w=352&h=249&f=jpeg&s=10063)

### 初始 src/index.js

新建目录完毕之后我们现在完善文件中的代码,首先我们需要在src/index.js 中 返回一个带有 `install` 方法的对象。

```js
// src/src/index.js

const install = (Vue,opts = {}) {

}

export default {
    version: '0.0.1',
    install
}
```

这样一个最基本的 `Element-ui` 的入口文件 (`src/index.js`) 我们便完成了，但是这个时候 `install` 方法里面什么也没有，我们先加一个 `button` 组件。


### button 组件

```js
// src/packages/button/src/button.vue

<template>
  <div>button</div>
</template>

<script>
export default {
  name: 'StarButton'  
}
</script>

```

> 这里的 name 对应的是 组件的名称, 因为再注册组件的时候是通过 `Vue.component(button.name,button)` 这种方式的，所以当使用库中的组件的时候就可以通过 `<star-button />` 这种方式。

```js
// src/packages/button/index.js

import StarButton from './src/button'

StarButton.install = (Vue) => {
  Vue.component(StarButton.name, StarButton)
}

export default StarButton
```
> 这个文件有两个作用，1. 将 `button` 组件导出给 `src/index.js` 中的 `install` 方法使用    2. 将 `button` 组件的 `install` 方法导出给 `Element`,方面 `button` 单独使用
 
### 完善 src/index.js

在写完了一个 `button` 组件之后，我们需要将组件导出给 `src/index.js`

```js
// src/src/index.js
import Button from './packages/button/index'

const components = [
    Button
]

const install = (Vue,opts = {}) {
    // 将所有的 组件 挂载到全局资源
    components.map(component => {
        Vue.component(component.name,component)
    })
}

// 当检测到 Vue 是全局变量的时候，自动将 执行 `install` 方法
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    version: '0.0.1',
    install,
    Button   // 单独暴露 Button 组件，方便单独引入
}
```

## 配置发布文件

在按照 `Element-ui` 的目录结构编写完一套最基本的 框架后，现在开始配置打包发布的文件。

### 修改 `webpack.config.js`

在 `webpack.config.js` 文件中，我们需要修改项目的入口文件以及输出配置

```js
    // 这里的入口文件  不仅是项目中 通过 npm run dev 的进入文件  
    // 同时也是 npm run build 后的 入口文件
  entry: './src/src/index.js', // 项目的入口文件 
  output: {
    path: path.resolve(__dirname, './dist'),  // 打包后输出文件的所在目录
    publicPath: '/dist/', // 打包输出的文件路径
    filename: 'star-ui-vue.js',  //打包后的 文件名称，这个文件名称与项目名称相对应
    library: 'star-ui-vue',  // 指定 使用 import 或者 reqire 时的模块名，这里为 import xx from 'star-ui-vue' 或者 require('star-ui-vue')
    libraryTarget: 'umd', // 可以指定生成不同的 umd 的代码， 可以只是 commonjs 标准的，也可以是 amd 标准的， 也可以是只能通过 script 标签引入的
    umdNamedDefine: true // 会对 umd 的构建过程中的 amd 模块进行命名，  否则就使用 匿名的 define
  }
```

## 配置 package.json

距离项目的发布还有最后一步，也是发布npm 最重要的一步 —— 修改package.json文件

```js
 "version": "1.0.4",
private:false, // 默认是true 私人的 需要改为false 不然发不上去 你可以试试..
"license": "MIT", // 许可证
 "main": "dist/star-ui-vue.js", // 这个超级重要 决定了你 import xxx from “star-ui-vue” 它默认就会去找 dist下的star-ui-vue 文件
 "files": [  // 用于发布忽略 当我们的包够复杂的时候 我们总不能把所有本地开发或者测试的组件全部都发布上去 这个时候我们开启这个选项 意为只发布这两个文件 当然我们这个包比较简单 就不开启了
    "dist",
    "src"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/summerstarlee/star-ui-vue"
  }, // 配置这个地址存放你项目在github上的位置 也尤为重要
```

> 还需要提醒的一个是 `version` 字段，这个字段代表了 `npm` 的当前的版本，当我们改动了包的内容后，需要重新打包上传文件的时候，重新改变版本号才能发布。
> 关于 `version` 的改动说明，参照：
* 主版本号：当你做了不兼容的 API 修改
* 次版本号：当你做了向下兼容的功能性新增
* 修订号：当你做了向下兼容的问题修正


## npm 包发布

### 注册 
  如果还没有 npm 账号 需要现在 [npm](https://www.npmjs.com/) 上面注册一个账号

### 本地登陆 npm 账号
 在注册 `npm` 账号之后需要先在本地登陆
 
 ```bash
  npm login
  # 这时会提示输入用户名、密码、邮箱
  
  # 登陆完毕后会提示
  logged in as 用户名 on  https://registry.mnpmjs.orgs/
  
 ```
 
 登陆成功后就开始发布我们的项目啦
 
 ```bash
 # 需要在项目的根目录执行 （package.json 目录）
 npm publish 
 
 # 发布成功
 + star-ui-vue@版本号
 ```


## 验证 `npm` 包

当发布好项目之后，参考 <a href="#product" target="_self">搭建项目</a>,重新建一个 `vue` 项目

在运行 `npm install` 之后还需要再安装一个我们自己的 `npm` 包, 运行
 `npm install star-ui-vue -S`
 
 `npm` 包安装完毕之后，在 `main.js` 中新增包引用
 
 ```js
 // main.js
import StarUi from 'star-ui-vue'

vue.use(StarUi)
```

之后在项目中使用我们的组件 
 ```vue
<template>
  <star-button />
</template>
```

运行项目在页面中就能看到我们的 组件正确显示在页面中啦。

> 完成了 搭建项目结构、发布 `npm` 包，之后，我们的组件库就可以使用了，但是这时候我们的组件库还没有其他的功能。
下一节开始，我们就开始按照 `Element-ui` 的组件写法，一步一步搭建自己的组件库啦。
