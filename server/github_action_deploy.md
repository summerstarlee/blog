# github Action 实现 GitHub Pages 和 私服 自动部署
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e28eae46f5fe437793ba602edea23fdf~tplv-k3u1fbpfcp-zoom-1.image)
github action 是基于 GitHub 的持续集成服务。 他提供一台服务器实例，再这个实例中允许通过 actions 来执行一个或者多个命令， 从而达到像抓取代码、运行测试、登录远程服务器、发布项目等功能。

## gitHub 组成

1. workflow (工作流): 每个需要单独运行的集成服务，就是一个 workflow

2. job (任务)： 一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。

3. step (步骤)：每个 job 由多个 step 构成，一步步完成。

4. action (动作)：每个 step 可以依次执行一个或多个命令（action）。

## git action 文件 - workflow

github actions 的配置文件是 workflow 文件, 存放在仓库中的 .gihub/workflows 目录中。

根据需求， workflow 可以创建多个。 workflow 规定使用 YAML 格式，文件名可以根据集成服务的功能任意取， 但是后缀必须使用 .yml。 GitHub 只要发现 .github/workflows 目录中存在就会自动运行这些文件。

## 常见的 workflow 配置字段

### name  
workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名。

```yml
name: GitHub Actions Demo
```

### on 
定义触发事件的git hook, 可以是单个 hook 名称或多个

```yml
# push  时触发事件
on:push

# push 和 pull 时都出发事件
on: [push, pull_request]
```

定义事件时，还可以限定分支和标签
```yml
on:
  push:
    branches:
      - master
    
```

### jobs
workflow 文件的主体是jobs字段，表示要执行的一项或多项任务。

jobs字段里面，需要写出每一项任务的job_id，具体名称自定义。job_id里面的name字段是任务的说明。

```yml
jobs:
  # 定义的第一个任务 
  my_first_job:
    name: My first job
  
  # 定义的第二个任务
  my_second_job:
    name: My second job
```

***jobs.<job_id>.needs***
needs字段指定当前任务的依赖关系，即运行顺序。
```yml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

上面代码中，job1必须先于job2完成，而job3等待job1和job2的完成才能运行。因此，这个 workflow 的运行顺序依次为：job1、job2、job3。

***jobs.<job_id>.runs-on***
runs-on 字段指定运行所需要的虚拟机环境，他是必填字段，目前可以选择：
```yml
ubuntu-latest，ubuntu-18.04或ubuntu-16.04

windows-latest，windows-2019或windows-2016

macOS-latest或macOS-10.14
```

***jobs.<job_id>.steps***

steps字段指定每个 Job 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。

```yml
jobs.<job_id>.steps.name：步骤名称。
jobs.<job_id>.steps.run：该步骤运行的命令。
jobs.<job_id>.steps.use：该步骤运行的 action。
jobs.<job_id>.steps.env：该步骤所需的环境变量。
```

> 每一个 steps 中必须存在一个 run 或者 action。


一个完整的 workflow 文件如下：

***。github/workflows/main.yml***

```yml
name: first github action workflow
on:
  push:
    branches:
      - master

jobs:
  first-job:
    name: my first job demo
    runs-on: ubuntu-latest
    steps:

      name: first-action
      run:  |
        echo hello world
```






```yml
name: github actions build and deploy gh-pages
on:
  push: 
    branches:
      - master
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1
        with:
          persist-credentials: false
      
      - name: Install and Build 🔧
        run: |
          npm install
          npm run build
        
      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@3.5.7
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages 
          FOLDER: dist 

```


```yml
		
name: newBlog deploy shell

on:
  push:
    branches: 
      - new

jobs:
  setup-build-publish-deploy:
    name: Setup, Build, Publish, and Deploy
    runs-on: ubuntu-latest
    steps:

    - name: Checkout
      uses: actions/checkout@v2
      with:
        persist-credentials: false

    - name: Install and build 🔧
      run: |
        yarn 
        yarn build
    
    - name: Deploy to Server 🚀
      uses: easingthemes/ssh-deploy@v2.1.5
      env: 
        SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        SOURCE: "build/"
        REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
        REMOTE_USER: ${{ secrets.REMOTE_USER }}
        TARGET: ${{ secrets.REMOTE_TARGET }}
```