---
slug: handling-events
title: Handling Events
tags: [react]
---
***

- 事件命名採小駝峰 camelCase
- 使用 JSX 語法時需要傳入 function 作為 event handler，而不是 string
```html
<!-- HTML -->
<button onclick="handleClick()">click1</button>
```
```jsx
// JSX
<button onClick={handleClick}>click1</button>
```
- 阻止默認行為在 React 中必須使用 <code>preventDefault</code>，不能像 html 使用<code>return false</code>
```html
<!-- HTML -->
<button onclick="console.log('The link was clicked'); return false">click2</button>
```
```jsx {4}
// JSX
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      click2
    </a>
  );
}
```

<br/>

## 🍉 Passing Arguments to Event Handlers
```jsx
// 若要傳遞id, 下列兩種等價:
// 1. 箭頭函式下 React event 會作為第二個參數傳遞, 必須顯示進行傳遞
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

// 2. 透過 bind 的方式, React event 會隱式進行傳遞
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```