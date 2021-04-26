# git cached

 在 `git` 项目中，想要阻止 `git` 监听某文件，需要把该文件添加到 `.gitignore` 中. 但有时已经添加到 `.gitinore` 中的文件还是会被 `git` 监控以至于提交到远端仓库。 这是因为 `.gitignore` 并不会忽略已经被监控的文件。

 `.gitignore` 文件只能作用于 `Untracked Files`, 也就是它只会作用于那些从来没有被 GIT 记录 （`git add/commit`）过的文件. 如果文件已经被 GIT 记录，那么 `.gitignore`就会忽略这个文件。

 解决这个问题的方式就是把本地已经缓存过得文件缓存删除，将文件改为 `Untracked` 状态，然后再使用 `git add/commit` 添加提交。

 ```bash
# 删除所有文件 track 
git rm -r --cached .
# 删除单个文件 track
git rm -r --cached 文件路径

git add .   # 这时的tracked 文件中没有了需要忽略的文件
git commit -m "update gitignore"
 ```
