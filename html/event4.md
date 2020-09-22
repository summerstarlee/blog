# 浏览器的默认行为
对于许多元素浏览器赋予了默认功能， 如 `<a>` 标签点击默认实现路径跳转、表单中的提交按钮点击触发提交行为。这些默认行为并不是符合所有的业务场景的， 这时就需要阻止浏览器的默认行为。

## 阻止浏览器行为
有两种是实现方式：
1. 使用 `event.preventDefault()` 方法。
2. 使用 `on<event>` 模式指定事件 `return false`。

```html
<a onclick="return false">click</a>
<a onclick="event.preventDefault()">click</a>
```

> `event.preventDefault()` 方法并不是总是执行的， 还记得在 `addEventListener` 中的第三个参数 [options](./event1.md)。 `passive` 用于设置 `event.preventDefault()` 是否生效

```html
<a href="https://www.baidu.com" id='aLink'>click</a>

<script>
const aLink = document.getElementById('aLink')
aLink.addEventListener('click', event => {}, {passive: true})
</script>  
```

上面的代码因为在 `addEventListener` 的第三个参数中设置了 `passive: true` 导致了 `event.preventDefault()` 并不能生效

## 自定义鼠标右击事件
浏览器给鼠标右击默认添加了事件，可以通过 `event.preventDefault()` 阻止这个默认事件以便自定义右击事件。

```html
<div oncontextmenu="alert(1)">
    <button id='btn'></button>
</div>

<script>
    const btn = document.getElementById('btn')
    btn.addEventListener('contextmenu', event => {
        event.preventDefault()
        alert(1)
    })
</script>
```
在 `btn` 元素上绑定了一个 `contextmenu` 事件， 使用 `event.preventDefault()` 阻止了浏览器的默认事件， 但是因为事件冒泡右击事件在 `btn` 元素上执行完毕后又冒泡到了 `div` 元素上，所以这里也需要使用 `event.stopPropagation()` 阻止事件冒泡。
```js
    const btn = document.getElementById('btn')
    btn.addEventListener('contextmenu', event => {
        event.preventDefault()
        event.stopPropagation()
        alert(1)
    })
```