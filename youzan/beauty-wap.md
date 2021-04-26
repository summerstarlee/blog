# beauty-wap 架构分析

## scripts:dev 启动脚本

```bash
branch=$(git symbolic-ref --short -q HEAD) && cross-env port=8210 NODE_ENV=qa trace=local BRANCH_NAME=$branch nodemon --watch server server/server.dev.js
```

* 定义 branch 字段, 使用 `git symbolic-ref --short -q HEAD` 命令获取当前分支
* 使用 cross-env 定义 prot node_env trace BRANCH_NAME
* 使用 nodemon 启动并监听 server.dev.js.  nodemon 的使用方式 `nodemon --watch path file` 启动 path 目录下的 file 文件。

## server.dev.js 使用 koa 启动服务

步骤总结：
1.

### app.js 返回一个 Koa 实例
