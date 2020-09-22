# Element-UI 中 make 自动化构建分析 
在习惯了使用 `package.json` 中的 `src` 来书写构建命令之后，看到了 [`Element-ui`](https://github.com/ElemeFE/element) 的代码仓库中有 `Makefile` 这样一个文件。于是
Google 一下，发现了这个东西的强大。

`Makefile` 是一个适用于 `C/C++` 的工具，较早作为工程化工具出现在 `UNIX` 系统中， 通过 `make` 命令来执行一系列的编译和连接操作。在拥有 `make` 环境的目录下， 如果存在一个 `Makefile` 文件。 那么输入 `make` 命令将会执行 `Makefile` 文件中的某个目标命令。

## 初识 `Makefile`

直接用 `Element-UI` 的 `Makefile` 文件作为例子来做演示。

```
.PHONY: dist test
default: help

install:
	npm install

new:
	node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))

deploy:
	@npm run deploy

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
```
> mac 中，是直接可以执行 make 命令的。 [Windows下载 make 的 GUN 工具](http://gnuwin32.sourceforge.net/packages/make.htm) 

如果电脑中已经在全局安装了 `make` 命令，那么当我们 clone `element` 的代码之后，在根目录执行 `make install` 这句命令将会起到和 `npm install` 一样的效果。
来看一下 `make install` 做了什么。
 1. 执行 `make` 命令， 在该目录下找到 `Makefile` 文件。
 2. 找到 `Makefile` 文件中对应命令行参数的 `install` 的目标。这里的目标就是 `install:` 
 3. 执行 `npm install` 下面的语句。 `npm run dev`

 ## `Makefile` 文件格式
 `make` 命令本身并不难， 它只是执行其后跟的 `target`。而 `target` 具体的内容体现在 `Makefile` 文件当中。 

 `Makefile` 文件由一系列规则构成，每一条的规则需要明确两件事情：构建目标是什么，以及如何构建。 每一条的规则都遵循一下格式:

 ```
<target> : <prerequisites>
[tab] <commands>
 ``` 
### 第一行被 `:` 分为了两部分。

* 前面部分为目标`target`, 是执行 `make target` 命令时可以匹配到的目标。
* 后一部分为前置条件(依赖目标), 如果第一行写为 `target1: target2 target3`, 那么在执行 `make target1` 的时候，需要先执行 `make target2` `make target3` 最后才会执行 `target1` 下面的  `commonds` 语句。

### 第二行必须由一个 `tab`键开始，后面跟着需要执行的语句

> 每一个规则的 `target` 都是必须的， `prerequisites` 和 第二行都是可选的， 但是两者之间必须至少存在一个。

只是这一点 `Element-UI` 项目中的 `Makefile` 代码就已经可以明白大部分了。但是看到代码中的第一行 `.PHONY: dist test` 这又是什么呢？

## 目标(target)与伪目标(phony target)
每一个规则都会包含一个 `target`, 在 `make` 中， `target` 通常是文件名， 指明这条规则需要构建的对象。**目标可以是一个或者多个文件名， 之间用空格隔开**。

当然，除了文件名， `target` 的名字还可以是具体的操作名称，这类 `target` 又被称为 `伪目标(phony target)`。例如下面的 `remove` 就是一个伪目标。他的作用是删除文件。
```
remove:
	rm *.js
```
但是再执行 `make remove` 的时候，这个目录下刚好也有一个文件叫做remove,那么这条命令是不会被执行的，因为 Make 发现该文件已经存在，就没有必要重新构建了，就会忽略掉这条命令。

为了避免这种情况的发生，可以主动声明 remove 是伪目标。

```
.PHONY: remove
remove:
	rm *.js
```

当使用 `.PHONY:` 主动声明 remove 是伪目标之后，make 就不会检查是否存在有 remove 的文件，而是每次都执行 remove 命令。
同样可以看到在 Element 项目中的 Makefile 文件中的第一行就声明了 `.PHONY: dist test`, 也是为了避免目录中已经存在的文件名导致该命令无法正常执行。

## 回声 @ 
在 Makefile 文件中 `#` 表示注释。
```
test:
	# 这是一条注释
	touch a.js
```
当执行 `make test` 之后，会打印一条注释，然后再创建 a.js 这个文件。

当在命令的前面加上 `@`， 就可以关闭回声。(由于 `echo` 也相当于输入回声，所以通常在注释和 `echo` 前面都加上 `@`)
```
test:
	@# 这是测试
	@echo some
```

> 在 Element 中， 如果执行 `make new some` 项目中就会生成一个新的组件, 让我们分析 `node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))` 这条命令，看一下涉及到的 make 知识。

## 变量

Makefile 允许使用等号来自定义变量, 使用 `$()` 来调用变量。
```
txt = hello world
test: 
	@echo $(txt)
```

## 自动变量 `$@`
Make 命令还提供了一些自动变量，他们的值与当前的规则有关。

`$@` 指代的是当前的目标，就是执行 make 命令所匹配的目标。比如执行 `make foo` 时， `$@` 就是指 `foo`

利用这个变量可以完成对当前目标的简写：
```
a.js b.js c.js:
	touch $@
```

## 特殊变量 `MAKECMDGOALS`
make 在执行时， 会设置一个特殊的变量 `MAKECMDGOALS`, 该变量记录了命令行参数指定的目标列表。也就是说使用这个变量，我们可以得到命令行的参数。

```
create:
	@echo $(MAKECMDGOALS)
```
执行命令 `make create newCom`  将会打印出 `create newCom` 这两个字段。

## 函数 
make 还可以使用函数， 格式如下：
``` 
$(function arguments)
# 或者
${function arguments}
```
### `filter-out` 反过滤函数

过滤掉 objs 中所有含有 pattert 的内容， 格式: 

```$(filter-out pattert, objs)```

```
objs = aa bb cc dd ee 
pattert = bb cc ee 
out: 
	@echo $(filter-out $(pattert), $(objs))
```
执行 `make out` 输出 `aa dd`

## `node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))`
在 Element 中 无论是执行 `make new some` 还是执行 `make new-lang some` 逻辑都是向某一个脚本文件传递一个参数。 
这条命令首先使用 `node` 来运行 `build/bin/new.js` 这个文件， 并且使用 `filter-out` 函数在命令行的参数中把当前目标去掉。

我们可以新建一个 `build/bin/new.js` 文件， 写入下面的代码，看一下输入内容。

```
 <!-- build/bin/new.js -->
console.log(process.argv)
```

**Makefile**
```
new:
	node build/bin/new.js $(filter-out $@, $(MAKECMDGOALS))
```
执行命令： `make new testCom` 输出。

```
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\***\\Desktop\\***\\a.js',
  'testCom' ]
```
在 new.js 中我们就可以通过 `process.argv[2]` 来拿到命令行的参数，来进一步编写脚本。







