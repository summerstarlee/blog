# 性能优化

## 避免调停
但一个组件的 props 或者 state 变更， React 会将最新返回的元素与之前的元素进行对比，以此决定是否有必要更新真实的 DOM， 当他们不同时，React 会更新该 DOM。

### shouldComponentUpdate
该方法会在重新渲染前被触发， 其默认值返回 true， 让 React 执行更新。 可以让该方法返回 false 跳过整个渲染过程。

```js
shouldComponentUpdate(nextProps, nextState) {
  return true;
}
```

### React.PureComponent 
React.PureComponent 以浅层对比 props 和 state 的方式实现了 shouldComponentUpdate 函数

## Portals 将元素渲染到父组件之外
```js
ReactDom.createPortal(child, container)
```

## profile 测量渲染一个 React 应用多久渲染一次以及渲染一次的代价。

```js
<Profiler id="Navigation" onRender={callback}>
    <Navigation {...props} />
</Profiler>
```

Profile 需要两个 props:
1. id  如果有多个 profiler，它能用来分辨树的哪一部分发生了“提交”。
2. onRender  React 会在 profile 包含的组件树种任何组件提交更新的时候调用这个函数，它的参数描述了渲染了什么和花费了多久。

