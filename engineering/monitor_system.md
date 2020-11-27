# 前端异常监测系统搭建

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f8505d69ca044dca5cb05ed52b1e3e3~tplv-k3u1fbpfcp-watermark.image)

[[toc]]

## 错误收集

### js 异常

js 异常的特点： 出现不会导致崩溃，只会终止当前执行的任务。

```js
    setTimeout(() => {
        console.log('1 -> begin');
        error
        console.log('1 -> begin');
    })

    setTimeout(() => {
        console.log('2 -> begin');
        console.log('2 -> begin');
    })
```

#### try-catch 收集

```js
    setTimeout(() => {
        try{
            console.log('1 -> begin');
            error
            console.log('1 -> begin');
        }catch(e) {
            console.log('error', e)
        }
    })

```

* 含有栈错误收集

```js
    function fn () {
        console.log('1 -> begin');
        error
        console.log('1 -> begin');
    }

    setTimeout(() => {
        try{
            fn()
        }catch(e) {
            console.log('error', e)
        }
    })
```

* try-catch和异步

```js
    function fn () {
        console.log('1 -> begin');
        error
        console.log('1 -> begin');
    }


    try{
        setTimeout(() => {
            fn()
        })
    }catch(e) {
        console.log('error', e)
    }
```

#### 全局监听

***在线上环境中， 不想在控制台打印错误，该怎办？***

* window.onerror

```js
    function fn() {
      console.log("1 -> begin");
      error;
      console.log("1 -> begin");
    }

    window.onerror = (...args) => {
        console.log('on error ::', args);
    }

    setTimeout(() => {
        fn();
    });
```

window.onerror 的弊端是：？？？

* error 监听

```js
    function fn() {
      console.log("1 -> begin");
      error;
      console.log("1 -> begin");
    }

    window.addEventListener('error', args => {
        console.log(args)
    }, true)

    setTimeout(() => {
        fn();
      });
```

* promise 异常监听

```js
new Promise((resolve, reject) => {
    abc()
})

window.addEventListener("unhandledrejection", e => {

});
```

#### 总结

|异常类型|同步方法|异步方法|资源加载|promise|async/await|
|:-:|:-:|:-:|:-:|:-:|:-:|
|try/catch|✔||||✔|
|onerror|✔|✔||||
|error 监听|✔|✔|✔|||
|unhandledrejection 监听||||✔|✔|

### Vue 错误监听

### React 错误监听

## 错误上报

### 上报方式

#### xxx

#### xxx

### 错误收集 sdk

```js

window.addEventListener('error', args => {
  console.log('error', args);
  uploadError(args)
  return true
}, true)

// 上报数据序列化
function uploadError({lineno, colno, error: {stack}, timeStamp, message, filename}) {
  const info = {
    lineno,
    colno,
    stack,
    timeStamp,
    message,
    filename
  }

  const str = window.btoa(JSON.stringify(info))

  const host = 'http://localhost:7001/monitor/error'

  new Image().src = `${host}?info=${str}`
}

```

## 服务端收集

1. 项目搭建

```bash
egg-init backend --type=simple

cd backend

npm run dev
```

2. 添加错误收集接口

```js
// 创建一个新的路由
  router.get('/monitor/error', controller.monitor.index);
```

```js
// 创建 Controller
'use strict';

const Controller = require('egg').Controller;
const { getOriginSource } = require('../utils/sourcemap')
const fs = require('fs')
const path = require('path')

class MonitorController extends Controller {
  async index() {
    const { ctx } = this;
    const { info } = ctx.query
    // 反序列化数据
    const json = JSON.parse(Buffer.from(info, 'base64').toString('utf-8'))
    console.log('fronterror:', json)
    ctx.body = '';
  }
}

module.exports = MonitorController;
```

### 接收日志并记录到日志中

#### 定制日志处理

```js
    // 添加配置
  config.customLogger = {
    frontendLogger: {
      file: path.join(appInfo.root, 'logs/frontend.log')
    }
  }


  // Controller 中使用配置

  async index() {
    const { ctx } = this;
    const { info } = ctx.query
    const json = JSON.parse(Buffer.from(info, 'base64').toString('utf-8'))
    console.log('fronterror:', json)
    // 记入错误日志
    this.ctx.getLogger('frontendLogger').error(json)
    ctx.body = '';
  }
```

每次异常会存在 log 文件中

## sourcemap 日志分析

### 思路

1. 每次打包的时候上传一份sourcemap 源文件到服务器
2. 项目运行的时候出错的时候讲错误信息传给服务端
3. 服务端通过得到的参数（主要是filename 参数对和服务端的source map 进行对比， 然后解析出错误的原位置）

### sourcemap  文件上报

#### webpack plugin

##### 初始化插件解构

```js
const fs = require('fs')
var http = require('http');

class UploadSourceMapWebpackPlugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    // 打包结束后执行
    compiler.hooks.done.tap("upload-sourcemap-plugin", status => {
      console.log('webpack runing')
    });
  }
}

module.exports = UploadSourceMapWebpackPlugin;
```

##### 添加 sourcemap 读取

```js
    apply(compiler) {
        console.log('-----------------UploadSourceMapWebPackPlugin apply--------------------')
        // 定义在打包后执行
        compiler.hooks.done.tap('upload-sourecemap-plugin', async status => {
            // 读取sourcemap文件
            const list = glob.sync(path.join(status.compilation.outputOptions.path, `./**/*.{js.map,}`))
            for (let filename of list) {
                await this.upload(this.options.uploadUrl, filename)
            }
        })
    }
```

##### 实现上传功能

```js
    upload(url, file) {
        return new Promise(resolve => {
            console.log('upload Map:', file)

            const req = http.request(
                `${url}?name=${path.basename(file)}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        Connection: 'keep-alive',
                        'Transfer-Encoding': 'chunked'
                    }
                }
            )
            fs.createReadStream(file)
                .on('data', chunk => {
                    req.write(chunk)
                })
                .on('end', () => {
                    req.end()
                    resolve()
                })
        })
    }
```

### 服务端添加上传接口

```js
router.post('/monitor/sourcemap', controller.monitor.upload)

async upload() {
    const { ctx } = this
    const stream = ctx.req
    const filename = ctx.query.name
    // 这里需要定义基础路径
    const dir = path.join(this.config.baseDir, 'uploads')
    // 判断upload是否存在
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    const target = path.join(dir, filename)
    console.log('writeFile:', target)
    const writeStream = fs.createWriteStream(target)
    stream.pipe(writeStream)
}
```

### sourcemap 解析

#### 初始化 反序列类

```js
// /utils/stackparser.js
module.exports = class StackPaser {
    constructor(sourceMapDir) {
        this.consumers = {}
        this.sourceMapDir = sourceMapDir
    }
}
```

#### 反序列 Error 对象 [error-stack-parser](https://www.npmjs.com/package/error-stack-parser)

为了前端的错误类型转换为 stackFrame。

```js
// /utils/stackparser.js
    parseStackTrack(stack, message) {
        const error = new Error(message)
        error.stack = stack
        const stackFrame = ErrorStackParser.parse(error)
        return stackFrame
    }
```

```js
    // 测试
    // 转换源码位置
    const stackParser = new StackParser(path.join(this.config.baseDir, 'uploads'))
    const stackFrame = stackParser.parseStackTrack(json.stack, json.message)
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7aa772180064ff29b2f5fb6ea29c8ce~tplv-k3u1fbpfcp-zoom-1.image)

#### 将错误转换成源码中的位置 [source-map](https://www.npmjs.com/package/source-map)

```js
const { SourceMapConsumer } = require("source-map");

async getOriginalErrorStack(stackFrame) {

    const origin = []
    for (let v of stackFrame) {
        origin.push(await this.getOriginPosition(v))
    }
    console.log('-----------getOriginalErrorStack --------', origin)
    return origin
}

async getOriginPosition(stackFrame) {
    let { columnNumber, lineNumber, fileName } = stackFrame
    fileName = path.basename(fileName)

    console.log('---------------判断consumer是否存在---------', fileName);
    // 判断consumer是否存在
    let consumer = this.consumers[fileName]
    if (consumer === undefined) {
        // 读取sourcemap
        const sourceMapPath = path.resolve(this.sourceMapDir, fileName + '.map')
        // 判断文件是否存在
        if (!fs.existsSync(sourceMapPath)) {
            return stackFrame
        }
        const content = fs.readFileSync(sourceMapPath, 'utf-8')
        console.log('sourceMap',sourceMapPath)
        // console.log('content',content)
        consumer = await new SourceMapConsumer(content, null)
        this.consumers[fileName] = consumer
    }
    const parseData = consumer.originalPositionFor({line:lineNumber,column:columnNumber})
    console.log('parseData',parseData)
    return parseData
}
```

#### 将源码记录到日志中

```js
    // 转换源码位置
    const stackParser = new StackParser(path.join(this.config.baseDir, 'uploads'))
    const stackFrame = stackParser.parseStackTrack(json.stack, json.message)

    console.log('-----------stackFrame------------', stackFrame);

    const originStack = await stackParser.getOriginalErrorStack(stackFrame)

    this.ctx.getLogger('frontendLogger').error(json, originStack)

    ctx.body = '';
```

## 总结

## TodoList

1. 日志数据化
2. 细化异常颗粒
3. 日志可视化
4. 日志分析
5. 监控系统完善
