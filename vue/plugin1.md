# 插件开发 1
(来自官网 [vue 插件开发](https://cn.vuejs.org/v2/guide/plugins.html))VUE 大部分的插件都是在为 `vue` 添加全局的功能，这些添加全局的方法无外乎下面的几种方式:
1. 添加全局方法或者属性：
```js
Vue.uiname = 'star-ui-vue'

// 在项目中，可以通过 Vue.uiname 拿到 uiname 的值
```
2. 添加全局资源: 指令/过滤器/过渡
3. 通过全局 `mixin` 方法添加一些组件选项
4. 添加 `vue` 实例方法。通过把他们添加到 `vue.prototype` 实现
我们在使用 `script` 引入 `vue` 的时候通常先 `new` 一个 `vue` 的实例，这是因为  `vue` 本身是一个对象，他为我们提供了像 `$set` 这样的全局方法，所以在制作 `vue` 插件的时候，我们可以仿照这种方式，给 `vue` 的 `prototype` 添加全局的属性或者方法。
5. 通过提供上述的一个或者多个插件的实现方法，实现一个库。

## 插件封装
`vue` 的插件应该有一个公开的 `install` 方法。 这个方法的第一个参数是 `Vue` 构造器， 第二个参数是一个可选的对象。

```js
const MyPlugin = {
    install (Vue,options) {
        // 1. 添加全局属性或方法
        Vue.pluginName = 'MyPlugin'
        Vue.pluginMethods = () => {
            console.log('self methods')
        }

        //2. 添加全局资源
        Vue.directive('my-directive',{
            bind(el,binding,vnode){...}
        })
        Vue.filter('my-filter',(val) => '$' + val)

        // 3. 全局 mixin 注入
        Vue.mixin({
            created(){
                console.log('mixin')
            },
            data(){
                return {
                    initData: 'init data'
                }
            }
        })

        // 4. 添加实例方法或者属性
        Vue.prototype.$myMethod = (option) => {
            console.log('my method')
        }
    }
}
```

## 使用插件

通过全局方法 `Vue.use()` 使用插件

```js
// main.js
import Vue from 'Vue'
import MyPlugin from 'myPlugin'

Vue.use(MyPlugin)

// 1. 查看全局 属性 或者调用全局的方法
console.log(Vue.pluginName)   // 'MyPlugin'
Vue.pluginMethods()    // 'self methods'

...

```

```js
// App.vue

// 2. 调用全局资源
<button my-directive></button>	

// 3. 全局 mixin 注入时  定义的 data 或者方法 将会 合并 在所有的 vue 组件中 

// 4. 添加实例方法或者属性

methods:{
    test(){
        this.$myMethod()   // 'my method'
    }
}


```

## 多次注册
`Vue.use` 会自动阻止多次注册相同插件，届时只会注册一次该插件。

实现方式
```js

export function initUse(Vue:GlobalAPI){
    Vue.use function (plugin: Function | object) {
        // 先拿到当前已经注册的所有组件   不存在的话就创建
        const installedPlugins = (this._initlledPlugins || this.installedPlugins = [])

        // 判断该组件是否创建，如果创建就直接返回
        if(installedPlugins.indexOf(plugin) > -1) {
            return this
        }
        ...
    }
}

```

