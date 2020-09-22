# grid 布局
Grid 布局是一种强大的CSS布局方案， 它使用网格的形式存放子元素，以便使用行和列的概念管理和控制容器和子元素。在使用 `Grid` 布局的时候始终把容器当作是一个多行多列的网格有助于更准确的实现 UI 效果。

## 基本概念

```html
    <div class="container">
        <div class="item"><span>A</span></div>
        <div class="item"><span>B</span></div>
        <div class="item"><span>C</span></div>
        <div class="item"><span>D</span></div>
        <div class="item"><span>E</span></div>
        <div class="item"><span>F</span></div>
    </div>
```

### 容器
容器是网格的实现区域，代码中的 `container`。

### 项目
在容器内部生命的直接子元素， 代码中的 `item`。 在直接子元素中存在的元素并不是项目，不会受到 `Grid` 布局的影响。

### 行和列
脑补。。。

### 网格线
划分网格的线， 垂直网格线和水平网格线分别划分了列和行。
![](https://user-gold-cdn.xitu.io/2019/11/7/16e43d9517557e2d?w=500&h=462&f=png&s=13819)

### 单元格
单元格和项目概念容易冲突， 单元格是网格线划分出来的区域，是概念上的存在， 而项目是 `html` 元素。


## 容器属性

> `Grid`属性布局分为容器属性和项目属性， 这与 `Flex` 布局的属性分类是相似的。

### 定义一个容器
下面的代码中在 `html` 层面定义了一个容器 `.container`。 
```html
    <div class="container">
        <div class="item"><span>A</span></div>
        <div class="item"><span>B</span></div>
        <div class="item"><span>C</span></div>
        <div class="item"><span>D</span></div>
        <div class="item"><span>E</span></div>
        <div class="item"><span>F</span></div>
    </div>
```
而使用 `display:grid` 就可以在 `css` 层面使 `.container` 变为一个 `Grid` 容器。

```css
.container {
    dispaly: grid;
}
```

如图，在定义了 `.container` 为 `Grid` 布局后，查看元素时， `.container` 已经变为了网格布局。 [查看代码](https://jsbin.com/neleroq/1/edit?html,css,output)

![](https://user-gold-cdn.xitu.io/2019/11/8/16e48d190e017baa?w=637&h=142&f=png&s=12133)


## 定义列/行
在定义了 `Grid` 容器后，紧接着看需要定义行和列。

### 定义列 grid-template-columns
`grid-template-columns` 用来定义网格包含多少列，以及每一列的宽度。

如下定义容器包含6列， 每一列的宽度为 100px;
```css
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px 100px 100px 100px;
}
```
![](https://user-gold-cdn.xitu.io/2019/11/8/16e49172fe1c8374?w=617&h=44&f=png&s=5223)


### 定义行 grid-template-rows
`grid-template-rows` 用来定义网格包含多少行，以及每一行的高度。

如下定义容器包含2行， 每一列的宽度为 100px;
```css
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px 100px 100px 100px;
    grid-template-rows: 100px 100px;
}
```
![](https://user-gold-cdn.xitu.io/2019/11/8/16e49192f2b1d9c3?w=613&h=224&f=png&s=17865)

[查看上述代码](https://jsbin.com/vaqiqud/edit?html,css,output)

通过定义容器以及行与列， 就已经完成了整个 `Grid` 布局的整个架构， 下面看一些定义容器属性的技巧

## display: inline-grid
使用 `display:grid` 声明一个容器， 容器以块级元素存在， 如果需要是容器变为行级元素可以使用 `display:inline-grid`

![inline-grid](https://user-gold-cdn.xitu.io/2019/11/8/16e497e18732d2a3?w=478&h=234&f=png&s=16936)

## repeat()
在定义列或者行时， 如果需要定义多个相同的列或者行可以使用 `repeat()` 函数。
```css
/* 定义一个有100px*100px 方格组成的5行4列的容器 */
.container {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(5, 100px)
}
```
`repeat()` 接受两个参数， 第一个参数代表重复的次数， 第二个参数代表需要重复的值或者模式。

下面例子中第二个参数表示重复的模式。
```css
/* 定义一个5行6列的容器， 项目的宽分别为 50px 100px 150px 50px 100px 150px */

.container {
    display: grid;
    grid-template-columns: repeat(2, 50px 100px 150px);
    grid-template-rows: repeat(5, 100px)
}
```
### auto-fill
当容器的宽度不确定的时候，如果需要容器中尽可能的充满项目，使用 `auto-fill` 属性自动填充容器。
```css
/* 在容器中产生尽可能多的宽为 100px 的列 */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px)
}
```
![](https://user-gold-cdn.xitu.io/2019/11/8/16e49fb5475c802c?w=1033&h=235&f=gif&s=404181)

### minmax(min,max)
给定项目一个长度范围， 使项目的长度在这个范围当中。


如下， 定义一个 4*2 的容器， 控制列的宽度为 100px~200px 之间， 当容器的宽度发生改变时， 列的宽度会响应变化， 变化的区间是  100px~200px
```css
.container {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 200px));
    grid-template-rows: 100px 100px;
}
```

![](https://user-gold-cdn.xitu.io/2019/11/8/16e4a0379bbbbd38?w=1020&h=235&f=gif&s=460091)

### auto
不设定项目的宽度， 由浏览器根据实际情况决定项目的宽

如下， 定义一个 4*2 的容器，第二列的宽度设置为 `auto`，  当容器的宽度发生改变时， 第二行的宽度将会自动计算，使得四列总是占满一行
```css
.container {
    display: grid;
    grid-template-columns: 100px auto 150px 75px;
    grid-template-rows:repeat(2, 100px)
}
```
![](https://user-gold-cdn.xitu.io/2019/11/8/16e4a0db03a1f4e2?w=1002&h=235&f=gif&s=247812)

### fr 单位
`fr` 是网格布局提供的一种表示比例关系的关键词， 如果两列的宽度分别为 `1fr` 和 `2fr`， 表示后者的宽度是前者宽度的两倍。
```css
/* 定义包含两列的容器， 后者是前者的两倍 */
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
}

/* 定义包含三列的容器， 第一列的宽度为100px， 剩余部分分为3部分， 第二列占一份， 第三列占两份 */
.container {
    display: grid;
    grid-template-columns: 100px 1fr 2fr;
}
```

### 定义网格线的名称
容器中的子项目的分布是由无形的一条条网格线划分的， 在定义行和列的时候可以同时定义网格线的名称，方面设定子项目的位置和跨度。
```css
/* 定义容器布局为 2*2, 因此有3条垂直线和3条水平线， 在方格定义网格线的名称*/
.container {
    display: grid;
    grid-template-columns: [line1] 100px [line2] 100px [line3] 100px [line4];
    grid-template-rows: [line1] 100px [line2] 100px [line3] 100px [line4];
}
```

![](https://user-gold-cdn.xitu.io/2019/11/7/16e43d9517557e2d?w=500&h=462&f=png&s=13819)

### grid-column-gap grid-row-gap grid-gap
`grid-row-gap` 定义行间距 `grid-column-gap` 定义列间距

```css
/* 定义行间距为 20px 列间距为 10px */
.container {
    display; grid;
    grid-template-columns; repeat(4, 100px);
    grid-template-rows: repeat(2, 100px);
    grid-row-gap: 20px; 
    grid-column-gap: 10px;
}
```
![](https://user-gold-cdn.xitu.io/2019/11/8/16e4a17af09a17e3?w=455&h=242&f=png&s=18299)

***grid-gap***

`grid-gap` 是 `grid-column-gap` 和 `grid-row-gap` 的简写
```css
/* 定义行间距为 20px 列间距为 10px */
.container {
    display; grid;
    grid-template-columns; repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    grid-gap: 20px 10px;
}
```
>当 `grid-gap` 的第二个参数省略时， 表示 `grid-row-gap` 和 `grid-column-gap` 的值相同

```css
/* 定义行间距和列间距都为为 20px */
.container {
    display; grid;
    grid-template-columns; repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    grid-gap: 20px;
}
```
> ***在新标准中可以省略grid-gap、grid-column-gap、grid-row-gap 的 grid 字段， 写为 gap、row-gap、column-gap***

### grid-template-areas
定义网格区域的名称， 同网格线名称的作用相同，方便定义子项目位置， 跨度的定义.

```css
.container {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    grid-template-areas:'a b c'
                        'd f e'
                        'g h i';
}
```

### grid-auto-flow
定义子项目的排列顺序， 默认是先列后行(`row`)， 使用该属性来修改子项目的排列顺序;,接受两种类型的值

#### column / row 更改子项目的排列顺序, 下图是设置 `grid-auto-flow：columns` 时的显示。 

![](https://user-gold-cdn.xitu.io/2019/11/8/16e4a1e8721dc75c?w=240&h=482&f=png&s=14099)

#### column dense / row dense 这两个值主要用于某些项目指定位置以后，剩下的项目怎么自动放置。


如下图， 设置一个3*3 的网格布局

![](https://user-gold-cdn.xitu.io/2019/11/8/16e4a2403c2c7a4c?w=341&h=363&f=png&s=17698)

更改项目 `1` 和项目 `2` 的跨列情况， 由于 `2` 项目在第一行放不下跑到了第二行， 而原本的位置变为了空。

![](https://user-gold-cdn.xitu.io/2019/11/8/16e4a28647cdaa6c?w=348&h=377&f=png&s=18702)

使用 `grid-auto-flow: row dense`, 使布局紧凑化, 项目 `3` 将会往上填充。

![](https://user-gold-cdn.xitu.io/2019/11/8/16e4a2aa7cbb8e7d?w=346&h=362&f=png&s=18209)

另外一种情况是使用 `grid-auto-flow: column`， 并更改项目 `1` 和项目 `2` 的跨行情况

![](https://user-gold-cdn.xitu.io/2019/11/8/16e4a43b72549786?w=452&h=342&f=png&s=18114)

使用 `grid-auto-flow: row dense`, 使布局紧凑化, 项目 `3` 将会往左填充。

![](https://user-gold-cdn.xitu.io/2019/11/8/16e4a44740576d65?w=468&h=355&f=png&s=21215)

### 定义子项目内容的显示
#### justify-items:定义子项目在水平位置的分布
#### align-items:定义子项目在垂直位置上面的分布
#### place-items: justify-items 和 align-items 的合并写法 

在之前的项目中内容默认都是在左上角， 通过配置这三个属性来改变;

这三个属性的值的可选项为:

1. start: 对齐单元格的起始边
2. end: 对齐单元格的结束边
3. center: 在单元格居中
4. stretch: 充满整个单元格

> 这和 `Flex` 布局的 `justify-content` 和 `align-item` 属性的使用是相似的。

默认子项目的内容是居左上角显示，既 `justify-items: start; align-items: start`

![](https://user-gold-cdn.xitu.io/2019/11/10/16e548588633896b?w=686&h=668&f=png&s=16220)

设置项目的内容上下居中显示
```css
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    gap: 10px;
    justify-items: center;
    align-items: center;
}
```

![](https://user-gold-cdn.xitu.io/2019/11/10/16e5487af7843297?w=1458&h=664&f=png&s=89395)

使用 `place-items` 缩写的形式代替上面的写法;
```css
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    gap: 10px;
    palce-item: center center
}
```

> 当 `kustify-items` 和 `align-items` 的值相同时， `place-items` 可以简写为一个值， 即: `place-items: center`

### 设置内容区域在容器中的位置显示
当设置一个元素为容器后，元素变为块级元素， 当这个元素里的列不能占满整行时， 右边部分将会空出来。当然这种情况在高度占不满时依旧存在；

![](https://user-gold-cdn.xitu.io/2019/11/10/16e549c7c39a652f?w=1430&h=670&f=png&s=38314)

这时候可以通过属性设置改变这种显示

#### justify-content 设置内容区域在容器中的水平位置显示
#### align-content 设置内容区域在容器中的垂直位置的显示
#### place-content 是 align-content 和 jistify-content 两个属性的简写

这三个属性的可选值同为以下7种
```css
    .container {
        display: grid;
        justify-content: start | end | center |  stretch | space-around | space-between | space-evenly;
    }
```
> 下面以水平位置显示为例

```
start 对齐容器的起始边。（默认值）
```
![](https://user-gold-cdn.xitu.io/2019/11/10/16e549c7c39a652f?w=1430&h=670&f=png&s=38314)

```
end 对齐容器的结束边
```

![](https://user-gold-cdn.xitu.io/2019/11/10/16e54a66241ce74b?w=1420&h=684&f=png&s=33612)

```
center 在容器的中间
```

![](https://user-gold-cdn.xitu.io/2019/11/10/16e54a75d9ea1c0a?w=1438&h=698&f=png&s=35589)

```
space-around 每个项目的两侧距离相同
```

![](https://user-gold-cdn.xitu.io/2019/11/10/16e54a936257a1cd?w=1426&h=672&f=png&s=31996)

```
stretch 占满整个容器空间
```
![](https://user-gold-cdn.xitu.io/2019/11/7/16e43d95ba9f3dd2?w=592&h=343&f=png&s=20786)

```
space-between 项目居两边显示，项目与项目之间的间隔相同。
```

![](https://user-gold-cdn.xitu.io/2019/11/10/16e54ae42630cda6?w=1214&h=672&f=png&s=29083)

```
space-evenly 项目与项目之间，项目与容器边框之间的距离都相同
```


![](https://user-gold-cdn.xitu.io/2019/11/10/16e54afa9af8a3d6?w=1206&h=656&f=png&s=28242)


---

> 上面把 `Grid` 布局的常用属性做了说明, 在是实战项目中以下几点是经常会使用到的: 1. 定义一个容器 `dispaly: grid / inline-grid` 2. 设置行和列 `grid-template-columns: repeat(3, 100px); grid-template-rows: repeat(3, 100px)`  3. 设置单元格内容位置显示 `place-items: center`  4. 设置容器内容位置显示 `place-content: center`

> 除了上述讲到的属性外， 容器上还有一个属性可以配置行和列超出配置的限制后的显示`grid-auto-columns(超出列的显示)` `grid-auto-rows(超出行的显示)`， 后跟行和列的高和宽。

## 子项目属性
### 设置子项目的行或列的跨度
> 在配置子项目的跨度时，把子元素拆分为四条边来配置，这无疑能帮助更快掌握下边四个属性的要点

***`grid-column-start` 设置项目左边框的位置***

***`grid-column-end` 设置项目右边框的位置***

***`grid-row-star` 设置项目上边框的位置***

***`grid-row-end` 设置项目下边框的位置***

> 行或列边框在未定义的情况下从1开始递增

下面设置 项目1 的上下左右边框的位置分别为 1、3、1、3
```css
.box-item {
    grid-row-start: 1; 
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
}
```

![](https://user-gold-cdn.xitu.io/2019/11/10/16e54c100a5485f2?w=974&h=726&f=png&s=21215)

> 定义项目边框的位置并不一定是上下、左右成对出现的， 当只定义了一边时， 另外一边将根据 `grid-zuto-flow` 属性自动设定

#### 使用自定义的网格线
在定义容器属性时可以同时定义网格线：
```css
.container {
    display: grid;
    grid-template-columns: [l1] 100px [l2] 100px [l3] 100px [l4];
    grid-template-rows: [r1] 100px [r2] 100px [r3] 100px [r4];
}
```
这是定义子项目的起始边框位置时可以使用自定义网格线的名称。

```css
.box-item {
    grid-row-start: r1; 
    grid-row-end: r3;
    grid-column-start: l1;
    grid-column-end: l3;
}
```
这种定义的方式和上面使用默认网格线的名称结果相同

#### 使用 span 关键词
无疑每次定义四个属性才能定义单元格的边框位置是复杂的，下面展示了使用 `span` 关键词来重写上面的效果

```css
.box-item {
    grid-row-start: span 2; 
    grid-column-start: span 2;
}
```
上面的代码中 `span` 可以理解为 `跨越`, `span 2` 表示跨越2个网格。***`span` 的跨越位置是当前子项目默认的边框线。  

当然 `span` 并不只是向后或先下跨越网格，当把 `grid-row/column-start` 改为 `grid-row/column-end` 时， `span` 便表示向左/上 `跨越`

下面这段代码和上面的代码效果是相同的。
```css
.box-item {
    grid-row-end: span 2; 
    grid-column-end: span 2;
}
```

### grid-column/grid-row  
`grid-column`属性是`grid-column-start`和`grid-column-end`的合并简写形式，
`grid-row`属性是`grid-row-start`属性和`grid-row-end`的合并简写形式。

```css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* 等同于 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
```

这两个属性之中，也可以使用span关键字，表示跨越多少个网格。

```css
.item-1 {
  background: #b03532;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  background: #b03532;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

### grid-area 属性

在定义容器属性时可以定义网格区域：
```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    grid-template-areas:'a b c'
                        'd f e'
                        'g h i';
}
```

在定义子元素的位置时， 可以使用已经定义好的网格区域名称快速定义子项目的分布位置。

```css
/* 把子元素放在 f 区间 */
.box-item {
    grid-area: f
}
```

`grid-area`属性还可用作`grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end`的合并简写形式，直接指定项目的位置。

```css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

```css
.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}
```

### justify-self/align-self/place-self
`justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。
`align-self`属性设置单元格内容的垂直位置（上中下），跟`align-items`属性的用法完全一致，也是只作用于单个项目。
`place-self`属性是`align-self`属性和`justify-self`属性的合并简写形式。







