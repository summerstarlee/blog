# tag 标签管理

## 列出标签

```bash
# 列出标签列表
$ git tag

# 匹配模式列出标签
$ git tag -l/--list "v.1.*"
```

## 查看标签信息

```bash
$ git show v1.0.0
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number
```

## 创建标签

git 支持轻量标签和附注标签。

* 轻量标签仅是某次提交的引用。
* 附注标签是储存在git 数据库中的一个完成对象， 它包含打标签者的名字、电子邮件、日期、标签信息。

### 轻量标签

```bash
$ git tag v1.0.1 

$ git show v1.0.1

commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number
```

### 附注标签

```bash
$ git tag -a v1.0.2 -m "my version v1.0.2"

$ git show v1.0.1
tag v1.0.2
Tagger: Ben Straub <ben@straub.cc>
Date:   Sat May 3 20:19:12 2014 -0700

my version 1.0.2

commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number
```

## 后期添加标签

```bash
# 1. 找出提交记录id
$ git log --pretty=oneline
15027957951b64cf874c3557a0f3547bd83b3ff6 Merge branch 'experiment'
a6b4c97498bd301d84096da251c98a07c7723e65 beginning write support
0d52aaab4479697da7686c15f77a3d64d9165190 one more thing
6d52a271eda8725415634dd79daabbc4d9b6008e Merge branch 'experiment'
0b7434d86859cc7b8c3d5e1dddfed66ff742fcbc added a commit function
4682c3261057305bdd616e23b64b0857d832627b added a todo file
166ae0c4d3f420721acbb115cc33848dfcc2121a started write support

# 2. 针对提交 id 打标签
$ git tag -a v1.0.3  15027957
```

## 共享标签

使用 `git push` 并不会把标签推送到远程仓库上去， 需要显示的推送标签到服务器。

```bash
# 推送单个标签
$ git push origin v1.0.3

# 推送所有不在远程仓库的标签
$ git push origin --tags
```

## 删除标签

```bash
# 删除本地标签
$ git tag -d v1.0.3

# 删除远端分支 方法一
$ git push origin :refs/tags/v1.0.3
# 删除远端分支 方法二
$ git push origin --delete v1.0.3
```

## 检出分支

1. 可以使用 `git checkout v1.0.3` 让当前的向更改为 `v1.0.3` 引用的提交ID。 这种模式也叫做 `分离头指针` 状态。这种方式检出适用于只是查看当前标签的代码，不适用于更改， 因为更改提交后的代码不属于任何分支，只有一个提交ID， 不能通过分支查看，只能通过提交ID查看。

2. 对于需要基于标签修复代码，使用 `git checkout -b new_branch_name v1.0.3` 新建一个分支，在分支上面修改代码。
