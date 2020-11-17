### git 相关

1. git 修改远程仓库地址
```bash
# 1. 删除远端分支的联系
git remote rm origin 

# 2. 添加新的远端分支
git remote add origin [url]
```

2. 获取 git 配置信息

```bash
# 查看配置信息 git config 环境 --list
# 查看系统配置
git config --system --list
# 查看用户配置信息
git config --global --list
# 查看本仓库配置
git config --local --list 
```

3. 设置 git 配置信息
```bash
# 修改用户级别的配置
git config --global user.name [username]
git config --global user.email [email]
```
