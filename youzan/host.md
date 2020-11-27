# host 相关配置

## host 文件列表 
* Daily 
* QA
* local
* 预发
每一个host 文件中保存了一系列 `域名-ip` 的记录, 如 `*.youzan.com 192.168.66.239`。那么当请求 `*.youzan.com` 这个域名的时候， 会将域名解析成 `192.168.66.239`。

## 转发规则
* beauty-wap 本地 node 服务
* beauty-wap 静态资源服务
* beauty-web 本地 node 服务
* ...
转发规则强化了 host, 他可以进行端口级别的转发配置， 并且还支持正则的方式匹配。
mei-pc-app 为例：










