# 一些 JS Function 有趣的知识

[TOC]

## 函数声明 VS 函数式表达
```js
//函数声明
function sum(a, b){
    return a + b
}

//函数式表达
let sum = function(a, b){
    return a + b
}
```

函数声明和函数表达式 在很多情况下是相同的，但是在一种情况下是有区别的

```js
//函数声明
alert(sum)
function sum(a, b){
    return a + b
}

//函数表达式
alert(sum)
let sum = function(a, b){
    return a + b
}
```

> 上面的代码在函数声明的情况下是可以正确执行的，但是在函数式表达的情况下会报错。
这是因为：**变量提升**,解析器会在代码执行之前将函数声明添加到执行环境，也就是说 `JavaScrip` 引擎在第一遍会声明函数并将它们放到源代码的顶部。
但是对于函数表达式,解析器会按照代码的执行顺序给 `sum` 赋值，在没有赋值之前就调用就会导致 `unexpected identifier`

## 函数的内部属性 arguments && this

### arguments的 `callee` 属性
`arguments` 指的是函数的参数数组，他有一个 `callee` 的属性，该属性是一个指针，指向拥有这个 `arguments` 对象的函数。

```js
function factorial(num){
     if (num <=1) {
        return 1;
     } else {
        return num * factorial(num-1)
     }
} 
```
比如上面的代码，按照条件不断地执行函数本身，达到 `阶乘函数` 的效果。

但是如果遇到这种情况：
```js
var trueFactorial = factorial;
factorial = function(){
    return 0;
};
alert(trueFactorial(5)); //120
alert(factorial(5)); //0 
```

变量 `trueFactorial` 获得了 `factorial` 的值，但在下一行，将 `factorial` 指向了另外一个函数，再去执行 `factorial' 的时候，返回的不是我们想要的结果。
为了使阶乘函数的返回值不会随着 `factorial` 的指向发生变化。改造一下 `factorial` 函数;
```js
function factorial(num){
     if (num <=1) {
        return 1;
     } else {
        return num * arguments.callee(num-1)  //解除了函数体的内的代码与函数名称的耦合状态
     }
} 
```

> 使用 `arguments.callee` 可以实现函数内部的代码与函数名称的耦合状态，多用在 `阶乘函数` 中。

### 函数内部的 this 
概括地讲：`this` 引用的是函数执行的环境对象。即函数的执行的环境对象就是 `this` 的值。
```js
window.color = 'red'
let v = {color:'blur'}

function sayColor(){
    alert(this.color)
}
sayColor()  // 'red'

v.sayColor = sayColor()
v.sayColor() //'blur'
```
在第一次调用 `sayColor()` 时，是在全局的情况下，这时函数内部的值指向全局，如果在浏览器环境下就是window。所以这时的this.color 相当于 `window.color` 
第二次调用 `sayColor()` 时，这是已经 `v.sayColor` 的指针指向 sayColor(),所以当前的 `this` 相当于 `v`,this.color 相当于 `v.color`  

###  函数内部的 `caller`  
这个属性中保存着调用当前函数的的函数引用，如果是在全局作用域中调用当前函数， `caller` 的值为 `null`

```js
function outer(){
    inner()
}

function inner(){
    alert(inner.caller)
}
outer()  
```
以上代码会输出 `outer()` 函数的源代码。 因为 `outer()` 调用了 `inner()`,所以 `inner.caler` 指向 `outer()`

结合 `arguments.callee` 解耦函数内部与函数名称。
```js
function outer(){
    inner()
}

function inner(){
    console.log(arguments.callee.caller.name) //outer
}
```

## 函数属性与方法

### lenght 属性
lenght 属性表示函数接受参数的个数。当没有参数时，函数的 `lenght` 为 0

### prototype 属性 
对于 `ECMAScript` 中的引用类型而言，`prototype` 是保存它们所有实例方法的真正所在。换句话说，诸如
`toString()`和 `valueOf()` 等方法实际上都保存在 `prototype` 名下，只不过是通过各自对象的实例访
问罢了。在创建自定义引用类型以及实现继承时，`prototype` 属性的作用是极为重要的。
在 ECMAScript 5 中，prototype 属性是不可枚举的，因此使用 for-in 无法发现。

### apply() 方法 和 call() 方法
这两个方法的用途都是在特定的作用域中调用函数，实际上登裕设置函数体内 `this` 的值。 
#### `apply()` 
接受两个参数，一个是在其中运行函数的作用域，另外一个是参数数组。其中，第二个参数可以是 `Array` 的实例，也可以是 `arguments` 对象。
```js
function sum(num1, num2){
    return num1 + num2;
}
function callSum1(num1, num2){
    return sum.apply(this, arguments); // 传入 arguments 对象
}
function callSum2(num1, num2){
    return sum.apply(this, [num1, num2]); // 传入数组
}
alert(callSum1(10,10)); //20
alert(callSum2(10,10)); //20 
```

#### `call()`
`call()` 方法与 `apply()` 方法的作用相同，它们的区别仅在于接收参数的方式不同。对于 `call()`
方法而言，第一个参数是 `this` 值没有变化，变化的是其余参数都直接传递给函数。换句话说，在使用
`call()` 方法时，传递给函数的参数必须逐个列举出来

```js
function sum(num1, num2){
 return num1 + num2;
}
function callSum(num1, num2){
 return sum.call(this, num1, num2);
}
alert(callSum(10,10)); //20
```

###  apply()和 call() 常见用法

`apply()`和 `call()` 真正强大的地方是能够扩充函数赖以运行的作用域。

```js
window.color = 'red'
let v = {color:'blue'}

function sayColor(){
    console.log(this.color)
}

sayColor()                  //red
sayColor.apply(this)        //red
sayColor.call(this)         //red
sayColor.apply(v)           //blue
sayColor.call(v)            //blue
```

### bind() 方法
这个方法会创建一个函数的实例,该实例内部的 `this` 将会指向 `bind` 的参数。
```js
window.color = 'red'
let v = {color:'blue'}
function sayColor(){
    console.log(this.color)
}
let objSayColor = sayColor.bind(v)
objSayColor()  //blue
``` 
`sayColor()` 调用 `bind()` 并传入对象 `v` ，创建了 `objSayColor()` 函数。 `objSayColor()` 函数的
`this` 值等于 `v`，因此即使是在全局作用域中调用这个函数，也会看到 "blue"。