# beauty-wap 架构分析

## scripts:dev 启动脚本

```bash
branch=$(git symbolic-ref --short -q HEAD) && cross-env port=8210 NODE_ENV=qa trace=local BRANCH_NAME=$branch nodemon --watch server server/server.dev.js
```

* 定义 branch 字段
* 使用 cross-env 定义 prot node_env trace banch_name
* 使用 nodemon 启动并监听 server.dev.js  nodemon --watch path file

## server.dev.js 使用 koa 启动服务

### app.js 返回一个 Koa 实例



