# 文本溢出截取

## 单行截取
```css
.single-line {
    /* 不进行换行， 让超出的文本跑到外面去 */
    white-space: nowrap;
    /* 跑到外面的文本隐藏 */
    overflow: hiddle;
    /* 指定文本溢出的方式为 ... */
    text-overflow: ellipsis;
}
```

## 多行截取
```css
.multi-line {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* 指定文本在第几行进行截断，并添加...。 该属性只有在设置 dispaly 为 -webkit-box 或者 -webkit-inline-box 并且设置 -webkit-box-orient为 vertical 时才有效果 */
    -webkit-line-clamp: 3;
    overflow: hidden;
}
```