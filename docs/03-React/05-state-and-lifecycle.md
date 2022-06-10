---
slug: state-and-lifecycle
title: State and Lifecycle
tags: [react]
---
***

## 🍉 State
- state 是**私有**的且**完全受控於當前組件**
- 不要直接修改 state, 應使用 **setState()**
```jsx
this.state.comment = 'Hello' // wrong, 此行不會重新渲染組件
this.setState({comment: 'Hello'}) // correct
```
- state 和 props 可能是異步更新, 不要依賴它們的值來更新下一個狀態.
```jsx
// wrong
this.setState({ 
  counter: this.state.counter + this.props.increment
})

// correct, 讓setState()接收一個函數
this.setState((state, props) => ({
  counter: state.counter + props.increment
}))
```
- state 的更新會被合併： 當調用 `setState()` 以下看不懂
- 數據是自上而下的單向流動. state只屬於該組件, 且只能影響低於它們的組件

<br/>

## 🍉 Lifecycle
- <code>componentDidMount</code>
- <code>componentWillUnmount</code>
- <code>componentUpdate</code>
