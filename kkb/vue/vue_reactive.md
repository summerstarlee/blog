# Vue 源码中数据响应实现
系列文章:

[Vue 源码阅读第一步-深度解读响应式原理](https://juejin.im/post/6871478709506244615)
[Vue 源码阅读第二步 - Vue 实例化流程分析](https://juejin.im/post/6873739621823184903)

在 [Vue 源码阅读第一步-深度解读响应式原理](https://juejin.im/post/6871478709506244615) 中讲到了 Vue 实现数据响应的原理
![vue 响应原理](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f14a2c7de7474e588d66b8de7fae6de1~tplv-k3u1fbpfcp-zoom-1.image)

## Vue 源码中响应方式

在 `new Vue(options)` 时会调用 `Observer` 方法给 options.data 添加 getter setter 监听。 还会在 `Compile` 时针对每一个依赖产生一个 Watcher 实例(依赖收集)并添加到 Dep 收集器中。

实际上在 Vuex2 的版本中, 并没有对实例上的每一个依赖都产生一个 Watcher 实例，而是***针对每一个组件实例产生一个 Watcher***。由于 Watcher 的监听粒度变大, 当实例中某一个依赖的属性值发生变化时， Watcher 不能并不能辨别到底是哪个属性发生的变化, 这时 Watcher 会调用当前实例中的 _update 方法(每个实例上有一个 _update 方法, [Vue 源码阅读第二步 - Vue 实例化流程分析](https://juejin.im/post/6873739621823184903#heading-9) 中讲到), _update 方法会调用 `__patch__` 方法, 在 `__patch__` 方法中会通过 `diff` 算法对比出哪个数据发生了变化从而进行渲染。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/569eed265e014f09ae17dc3c369b231f~tplv-k3u1fbpfcp-zoom-1.image)

## 源码实现

在上篇 [Vue 源码阅读第二步 - Vue 实例化流程分析](https://juejin.im/post/6873739621823184903#heading-5) 中讲到在生成实例执行到 `_init` 时会调用 `initState` 方法, 他会初始化 data、props 等,  这里也执行了 Vue 响应的逻辑。
 
