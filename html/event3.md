# 事件委托
事件的冒泡和捕获提供了**事件委托模式**。 这种模式适用于：需要为多个元素添加类似的处理事件，为了避免给每个元素绑定事件，可以将处理事件放到这些元素的共同父元素上面。

## 普通事件委托

如下代码，需要给表格中的每个 `<td>` 标签添加一个点击事件，使得该单元格背景发生改变。
```html
<table>
  <tr>
    <th colspan="3"><em>Bagua</em> Chart: Direction, Element, Color, Meaning</th>
  </tr>
  <tr>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
  </tr>
  <tr>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
  </tr>
  <tr>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
  </tr>
</table>
```

这时候可以把点击事件绑定到 `<table>` 上面， 他将在处理程序中使用 `event.target` 获取到执行事件的元素。

```js
let selected  // 用来存放当前选择的 td 元素 

table.addEventListener('click', function(event){
    const target = event.target

    if(taget.tagName !== 'TD') return  //忽略不在 td 上面的点击

    if(selected) {
        selected.style.backgroundColor = "transparent"
    }

    selected = target
    selected.style.backgroundColor = "red"
})
```

上面的代码在一定程度上实现了要求，但是当鼠标点击到 `<td>` 中的 `<strong>` 标签时, 由于 `event.target.tagName` 此时并不是 `TD` 所以会失效。这是可以使用 `event.target.closest('tagname')` 获取到距离 `tagname` 标签最近的元素。 修改后的代码为： 

```js
let selected  // 用来存放当前选择的 td 元素 

table.addEventListener('click', function(event){
    const td = event.target.closest('td')
    if(!td) return  // 忽略找不到 td 的元素点击
    if(!table.contains(td)) return  // 忽略不在 table 当中的 td 元素 

    if(selected) {
        selected.style.backgroundColor = "transparent"
    }

    selected = target
    selected.style.backgroundColor = "red"
})
```

> 1. 使用 `event.target.closest(tagname)` 返回距离 `tagname` 的元素
> 2. 使用 `ele.contains(eleChild)`  判断 `ele` 元素中是否包含 `eleChild` 元素


## 使用 `data-` 实现标记委托
如下所示， 存在一个按钮组， 需要给每个按钮添加不同的事件。 这时可以使用 `data-` 给每个按钮添加一个 `action` 标记。
```html
<div id="menu">
    <button data-action="save">保存</button>
    <button data-action="fresh">刷新</button>
    <button data-action="search">搜索</button>
</div>
```

使用事件委托， 把事件绑定到 `menu` 上用来捕获内部 `button` 的点击。

```js
const menu = document.getElementById('menu')
function save() {
    console.log('save')
}
function fresh() {
    console.log('fresh')
}
function search() {
    console.log('search')
}
menu.addEventListener('click', (event) => {
    const target = event.target.dataset.action
    if(!target) return
    this[target]()
})
```
> 在第一节中，讲到在 `handler` 处理程序中， `this` 指向当前元素， 但是这里我们使用箭头函数，改变函数里面的 `this` 指向 `window`, 这是就可以通过 `this[target]()` 调用我们在全局定义的方法。
