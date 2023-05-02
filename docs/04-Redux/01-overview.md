---
slug: overview
title: Overview
tags: [redux]
---
***

## Redux 是什麼

集中化管理與更新應用程式的狀態.

## 使用原因與時機

Redux 更容易管理應用程式的狀態, 以及理解事件邏輯. 以下情況適合使用：

- 應用程式內有多組件需共享狀態, Redux 提供了一個集中式存儲，方便組件訪問和修改狀態
- 當數據更新邏輯複雜, Redux 強制使用單向數據流和純函式更新應用狀態，使狀態變更更容易預測和理解

## 概念

### 狀態管理 State Management

- `state`: 數據狀態
- `view`: 呈現數據的畫面
- `action`: 描述數據狀態變化的事件

單向數據流

![https://redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png](https://redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png)

### 不可變性 Immutability

redux 的狀態更新都是 immutably. 每當改變狀態時, 會創建一個新狀態副本, 並將修改應用在副本上.

## 術語

### Actions

發生的事件

- `type`: 事件名
- `payload`: 參數

```js
// Action Creator
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

### Reducers

接收 `state` 和 `action`, 決定如何更新狀態. 下列規則：

- 使用傳入參數 `state` 和 `action` 來計算新狀態
- 不可修改現存 `state`, 應複製副本後修改副本
- 不可有 asynchronous logic, random values, side effect

```js
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  if (action.type === 'counter/increment') {
    return {
      ...state,
      value: state.value + 1
    }
  }
  return state
}
```

### Store

傳入 `reducer` 來創建. 內建方法 `getState` 獲取值

```js
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState()) // {value: 0}
```

### Dispatch

唯一能更新 `state` 的方法. `store` 的內建方法並傳入 `action object` 來呼叫 `dispatch`

```js
store.dispatch({ type: 'counter/increment' })

console.log(store.getState()) // {value: 1}
```

### Selector

提取和計算 `state`

```js
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue) // 2
```

## 示意圖

![https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)
