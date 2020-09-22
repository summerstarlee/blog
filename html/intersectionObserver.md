# `IntersectionObserver` 
异步监听目标元素与父元素或者顶级元素试图的交叉状态（可见性）。

## 使用

### 基础 api 
```js
const sectionObserver = new IntersectionObsection(callback, option)

sectionObserver.observe(Ele)
```

`IntersectionObserver` 是一个构造器，返回一个监听实例。他接受两个参数， `callback` 是交叉状态变化时的回调函数。 

实例的 `observe` 方法用于监听传入节点的交叉状态。 当需要监听多个元素节点的时候，需要重复调用 `observe` 方法.

```js
sectionObserve.observe(document.getElementById('A'))
sectionObserve.observe(document.getElementById('B'))
```

`IntersectionObserver` 实例上除了提供其他的方法。

```js
// 停止监听元素的可见性状态
sectionObserve.unobserve(Ele)

// 关闭监听器， 停止对所有元素的监听
sectionObserve.disconect()
```

### `callback` 参数
`IntersectionObserver` 中的 `callback` 参数是 `observe` 方法监听的元素可见性发生变化时的回调函数， `callback` 提供一个参数 `entries` , 它是一个数组，如果同时有多个元素的可见性发生变化 `entries` 就会有多个成员， 每个成员都是一个 `IntersectionObserverEntry`  对象。

```js
const sectionObserver = new IntersectionObserver(entries => {
    // entries 
    entries.forEach(IntersectionObserverEntry => {
        console.log('IntersectionObserverEntry', IntersectionObserverEntry)
    })
})
```

### `IntersectionObserverEntry` 对象
* `boundingClientRect` 

用来描述目标元素的矩形区域的信息， 等同于` Ele.getBoundingClientRect()`
* `intersectionRatio` 

用来描述目标元素在可见视图中的占比， 当小于等于0时， 元素在当前视图中不可见。
* `intersectionRect` 

用来描述目标元素与可见视图的交叉区域的矩形信息。

* `isIntersecting` 

`boolean` 类型， 表述目标元素在当前视图中是否可见。
* `target` 

目标元素
* `time` 

可见性变化的时间时间戳
* `rootBounds` 

用来描述可见性区域的根

## `IntersectionObserver` 应用

### 底部无限加载
在页面底部添加一个页尾栏， 监听页尾栏的可见性，当页尾栏可见时重新往页面中添加元素从而到达底部无限加载的效果。

```html
<style>
    * {
        margin: 0;
        padding: 0;
    }
</style>

<body>
    <div id="container" style="min-height: 100vh;"></div>
    <div style="height: 20px;"></div>
    <div id="footer" style="height:2px"></div>
</body>
<script>
  const loadMore = () => {
    const p = document.createElement('p')
    p.innerHTML = Math.random()
    document.getElementById('container').append(p)
  }

  // 监听器
  const sectionObserver = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting) {
      loadMore()      
      window.scrollTo(0,-10)
    }
  })

  // 监听 footer 元素
  sectionObserver.observe(document.getElementById('footer'))
</script>
```
上述代码中， 设置 `container` 的最小高度为 `100vh` 这样可以避免当 `container` 内容较少时 `footer` 可以看到。

在 `footer` 部分和 `container` 部分设置了一个 `20px` 的区域， 为滚动到 `footer` 部分添加一个缓冲区域。

使用 `observe` 开始监听 `footer` ， 并在 `footer` 的可见性变为 `true` 时填充 `container` 内容。 这里需要改变一下滚动的高度，把 `footer` 再次变为不可见状态，方便进行下次的可见性监听。


### 图片懒加载
如果页面中图片较多，并且在可见视图中不要展示所有的图片，这时可以对暂时未出现在视图中的图片设置为一个较小的占位图， 等图片出现在视图中时在加载图片的真实地址。

```html

<ul>
    <li><img src="占位图地址" data-src="真实地址"/></li>
    <li><img src="占位图地址" data-src="真实地址"/></li>
    <li><img src="占位图地址" data-src="真实地址"/></li>
    <li><img src="占位图地址" data-src="真实地址"/></li>
    <li><img src="占位图地址" data-src="真实地址"/></li>
    <li><img src="占位图地址" data-src="真实地址"/></li>
    <li><img src="占位图地址" data-src="真实地址"/></li>
    <li><img src="占位图地址" data-src="真实地址"/></li>
    <li><img src="占位图地址" data-src="真实地址"/></li>
</ul>

<script>
    const sectionInterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if(entry.isIntersecting) {
            // 设置 src 属性为真实的图片地址
            entry.target.src = entry.target.getAttribute('data-src')
            sectionInterObserver.unobserve(entry.target)
        }
        })
    })
    
    // 获取到页面中所有的 img 元素并添加可见性监听 
    Array.from(document.getElementsByTagName('img')).forEach(ele => {
        sectionInterObserver.observe(ele)
    })
</script> 
```


## 补充 
### `IntersectionObserver` 构造函数的 `Options` 参数
除了 `callback` 参数外， `IntersectionObserver` 支持传入一个 `options` 配置对象, 他有以下属性可以设置。

#### threshold 
该属性用来设置 `callback` 什么时候执行。 理解如何设置这个属性需要明白 `IntersectionObserverEntry` 对象中的 `intersectionRatio` 属性。

![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016110202.png)

`intersectionRatio` 用来描述目标元素出现在可视区域的百分比。`0` 代表还未出现在可视区， `100` 代表完全出现在可视区。

默认情况下， 目标元素的 intersectionRatio 为 `0` 或者 `1` 时都会触发一次 `callback` 函数， 而 `threshold` 就是用来自定义触发时机的(默认 `[0, 100]`)。

该属性接收一个数组， 数组中定义 `intersectionRatio` 的值用来 `callback` 时机, 例如 `[0, 25, 50, 75, 100]`

### `root` 

![](https://user-gold-cdn.xitu.io/2020/5/8/171f3b16cd9f4319?w=624&h=201&f=png&s=17268)

上图中的的元素包含关系是 A > b > c。  C 元素是否可见默认是以 B 元素为根元素确定的， 也就是当 B 的滚动决定了 C 元素的可见性。当设置 root 属性为 A 元素时。 如果 A 元素的滚动影响了 C 元素的可见性同样可以触发 callback 函数.

```js
new sectionObserver = new IntersectionObserver(callback, {
    root: document.getElementById('c')
})
```

### `rootMargin`
该属性用来定义根属性的margin值，从而来扩大或者缩小(值为负数)可视区域的大小。

![](https://user-gold-cdn.xitu.io/2020/5/8/171f3b7e9863f2d8?w=453&h=338&f=png&s=29962)

如上图, 当设置 rootMargin 为 `rootMargin: "20px 20px"` 后， 实际的可视区域扩大至红色边框处， 当 元素C 出现或消失在 红色边框内都会触发 callback 事件。

## 注意事项
IntersectionObserver 是异步执行的， 也就是他的 observe 方法和 callback 的执行是异步的。当 observe 监听到目标元素可见性发生变化，只有浏览器空闲的时候才会执行 callback 方法。 



