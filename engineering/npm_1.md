# npm 相关

1. 更新最新的正式版本

```bash
npm install npm@latest -g
```

2. 更新到最新的体验版本

```bash
npm install npm@next -g
```

3. 查看全局安装的模块

```bash
npm list -g --depth 0
```

# yarn global 命令

1. global 必须跟在 yarn 后面
2. 全局添加模块

```bash
yarn global add xxx
```

3. 列出全局安装模块

```bash
yarn global list
```

4. 全局移除某个模块

```bash
yarn global remove xxx
```

## 淘宝源设置

```
--registry=https://registry.npm.taobao.org
```
