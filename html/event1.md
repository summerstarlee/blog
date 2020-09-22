# 浏览器事件
## 常见的浏览器事件
1. 鼠标事件
* `click` 鼠标点击触发
* `mousemove` 鼠标移动时触发
* `mouseleave`  鼠标离开某元素时触发
* `mouseenter/mouseout` 鼠标移进移出事件
* `mousedown/mouseup` 按下/释放鼠标事件
* `contextmenu`  鼠标右键点击事件
> `mouseleave & mouseout` 的差别
> 两者同是鼠标移开事件， 不同点是 `mouseout` 的触发对象不仅是目标元素还包括目标元素的子元素， 而 `mouseleave` 只在鼠标理开目标元素（把子元素当作目标元素的一部分）之后离开。
2. 键盘事件
* `keydown/keydup` 键盘按下松开事件
3. `DOM` 事件
* `copy` 
* `cut`
* `scorll`
* `load`
* `resize`
4. 表单事件
* `submit`
* `reset`

## 添加事件处理
### `html` 行内添加
使用元素的 `on<event>` 属性添加事件。
```html
<button onclick="alert(1)"></button>
```

或者
```html
<button onclick="handleClick()"></button>
<script>
function handleClick() {
    alert(1)
}
</script>  
```

### `JS DOM` 调用
```html
<button id="btn" onclick="handleClick()"></button>
<script>
const btn = document.getElementById('btn')
btn.onclick = function() {
    alert(1)
}
</script>  
```
### 注意事项
1. `this` 指向
事件处理程序中的 `this` 指向对应的元素
```html
<button onclick="alert(this.innerHTML)">click button</button>
```
>上面的代码中 `this.innerHTML` 显示元素的内容

2. 程序分配 & 程序执行

当使用 `js DOM` 调用时，函数应该被分配给 `DOM.on<event>`, 而不是执行。

```html
// 正确
button.onclick = sayThanks;

// 错误
button.onclick = sayThanks();
```

当作为 html 的 `on<event>` 属性时，浏览器会创建一个处理程序，在这个处理程序中希望执行一些代码。
```html
<button onclick="sayThanks()">click button</button>
```

### `on<event>` 模式弊端
当需要在元素上为一个事件分配两个事件处理是不被允许的。新的旧的处理程序总是会被覆盖。
```html
<button id="btn">click btn</button>
<script>
const btn = document.getElementById('btn')
btn.onclick = function1(){}
btn.onclick = function2(){}
</script>  
```
以上代码只执行 `function1`

## `addEventListener` 事件注册
该方法将指定的监听注册器注册到目标元素上， 当该元素触发指定的事件时，指定的回调函数就会被执行。
### 使用方法
```js
ele.addEventListener(event, handler[, options])
```
**event** 
事件名称

**handler**
处理程序

**options**
附加选项
* `once` 如果为 `true` ， 那么事件触发后将会自动删除监听器
* `capture`  事件处理阶段， [事件冒泡/捕获]
* `passive`  如果为 `true` ，` preventDefault()` 将不会生效

```html
<button id='btn'>btn</button>
<a href="" id='abtn'>demo</a>
<script>
    let btn = document.getElementById('btn')
    let abtn = document.getElementById('abtn')
   
    abtn.addEventListener('click', function(e){
        e.preventDefault()
        console.log(e, this)
    }, {passive: false}) // 阻止 a 标签的默认跳转行为

</script>
```

对于上面使用 `on<event>` 形式不能在一个元素上面同时绑定两个事件的问题， `addEventListener` 可以很好的解决。
```js
    btn.addEventListener('click', function(e){
        console.log('fn1')
    }, false) 
     btn.addEventListener('click', function(e){
        console.log('fn2')
    }, false) 
```
上面代码这个事件都将会执行。

## `removeEventListener` 移除事件注册
```element.removeEventListener(event, handler[, options])```
`removeEventListener` 函数中参数必须同 `addEventlistener` 中保持一致。

### handler 保持一致
为了使 `handler` 处理程序在 `addEventListener` 和 `removeEventListener` 中保持一致， 需要把函数储存在一个变量中。

```js
function handler() {
    console.log('handler')
}

btn.addEventListener('click', handler)
btn.removeEventListener('click', handler)
```
> **如果不使用这种方式事件将不能移除** 下面的代码不会起作用。
```js
elem.addEventListener( "click" , () => alert('Thanks!'));
// ....
elem.removeEventListener( "click", () => alert('Thanks!'));
```

## `event` 对象
无论使用 `on<event>` 还是使用 `addEventListener` 绑定事件，在处理函数中有都会有一个 `event` 事件对象参数。
```js
btn.onclick = function(event){
    console.log(event)
}
btn.addEventListener('click', function(event){
    console.log(event)
})
// MosueEvent {......}
```

### `event` 对象常用的属性
* `event.type` 事件类型的名称， 如 `click` `mouseover`
* `event.target` 触发事件的元素。
* `event.currentTarget` 触发事件的当前元素。 
* `event.clientX / event.clientY` 鼠标相对于窗口的 `x/y` 轴坐标

