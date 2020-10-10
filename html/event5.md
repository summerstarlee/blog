# 自定义事件
元素上不仅可以分配浏览器内置的事件， 还可以自定义事件分配到元素上。

## 自定义事件构成
自定义事件需要两个步骤， 第一步是通过 `Event` 构造器生成一个自定事件， 第二步是在需要的地方通过 `dispatchEvent` 调用事件。

### `Event` 构造器
```js
let event = new Event(type[, options])
```
* `type` 事件类型， 像 `click` 这样的字符串
* `options` 事件参数
    * `bubbles`       -`true/false`  该事件是否冒泡。 `true` 为冒泡。
    * `cancelable`    - `true/false` 该事件是否阻止浏览器默认行为。
> 默认情况下， `bubbles` 和 `cancelable`  都为 `false`

### `dispatchEvent`
自定义的事件并不能像原生事件那样通过 DOM 的操作触发， 只能通过 diapatchEvent(event) 方法手动调用。

```html
<button id="custom">自定义事件</button>
<script>
    const custom = document.getElementById('custom')
    custom.addEventListener('myEvent', event => {
        console.log(event)
    })

    const event = new Event('myEvent')
    custom.dispatchEvent(event)
</script>
```

上面的代码包含了自定义事件执行的三个步骤。
1. 在元素上注册了一个事件监听
2. 生成一个 `Event` 事件实例
3. 通过 `dispatchEvent` 调用

## 自定义事件的冒泡
在上述的代码中自定义事件的调用和事件监听都是通过一个元素进行的， 如果希望父级元素通过冒泡的机制监听事件，可以通过设置 Event 构造器的第二个参数 `bubbles: true`


```html
<button id="custom">自定义事件</button>
<script>
    const custom = document.getElementById('custom')
    document.addEventListener('myEvent', event => {
        console.log(event)
    })

    const event = new Event('myEvent', {
        bubbles: true
    })
    custom.dispatchEvent(event)
</script>
```

值得注意的是， 自定义事件必须通过 `addEventListener` 注册监听, 并不能通过 `on<event>` 的方式调用， 因为 `on<event>` 只能调用内建事件，`ele.onMyEvent` 并不会执行。 

## UI 规范事件
实际上 `Event` 构造函数是所有浏览器事件的基类， 浏览器通过它派生出许多其他规范事件类型， 如 `UIEvent` `FocusEvent` `MouseEvent` `WheelEvent` `KeyboardEvent`, 这些事件都基于 `Event` 构造函数添加了各自的属性和方法。通过这些规范事件构造的实例可以添加一些标准属性。

```js
const event = new MouseEvent('myClick', {
    bubbles: true,
    cancelable: true,
    clientX: 120,
    clientY: 200
})
```
因为 `MouseEvent` 中包含了  `clientX`、 `clientY` 属性， 这使得在自定义事件中可以初始化这些属性， 而这在通过 `Event` 构造实例时是不起作用的。

## 为自定义事件添加附加属性
在大部分情况下， 自定义的事件都应该是一个全新的事件类型， 并且应该使用 `new CustomEvent` 生成一个事件实例。 这样的好处是不必知道该事件应该属于哪种标准规范事件， 并且 `CustomEvent` 在第二个参数中允许添加附加属性 `detail`。

```html
<h3 id="h3">Hello Custom Event </h3>

<script>
    const h3 = document.getElementById('h3')

    h3.addEventListener('hello', event => {
        console.log(event.detail.msg)
    })

    h3.dispatchEvent(new CustomEvent('hello', {
        detail: {
            msg: 'hello custom'
        }
    }))
</script>
```

## 自定义事件的执行顺序
```html
<button id="menu">Menu (click me)</button>
<script>
    menu.addEventListener('click', () => {
        menu.dispatchEvent(new CustomEvent('asyncEvent'))

        alert(1)
    })

    menu.addEventListener('asyncEvent', () => {
        console.log('2')
    })
</script>
```

上述代码中由于 在 `click` 事件程序中使用 `dispatchEvent` 触发了一个自定义事件， 这时函数的执行会立即跳到 `addEventListener` 注册的监听程序中，当监听程序的代码执行完毕执行完毕后才会再次回到 `click` 的处理程序中.
所以上面的执行顺序是 2 -> 1

