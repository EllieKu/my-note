# Redux

## State

- 不允許修改現存 `state`, 而是複製一份現存`state`並修改
- `state`為 object, array, primitives

---

## Action

- `action`為object, 並有`type`屬性

```js
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

---

## Action Creator

```js
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

---

## Reducer

- 利用 `state` 和 `action` 當參數, 來計算新的值
- 不允許修改現存 `state`, 而是複製一份現存`state`並修改
- 不可執行*異步操作*或是有*副作用*

```js
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/incremented':
      return {
        ...state,
        value: state.value + 1
      }
    case 'counter/decremented':
      return { 
        ...state,
        value: state.value - 1 
      }
    default:
      return state
  }
}
```

- 只有當使用 Redux Toolkit's 的 **createSlice** 和 **createReducer** 時可以 "mutating" logic, 因為使用了 [Immer](https://immerjs.github.io/immer/)

---

## Store

- 唯一更新`state`的方法是呼`store.dispatch()`並傳入一個`action`

```js
const store = Redux.createStore(counterReducer)
```

---

## Data Flow

- 初始設置
  - store 建立, 使用 root reducer
  - store 呼叫 root reducer, 並將回傳值設為初始 state
  - 當UI層第一次描繪, UI組件通過獲取 store 內的 state 描繪畫面, 並訂閱未來任何 store 更新

- 更新
  - 事件發生, 像點擊事件
  - dispatch 一個 action 到 store, 像 dispatch({type: 'counter/increment'})
  - store 透過執行 reducer(previousState, action）, 得到新 state 儲存
  - store 通知所有有訂閱的UI去更新
  - 每個UI組件確認自身的數據是否有改變
  - 每個組件的數據改變促使重新渲染利用新數據
