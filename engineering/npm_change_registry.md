# npm 切换源
查看源：
```bash
npm config list   # 查看当前配置 包含当前源字段： metrics-registry 

npm get registry  # 直接获取当前源
```
## 使用 config 命令切换

```bash
# 切换为 淘宝源 
npm config set registry https://registry.npm.taobao.org
```

## 编辑 ~/.npmrc

修改该文件中 registry 的值
```bash
registry = https://registry.npm.taobao.org
```

## 使用 nrm 进行源管理
1. 安装 nrm 
```bash
npm install global nrm
```

2. 常用的 nrm 命令

```bash
# 查看当前使用的源
nrm current

# 切换源
nrm use cnpm  # 源名称


# 查看所有源
nrm ls

# 添加源
nrm add 源名称 源地址

# 删除源
nrm del 源名称

# 测试源的速度
nrm test   # 查看全部的源的速度
nrm test 源名称  # 查看单个源的网速

```



