# Vue 实例化流程分析
[[toc]]

> 分析基于[vue 2.6.12](https://github.com/vuejs/vue/tree/v2.6.12)

## 环境搭建

1. 项目迁出

```bash
git clone git@github.com:vuejs/vue.git
```
2. 进入项目并安装依赖

```bash
npm install
```

2. 更新 `package.json` 中 `scripts` 中的 `dev` 配置, 将输出结果改为 `sourcemap` 形式

```json
"scripts": {
 + "dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev"
 -  "dev": "rollup -w -c scripts/config.js --environment TARGET:web-full-dev"
}
```

3. 运行 dev 命令, 将 vue 重新打包为 `sourcemap` 形式便于调试 
```bash
npm run dev
```

4. 在测试目中调试代码

Vue 项目的 examples 目录用来调试代码, 可以在该目录下添加测试代码。
新建 examples/test_1.html 文件

```html
<!DOCTYPE html>
<html lang="en">
<body>
  <div id="app">
    <div>{{msg}}</div>
  </div>
</body>
<script src="../dist/vue.js"></script>
<script>
    const vm = new Vue({
    el: '#app',
    data: {
      msg: 'msg'
    }
  })
</script>
</html>
```

> `../../dist/vue.js` 文件是第三步执行 `npm run dev` 后生成的 vue 依赖文件.



## Vue 的 rollup.js 构建配置

vue 项目使用 rollup.js 打包构建。

不同于 `webpack`, rollup 更适合 **库** 的打包构建, 而 webpack 更适合于 **一个完整的应用项目**。 

除此外 Rollup：
1. 使用 ES6 版本的 js 模块标, 对现代的 js 模块有更高的亲和度。
2. Rollup 默认支持 Tree-Shaking 功能, 这可以对所用到的代码进行静态分析, 并将未实际用到代码剔除。

### 配置
Rollup 如同 webpack 一样支持零配置打包, 但是使用配置文件可以更加灵活。通常配置文件为根录下的 Rollup.config.js。
```js
 export default {
   input: 'src/main.js',  // 入口文件
   output: {              // 输出配置
     file: 'bundle.js',
     format: 'cjs'
   }
 }
```

### Vue 配置
以 `dev` 命令为例： `rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev`。

* `-w` 监听 `bundle` 文件并当文件内容发生改变时重新构建。
* `-c` 指定配置文件
* `--environment <values>`  设置需要传送到配置文件中的参数

***scripts/config.js***

```js
if (process.env.TARGET) {
  module.exports = genConfig(process.env.TARGET)
}
```
由于执行 `dev` 时传递了 `TARGET`,  所以整个文件根据向外面暴露了 `genConfig` 函数执行的结果。

***genConfig***

```js
function genConfig (name) {
  const opts = builds[name]
  const config = {
    input: opts.entry,
    external: opts.external,
    plugins: [
      flow(),
      alias(Object.assign({}, aliases, opts.alias))
    ].concat(opts.plugins || []),
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || 'Vue'
    }
  }
  return config
}
```
genConfig 函数根据传入的 `name` 值从 builds 中拿到对应的配置。

```js
const aliases = require('./alias')
const resolve = p => {
 // 根据 alias 得到 p 文件在项目中的真实位置
}

const builds = {
    // ...
    'web-full-dev': {
        entry: resolve('web/entry-runtime-with-compiler.js'),
        dest: resolve('dist/vue.js'),
        format: 'umd',
        env: 'development',
        alias: { he: './entity-decoder' },
        banner
    }
    // ...
}
```
这里还有一步 `resolve` 函数根据 `alias` 解析 `web/entry-runtime-with-compiler.js` 的过程， 最终可以得到:

1. Vue 的入口文件是 `src\platforms\web\entry-runtime-with-compiler.js`
2. 输出文件为 `dist/vue.js`
3. 输出格式为 `umd`


## Vue 构造函数的入口
让我们从 Rollup 的打包配置中得到的 vue 入口文件中开始看 Vue 构造函数的入口

1. src\platforms\web\entry-runtime-with-compiler.js。 

这是遇到的第一个文件，这里并没有直接申明 Vue 的构造函数。 从其他地方引入了 Vue 后该文件只是在 Vue 的原型上面挂在了一个 `$mount` 函数。
```js
import Vue from './runtime/index'
Vue.prototype.$mount = function (){ // ...}
```

2. src\platforms\web\runtime\index.js。 

从上一步中找到了该文件, 这里也是从其他地方引用了 Vue, 这里给原型挂载了一些平台相关的属性, 其中最重要的在原型挂了 `__patch__` `$mount`。 其中 `__patch__` 用于数据响应后 `VDOM` 对比和真实 `DOM` 的渲染。  `$mount` 用于组件的挂载。这连个方法后面都会展开细说。

```js
import Vue from 'core/index'
Vue.prototype.__patch__ = // ...
Vue.prototype.$mount = // ...
```
> 代码中 `core/index` 路径是通过 Rollup 打包时的 alias 映射后的路径， 真实路径是 ``` src\core\index.js ````


3. src\core\index.js。 

这个文件主要是挂载了一些全局的 API。 向经常使用到的 `extend` `delete` `set` `nextTick`。
```js
import Vue from './instance/index'

initGlobalAPI(Vue)
```


4. src\core\instance\index.js。 

Vue 构造函数最终的声明文件

```js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)  // 实现 init 函数
stateMixin(Vue) // 状态相关 $data $props $props $set $delete #watch
eventsMixin(Vue) // 事件相关 $on $once $off $emit
lifecycleMixin(Vue) // 生命周期 _update $forceUpdate $delete
renderMixin(Vue) // 渲染 _render $nextTick
```
> 借鉴点： 由于使用 function 作为 Vue 的构造方式, 该函数既可以直接以 `Vue()` 的方式执行又可以 `new Vue()` 的方式生成实例, 这里使用 `this instanceof Vue` (使用 new 函数返回的 this 才会指向 Vue 构造函数, 直接 Vue() 执行, this 指向函数的调用者) 的方式限制了必须使用 `new Vue()` 的方式使用改构造函数。  

1. 该文件中声明了 Vue 最终的构造函数, 只执行了一句代码 `this._init(options)`. 而 `_init` 方法 Vue 的构造方法中并没有声明, 之前3个文件中也没有在原型上面挂载, 他在下面的 `initMixin(Vue)` 方法执行时, 被挂载到 Vue 的原型上面。

2. 除了构造方法外下面 5 个函数的执行提供了 Vue 最核心的功能：
  * initMixin(Vue) 实现 init 函数
  * stateMixin(Vue) 实现状态相关 $data $props $props $set $delete #watch
  * eventsMixin(Vue) 实现事件相关 $on $once $off $emit
  * lifecycleMixin(Vue) 实现生命周期 _update $forceUpdate $delete
  * renderMixin(Vue) 实现渲染 _render $nextTick


## _init 方法
_init 是 new Vue() 时唯一执行的方法, 这里面进行了实例创建，数据、属性、事件、节点渲染等功能。 

在这个方法中的主要代码为：
```js
Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    
    initLifecycle(vm) // 给实例添加 $parent,$root,$children,$refs 属性
    initEvents(vm)  // 处理父组件传递的事件和回调
    initRender(vm)  // $slots,$scopedSlots,_c,$createElement
    callHook(vm, 'beforeCreate')
    initInjections(vm)  //  获取注⼊数据 
    initState(vm)  // 初始化props，methods，data，computed，watch 
    initProvide(vm) // 提供数据注⼊ 
    callHook(vm, 'created')

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
```
1. `_init` 最后一步执行了 `$mount` 方法。在此之前分别执行了 6 个属性和事件挂载和解析的函数。 中间执行了两个生命周期的钩子函数。

2. 属性挂载和事件解析的执行顺序决定了生命周期的特性： beforeCreate -> created -> mount

3. 在 beforeCreate 之后才能获取到 $parent,$root,$children,$refs, $slots,$scopedSlots,_c,$createElement 等实例属性

4. created 之后才能执行或获取 props，methods，data，computed，watch

实例添加属性和解析方法之后，最终执行了 `$mount` 方法。

## $mount 方法
`$mount` 方法在看 Vue 构造函数入口的时候， 在 Vue 的原型上面挂载了两次, 由于后挂在的会覆盖前者，直接看最后一次挂载的方法。 

文件位置: `src\platforms\web\entry-runtime-with-compiler.js`

```js
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {

  const options = this.$options
  if (!options.render) {
    // todo look
  }
  return mount.call(this, el, hydrating)
}
```
从整体上看 `$mount` 最终调用了上次挂载在 Vue 上面的 `$mount` 方法并添加了其他的逻辑，在看真正的 `$mount` 之前，先看以下这个文件里面添加了哪些额外的逻辑。(上面代码中的 `// todo look` 处)

```js
  if (!options.render) {
    let template = options.template
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          // 1. 当传入实例的 template 属性为 # 开头时，vue会用 #xxx 匹配元素的 innerHTML 作为模板
          template = idToTemplate(template)
        }
      }
      // 2. 如果传入的 template 是一个真实的 dom 节点， 编译模板直接为该节点的  innerHTML
      else if (template.nodeType) {
        template = template.innerHTML
      } else {
        return this
      }
    }
    // 3. 如果该实例中并没有传入 template 那就取 el 参数匹配到的节点的父元素为编译模板 
    else if (el) {
      template = getOuterHTML(el)
    }
    if (template) {
      // 4. compile 过程
      const { render, staticRenderFns } = compileToFunctions(template, {/*一大堆参数*/}, this)
      options.render = render
      options.staticRenderFns = staticRenderFns
    }
  }
```
1. 上述代码中首先排除了实例参数中出现 render 的情况，如果有 render 会直接走最后 `mount.call(this, el, hydrating)`。

2. 在 `if(!options.render){}` 里面主要做了两个事情： 1. 根据各种情况找到编译模板  2. 将编译模板编译后返回 render 函数，然后将 render 函数添加到了 options 上面。这里面看一下编译模板的确认流程：
  * 1. 当传入实力的 template 属性为 # 开头时，vue会用 #xxx 匹配元素的 innerHTML 作为模板

  * 2. 如果传入的 template 是一个真实的 dom 节点， 编译模板直接为该节点的  innerHTML

  * 3. 如果该实例中并没有传入 template 那就取 el 参数匹配到的节点的父元素为编译模板 

> `$mount` 方法最终调用了 `src\platforms\web\runtime\index.js` 文件中的 $mount 方法。 该方法中只执行了 `mountComponent` 方法。 

## mountComponent 方法

`src\core\instance\lifecycle.js`

在上一篇讲到响应原理的时候，说到了 `依赖` 和 `依赖收集`。 mountComponent 方法主要的作用就是触发依赖收集。 

1. 在函数内部有一个 updateComponent 方法，该方法中调用了 `_update` (负责 dom 更新)方法。 

2. 除此外，还生成了一个 `Watcher` 实例负责依赖收集。 而在 `Watcher` 内部的构造函数中会调用 mountComponent 函数。

3. 最终 `mountComponent` 执行 `vm._update(vm._render(), hydrating)` 函数

```js
export function mountComponent (vm,el,hydrating) {
  vm.$el = el
  // 1. 由于在 $mount 的时候添加了 render 这里的 if 不会进
  if (!vm.$options.render) {}
  callHook(vm, 'beforeMount')

  let updateComponent // 更新 Dom 的方法
  
  // 2. 开启性能追踪的情况下 默认 false
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) 
  } 
  // 为开启性能追踪的情况下： 默认 false 
  else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  }

  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true)

  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
```

`src\core\observer\watcher.js`

这里只展示了 `Watcher` 在生成实例的时候会触发一次 `expOrFn` (也就是上面 updateComponent 函数) 的逻辑

```js
class Watcher {
  constructor(
    vm: Component,
    expOrFn: string | Function
  ) {
     if (typeof expOrFn === 'function') {
      this.getter = expOrFn 
    }

    this.value = this.lazy
      ? undefined
      : this.get()
  }

  get () {
    try {
      // 触发  this.getter 等同于触发  expOrFn
      value = this.getter.call(vm, vm)
    }
    return value
  }
}
```

## _render 方法

`vm._render` 作为 `vm._update` 的参数需要先执行。 

_render 挂载到 Vue 的时机发生在 Vue 的构造函数文件中 `src\core\instance\index.js` 的 `renderMixin(Vue)` 方法。

`src\core\instance\render.js`

_render 方法中主要的做了如下步骤

1. 获取到 vm.$options 上面的 render 方法。 这个方法是在 $mount 执行的时候调用 compileToFunctions 进行编译时添加到 options 上的。  (vm.options 和 vm.$options 有一个映射关系)

2. 执行 render 方法返回一个虚拟 dom 树。

> 关于编译相关，会另写一篇文章

```js
Vue.prototype._render = function (): VNode {
    const vm: Component = this
    const { render } = vm.$options

    let vnode
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement)
    }
    return vnode
  }
```

## _update 方法
 vm.render 执行结束后, 返回给 _update 方法一个 虚拟 Dom 树，这时进入 _update 方法内部。

 _update 挂载的入口在 Vue 的构造函数文件中 `src\core\instance\index.js` 的 `lifecycleMixin(Vue)` 方法。

 `src\core\instance\lifecycle.js`

代码的主要逻辑就是: 获取到实例上之前的虚拟 dom `prevVnode` 和 上一步调用 render 函数返回的将要渲染的虚拟dom  `vnode` 进行对比。 如果 prevVnode 不存在进入首次渲染的逻辑否则走更新的逻辑 (`__patch__`)。

 ```js
  Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
    const vm: Component = this
    const prevVnode = vm._vnode
    vm._vnode = vnode
    if (!prevVnode) {
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
    } else {
      vm.$el = vm.__patch__(prevVnode, vnode)
    }
  }
 ```

## 结束语

1. 这节针对 Vue 源码的入口文件做了大体的过程分析。除此外也看到了当使用 new Vue(options) 生成 Vue 实例时内部走了那些逻辑。 
2. `__patch__` 作为 Vue 实例生成的终点，一方面是因为他负责真实的渲染工作,执行完 `__patch__` 之后，Vue的初始化渲染流程就走完了。 另外一方面是因为 `__patch__` 涉及到虚拟 Dom 的 `diff` 算法对比，这个打算单独以一个篇文章作为来写。
3. 上面的讲到的实例化过程中留了很多问题需要展开细讲，比如 `Compile` 过程、 Vue 源码中的响应方式、虚拟 DOM 生成。这篇只是看 Vue 实例化的主体流程， 后面这些都会作为单独的篇幅来写。

## 结论：Vue 实例化过程

```
new Vue()  --->  _init() --->  mountComponent() --->  updateComponent()/new Watcher()  ---> render()  ---> _update()  --> __patch__

```

 












