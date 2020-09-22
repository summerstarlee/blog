# standard-version 
`standard-version` 是一个使用 `semver`规范根据项目提交信息生成 `CHANGELOG` （更新日志）文件的工具。


## 参数选项 
1. 无参情况下，默认更新中间版本
```bash
# v1.2.1 => 1.3.0
$ npm run release 
```

2. `prerelease` 预发布版本 
```bash
# 更新预发布版本   1.2.1 => 1.2.1-0 
$ npm run release -- --prerelease 

# prerelease 后面添加 alpha/其他  定义预发布版本代号
# 1.2.1 => 1.2.1-alpha.0
$ npm run -- --prerelease alpha 
```

3. `release-as` 指定更新版本
```bash
# 1. 更新大版本
# 1.2.1 => 2.0.0
$ npm run -- --release-as major

# 2. 更新中间版本
# 1.2.1 => 1.3.0
npm run -- --release-as minor

# 3. 更新小版本
# 1.2.1 => 1.2.2
npm run -- --release-as patch

# 更新指定版本
# 1.2.1 => 2.3.4
npm run -- --release-as 2.3.4
```