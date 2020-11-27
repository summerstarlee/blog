# Typescript

## 函数参数解构
```ts
// 参数是对象， 有多个参数时
function add({one, two}: {one: number, two: number}): number {
    return one + two
}

// 参数是对象， 只有一个参数时
function add({one}: {one: number
}):number {
    return one + 23
}
```

## 定义数组
```ts
// 1. 类型后面加[]
let list: number[] = [1, 2, 3]

// 2. 使用泛型定义
let list: Arrary<number> = [1,2,3]

// 数组中存在多种类型
let list: (string | number)[] = ["1", 2, 3]

// 对象数组, 可以先给对象声明一个类型别名或者类
class Person {
    name: string;
    age: number;
}
type Person = {name: string, age: number}
let list: Person[] = [{name: 'aa', age: 12}]
```

## 元组

元组是对数组的拓展。
```ts
let list: (string | number)[] = [1, "2", 3]
```
向上面的代码中, 数组中值的顺序是可以随意调整的。元组规定了数组中的每个索引对应的类型。
```ts
let list: [number, string, number] = [1, "2", 3]
```
当访问的索引超过边界时, 将会使用联合类型替代。
```ts
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
```

## 枚举
`enum` 使用枚举类型可以为一组数值赋予友好的名字。
```ts
enum Color {Red, Green, Blue}

```

## 接口

