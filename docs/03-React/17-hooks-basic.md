---
slug: hooks-basic
title: Hooks Basic
tags: [react]
---
***

[🎬 useState](#-usestate) [🎬 useEffect](#-useeffect)

## 🎈 useState

`useState` 類似 class 組件的 `this.state`， 透過在 function 組件內調用來給組件添加一個內部的 state。

```jsx {1,5}
import React, { useState } from 'react'

function Example() {
  // 聲明一個變數"count", 初始值為0
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

```jsx
// 對比class組件
<button onClick={()=> this.state({ count: this.state.count + 1})}>
  Click me
</button>
```

### Declaring multiple state variables

可在同組件內多次使用 `useState`， 更新 state 是`替換`而不是合併。

```jsx
function ExampleWithManyStates() {
  // declare many state variables
  const [age, setAge] = useState(2)
  const [fruit, setFruit] = useState('banana')
  const [note, setNote] = useState({ text: 'Learn Hooks'})
 
  // we can update the variables individually
  function handleOrangeClick() {
    setFruit('orange')
  }
  
  // ...
}
```

***

## 🎈 useEffect

- side effect，runs `first` and after `every update`
- 類似 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount`

```jsx {1,7-9}
import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)

  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = `you clicked ${count} times`
  })

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
```

### Cleanup

- return a function that clean up side effect
- cleanup happened when the component unmount

```jsx {14-16}
import React, { useState, useEffect } from 'react',

function FriendState(props) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange(state) {
    setIsOnline(state.isOnline)
  }

  // 组件销毁时取消对 ChatAPI 的订阅，然后在后续渲染时重新执行副作用函数
  useEffect(() => {
    ChatAPI.subscribeToFriendStates(props.friend.id, handleStatusChange)

    return () => { // specify how to clean up after this effect
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
  })

  if (isOnline === null) {
    return 'Loading...'
  }

  return isOnline ? 'Online' : 'Offline'
}

```

:::tip

1. Use Multiple Effects to Separate Concerns
2. Optimizing Performance by Skipping Effects

:::

## 🏕️ Hooks rules

1. Hook 只在`函數頂層`調用。
2. Hook 不可在 `loops`、`conditions`、`nested functions` 調用。
3. 只能在 React 的 function 組件中調用，不要在其他 JS 函數中調用(還有一個地方可以調用 Hook -- 就是自定義的 Hook)

## 🔪 Building Your Own Hooks

想在組件之間重複使用一些狀態邏輯，有幾種方式來解決此問題：

1. higher-order components
2. render props
3. custom hooks

如果函數的名字以 "use" 開頭並調用其他 hook，我們就說這一定是自定義 hook。
範例:

```jsx
// 1. 將狀態邏輯抽取至名為 useFriendStatus 的自定義 hook，
import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline
}
```

```jsx {3,12}
// 2. 在不同組件中使用, 每個組件間的state都是獨立的
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline'
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li
      style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  )
}
```
