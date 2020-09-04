# windows 查看端口并 kill 某个进程

```bash
# 查看当前系统所有端口使用情况
netstat -ano

# 查看某个端口被那个应用占用
netstat -ano | findstr 8080

# 使用某个 pid 对应的进程应用名称
tasklist | findstr 2124

# 删除某个 pid 对应的进程
taskkill -pid 2124 -f
```