# Portal

```jsx
ReactDOM.createPortal(child, container)
```

```jsx
// React掛載了一個新的div, 並把子元素渲染其中
render() {
  return (
    <div>{this.props.children}</div>
  )
}
```

```jsx
// React沒有創建新的div, 而是把子元素渲染到 domNode 中
// domNode 是一個可在任何位置的 DOM 節點
render() {
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  )
}
```

*** 
以下看無