function defineReactive(obj, key, val) {
  observer(val)
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get() {
      console.log("get: ", key)
      Dep.target && dep.add(Dep.target)
      return val
    },

    set(newVal) {
      if (newVal !== val) {
        console.log(`set: ${key}`, newVal)
        observer(newVal)
        val = newVal
        dep.notify()
      }
    },
  })
}

const originProto = Array.prototype
const arrProto = Object.create(originProto)
const arrMethods = [
  "push",
  "pop",
  "shift",
  "unshift",
  "sort",
  "reverse",
  "splice",
]

// 修改备份
arrMethods.forEach((method) => {
  arrProto[method] = function() {
    // 添加响应操作
    console.log(`数组执行 ${method} 操作`)

    // 执行原操作
    return originProto[method].apply(this, arguments)
  }
})

function observer(obj) {
  if (typeof obj !== "object" || typeof obj === null) {
    return
  }
  if (Array.isArray(obj)) {
    // 数组操作
    obj.__proto__ = arrProto
  } else {
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key])
    })
  }
}

function set(obj, key, val) {
  defineReactive(obj, key, val)
}

class Vue {
  constructor(options) {
    this.$data = options.data
    this.$el = options.el

    observer(this.$data)
    new Compile(this.$el, this.$data)
  }
}

function update(newVal) {
  const app = document.getElementById("app")
  app.innerHTML = newVal
}

class Compile {
  //  el 参数, 用来指定后面的渲染工作在哪里进行
  //  vm 参数, 当匹配到 DOM 中绑定的数据 key 后, 根据 vm[key] 渲染 DOM
  constructor(el, vm) {
    this._el = document.querySelector(el)
    this._vm = vm
    console.log(el)

    if (this._el) {
      this.compile(this._el)
    }
  }

  compile(el) {
    const children = el.childNodes

    Array.from(children).forEach((child) => {
      // 元素节点
      if (child.nodeType === 1) {
        console.log("编译元素节点")
        // 如果包含子节点需要先 迭代 子元素
        if (child.hasChildNodes()) {
          console.log("编译元素子节点", child)
          this.compile(child)
        } else {
          let nodeAttrs = child.attributes
          // 查找 v-html 绑定的情况
          if (
            Array.from(nodeAttrs).findIndex((attr) => attr.name === "v-html") >
            -1
          ) {
            console.log("编译 v-html 元素")
            this.compileHtml(child, child.getAttribute("v-html"))
          }
        }
      }
      // 文本节点 (这里会存在由于换行导致的空节点) 使用正则匹配到 含有 {{xxx}} 绑定的节点
      else if (child.nodeType === 3 && /\{\{(.*)\}\}/.test(child.textContent)) {
        console.log("编译文本节点", RegExp.$1, this._vm)
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

    // 添加 watcher
    new Watcher(this._vm, key, val => {
      fn && fn(node, val)
    })
  }
}

// 负责更新视图
class Watcher {
  // vm 更新的对象
  // prop 更新的属性
  // 更新 DOM 操作的函数
  constructor(vm, prop, fn) {
    Dep.target = this
    this.vm = vm
    this.prop = prop
    this.vm[this.prop]
    Dep.target = null
    this.fn = fn
    console.log('watcher')
  }

  // 负责执行更新 dom， 由 Dep 调用
  update() {
    this.fn.call(this.vm, this.vm[this.prop])
  }
}

class Dep {
  constructor() {
    this.watchers = []
  }

  // 收集 watcher 依赖
  add(watcher) {
    console.log('收集 watcher 依赖')
    this.watchers.push(watcher)
  }

  // 通知管辖的 watcher 更新 DOM
  notify() {
    console.log('通知管辖的 watcher 更新 DOM', this.watchers)
    this.watchers.forEach(w => w.update())
  }
}
