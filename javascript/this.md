# this 执行问题
## 默认绑定

1. 非严格模式下, 全局默认指向 window/module
2. 严格模式下, 全局指向 undefined 

3. let, const, class 声明的全局变量， 不属于顶层对象的属性。
```js
let a = 1
console.log(this.a)  // undefined
```

## 隐式绑定
非箭头函数情况下，this 永远指向最后调用他的那个对象
1. 参数为函数时， 函数中的 this 隐式丢失。 类似于函数赋值给了一个变量，然后作为参数传递
2. 将函数赋值给变量时， this 指向全局
3. 逗号操作符改变 this 指向

## 显示绑定
call / apply / bind 显示的绑定函数中this的指向
### call、apply & bind 的区别
1. call、apply 绑定 this 后会立即执行函数。
2. bind 绑定 this 后返回一个新的函数，并不会执行。

### call & apply 的区别
call 和 apply 的的第一个参数都是需要和 this 绑定的对象。不同的是后面的参数.
1. call 支持多个参数， 除去第一个参数外，其他参数都作为函数的参数传递。
2. apply 只有两个参数， 第一个参数为 this 指向的对象， 第二个参数是函数需要接受的参数组成的数组。

除了 call apply bind 显示绑定this 外， forEach, map, filter 的第二个参数也可以用来显示的绑定第一个参数中的 this 指向。

```js
var name = 'window'  // 这里不能使用 let const 声明， 那样不会挂载到 window 上面
const arr = [1,2,3]
const obj = {
  name: 'obj'
}

arr.forEach(function(){
  console.log(this.name)
})
// window
// window
// window


arr.forEach(function(){
  console.log(this)
}, obj)

// obj
// obj
// obj

```


## new 绑定
new 关键词的过程：
1. 创建一个新的空对象，作为将要返回的对象实例。
2. 将这个空对象的原型指向构造函数的 prototype 属性。 `person.__proto__ = Person.prototype`
3. 将这个空对象赋值给函数内部的 this 属性。
4. 开始执行构造函数。

默认构造函数会返回空对象(即 this), 构造函数中所有对 this 的操作都会发生在这个空对象上。但是当我们手动的将构造函数返回另外一个对象， new  关键词将会返回这个对象，并改写 this 的指向。

```js
function Person (name) {
  this.name = name
  return {
    name: 'aaa'
  }
}
const person = new Person('bbb')
console.log(person.name)
// aaa
```
> 上述代码中因为在构造函数中手动改写了return的对象，那么 new 返回的也将是这个对象。

**上如构造函数返回的是一个基本类型的数据， 构造器将会忽略，返回一个构造后的 this 对象**

```js
function Person (name) {
  this.name = name
  return 'aaa'
}
const person = new Person('bbb')
console.log(person.name)
// bbb
```


## 箭头函数
**1. 箭头函数的 this 由外层作用域确定， 并且指向定义时候的 this， 而非执行时**

**2. 作用域分为全局作用域和函数作用域(局部)两种**

**3. 箭头函数虽然无法直接通过显示的方式改变 this 指向， 但是可以通过显示的外层作用域的 this 改变函数的 this 指向**

```js
var name = 'window'
var obj1 = {
  name: 'obj1',
  foo1: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  },
  foo2: () => {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var obj2 = {
  name: 'obj2'
}
obj1.foo1.call(obj2)() // 'obj2' 'obj2' 改变了作用域的 this
obj1.foo1().call(obj2) // 'obj1' 'obj1' 直接改变 箭头函数 this 是没有效果的
obj1.foo2.call(obj2)() // 'window' 'window' 直接改变 箭头函数 this 是没有效果
obj1.foo2().call(obj2) // 'window' 'obj2' call(obj2)改变的是非箭头用函数的 this 是可以的


```

# 总结
this 绑定问题 包含四大模块
## 默认绑定
  1. 非严格模式下， 全局指向 window, 严格模式下, 全局指向 undefined
  2. const let class 声明不会绑定到全局对象上


## 隐式绑定
非箭头函数情况下，this 永远指向最后调用他的那个对象。
隐式丢失的情况
  1. 另外一个变量接收函数， 隐式丢失
  2. 将函数作为参数， 隐式丢失

## 显示绑定
  1. call apply bind 第一个参数显式绑定
  2. forEach map filter 第二个参数显式绑定第一个函数参数中的 this 

## new 绑定
  1. 构造函数中的 this 默认指向实例对象
  2. 构造器中返回一个新对象改变 this 指向

## 箭头函数绑定
  1. 执行外层作用域
  2. 在定义时确定而执行时
  3. 不能通过显式的方式直接改变 函数的 this 指向， 可以通过改变外层作用域的 this 指向改变