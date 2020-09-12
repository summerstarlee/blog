# vue 响应式原理
[[toc]]
## MVVM 模式 (view viewModel model)
vue 是一个基于 MVVM 模式实现的渐进式框架。
![mvvm](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/39df462cc55b49cc8531cbfad05702b9~tplv-k3u1fbpfcp-zoom-1.image)


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

[查看以上完整代码](https://github.com/summerstarlee/vue_study/blob/reactive_1/reactive_1.js)



## 数据响应原理

实现了数据绑定后， 就可以在数据发生变化的时候更新 dom 

### 更新整个 dom 

我们可以声明一个 class 类， 其构造器接收一个对象，在构造器中实现对这个对象属性进行监听的行为。

```js
function observe (obj) {
  // ...
}

class Vue {
  constructor(options) {
    this.$data = options.data

    observe(this.data)
  }
}
```

```html
<div id="app"></div>

<script>
  const vm = new Vue({
    el: '#app',
    data: {
      msg: new Date() 
    }
  })

  setInterval(() => {
    vm.$data.msg = new Date()
  }, 1000)

</script>
```

这样每秒钟都触发 defineReactive 函数中 `console.log('set: ', newVal)`



当实现了对数据的绑定后，就可以在数据发生变化时更新页面了。
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
        // 这里添加了操作 dom 的操作
+       update(newVal)
      }
    }
  })
}

function update(newVal) {
  const app = document.getElementById('app')
  app.innerHTML = newVal
}
```

### Compile 编译器和初始化渲染

上面的代码有两个很明显的问题： 
1. 只有数据发生改变时，才进行 `update` 操作，没有进行初始渲染。  
2. 直接替换了整个根节点，应该只针对绑定了数据的 dom 进行更新。 

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

现根据上面三种绑定数据的方式，在 Compile 中实现数据的替换。

Compile 实现步骤

![Compile 实现步骤](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15b3a6e1a17247689b1e0970d7e5a45e~tplv-k3u1fbpfcp-zoom-1.image)



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
这里需要注意的是： 以插值形式绑定的数据，当前所在的节点类型只可能为文本节点。

将 compile 在 Vue 实例化的时候执行一次，这样就可以完成初始化渲染绑定数据的 DOM 了。

```js
class Vue {
  constructor(options) {
    this.$data = options.data
    this.$el = options.el

    observe(this.$data)

    new Compile(this.$el, this.$data)
  }
}
```

```html
<div id="app">
  {{time}}
</div>

<script>
  const vm = new Vue({
    el: '#app',
    data: {
      time: new Date() 
    }
  })

</script>
```

## 数据变化时更新 DOM 

在看数据变化更新 DOM 前，先看一下什么是依赖和依赖收集

### 依赖 & 依赖收集

视图中会用到 `data` 中某个 `key`, 这称为 **依赖**, 为了维护所有的这些依赖， 需要有一个 `Watcher` 收集这些依赖并维护， 这个过程叫做 **依赖收集**。依赖收集后, 每一个 `watcher` 实例对应一次 `key` 的使用, 当 `key` 对应的值发生变化时, 更新 `dom`. 除此外, 由于同一个 `key` 可能在视图中出现多次, 需要抽象出来一个 `Dep` 来管理每一个 `key`, 当 `key` 发生变化时, 通知所有使用到这个 `key` 的 `Watcher` 更新视图。

```html
<div>{{foo}}</div>
<div>{{bar}}</div>
<div>{{bar}}</div>

<script>
  new Vue({
    data: {
      foo: 'foo',
      bar: 'bar'
    }
  })
</script>  
```
如代码所示, 共有 3 个 `Watcher` (3 次使用到了 data 中的属性), 2 个 `Dep`(视图中使用到了 2 个 data 中的属性)

![视图&Watcher&Dep 之间的关系](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae0f61399a554f27836958354f351a4c~tplv-k3u1fbpfcp-zoom-1.image)

## Vue 的视图响应

Vue 的视图响应基于依赖收集而实现。

实现思路：

1. `definedReactive` 时为每个属性创建一个 `Dep`
2. 初始化视图读取数据时创建一个 `Watcher`
3. 由于初始化渲染触发 `getter` 方法, 便将 `Watcher` 添加到 `Dep` 中
4. 当数据发生改变触发 `setter` 方法时, 通知对应的 `Dep` 更新它管理的所有 `Watcher` 


### 1. `definedReactive` 时为每个属性创建一个 `Dep`
按照上面 Vue 视图响应步骤, 当渲染时触发监听数据的 `getter` 方法时, 创建一个 `Dep` 的实例用来使用该 `key` 的所有 `Watcher`。

```js
class Dep {
  constructor() {
    this.watchers = []
  }

  add(watcher) {
    this.wathcers.push(watcher)
  }

  notify(){
    this.watchers.forEach(watcher => {
      watcher.update()
    })
  }
}

function defineReactive(obj, key, val) {
  observer(val)
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get() {
      // TODO: dep 添加 watcher 实例
    },

    set(newVal) {
      // ...
    },
  })
}
```

1. 在 Dep 的构造函数中，声明了一个 `wachters` 数组用来存放所有使用同一个 key 的 `watcher`
2. Dep 中的 `add` 方法用来添加 `watcher`
3. Dep 中的 `notify` 方法在当数据发生变化的时候, 执行所有管辖的 `watcher` 实例执行 `update` 方法, 即更新视图。
4. `defineReactive` 中为每个需要监听的 `key` 生成一个 `Dep` 实例。
5. `getter` 时,调用 `dep.add` 方法, 这一步下面完成。

这样 `compile` `observer` `Dep` 之间就发生了联系。

![`compile` `observer` `Watcher`](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab53f0aa5dc1406fa6266692fe2b97dc~tplv-k3u1fbpfcp-zoom-1.image)


### 2. 初始化视图读取数据时创建一个 `Watcher`

先创建一个 `Watcher`

`Watcher` 负责依赖收集的工作，就需要知道从哪个实例收集, 收集 key 是什么, 数据更新时如何更新页面。所以构造函数里面就需要接受这些参数。 除此，他还应该有个 `update` 方法专门处理页面更新的操作。 
```js
class Watcher {
  constructor(vm, key, fn){
    this.vm = vm
    this.key = key
    this.fn = fn
  }

  update() {}
}
```

`Watcher` 创建后, 就需要在初始化 `compile` 过程, 每一次使用数据中的 `key` 值的时候创建一个 `Watcher` 实例。这里回到 `Compile` 类中。
实现步骤：
1. 创建一个 _update() 方法，用于生成 Watcher 实例

```js
class Compile {
  _update() {
    // todo: 每一次使用到 key 时, 创建一个 watcher 实例
    new Watcher()
  }
}
```

2. 由于数据绑定发生在 `compile` 方法中, 那就需要在 `compile` 使用到数据时调用 `_update` 方法。
```js
class Compile {
    constructor(el, vm) {
      this._el = document.querySelector(el)
      this._vm = vm

      if (this._el) {
        this.compile(this._el)
      }
    }

    compile(el) {
    const children = el.childNodes

    Array.from(children).forEach((child) => {
      if (child.nodeType === 1) {
        if (child.hasChildNodes()) {
          this.compile(child)
        } else {
          let nodeAttrs = child.attributes
          if (
            Array.from(nodeAttrs).findIndex((attr) => attr.name === "v-html") >
            -1
          ) {
            // 调用 update 的时机
            this.compileHtml(child, child.getAttribute("v-html"))
          }
        }
      }
      else if (child.nodeType === 3 && /\{\{(.*)\}\}/.test(child.textContent)) {
        // 调用 update 的时机
        this.compileText(child, RegExp.$1)
        
      }
    })
  }

    // 编译 v-html
  compileHtml(node, key) {
    this.update(node, key, "html")
  }

  // 编译 {{xx}}
  compileText(node, key) {
    this.update(node, key, "text")
  }

  htmlUpdate(node, val) {
    node.innerHTML = val
  }

  textUpdate(node, val) {
    node.textContent = val
  }

  update(node, key, method) {
    const fn =  this[method + "Update"]
    // 更新数据
    fn && fn(node, this._vm[key])

    // 生成 watcher 实例
    new Watcher(this._vm, key, val => {
      fn && fn(node, val)
    })
  }
}
```
上面的代码中: 
1. 将有关插值语句的更新和 指令语句(`v-html`)的更新分别提取成一个单独的函数。
2. `_update` 方法统一负责更新函数的调用并生成 `Watcher` 实例
3. `_update` 方法生生成 `Watcher` 实例的时候除了传递了 `vm` `key` 外, 还传递了一个更新函数, 这使得 `Watcher` 功能更加单一, 他只需要在数据更新的时候调用一次这个更新函数就可以, 至于更新怎么实现,compile 的时候就已经确定了。

更新 Watcher 
```js
class Watcher {
  constructor(vm, key, fn){
    this.vm = vm
    this.key = key
    this.fn = fn
  }

  update() {
    this.fn.call(this.vm, this.vm[this.key])
  }
}
```

先看一下经过上面的步骤后，代码实现了什么。

![compile & watcher 的关系](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d84572ab18646aba2758429e8d71c4f~tplv-k3u1fbpfcp-zoom-1.image)

在生成 `Vue` 实例的时候, 进行 `compile`, 在 `compile` 过程中将使用到的依赖收集到 `Watcher`中,并告诉 `Watcher` 如何更新视图。




### 3. 初始化渲染触发 `getter` 方法, 将 `Watcher` 添加到 `Dep` 中
在Vue 的视图响应第一步中, Compile 识别出依赖的时候触发了 `defineReactive` 的 `setter` 方法并生成了 `Watcher` 的实例。 我们需要在这个过程之后将 `watcher` 和 `dep` 进行关联。步骤如下:
1. 生成 `Watcher` 实例的时候将 `Dep.target` 指向该 wachter 实例。
2. 再次触发一次 `defineReactive` 中对象 key 的 `getter` 方法。
3. 在 `getter` 方法中调用 `dep.add` 方法并传入 `Dep.target`。(由于第一步将 `Dep.target` 手动指向了该 `Watcher` 的实例, `dep.add` 添加的将是 `watcher` 实例)。
4. 在执行完 `getter` 方法后，再在 `Watcher` 中将 `Dep.target` 设置为 `null`

```js
class Watcher {
  constructor(vm, key, fn) {
    this.vm = vm
    this.key = key
    this.fn = fn
    Dep.target = this
    // 再次触发一下 get 方法, 这时候的逻辑会进入 getter 方法中
    this.vm[key] 
    // 在执行完 getter 方法后，再将 Dep.target 设置为 null
    Dep.target = null
  }
}


function defineReactive(obj, key, val) {
  observer(val)
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get() {
      // 如果发现了 Dep.target 就将 Dep.target 加入到 Dep 中
      Dep.target && dep.add(Dep.target)
      return val
    },

    set(newVal) {
      if (newVal !== val) {
        observer(newVal)
        val = newVal
      }
    },
  })
}
```

这样 `compile` `observer` `Watcher` `Dep` 之间就变成了下图关系。

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/442ca62e9cf24ad585558b5e00583fcc~tplv-k3u1fbpfcp-zoom-1.image)

### 4. 当数据发生改变触发 `setter` 方法时, 通知对应的 `Dep` 更新它管理的所有 `Watcher`
这一步比较简单，只需要在 `setter` 方法中调用 `dep.notify()` 方法, 该 `dep` 下的所有 `watcher` 就会调用自身的 `update` 方法，从而更新视图。
```js
function defineReactive(obj, key, val) {
  observer(val)
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get() {
      // 如果发现了 Dep.target 就将 Dep.target 加入到 Dep 中
      Dep.target && dep.add(Dep.target)
      return val
    },

    set(newVal) {
      if (newVal !== val) {
        observer(newVal)
        val = newVal
        dep.notify()
      }
    },
  })
}
```

最后 `compile` `observer` `Watcher` `Dep` 之间就形成闭环了。
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f14a2c7de7474e588d66b8de7fae6de1~tplv-k3u1fbpfcp-zoom-1.image)

### 总结
1. new Vue 后, 会分别初始化 Observer实例 （数据挟持）和 Compile实例 （编译子节点并初始化渲染）。
2. 在 Compile 实例化时，不仅完成了初始化渲染，还会触发 getter 事件和实例化 watcher。
  * getter 触发时，生成该 key 的 Dep 实例。
  * watcher 实例化时（依赖收集），会再次调用 getter 方法将 watcher 实例添加到 dep 的 watchers 中。除此外, watcher 实例化还确定了该依赖的 dom 更新策略, 并存放在自身的 update 方法中。
3. 当数据发生变化时, 触发 setter 方法, 这时会触发该 key 的 dep 实例中的 notify 方法, notify 方法通过遍历所有已经收集来的 watcher 并调用 watcher 的 update 方法达到更新页面的效果.


[查看完整代码](https://github.com/summerstarlee/vue_study/tree/reactive)
