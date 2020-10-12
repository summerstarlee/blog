# 原型链
```js
p.__proto__ = Person.pertotype
Person.constructor = Person.pertotype
Person.pertotype.__proto__ = Object.pertotype
Object.prototype.__proto__ = null

Person.__proto__ = Function.pertotype
Function.constructor = Function.pertotype
Function.pertotype.__proto__ = Object.pretotype
Object.prototype.__proto__ = null
```

