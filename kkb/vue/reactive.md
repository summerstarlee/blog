# vue 响应式原理

## MVVM 模式 (view viewModel model)
vue 是一个基于 MVVM 模式实现的渐进式框架。
![mvvm](/mvvm.jpg)


view 是视图层（DOM）, model 是数据层（data）。 viewModel 充当了一个中间角色，它能够根据绑定的 model 数据渲染 view 视图, 同时也能监听视图层的事件来改变 model 的数据从而更新视图变化。


## 数据绑定原理
实现 viewModel 能够随时接受到 model 的变化, vue(v2 版本)的核心 api 是 `Object.defineProperty`。 这个方法他能定义对象属性的 `get` `set` 方法从而达到对对象数据的监听。

```js

function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      console.log('get: ', key);
      return val
    },

    set(newVal){
      if(newVal !== val) {
        console.log(`set: ${key}`, newVal);
        val = newVal
      }
    }
  })
}

const obj = {
  a: 1
}

defineReactive(obj, 'a', 1)

obj.a =2
obj.a

// 'set a 2'
// 'get a'
```

将上面的代码改造为函数，接收一个对象，并监听他所有属性的 `get`  `set` 方法

```js
function observer(obj) {
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}
```

### 数据嵌套监听
上述的 `definedReactive` 只能监听到对象属性为基本类型的情况， 如果某个属性又为一个对象，就监听不到数据了。
```js
  const obj = {
    a: {
      b: 'b'
    }
  }

  observer(obj)

  obj.a.b

  // get a  由于监听不到嵌套的对象 这里只能输出 a 而不会输出 b
```

改造的方式也很简单， 在 observer 方法中添加对非对象的逻辑判断，然后在 defineReactive 执行的时候，先执行一次 observer 方法，这样就可以迭代完成对象属性的监听了。

```js
function defineReactive(obj, key, val) {
  observer(val)
  Object.defineProperty(obj, key, {
    get() {
      console.log('get: ', key);
      return val
    },

    set(newVal){
      if(newVal !== val) {
        console.log(`set: ${key}`, newVal);
        val = newVal
      }
    }
  })
}

function observer(obj) {
  if(typeof obj !== 'object' || obj === null) {
    return 
  }else {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}

const obj = {
  a: {
    b: {
      c: 1
    }
  }
}

observer(obj)
obj.a.b

// 由于做了深度监听 会分别输出 a b 的 get 日志
// get:  a
// get:  b

```

### 改写对象的属性为对象

当设置对象的某一个属性为新的对象时， `observer` 也不会监听到这个新对象中属性的 `get` `set`

```js

const obj = {
  a: 1
}
observer(obj)

obj.a = {
  b: 1
}

obj.a.b

// 这时只能监听到 a 的获取而无法监听 b 的获取
// set a {b: 1}
// get: a
```
改造方法： 只需要在每次监听 `set` 的时候， `observer` 一下新的值就可以了
```js
function defineReactive(obj, key, val) {
  observer(val)
  Object.defineProperty(obj, key, {
    get() {
      console.log('get: ', key);
      return val
    },

    set(newVal){
      if(newVal !== val) {
        console.log(`set: ${key}`, newVal);
        observer(newVal)
        val = newVal
      }
    }
  })
}
```


### 给对象添加新的属性
当给对象添加一个新的属性时, 由于在调用 `observer` 的时候还没有该属性，所以也无法完成对新属性的监听

```js
const obj = {}
observer(obj)
obj.a = 1
obj.a

// 无任何输出
```

Vue 中解决这种问题的方法也比较简单——使用单独 set 函数, 将新增的属性执行一次 `defineReactive`

```js
function set(obj, key, val) {
  defineReactive(obj, key, val)
}

const obj = {}
observer(obj)

set(obj, 'a', 1)
obj.a 

// get: a

```


### 监听数组变化监听
实现数组监听需要以下步骤
1. 找到数组原型，并备份

2. 在备份的原型上覆盖那些能够改变数组的方法，添加监听动作

3. 将备份的原型赋值给数组实例上。

> 数组上面会引起数据变化的方法有 7 个:  `push` `shift` `unshift` `pop` `reverse` `split` `sort` 

```js
// 第一步 找到数组原型，并备份
const originProto = Array.prototype
const arrProto = Object.create(originProto)

// 第二步 在备份的原型上覆盖那些能够改变数组的方法，添加监听动作
const arrMethods = ['push', 'pop', 'shift', 'unshift', 'sort', 'reverse', 'splice']
arrMethods.forEach(method => {
  arrProto[method] = function(){
    // 添加监听
    console.log(`数组执行 ${method} 操作`)
    
    // 执行原操作  因为原操作会返回数据 这里需要 return
    return originProto[method].apply(this, arguments)
  }
})

// 第三步 将备份的原型赋值给数组实例上。
function observer(obj) {
  if(typeof obj !== 'object' || obj === null) {
    return 
  }
  if(Array.isArray(obj)) {
    // 原本 obj.__proto__ = Array.prototype  这里改写为了 arrProto
    obj.__proto__ = arrProto
  }else {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}


const obj = []
obj.push(1)

// 数组执行 push 操作
```

[查看以上完整代码](https://github.com/summerstarlee/vue_study/tree/reactive_1)



## Vue 数据监听和响应的原理

Vue 内部实现了上面讲到的 `defineReactive` `observer` `set` 等方法。 由于 `observer` 只能监听到数据变化操作， Vue 还需要实现在初始化阶段对绑定了数据的元素进行渲染、 监听到数据变化时更新 dom 。

![mvvm](/reactive_1.png)






我们可以声明一个 class 类， 其构造器接收一个对象，在构造器中实现对这个对象属性进行监听的行为。

```js
function observe (obj) {
  // ...
}

class Vue {
  constructor(options) {
    this.data = options.data

    observe(this.data)
  }
}
```

```html
<div id="app"></div>

<script>
  const vm = new Vue({
    data: {
      msg: new Date() 
    }
  })

  setInterval(() => {
    vm.data.msg = new Date()
  }, 1000)

</script>
```

这样每秒钟都触发 defineReactive 函数中 `console.log('set: ', newVal)`


## 数据响应

当实现了对数据的绑定后，就可以在数据发生变化时更新页面了。
```js
  function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      console.log('get: ', val);
      return val
    },

    set(newVal){
      if(newVal !== val) {
        console.log('set: ', newVal);
        val = newVal
+       update(newVal) // 更新页面操作
      }
    }
  })
}

function update(newVal) {
  const app = document.getElementById('app')
  app.innerHTML = newVal
}
```

上面的代码有两个很明显的问题： 1. 只有数据发生改变时，才进行 `update` 操作，没有进行初始渲染。  2. 直接替换了整个根节点，应该只针对绑定了数据的 dom 进行更新。 

为了解决这两个问题，需要单独声明一个 Compile 类在 Vue 实例生成时和实例数据发生改变时进行数据渲染。

为了解决第二个问题，先看一下在 vue 中绑定数据的常见形式：

1. 元素节点中插值
```
<div>{{msg}}</div>
```

2. 元素节点中使用 `v-html` 插值
```
<div v-html="{{msh}}"></div> 
```

3. 文本节点中插值
```
{{msg}}
```

现根据上面三种绑定数据的方式，在 Compile 中实现数据的替换

```js
class Compile {
    //  el 参数, 用来指定后面的渲染工作在哪里进行
    //  vm 参数, 当匹配到 DOM 中绑定的数据 key 后, 根据 vm[key] 渲染 DOM
  constructor(el, vm) {
    this._el = document.querySelector(el)
    this._vm = vm
    
    if(this._el) {
      this.compile(this._el)
    }
    
  }

  compile(el) {
    const children = el.childNodes
    console.log(children)

    Array.from(children).forEach(child => {
      // 元素节点
      if(child.nodeType === 1) {
        console.log('编译元素节点')
        // 如果包含子节点需要先 迭代 子元素
        if(child.hasChildNodes()) {
          console.log('编译元素子节点', child)
          this.compile(child)
        }else {
          let nodeAttrs = child.attributes
          // 查找 v-html 绑定的情况
          if(Array.from(nodeAttrs).findIndex(attr => attr.name === 'v-html') > -1) {
            console.log('编译 v-html 元素' )
            child.textContent = this._vm[child.getAttribute('v-html')]
          }
        }
      }
      // 文本节点 (这里会存在由于换行导致的空节点) 使用正则匹配到 含有 {{xxx}} 绑定的节点
      else if(child.nodeType === 3 && /\{\{(.*)\}\}/.test(child.textContent)) {
        console.log('编译文本节点', RegExp.$1, this._vm)
        child.textContent = this._vm[RegExp.$1]
      }
      
    })
  }
}
```

在 `Compile` 的构造函数中, `el` 用来标识后面的渲染更新在哪个 dom 元素下, `vm` 用来当匹配到了 dom 中绑定的数据 key 后, 根据 `vm[key]` 的方式将数据插入到 DOM 中。


`compile` 方法根据上面讲的三种绑定数据的方式，分别进行了插值的逻辑。
这里需要注意的是： 1. 以 `{{xxx}}` 形式绑定的数据，当前所在的节点类型只可能为文本节点。

将 compile 在 Vue 实例化的时候执行一次，这样就可以完成初始化渲染绑定数据的 DOM 了。

```js

class Vue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    this.$el = options.el

    observe(this.$data)

    new Compile(this.$el, this.$data)
  }
}
```












