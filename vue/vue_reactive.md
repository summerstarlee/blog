# Vue 源码中数据响应实现

系列文章:
[Vue 源码阅读第一步-深度解读响应式原理](https://juejin.im/post/6871478709506244615)
[Vue 源码阅读第二步 - Vue 实例化流程分析](https://juejin.im/post/6873739621823184903)


在 [Vue 源码阅读第一步-深度解读响应式原理](https://juejin.im/post/6871478709506244615) 中讲到了 Vue 实现数据响应的原理
![响应原理](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f14a2c7de7474e588d66b8de7fae6de1~tplv-k3u1fbpfcp-zoom-1.image)

在 compile 过程中会根据 template 中使用 `data` 的情况作为一个 `依赖`, 每使用一次依赖就会创建一个 `Watcher` 来负责对使用该对象的 `template` 模板进行响应更新。 

Vue 在真正实现响应式的过程中和上面的过程有几方面的差异

## Vue 中和响应原理中不同的地方

### Watcher 

实例上为了避免性能的浪费，在 `Vuex2` 中, Watcher 依赖收集的对象放大到了 Vue 实例上面， ***每声明一个 vue 实例，就会生成一个对应的 Watcher 对象***， 负责实例的响应更新。

除此外，由于 watcher 的范围变大，DOM 为了做到只更新某些 `template` (这里的 `template` 是绑定了某个值的 dom 模块), 使用到了 `diff` 算法, 通过对整个实例的 VNode 改变前后对比，得出需要改变的地方单独更新。

同时生成 Watcher 的地方也发生了改变， 由于 watcher 的依赖收集和每一个组件实例对应， watcher 只需需要和组件绑定， 这实现在 `mountComponent` 方法中 [Vue 源码阅读第二步 - Vue 实例化流程分析](https://juejin.im/post/6873739621823184903#heading-7)。

### Dep
在 [Vue 源码阅读第一步-深度解读响应式原理](https://juejin.im/post/6871478709506244615) 中 ***Dep 负责收集 Watcher 并通知 Watcher 的更新方法， Dep 和数据的key 是一对一的关系。*** 这在Vue 的源码中是没有变化的， 不同的是 Vue 对每一个值为对象的属性增加一个一个充当大管家的 Dep 对象， 他负责当对象动态删除或者增加属性时通知更新。而对于key创建对应的小管家 Dep 对象。 (***大管家Dep 负责对象变化的通知更新， 小管家Dep 负责值变化的通知更新***)


### Dep 和 Watcher 之间的关系
在 [Vue 源码阅读第一步-深度解读响应式原理](https://juejin.im/post/6871478709506244615#heading-9) 中，dep 和 watcher 之间是 一对多的关系。
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae0f61399a554f27836958354f351a4c~tplv-k3u1fbpfcp-zoom-1.image) 

而在 vue 中， 由于 watcher 和组件对应，dep 和 组件 data 中的每个key对应，dep 和 watcher 的关系变成了一对多。另外由于需要在组件中实现传入的 watch 对数据的监听， watcher 还需要和某些 key 发生关系，watcher 和 dep 最终关系变成了"多对多"。

[图片]()



## 响应逻辑入口
响应的逻辑和数据有关，在生成 [Vue 源码阅读第二步 - Vue 实例化流程分析](https://juejin.im/post/6873739621823184903#heading-5) 中得知 `_init` 方法中执行 `initState` 方法初始化了 `props/methods/data/computed/watch` 等属性。 `data` 属性的处理在 `initData` 中进行。

***src\core\instance\state.js***
```js
export function initState() {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```

***src\core\instance\state.js***

```js
function initData (vm: Component) {
  let data = vm.$options.data
  proxy(vm, `_data`, key)
  // observe data
  observe(data, true /* asRootData */)
}
```
在 initData 中最重要的是执行了 observe 方法让 data 开始进入数据响应的逻辑处理，除此外还执行了 `proxy` 方法, 这个在 [Vue 源码阅读第一步-深度解读响应式原理](https://juejin.im/post/6871478709506244615#heading-8) 看到过，目的是把 `this.data.a` 的属性代理到 `this` 上面，直接通过 `this.a` 访问。

下面看 observe 的处理细节

***src\core\observer\index.js***
```js
export function observe (value: any, asRootData: ?boolean): Observer | void {
  //1. 排除 data 不是 对象或者 data 为 VNode 的情况 
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  let ob: Observer | void
  // 2. 这里通过判断 data 上面是否有 __ob__ 来判断当前的 data 数据是否已经经过了响应式的处理，如果处理过了，直接返回处理后的结果。
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } 
  else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    // 数据响应处理
    ob = new Observer(value)
  }

  return ob
}
```
`observe` 方法主要就是返回一个 Observer 实例, 从对 `__ob__` 判断逻辑可以想到 `Observer` 内部会给传入的 `data` 添加一个 `__ob__` 属性，来标识该对象已经经过响应处理. 

下面看 Observer 中的逻辑。

***src\core\observer\index.js***
```js
export class Observer {
  constructor (value: any) {
    this.value = value
    this.dep = new Dep()
    def(value, '__ob__', this)
    this.walk(value)
  }

  walk (obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}
```

去掉对属性为数组的逻辑处理后，在 Observer 的构造方法中，主要做了3件事。 

1. 生成一个对应对象的大管家 Dep。
2. 使用 def 方法给当对象添加 `__ob__` 属性。
3. 调用 walk 遍历对象添加数据监听。

下面看 `defineReactive` 方法。

***src\core\observer\index.js***

```js
export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  // 针对 key 的小管家
  const dep = new Dep()

  // 迭代处理值为对象的值
  let childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      val = newVal
      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })
}
```



