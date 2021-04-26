# 在本地设置一个或者多个id_rsa 来连接 github 仓库并实现 git push / git pull

## 场景一： 本地只需要一个 ssh id_rsa 来连接 GitHub仓库

现在有一个自己的 github 仓库 `git@github.com:AAA/AAA.git`, 需要将这个仓库 `clone` 到本地修改代码并提交。

```bash
git clone git@github.com:AAA/AAA.git
```

再修改一些文件后提交代码

```bash
git add .
git push 
```

会出现报错：`ERROR: Permission to AAA.git`
![permission error](https://user-gold-cdn.xitu.io/2020/3/10/170c2419ead89e49?w=924&h=196&f=png&s=21215)

这是因为 本地仓库没有权限推送到远端的 `github` 仓库。

### 解决方法

1. 查看本地是否存在 `~/.ssh/id_rsa` 文件。

```bash
# 查看是否存在 .ssh 目录
ls ~ -a  # 列出所有文件，看是否含有 .ssh

# 如果存在 .ssh 目录，查看是否存在 id_rsa、 id_rsa.pub 文件
ls ~/.ssh -a
```

2. 如果没有 `.ssh` 目录 或者 没有 `id_rsa`  `id_rsa.pub`

```bash
mkdir .ssh # 如果没有 .ssh 目录
cd .ssh
# 如果没有 id_rsa、 id_rsa.pub 文件，运行下面的命令， 并一路回车
ssh-keygen -t rsa -C "your_email@example.com" 
```

3. 打开 自己的 `github`。 `settings -> SSH and GPG keys -> New SSH key`。
4. 将本地刚刚生成的 `~/.ssh/id_rsa.pub` 里面的内容拷贝到 `New SSH key` 的`Key`里面。

```bash
# 进入 .ssh 目录
cd ~/.ssh/
cat id_rsa.pub
```

![](https://user-gold-cdn.xitu.io/2020/3/10/170c24b454372399?w=578&h=186&f=png&s=40637)

将显示的内容拷贝到  `New SSH key` 的`Key`里面。 并添加一个 `title`， 点击 `Add SSH key`

5. 再次进入到刚开始 `clone` 的项目目录， 执行 `git push` 就能成功了。

> 上面讲到的解决方案，目的是为了建立一个匹配本地和远端git的钥匙，这把钥匙是一串密码，本地使用这串要是只能开一把某一个 github 用户下的仓库。

## 情景二： 如果我们有两个 github 的用户 A 和 B， 当切换到另外一个用户 B，并在本地 clone 了这个用户下的一个仓库， 这时当 `git push` 的时候又会遇到 同样的 权限问题： `ERROR: Permission to XXX.git` 或者 `master -> master (Permission denied)`

这是因为在本地中已经配置了一个 ssh的 公钥（id_rsa.pub）， 而这个公钥是 匹配的是 github 用户 A 的锁, 当我们切换到 github 用户 B，的时候，这把公钥没有权限的。

### 解决方案

1. 生成一个新的 SSH KEY （id_rsa  id_rsa.pub）

```bash
# 进入 .ssh 目录
cd ~/.ssh/
# 新建另外一个 ssh key
ssh-keygen -t rsa -C "your_BBB_email@example.com"
```

***这里不要一路回车***, ***这里不要一路回车***, ***这里不要一路回车*** 会有一个提醒 去填写一个 key 的保存路径， 填写一个新的 id_rsa 的路径. 比如： id_rsa_userBBB ，图中我使用了 id_rsa_BBB 其他的一路回车就可以了。

![](https://user-gold-cdn.xitu.io/2020/3/10/170c24e6b8fc2da3?w=1024&h=493&f=png&s=98610)

2. 查看新的 id_rsa_BBB, 并复制.
![](https://user-gold-cdn.xitu.io/2020/3/10/170c24f5b8b420d5?w=698&h=226&f=png&s=49117)

3. 打开BBB帐号的  `github`。 `settings -> SSH and GPG keys -> New SSH key`。
4. 将本地刚刚生成的 `~/.ssh/id_rsa_BBB.pub` 里面的内容拷贝到 `New SSH key` 的`Key`里面。

> 这时候虽然已经新建一把公钥连接了新的github 用户和本地，但是问题还没有解决，ssh 并不能区分两把钥匙，默认情况下他只使用 A 的钥匙，可以在BBB账户仓库的根目录做一下测试：

```
ssh -T git@github.com
```

![](https://user-gold-cdn.xitu.io/2020/3/10/170c2525826c5f44?w=691&h=101&f=png&s=24140)
可以看到在BBB帐号下的仓库，使用的还是AAA 用户的 `权限钥匙`

### 下面需要将本地的两把钥匙做一下区分，以便在使用 `git push` 的时候，让 git 知道该使用那一把钥匙

1. 打开 `~/.ssh/config` 文件  如果没有就新建一个。
2. 编辑 config 内容：

```bash
# default github setting 
Host github.com
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa

# another user rsa pub 
Host github-BBB
HostName github.com
User git
# ~/.ssh/id_rsa_BBB 文件为刚生成的 rsa 文件
IdentityFile ~/.ssh/id_rsa_BBB
```

3. 在BBB帐号仓库下替换 git 仓库的地址。

```bash
git remote -v # 查看仓库地址
```

![](https://user-gold-cdn.xitu.io/2020/3/10/170c255d83833de5?w=647&h=121&f=png&s=26153)
我们需要将仓库的地址中的 `github.com/`替换成 `github-BBB：`(`github-BBB` 字段是在 config 文件中添加的 Host 字段 )

```bash
 git remote set-url origin github-BBB:BBB用户/XXX仓库.git
```

这样每次 `git pull / git push` 的时候， 都会经过 `Host` 的匹配，来把钥匙指向 `~/.ssh/id_rsa_BBB`  文件，这样本地就能分清楚哪一个仓库具体应该使用那一把钥匙喽。

> 多个 公钥匹配不同的仓库都可以使用这种方式解决。
> 使用命令： ssh -T git@Host 可以查看Host 钥匙和对应仓库锁的关系

## Warning: Permanently added the RSA host key for IP address 'xxx.xx.xxx.xxx' to the list of known hosts

![](https://user-gold-cdn.xitu.io/2020/3/10/170c258b3563d952?w=1054&h=188&f=png&s=55050)

这是因为系统默认的RSA 文件名是 `id_rsa`, 但是我们现在创建了另外一个 RSA 文件 `id_rsa_BBB`, 这个文件匹配到的 `HostName`地址 (`config`文件中设置的) 的 IP 并不存在于 RSA host 列表中，需要将这个 IP 的 host 永久地加入到 RSA host 列表中。

1. 进入到 `.ssh 目录` 新建一个 SSH 的代理，用来存放 RSA host 列表

```bash
 eval "$(ssh-agent -s)"
```

![](https://user-gold-cdn.xitu.io/2020/3/10/170c259502ab1e3a?w=375&h=88&f=png&s=9190)
2. 添加新建的密钥文件到代理中：

```bash
ssh-add id_rsa_BBB
```

![](https://user-gold-cdn.xitu.io/2020/3/10/170c25b56d3aa2f7?w=576&h=99&f=png&s=16399)

> 总结： 本地仓库推送到远端仓库使用 ssh 连接， 这就需要使用到 ssh 的 id_rsa 作为打开远端仓库的钥匙。
>
> 1. 当单个本地钥匙连接远端时，只用配置一个 id_rsa， 然后在 github 仓库中新增一个ssh key， 将 id_rsa.pub 的内容设置为这个 key 就能实现连接了。
> 2. 当需要连接多个 github 仓库时， 就需要在本地新建对应多的id_rsa, 并使用不同的文件进行区分， 然后使用 config 文件 来配置不同 id_rsa 对应的 `host / hostName / IdentityFile`,来实现钥匙的区分。 再把不同的仓库名称使用 host 来重新设置远端仓库的地址。 最后对应的 id_rsa 的公钥添加到 github 的 SSH key 
