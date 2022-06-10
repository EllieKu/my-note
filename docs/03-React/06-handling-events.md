## 🍉 Handling Events 事件處理
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