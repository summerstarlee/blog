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

const originProto = Array.prototype
const arrProto = Object.create(originProto)
const arrMethods = ['push', 'pop', 'shift', 'unshift', 'sort', 'reverse', 'splice']

// 修改备份
arrMethods.forEach(method => {
  arrProto[method] = function(){
    // 添加响应操作
    console.log(`数组执行 ${method} 操作`)
    
    // 执行原操作
    return originProto[method].apply(this, arguments)
  }
})

function observer(obj) {
  if(typeof obj !== 'object' || typeof obj === null) {
    return 
  }
  if(Array.isArray(obj)) {
    // 数组操作
    obj.__proto__ = arrProto
  }else {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
  
}

function set(obj, key, val) {
  defineReactive(obj, key, val)
}


const obj = []
observer(obj)
obj.push(1)