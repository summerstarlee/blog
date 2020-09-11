# with 用法

## with 的基本使用
with 由于可以改变作用域，可以很方便的为逐个的对象属性访问提供命名空间的速写方式.
```js
const obj = {
  a: 1,
  b: 2,
  c: 3
}

with (obj) {
  console.log(a)  // 1 相当于 obj.a
  console.log(b)  // 2 相当于 obj.b
  console.log(c) // 3 相当于 obj.c
}
```

上述代码中，使用 `with` 制定了内容中父节点的调用对象，从而不必重复引用对象本身。

## with 的使用弊端

### 导致数据泄露

```js
const obj = {
  a: 1
}

with (obj) {
  a = 2
  b = 3
}

console.log(obj.a)  // 2
console.log(obj.b) // undefined
console.log(b) // 3
```

代码中,
1.  `with` 内部改变了 `obj.a` 的值,  由于 `a` 在 `obj` 中定义了,这句是生效的。
2. 当执行 `b = 3` 时, 由于 `obj` 中并没有声明 `b` 属性，将会向上面的作用域(全局)找 `b` 的定义， 由于未定义, `with` 会自动创建一个全局变量(非严格模式下)并赋值为 3

> 严格模式下， with 被完全禁止, 非安全的使用 eval() 也是被禁止的。

### 导致性能下降
js 引擎在代码的编译阶段会预先确定所有变量所在的作用域，这样在代码的执行阶段将会提升代码的运行速度。

但是由于 `with` 语句在执行时会改变变量的作用域， 所以编译阶段将会跳过 with 语句的变量优化， 降低程序的性能。

```js
const obj = {
  a: 1
}

function fn() {
  const start = new Date().getTime()
  for(let i = 0; i < 100000; i ++) {
    obj.a
  }
  const end = new Date().getTime()

  console.log(end - start)
}

function fnWith() {
  console.time('start')
  with(obj) {
    for(let i = 0; i < 100000; i ++) {
      a
    }
  }
  const end = new Date().getTime()

  console.timeEnd('end')
}

fn() // 2
fnWith()  // 11
```

可以看到当使用 with 语法后， 代码的执行速度会降低。
