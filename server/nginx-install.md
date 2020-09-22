# CentOS 使用 yum 安装 nginx 
1. 下载 yum-utils  工具
2. 添加 nginx 源仓库。新建 /etc/yum.repos.d/nginx.repo 文件并添加内容:
```
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

默认情况下使用 nginx 使用稳定版本的库包， 如果需要使用 mainline 版本， 使用以下命令设置
```bash
sudo yum-config-manager --enable nginx-mainline
```

3. 查看 nginx 的源是否已经添加成功.
```bash
yum search nginx
```

4. 安装 nginx 
```bash
yum install -y nginx
```

5. 查看是否安装成功
```bash
# 会输出已经安装的 nginx 文件
rpm -qa | grep nginx
```

6. 启动 nginx
```bash
systemctl start nginx
```

7. 加入开机启动
```bash
systemctl enable nginx
```

8. 查看 nginx 的状态
```bash
systemctl status nginx
```
如果 nginx 启动成功， 将会看到  active (running)

9. nginx 默认端口为 80(如果防火墙或者安全组有限制，需要设置)。在浏览器中输入服务器地址， 如果出现 nginx 的默认页面就说明配置成功了。