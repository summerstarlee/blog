# Eslint 配合 prettier 使用


* prettier 是一个对代码风格进行格式化的工具。
* prettier 和 eslint 并没有直接关联, 如果要在 eslint 中使用 prettier 的风格规范， 就需使用 eslint 的插件 `eslint-plugin-prettier`, 这个插件作用是添加 prettier 作为 eslint 的规则配置, 把不符合 prettier 规范的代码进行提示。 
* eslint 默认可能会和 prettier 规范有冲突, 所以需要使用 eslint-config-prettier 插件关闭 eslint 中可能和 prettier 有冲突的规则。


1. 安装依赖
```bash
yarn add eslint prettier eslint-plugin-prettier eslint-config-prettier -D
```

2. 添加 eslint 配置
```json
{
  "plugins": ["prettier"],
  "extends": ["eslint:recommended", "prettier"],
  "rules": {
      "prettier/prettier": "error"
  }
}
```

> 1. eslint 支持插件名(plugins)和 extents 名字省略前面的 'eslint-plugin-' 和 'eslint-config-'
> 2. 需要在 rules 中显示添加 `"prettier/prettier": "error"`, 表示被 prettier 标记的地方抛出错误信息。

3. 更改 prettier 默认风格规范

添加 .prettierrc 文件可以覆盖掉 prettier 默认的规范。

常见的默认规则：

```
printWidth: 80              // 一行最多字符数
tabWidth: 2                 // 使用2个空格缩进
useTabs: false              // 是否使用tab 作为缩进，默认使用 空格作为缩进         
semi: true                  // 行尾要有分号
singleQuote: false          // 使用单引号
trailingComma: es5          // 行尾不需要加逗号
noBracketSpacing: true      // 大括号的首位需要加空格
arrowParens: always         // 箭头函数，只有一个参数的时候，也需要括号 
```

## create-react-app 添加 prettier 配置
默认情况下， `react-react-app` 中只添加了 `eslint` 的配置。 `cra` 项目中添加 `prettier` 的步骤如下:
1. 安装依赖
```bash
yarn prettier eslint-plugin-prettier eslint-config-prettier -D
```
2. 修改 `.eslintrc` 文件
```json
{
  "extends": [
    "react-app",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": 2
  }
}
```
3. 添加 `.prettierrc` 文件
```json
{
  "semi": false,
  "singleQuote": true,
  "arrowParens": "avoid"
}
```


