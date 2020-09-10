function defineReactive(obj, key, val) {
  observe(val)
  Object.defineProperty(obj, key, {
    get() {
      console.log('get: ', val);
      return val
    },

    set(newVal){
      if(newVal !== val) {
        console.log('set: ', newVal);
        val = newVal
      }
    }
  })
}

function observe(obj) {
  if(typeof obj !== 'object' || typeof obj === null) {
    return 
  }
  if(Array.isArray(obj)) {
    // 数组操作
  }else {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
  
}


class Vue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    this.$el = options.el

    observe(this.$data)
    // this.proxy()

    new Compile(this.$el, this.$data)
  }

  // proxy 映射 data 上面的数据到 this 上面
  proxy (){
    Object.keys(this.$data).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return this.$data[key]
        },
        set(newVal) {
          this.$data[key] = newVal
        }
      })
    })
  }
}



class Compile {
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
        if(child.hasChildNodes()) {
          console.log('编译子节点', child)
          this.compile(child)
        }else {
          let nodeAttrs = child.attributes
          if(Array.from(nodeAttrs).findIndex(attr => attr.name === 'v-html') > -1) {
            console.log('编译 v-html 元素' )
            child.textContent = this._vm[child.getAttribute('v-html')]
          }
          
        }
        
      }

      // 文本节点 这里会存在由于换行导致的空节点
      if(child.nodeType === 3 && /\{\{(.*)\}\}/.test(child.textContent)) {
        console.log('编译文本节点', RegExp.$1, this._vm)
        child.textContent = this._vm[RegExp.$1]
      }
      
    })
  }
}




