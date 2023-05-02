---
slug: toolkit-app-structure
title: Toolkit App Structure
tags: [redux]
---
***

[Example app](https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed)

## configureStore

Redux Toolkit 的 `configureStore` 接受一個參數 `reducer`

```js title=app/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
```

## createSlice

Redux Toolkit 的 `createSlice` 使用第三方庫 [immer](https://immerjs.github.io/immer/), 可更方便的處理 immutability

```js
// 原
function handwrittenReducer(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue
        }
      }
    }
  }
}

// 現
function reducerWithImmer(state, action) {
  state.first.second[action.someId].fourth = action.someValue
}
```

:::danger

只可 "mutating" Redux Toolkit 的 `createSlice` 和 `createReduce`, 因為它使用了 immer.
如果 "mutating" without immer, 會產生錯誤

:::

## Async Logic with `Thunk`

`thunk` 接受兩個函式： `dispatch` 和 `getState`

```js title="features/counter/counterSlice.js"
const fetchUserById = userId => {
  return async (dispatch, getState) => {
    try {
      const user = await userAPI.fetchById(userId)
      dispatch(userLoaded(user))
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}
```
