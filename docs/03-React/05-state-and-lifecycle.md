---
slug: state-and-lifecycle
title: State and Lifecycle
tags: [react]
---
***

## 🍉 State
state 是私有的且完全受控於當前組件。

<br/>

### Do Not Modify State Directly

使用 <code>setState()</code> 修改 state。
```jsx
// wrong
this.state.comment = 'Hello'

// correct
this.setState({comment: 'Hello'}) 
```

<br/>

### State Updates May Be Asynchronous

<code>this.state</code> 和 <code>this.props</code> 可能是異步更新，不要依賴它們的值來更新下一個狀態。

```jsx
// wrong
this.setState({ 
  counter: this.state.counter + this.props.increment
})

// correct, 讓 setState() 接收 function
this.setState((state, props) => ({
  counter: state.counter + props.increment
}))
```

<br/>

### State Updates are Merged
當調用 <code>setState()</code>， React 會提供的 object 合併到當前 state。

<br/>

### The Data Flows Down
通常是自上而下或單向的數據流。state 只屬於該組件，且從該 state 衍生的數據或 UI 只能影響樹中低於它們的組件。

<br/>

## 🍉 Lifecycle
- <code>componentDidMount</code>
- <code>componentWillUnmount</code>
- <code>componentUpdate</code>
