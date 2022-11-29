---
slug: hooks-additional
title: Hooks Additional
tags: [react]
---
***

[🎬 useReducer](#-usereducer)
[🎬 useCallback](#-usecallback)
[🎬 useMemo](#-usememo)
[🎬 useRef](#-useref)
[🎬 useImperativeHandle](#-useimperativehandle)
[🎬 useLayoutEffect](#-uselayouteffect)

## 🍑 useReducer

- useState 的替代方案，當涉及複雜的邏輯（multiple sub-values or next state depends on the previous one)

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init)

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
}

const initialCount = 0

function init(initialCount) {
  console.log('init')
  return { count: initialCount }
}
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    case ACTIONS.RESET:
      return init(action.payload)
    default:
      return state
  }
}

export default function Page() {
  const [state, dispatch] = useReducer(reducer, initialCount, init)

  return (
    <>
      <h1>useReducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({type: ACTIONS.RESET, payload: initialCount})}>reset</button>
      <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>-</button>
      <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+</button>
    </>
  )
}
```

## 🍑 useCallback

- returns a memorized `value`
- `useCallback(fn, deps)` === `useMemo(() => fn, deps)`
- run the callback when one of dependencies has changed

## 🍑 useMemo

- returns a memorized `callback`
- recomputed the memorized value when one of dependencies has changed

## 🍑 useRef

```jsx
const inputRef = useRef(initialValue) // similar to {current: ...}
```

- useRef 回傳 object , 其擁有 mutable 的 current 屬性
- mutating the `.current` property doesn't cause a re-reader

```jsx
function TextInputWithFocusButton() {
  const inputRef = useRef(null)
   
  handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}
```

## 🍑 useImperativeHandle

## 🍑 useLayoutEffect

- 與 `useEffect` 相同, 但是在 DOM 變更後觸發
