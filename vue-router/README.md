# Hello Vue-router
Vue-router 是 Vue 官方维护的一套路由管理插件， 在 vue-router 的使用实践过程中和对 vue-router 源码阅读后我萌生了重写一个轮子的念头。起初的想法是按照 vue-router 的源码执行顺序来一行行的解读，但是在我阅读源码之后发现 vue-router 虽然是一个很小的库， 并且 history 或 hash 模式的路由机制也在许多文章中讲得非常明白，但是作为一个库，里面的代码依旧是复杂的， 如果是一行行的对源代码解读，代码逻辑会很快搅乱 vue-router 的核心主线，因此决定使用另外一种 vue-router 解读的方式 -- 抛出需求，找出源码中的实现，这样由需求到实现的过程中分割源码，更好的理解 vue-router 里的每一行代码是为了解决什么样的需求。

vue-router 参考版本：` 3.1.6`

其他参考文章: 
    [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/v2/vue-router/)


1. [创建 router-view router-link 组件实现基于hash 模式的路由替换。](./simple.md)

