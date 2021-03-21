# sass 学习记录
[[toc]]

## sass 变量声明和使用

```scss
$width: 20px;

$btn-width: $width;

.btn {
  width: $btn-width;
}
```

## 默认变量
sass 的默认变量在值得后面添加 `!default`

```scss
$line-height: 1.5 !default;

body: {
  line-height: $line-height;
}
```

sass 的默认变量一般用来设置默认值， 根据需求来覆盖， 覆盖只需要在声明之前重新申明一下变量即可。

```scss
$line-height: 2;

$line-height: 1.5 !default;

body: {
  //  这里为2
  line-height: $line-height; 
}
```

在使用 UI 库不使用默认值的时候：
```scss
// lib.scss
$color: red;
.btn {
  color: $color;
}
```

项目中需要覆盖 UI 库的变量, 虽然 `$color` 的值被覆盖， ***但是在覆盖之前 `.btn` 的属性已经被定义***， 所以 `.btn` 属性没有被改写
```scss
@import './lib.scss';
$color: blue;
```

如果覆盖写引入在前面呢？

```scss
$color: blue;
@import './lib.scss';
```
由于 UI 中定义的 `$color` 会覆盖之前定义的变量， `.btn` 的 `color` 依然是 `red`。

> 结论： UI  库中需要给变量定义默认值， 需要覆盖时，在引入库之前重新定义变量。

```scss
// lib.scss
$color: red !default;

.btn {
  color: $color;
}


// index.scss

$color: blue;
@import './lib.scss'
```

## 全局变量和局部变量

  * 全局变量 在选择器、函数、混合宏 外声明的变量。
  * 局部变量 在选择器、 函数、 混合宏 内声明的变量。

```scss
//  全局变量
  $color: orange !default; 

  .block {
    color: $color; // 调用全局变量
  }
  em {
    color: red;  // 声明局部变量
    a {
      color: $color; // 使用局部变量
    }
  }
```

## 嵌套选择器
在嵌套选择其中可以使用 `&` 表示上级选择器。 正在 `BEM` 风格中非常实用。

```scss
.wrap {
  &:before: {}
  &:hover {}
  &__header {

  }
  &__footer {
    &--active {

    }
  }
  a {
    header & {

    }
  }
}
```

## 属性嵌套

```scss
.box {
  border-top: 1px solid red;
  border-bottom: 1px solid blue;
}

//  可以使用嵌套属性方式
.box {
  border: {
    top: 1px solid red;
    bottom: 1px solid blue;
  }
}
```

## 混合宏 
### 声明 @mixin

```scss
// 1. 不带参数的混合宏
@mixin border-radius {
  border-radius: 5px;
}

// 2. 带参数
@mixin border-radius($radius) {
  border-radius: $radius;
}

// 3. 默认参数
@mixin border-radius($radius: 5px) {
  border-radius: $radius;
}

// 4. 剩余参数
@mixin border-color($colors...) {
  // 这里做复杂逻辑处理
  @if length(colors) >= 1 {
    
  } @else{
    
  }
}
```

### 调用 @include 
```scss
// 无参数、默认参数调用
.btn {
  @include border-radius;
}
// 需要传参数调用
.btn {
  @include border-radius(10px);
}

// 多参数调用
.btn {
  @include border-radius(2px, 3px);
}
```


