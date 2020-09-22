# events 事件
Node 中提供的事件触发器， 在实例上通过 `on` 注册监听器， 通过 `emit` 触发监听器回调事件。

```js
const Emitter = require('events')

const myEmitter = new Emitter()

myEmitter.on('demo', function(...args) {
  console.log('args', args)
})

myEmitter.emit('demo', 'a', 'b')

// ['a', 'b']
```

## 回调事件的异步与同步

监听器中的回调事件默认是同步执行的。
```js
const Emitter = require('events')

const myEmitter = new Emitter()

myEmitter.on('demo', function(...args) {
  console.log('args', args)
})

myEmitter.emit('demo', 'a', 'b')

console.log('11111')

// args [ 'a', 'b' ]
// 11111
```

如果需要监听器中的回调事件异步执行可以使用 `nodejs` 提供的 `setImmediate` 或者 `process.nextTick()`

```js
const Emitter = require('events')

const myEmitter = new Emitter()

myEmitter.on('demo', function(...args) {
  setImmediate(() => {
    console.log('args', args)
  })

  /*
    process.nextTick(() => {
      console.log('args', args)
    })
  */
})

myEmitter.emit('demo', 'a', 'b')

console.log('11111')

// 11111
// args [ 'a', 'b' ]
```

## 只触发一次
使用 `on` 注册的监听器在每次 `emit` 触发时都会执行监听器中的回调事件。

```js
const Emitter = require('events')
let num = 0

const myEmitter = new Emitter()

myEmitter.on('demo', function() {
  num++
})

myEmitter.emit('demo')
myEmitter.emit('demo')

console.log(num)

// 2
```

使用 `once` 注册监听器，监听器只能被 `emit` 触发一次

```js
const Emitter = require('events')
let num = 0

const myEmitter = new Emitter()

myEmitter.once('demo', function() {
  num++
})

myEmitter.emit('demo')
myEmitter.emit('demo') // 再次触发不会执行监听器

console.log(num)

// 1
```

## 错误事件
当未注册 `error` 监听器但触发 `error` 事件时， nodejs 会发生错误并终止程序。


```js
const Emitter = require('events')

const myEmitter = new Emitter()

myEmitter.once('demo', function() {
  console.log(111)
})
myEmitter.emit('error')
myEmitter.emit('demo')
```
由于并未注册 `error` 事件， 当程序运行到 `emit('error')` 时， 程序会抛出错误并终止程序。

为了避免程序中断， 在触发 `error` 事件前应该总是注册 `error` 监听器。
```js
const Emitter = require('events')

const myEmitter = new Emitter()

myEmitter.once('demo', function() {
  console.log(111)
})
myEmitter.once('error', function(err) {
  console.log('error', err)
})
myEmitter.emit('error')
myEmitter.emit('demo')
```
上述代码并不会因为 `error` 而中断程序，它会继续触发 `demo` 监听器。

## `newListener`

`events` 实例中提供了一个默认的监听器 `newListener`, 在实例添加其他的监听器之前会触发该事件。

```js
const Emitter = require('events')

const myEmitter = new Emitter()

myEmitter.on('newListener', (event, listener) => {
  console.log('new listener')
})

myEmitter.on('demo', function() {
  console.log(111)
})

myEmitter.emit('demo')

// new listener
// 111
```
> 
