---
slug: forwarding-refs
title: Forwarding Refs
tags: [react]
---
***

Ref forwarding 是一種技巧. 將 `ref` 傳遞到子組件

```jsx {1,4,12,13}
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

// 現在 FancyButton 可獲取 DOM button 的 ref 或訪問
const ref = React.createRef()
<FancyButton ref={ref}>Click me!</FancyButton>
```

:::caution
第二個參數 `ref` 只在使用 `React.forwardRef` 時存在
:::
