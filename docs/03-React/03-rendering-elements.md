---
slug: rendering-elements
title: Rendering Elements
tags: [react]
---
***

假設 HTML 文件內某處有個 <div\> :

```jsx
<div id="root"></div>
```

稱其為 root DOM，該節點內所有內容都將由 React DOM 管理。

若想將 React 元素渲染到 root DOM，只需要將它們傳入 `ReactDOM.render()`：

```jsx
const element = <h1>Hello</h1>
ReactDOM.render(element, document.getElementById('root'))
```

React 只會更新它需要更新的部分：React DOM 會將元素與子元素與之前的狀態比較，並只進行必要的更新。

只有當下列兩中情形發生時，React DOM 才會進入 re-render 該 component 的 update 程序更新畫面：

- props 值改變
- state 值改變
