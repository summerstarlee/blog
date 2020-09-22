# Webpack 内置优化

## tree-shaking 模式 
把没有用到的代码自动删除掉
```js
// cal.js
export default {
    sum: (a, b) => {
        return a + b
    },
    sub: (a,b) => {
        return a - b
    }
}

// index.js
import cal from './cal.js'

console.log(cal.sum(2, 3))
```
在生产模式下 Webpack 打包上面的代码时，虽然 `cal.js` 中暴露两个属性， 但是由于 `index.js` 文件中只使用了 `sum` 属性， 所以并不会把 `sub` 也打包。 这种优化叫做 `tree shaking` 



## scope hosting 作用域提升
```js
let a = 1
let b = 2
let c = 3
let d = a + b + c
console.log(d)
```
在生产环境下， Webpack 在计算变量 `d` 的时候， 并不会 `a` `b` `c` 都打包到文件在进行计算， 而是在打包之前对变量 `d` 先进行计算， 使打包后的文件不包含 `a` `b` `c` 三个变量
