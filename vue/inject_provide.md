# 编写一个含有验证功能的Vue表单组件 —— provide/inject 篇
在 `Vue` 中，当组件通信面临跨级和隔代时，借助 `Bus` 或者 `Vuex` 在编写业务代码时时一种很好的解决方案， 但是如果需要编写完全解耦与业务的代码时的基础组件时，`Bus` `Vuex` 需要使用第三方库， 并不是解决多层级组件通信的好的方案。 

`Vue` 内置了一组API ——— `provide` `inject`， 提供一种无依赖的多层级组件的通信方法。

## project / inject 是什么

`provide` `inject` 旨在实现组件元素和所有子孙元素之间的数据传递， 其中 `provide` 负责向所有子孙元素注入变量， `inject` 负责接收祖父级注入的变量。

例如下面的例子， 组件 `AComponent` 是 组件 `BVomponent` 的父组件。

```vue
// AComponent
<BComponent />

export default {
    name: 'AComponent',
    provide() {
        return {
            message: 'AComponent msg'
        }
    }
}


// BComponent
<div>{{message}}</div>

export default {
    inject: ['message']
}

```

在 `AComponent` 中 通过 `provide` 向下注入了一个对象， 对象中包含了一个 **message** 字段， 在 `BComponent` 中， 使用 `inject` 来接收上级传来的字段。并使用 `this.message` 访问这个字段。

## 使用注意事项

> `provide` 选项可以是一个对象或者是返回一个对象的函数， `inject`可以是一个字符串数组或者是一个含有表示来源(`from`)和默认值(`default`)的对象。`BComponent` 又可以写为下面的形式。
```vue
// BComponent
<div>{{message}}</div>

export default {
    inject: {
        message: {
            from: 'AComponent',
            default: 'default msg'
        }
    }
}

```

> `provide` 和 `inject` 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。

当 `AComponent` 组件中的 `message` 发生了变化后， `BComponent` 中的 `message` 并不会发生变化。

## `provide` / `inject` 的全局使用

既然 `provide` / `inject` 在组件层级传递的，那么在项目中可以把整个 `App.vue` 以 `provide` 的形式传递给子组件。 (**`App.vue` 在项目中总是充当入口文件的角色, 他扮演了项目中所有其他组件的祖元素**)

```vue
// App.vue
<div>
    <router-view></router-view>
</div>

export default {
    provide() {
        return {
            app: this
        }
    }, 
    data(){return {
        version: 'v1.0.0'
    }},
    methods: {
        getList() {}
    }
}
```

这样作为项目祖元素的 `App.vue` 把本身以属性 `app` 的方式注入到了所有的子组件中。在它的子组件中， 无论跨了多少级， 都可以通过 `this.app.xx` 获取 `APP.vue` 上面定义的 `data`、`methods` 等。

```vue  
<template>
  <div>
    {{ app.version }}
  </div>
</template>
<script>
  export default {
    inject: ['app'],
    created() {
        this.app.getList()
    }
  }
</script>
```

> `provide` 和 `inject` 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。 

向上面那样使用 `provide / inject` 来做全局数据的共享确实不是一个好的方法， 但从逻辑的方面讲不失为替代 `Vuex` 的一种方式。


## 基础组件中的使用
虽然官网中不推荐使用 `provide` 和 `inject`, 但他们在某些场景下却是解决问题的最好方案。 

`Form / Form-item` 组件中， `Form-item` 是 `Form` 的子组件， 他需要依赖定义在 `Form` 组件上的 `model` `rules` 这些属性来做自己组件内部的子组件的验证， 这就需要获取到 `Form` 组件， 使用 `provide / inject` 可以很好的避免 `$parent` 带来的  `Form` 和 `FormItem` 不确定跨多少级的问题。

```vue
// Form.vue
<form>
    <slot></slot>
<form>

export default {
    provide: {
        form: this
    }
}
```

```FormItem.vue

export default {
  props: ['prop'],
  inject: ['form'], 
    computed: {
    // 从 form 的 model 中获取当前组件的数据
    fieldValue() {
      return this.form.model[this.prop];
    }
  },
}
```

如同上面的代码， 在 `Form` 组件中注入了 `form` 字段为当前实例， 在 `FormItem` 中根据接收到的 `form` 上面接收到的 `model` 和本身组件接受到的 `prop` 从而得到当前组件的数据。 在 `Element` 和 `iView` `UI`框架中都是通过这种方式实现的获取 `Form` 上接受的属性的。






