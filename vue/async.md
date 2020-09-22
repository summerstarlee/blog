# sync 修饰符

在 `vue` 项目中，父子组件之间的数据通信为：

* 父级组件改变子组件数据：

```js
// 父组件
<father :status='statusValue'>

//子组件
...
<div>{{status}}</div>
... 
props:['status']
```

* 子组件改变父组件数据：

```js
//子组件
...
<div @click='$emit('handle',someValue)'>{{status}}</div>
... 
props:['status'],
data(){
    return {
        someValue:'someValue'
    }
}

//// 父组件
<father :status='statusValue' @handle='getVal'>
...

getVal(val){
    console.log(val)  // 'someValue'
}

```

但是在有些情况下，我们可能需要对一个数据进行双向数据绑定。
![这里写图片描述](https://user-gold-cdn.xitu.io/2018/8/8/16519f2c2da6d3e9?w=442&h=255&f=png&s=2033)

这里有一个弹出框，假设它的显示和隐藏是由一个变量 `show` 控制，代码可能是这样的：

```
//父组件
<button @click='show = !show'></button>
<drag :visible='show' />

//子组件

<div v-if='isShow'>
    <span @click='close'>X</span>    //弹出框右上角的 关闭按钮    
</div>

props:[visible],
data(){
    return {
        isShow:false
    }
},
watch:{
    visible(val){
        this.isShow = val 
    }
},
methods:{
    close(){
        this.isShow = false
    }
}

```

但是有一个问题，当在子组件 `close` 方法中,虽然已经将 `isShow` 改变为 `false`，但是 并没有通知到 父组件，要知道 在父组件中，控制弹出框的现实和隐藏是通过 `show` 。点击子组件的关闭按钮时，父组件的 `show` 没有发生改变。

vue 提供 `update:my-prop_name` 的模式触发事件。

```
//子组件
close(){
    this.isShow = false
    this.$emit('update:visible', false)
}

//父组件
<button @click='show = !show'></button>
<drag :visible='show'  @update:visible="val => show = val" />
```

为了方便起见，vue 还提供了一种缩写形式， 即 `.sync` 修饰符

```
//父组件
<button @click='show = !show'></button>
<drag :visible.sync='show'  />

```

通过这种写法，当子组件执行 `close` 事件的时候，不仅改变了自己内部的 `isShow` 的值，而且还将 父组件的 `visible`的状态发生了改变.
