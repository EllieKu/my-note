---
slug: jsx
title: JSX
tags: [react]
---
***

```jsx
const element = <h1>Hello World</h1>
```
- 是 JavaScript 的語法拓展
- 可以很好的呈現 UI 的形式, 透過將 markup 和 logic 共同放在 component 的耦合單元中, 來實現關注點分離
- React 不強制使用JSX

## Embedding Expressions in JSX 嵌入表達式
- 在大括弧{}中包裹JS表達式
```jsx
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
- JSX也是表達式

## Specifying Attributes with JSX 特定屬性
- 屬性值透過使用 **""** 引號指定為 string literals
- 屬性值透過使用 **{ }** 大括號來插入JS表達式 (number, boolean...)
- 命名使用 camelCase 

## Prevents Injection Attacks 防止注入攻擊
- ReactDOM 再渲染所有輸入內容前, 默認會進行轉譯. 所有內容在渲染之前都被轉換成了string
```jsx
const title = response.potentiallyMaliciousInput;
// 直接使用是安全的：
const element = <h1>{title}</h1>;
```

## Represent Object
- Babel 會把 JSX 轉譯為 <code>React.createElement()</code>函數調用
```jsx
// 以下兩種代碼完全等效

const element = (
  <h1 className="greeting">Hello</h1>
)

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello'
)
```
- <code>React.createElement()</code>會預先執行一些檢查, 實際上它創建了一個這樣的對象
```jsx
const element = { // 這是簡化過的結構
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello'
  }
}
```