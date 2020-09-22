# element 阅读知识点储备


## node 知识
### fs.resolve()
### fs.readFileSync()
### fs.writeFile()
### os.EOL 
表示当前操作系统的行末标志。 `window` 系统为 `\r\n`; `linux` 系统上为 `\n` 


## npm 包

### postcss.parse 一个 css 语法解析器


### json-templater/string 字符串替换
 `json-templater/string` 是一个字符串替换的方法， 他接受2个参数，分别为为字符串模板、模板中需要替换的变量 `key` 组成的对象, 使用方法为

 ```js
 const render = require('json-template/string')
 const string = render(`first name:{{firstname}}, last name: {{lastname}}`, {firstname: 'Tom', lastname: 'Hellen'})
 
// string = "first name: Tom, last name: Hellen"
 ```

> `json-templater` 还包含 `json-templater/object` 方法, 它接受两个对象作为参数， 可以用第二个对象中的值替换到第一个参数中。

 ```js
 const render = require('json-template/object')
 const template ={
    "magic_key_{{magic}}": {
        "key": "interpolation is nice {{value}}"
    }
}
 const obj = render(template, {magic: 'key', value: 'value'})
 
 /** result 
obj = {
  magic_key_key: {
    key: 'interpolation is nice value'
  }
} */
 ```

### uppercamelcase
将破折号、点、下划线、空格分割的字符串转换成 `驼峰写法`


