---
slug: forwarding-refs
title: Forwarding Refs
tags: [react]
---
***

## Forwarding refs to DOM components

Ref forwarding 是一種技巧. 將 `ref` 傳遞到子組件

```jsx {1,4,13,14}
const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      className="FancyButton"
    >
      {props.children}
    </button>
  )
})

// 現在可訪問 FancyButton 下 button 的 DOM
const ref = React.createRef()
<FancyButton ref={ref}>Click me!</FancyButton>
```

:::caution
第二個參數 `ref` 只在使用 `React.forwardRef` 時存在
:::

***

## In Higher Order Components
