---
slug: code-splitting
title: Code Splitting
tags: [react]
---
***

## purpose

code splitting can help you "lazy-loading" the things are currently needed by user, which can improve loading speed

## import()

before:

```jsx
import { add } from './math'

console.log(add(16, 26))
```

after:

```jsx
import("./math").then(math => {
  console.log(math.add(16, 26))
})
```

## React.lazy and Suspense

dynamic import as a regular component.

before:

```jsx
import OtherComponent from './OtherComponent'
import AnotherComponent from './AnotherComponent'
```

after:

```jsx
import React, { Suspense } from 'react';
const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
        <AnotherComponent />
      </Suspense>
    </div>
  );
}
```
