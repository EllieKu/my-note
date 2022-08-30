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

## 🍉 Virtual DOM

- `DOM` 是瀏覽器中的概念，用 JavaScript Object 表示頁面上的元素，並提供操作 DOM object 的 API。
- `Virtual DOM` 是 JavaScript object 來模擬 DOM 和 DOM嵌套 關係，以實現頁面的高效更新。

## 🍉 Diff 算法

- `tree diff`： 新舊DOM樹逐層對比的過程。
- `component diff`： 進行 tree diff 時每層中 component 的對比。如果對比前後 component 類型結果：
  - 相同： 暫時認為此 component 不需被更新。
  - 不同： 移除舊 component ，創建新 component 並追加到頁面上。
- `element diff`： 進行 component diff 時，如果兩個 component 類型相同，則需進行 element 的對比。

## Style

- 同元素只可存在一個class屬性
- style樣式使用駝峰式

```jsx
const style = {
  width: "200px",
  borderBottom: "1px solid black"
}
```
