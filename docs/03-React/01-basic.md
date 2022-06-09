---
slug: basic
title: Basic
tags: [react]
---
***

React 的基礎觀念

## 創建專案
至終端機輸入, hello-world為專案名稱
```terminal
create-react-app hello-world
```

## 🧱 Virtual DOM
- <code>DOM</code> 是瀏覽器中的概念，用 JavaScript Object 表示頁面上的元素，並提供操作 DOM object 的 API。
- <code>Virtual DOM</code> 是 JavaScript object 來模擬 DOM 和 DOM嵌套 關係，以實現頁面的高效更新。

## 🧱 Diff 算法
- <code>tree diff</code>： 新舊DOM樹逐層對比的過程。
- <code>component diff</code>： 進行 tree diff 時每層中 component 的對比。如果對比前後 component 類型結果： <br />
  - 相同： 暫時認為此 component 不需被更新。 <br />
  - 不同： 移除舊 component ，創建新 component 並追加到頁面上。
- <code>element diff</code>： 進行 component diff 時，如果兩個 component 類型相同，則需進行 element 的對比。

## Style
- 同元素只可存在一個class屬性
- style樣式使用駝峰式
```jsx
const style = {
  width: "200px",
  borderBottom: "1px solid black"
}
```

## Component 組件
- 組件名稱首字必須以大寫字母開頭: React會將小寫字母開頭的組件視為原生DOM標籤
### function component
- 一般用於無狀態、靜態、沒有交互事件的組件頁面
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

### class component
- 又稱為動態組件, 一般會有交互或數據的修改(有狀態)
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {props.name}</h1>
  }
}
```
- 需要綁定 **this**, 如果忘記綁定`this.handleClick`並將它傳入`onClick`, 當調用此函數時`this`的值為`undefined`
```jsx
  class Toggle extends React.Component {
    constructor(props) {
      super(props)
      this.state = {isToggleOn: true}

      // 為了在回調函數中使用, 此綁不可少
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }))
    }

    render() {
      <button onClick={this.handleClick}>{this.state.isToggleOn? 'ON' : 'OFF' }</button>
    }
  }

```

### state
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
- state 的更新會被合併: 當調用 `setState()` 以下看不懂
- 數據是自上而下的單向流動. state只屬於該組件, 且只能影響低於它們的組件

### render( )
- React component 會用 *render( )*去蒐集要渲染到畫面上的東西(放在*return*值)再去改變DOM
- *render( )* 只是渲染前的最後一個階段, 元件還未真正渲染至DOM, 所以不要在 *render( )* 上操作有關 *return* 元素的DOM

## Lifecycle
- `componentDidMount`: 當組渲染完成時運行
- `componentWillUnmount`: 

## Handling Events 事件處理
- 事件命名採小駝峰camelCase
- 使用 JSX 語法時需要傳入一個 function 作為 event handler, 而不是一個 string
```HTML
<!-- HTML -->
<button onclick="handler()">click</button>
```
```jsx
// JSX
<button onClick={handler}>click</button>
```
- 傳遞參數
```jsx
// 若要傳遞id, 下列兩種等價

// 箭頭函式下 React event 會作為第二個參數傳遞, 必須顯示進行傳遞
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

// 透過 bind 的方式, React event 會隱式進行傳遞
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
- 在React中阻止默認行為`e.preventDefault`, 使用`return false`無效 