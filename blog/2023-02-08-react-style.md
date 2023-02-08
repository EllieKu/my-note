---
title: React Style
description: How to add CSS in React
slug: react-style
tags: [react, css]
hide_table_of_contents: false
---

React 寫 CSS 的方式

## inline-style

- 值為 object
- 不能使用偽元素
- 駝峰式

```jsx
function Title() {
  return(
    <h2 style={{
      color: 'blue',
      textAlign: 'center'
    }}>hello!</h2>
  )
}
```

## import

兩種方式： 單文件與多文件

### 單文件

所有元件樣式寫在唯一的 css 檔

```jsx
// App.jsx
import './App.css';

function App() {
  return (
    <h1 className="h1">App<h1/>
  )
}
```

缺點：易讀性差

### 多文件

同元件名的 css 檔引入該元件

```jsx
// Page1.jsx
import './Page1.css';

function Page1() {
  return (
    <h1 className="h1">Page1<h1/>
  )
}
```

優點：易讀性佳,
缺點：全局污染, 因打包後各檔案產生\<style\>,皆放在\<head\>內使全部元件都會受影響

## CSS-IN-JS

在元件內撰寫含有樣式的html tag, 編譯後產生唯一值class作用在該tag上, 故各元件間不會互相干擾

相關套件有：[styled components](https://styled-components.com/)、[emotion](https://emotion.sh/docs/introduction)

```js
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

function App() {
  return (
    <Title>
      Hello World!
    </Title>
  )
}
```
