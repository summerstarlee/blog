# shell 常用脚本

## 文件判断操作

* 判断文件件是否存在

```shell
if [ ! -d "/data/" ];then
echo "文件夹存在"
else
echo "文件夹不存在"
fi
```

* 判断文件是否存在
```shell
if [ -f "data/filename" ];then
echo "文件存在"
else
echo "文件不存在"
fi
```

* 其他文件比较形式
```
-e 判断对象是否存在
-d 判断对象是否存在， 并且为目录
-f 判断对象是否存在， 并且为常规文件
-L 判断对象是否存在， 并且为符号链接
-h 判断对象是否存在， 并且为软连接
-s 判断对象是否存在， 并且长度不为0
-r 判断对象是否存在， 并且可读
-w 判断对象是否存在， 并且可写
-x 判断对象是否存在，并且可执行
-O 判断对象是否存在， 并且属于当前用户
-G 判断对象是否存在，并且属于单签用户组
-nt 判断 file1 是否比 file2 新 [ "/data/file1" -nt "/data/file2" ]
-ot 判断 file1 是否比 file2 旧 [ "/data/file1" -ot "/data/file2"]
```

## shell 读取键盘输入 read
`read` 从标准输入读取数值， 命令语法：
```bash
read [-options] [variable]
```

例子：

```shell
echo -n  "please enter an integer ->"
read  num
if [[ $num =~ ^-?[0-9]+$ ]]; then
echo "$num is number"
else
 echo "num is not number"
fi
```