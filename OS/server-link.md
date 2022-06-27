# 使用 ssh-config 快速登录
```bash
ssh root@172.0.0.1
```
为了避免每次登录服务器时都输入服务器的IP地址， 可以使用 ssh-config 配置服务器别名， 更方面的登陆服务器。

## 步骤
1. 在本地客户端环境上配置 ssh-config 文件。 进入当前用户的主目录下的 ssh 目录 (`~/.ssh/`) 添加服务器别名。

```bash
Host server_name  # 需要添加的服务器别名
  HostName  172.0.0.1  # 服务器 IP 地址
  User root  # 登录用户名
```

2. 使用 `ssh serve_name` 快速登陆。
```
ssh server_name
```
> 如果出现 `The authenticity of host '59.110.216.155 (59.110.216.155)' can't be established. ... Are you sure you want to continue connecting (yes/no)? yes` 提示， 输入 `yes` 即可。

# 免密码登录

公钥和私钥是成对出现的, **公钥用于加密， 私钥用于解密, 私钥用于数字签名，公钥用于验证**

当使用 ssh 密码登录时， 流程是这样的： 
1. 远程主机收到用户的登陆请求， 把自己的公钥发给用户。
2. 用户使用这个公钥将密码加密后发给远程主机。
3. 远程主机使用自己的私钥解密登录密码，如果密码正确就同意用户登录。

密码登录使用到的公私钥来自于服务端。 免密码登录的原理就是使用本地的公私钥加解密，他的过程是这样的：
1. 用户先将自己的公钥储存在远程主机上。
2. 登陆时，远程主机发送一段随机的字符串给用户。
3. 用户使用自己的私钥加密（签名）这段字符串发给主机。
4. 主机使用事先储存的公钥进行解密(验证)，如果成功允许登录，否则登陆失败。

步骤：
1. 查看本地是否有公钥私钥存在。目录在 `~/.ssh/`。 如果没有使使用 `ssh-keygen` 命令生成(一路回车即可)。
```bash
ssh-keygen
```

2. 将公钥推送到远程主机
```bash
ssh-copy-id user@host   # 用户名@主机IP
```

3. 确定远程 `/etc/ssh/sshd_config` 文件中配置。检查下面几行前面"#"注释是否取掉。

```bash
RSAAuthentication yes
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
```

4. 重启远程主机的 `ssh`
```bash
# centOS
systemctl  restart  ssh.service

# ubuntu
service ssh restart
```




