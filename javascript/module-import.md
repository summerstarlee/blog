# jsvascript 模块加载相关

## script 标签的 defer && async 属性

默认情况下， 浏览器同步加载 `js` 脚本， 等到脚本加载和执行完毕后才会执行下面的渲染。  
可以设置 `script` 的属性， 浏览器执行到脚本时开始下载脚本，但不会立即执。
```js
<script src="xxx" defer></script>
<script src="xxx" async></script>
```

1. `defer` 属性会等到整个DOM完全完成，以及其他脚本执行完毕后执行。 当有多个 `defer` 属性的 `script` 标签时，会按照他在代码中出现的顺序执行。
2. `async`  属性会在脚本下载完毕之后，渲染引擎就会中断渲染，开始执行脚本内容。 当有多个 `async` 属性时， 不能保证代码加载的顺序。

