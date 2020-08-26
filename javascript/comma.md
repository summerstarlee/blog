# 逗号操作符

使用形式： `(0, fn)()`
解决问题： 函数内部的 this 指向。

```js
var name = 'window'
const obj = {
  name: 'obj',
  foo: function() {
    console.log(this)
  }
}

const foo1 = obj.foo
obj.foo()  // obj
foo1()  // window  隐式绑定导致
(0, obj.foo)()  // window
```

使用 `逗号操作符` 改变了 `obj.foo` 中的 this 指向。这是因为他的运行规则： **逗号操作符对他的每个操作求值（从左向右），并返回最后一个操作数的值**

```js
console.log((1,2))   // 2   返回最后一个操作数的值

console.log((a =b =3, c = 4))  // 4 返回最后一个操作数的值
```

所以当使用逗号操作符执行函数时，其实相当于：

```js
0;
var temp = obj.foo
temp()
```

(0, obj.foo)返回了_foo,然后_foo在全局环境里面调用，所以this指向window

