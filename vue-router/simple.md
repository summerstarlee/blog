# 基础路由切换功能

::: tip
    该篇需求: 创建 `router-link` `router-view` 组件实现 hash 模式下简单的路由切换
:::

在实现路由切换轮子之前，先看一下 `vue-router` 的使用方式。

## 引用 `vue-router` 
```javascript
// main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './Index'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: 'index',
            component: Index
        },
        ...
    ]
})

new Vue({
    router,
    render: h => h(App)
}).$mount('app')
```

上面的代码是 `vue-router` 的引用方式， 里面有几点是值得深入思考的。
1. 使用 `Vue.use() `方式注入 `VueRouter`。 那么` VueRouter` 可能是一个对象或者构造方法， 并且它包含了一个 `install` 方法。
2. 使用 `new` 生成了 `router` 实例对象。 可以确定 `VueRouter` 是一个构造方法， 既然是构造方法是不是在构造器(`constructor`)中执行了某些逻辑。
3. 在 Vue 实例中声明了一个 router 属性并赋值。 阅读过 `Vue` 源码后可以得知传入 `Vue` 构造器中的参数最终都会被赋值给实例的 `$options` 上面， 这样在该实例上可以通过 `this.$options.router` 获取到 `router` 实例。

可以看到 `vue-router` 的引用虽然只有3步，但是内部包含了很多可能进行的步骤， 这里先不展开，在后面需要用到这些内容时再详细讲明。

## 使用 `vue-router` 提供的组件

```vue
// App.vue
<template>
    <div>
        <router-link to="/index">进入主页</router-link>
        <router-link to="/demo">进入测试页</router-link>
        <router-view />
    </div>
</template>
```
> 我们知道在 `Vue` 中使用自定义组件需要全局或者单独注册， 但是 `router-link` 和 `router-view` 这两个组件并没有看到在哪里注册，这就肯定了在上面引用 `vue-router` 的过程中， `install` 方法 或者 `constructor` 中已经帮助我们注册了这两个组件。

`vue-router` 的使用就是这样，包含了 1. Vue 的注入、2. Vue 实例上挂载、3. 使用 `router-link` `router-view` 实现路由切换。在这篇文章中我们先忽略1、2两步， 只使用 router-link、 router-view 实现简单版本的基于 hash 模式的路由切换。

## 新建 view-link 和 router-view 组件实现路由跳转

在进入整体前来说明一下下面的实现将会用到的几个知识点。(觉得知识点真实一个强大的东西， 任何技术实现都是无数个知识点实现的堆砌诶)
1. 前端路由的 `hash` 模式。 页面 url 发生变化保证页面不刷新的一种实现。 
    * `window.location.hash` 获取当前 `url` 的 `hash` 部分。 例如:
    ```
    url = 'https://cn.vuejs.org/v2/api/#vm-forceUpdate/3?&a=3'   
    window.location.hash = '#vm-forceUpdate/3?&a=3'
    ```
    * `window.addEventListener('hashchange', () => {})` 用于监听 `hash` 变化事件。
2. [函数式组件](https://cn.vuejs.org/v2/guide/render-function.html)。一种不涉及生命周期、响应式数据、实例(this上下文)的 Vue 组件实现方式(不要以为没有了这些函数式组件限制太多，实际上函数式组件真的很强大)。我们将要实现的 router-view 组件就是基于函数式组件编写的。 

3. 有关 router-view router-link 的作用。 router-link 同 `<a>` 标签作用一样， 使用 to 属性代替 `<a>` 标签的 href 属性， 显现 url 变化。 router-view 则像是一个页面容器，用来存放或者替换当前 url 指向的页面或者组件。
4. const obj =  Vue.observable(object)，让 object 对象可响应。Vue 内部会用它来处理 data 函数返回的对象。返回的对象可以直接用于渲染函数和计算属性内，**并且会在发生改变时触发相应的更新**。

### 实现 router-link 组件
router-link 是一个类似于 `<a>` 标签的实现， 在这个版本中我们先把它就写为 `<a>` 标签。 另外 router-link 组件的编写我们可以选择使用以 .vue 结尾的但文件形式或者 函数渲染形式， 这里我们使用函数渲染的形式编写组件。
```javascript
// link.js
export default {
    name: 'router-link',
    props: ['to'],
    render(h) {
        return h('a', {
            attrs: {
                href: this.props.to
            }
        }, this.$slots.default)
    }
}
```
render 函数返回了一个 `<a>` 标签， 并且他的 href 属性为 传递给该组件的 to 的值。

### 实现 router-view 组件。
这里我们使用 `functional: true` 将组件声明为函数式组件，并且使用 `window.addEventListener('hashchange', cb)` 来监听 hash 的变化，并根据 hash 的值来决定该组件的渲染内容。
```javascript
// view.js
let current = {
    content: 'default'
}
export default {
    name: 'router-view',
    functional: true,
    render(h, content) {
        window.addEventListener('hashchange', () => {
            current.content = window.location.hash
        })
        return h('div', current.content)
    }
}
```
> 上面的代码思路是对的， 但是却不会产生我们想要的结果，这个等会再讲。

### 验证 router-link router-view 组件
下面我们就需要编写真实的代码来验证这两个组件的效果了。
1. 在 `main.js` 中全局注册组件。
```javascript
...
import RouterLink from './link'
import RouterView from './view'

Vue.component(RouterLink.name, RouterLink)
Vue.component(RouterView.name, RouterView)
...
```
2. 在 App.js 中写入这两个组件。 
```vue
<template>
<router-link to="#/index">首页</router-link>
<router-link to="#/demo">测试</router-link>
<hr />
<router-view />
</template>
```
> 因为是实现 hash 模式下的路由切换， 这里 router-link 组建的 to 属性需要加上 # 

### router-view 中实现渲染内容的数据响应
写完上面的代码， 当点击 `首页` `测试` 这两个链接时，router-view 的内容并没有想我们想象的那样发生了变化， 这是因为当 render 函数执行后，渲染内容已经在页面中渲染过了， 当渲染的值发生变化时，页面上面的显示并不会发生改变。
 这里我们可以使用 Vue.observable()方法来把 current 编程一个响应式的对象，也就是实现当 render 函数即使已经执行了渲染， 但是把 current 编程响应式的之后， current 中的属性发生了变化， 页面中依旧会发生改变。

 ```javascript
 // 更改后的 router-view.js
 import Vue from 'vue'
 
 // current 响应式化， 给 content 属性赋默认值 并监听 content 的变化 
 const current = Vue.observable({content: 'default'})

 export default {
     name: 'router-view',
     functional: true,
     render(_) {
          window.addEventListener('hashchange', () => {
            current.content = window.location.hash
        })
         return _('div', current.content)
     }
 }
 ```

 这样一个简单的路由切换就实现了。




