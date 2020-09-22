# 事件冒泡和捕获

`DOM` 事件执行的3个阶段：
```
1. 捕获阶段     自上向下
2. 执行阶段
3. 冒泡阶段     自下向上
```

## 冒泡
当一个事件发生时， 会首先运行该元素上的处理程序， 然后运行其父级元素上的处理程序，然后一直向上到其祖元素（`document` 或 `window`）上的处理程序。 是一个事件**从下到上**的事件穿透过程。

```html
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

当点击 `p` 元素的时候会分别有3个 `alert` 执行，顺序为 `p -> div -> form`

### `event.target` & `event.currentTarget`
上一节讲到 `handler` 函数中的 `event` 对象包含了 `target`  和 `currentTarget` 两个属性， 他们在冒泡过程中存在区别。

改写一下上面的例子

```html
<form id='form'>FORM
  <div id='div'>DIV
    <p id="p">P</p>
  </div>
</form>
<script>
    const form = document.getElementById('form')
    const div = document.getElementById('div')
    const p = document.getElementById('p')
    function handler(event) {
        console.log(event.target, event.currentTarget)
    }
    form.addEventListener('click', handler)  
    div.addEventListener('click', handler)
    p.addEventListener('click', handler)

</script>
```
当点击 `p` 元素时， 输出结果：
`p` 元素 / `P` 元素  ->   `p` 元素 / `div` 元素  -> `p` 元素 / `from` 元素

可以看出 
1. `event.target` 是引发事件的目标元素， 在事件冒泡的过程中并不会发生改变。
2. `event.currentTarget` 表示当前正在执行事件的元素（冒泡到该元素）。

### 停止冒泡
事件冒泡从目标元素开始，会一直上升到顶级元素 `document`， 有些事件也可以到达 `window`， 这个过程要调用路径上所有的处理程序。
这个路径上任何一个元素都可以使用 `event.stopPropagation()` 停止冒泡。

```html
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="event.stopPropagation()">P</p>
  </div>
</form>
```

> 当使用 `addEventListener` 为一个元素添加多个事件程序时候， 即使阻止了其中一个事件冒泡， 其他的处理程序依旧会依序执行造成冒泡， 使用 `event.stopImmediatePropagation()` 用于停止冒泡，并阻止当前元素上其他的处理程序运行。

## 捕获
事件执行需要经过三个阶段： **1.事件捕获。 2. 事件执行。 3.事件冒泡**。 实际上事件在执行前都会经历过一个事件捕获阶段。这个阶段从 `window` 开始一直向下穿透捕获到目标元素，从而给元素执行事件程序，但是默认情况下浏览器执行事件时已经忽略了事件捕获阶段，事件仅在第二阶段和第三阶段执行。

### 开启事件捕获阶段
在 `addEventListener` 函数中，将 `capture`  参数设置为 `true` 。
```js
btn.addEventListener('click', handler, {capture: true})
```

例子:
```html
<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}, ${e.eventPhase}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}, ${e.eventPhase}`));
  }
</script>
```
代码中为 `form` 元素及子元素都注册了 捕获事件和一般事件，执行顺序为
1. `HTML -> BODY -> FROM -> DIV -> P` (捕获阶段)
2. `P -> DIV -> FORM -> BODY -> HTML` (冒泡阶段)

> 在事件过程中可以使用 `event.eventPhase` 获取到当前执行事件所处的事件执行阶段。
