---
slug: types
title: Types
tags: [TypeScript]
---
***

優點:

1. static type-checking
2. non-exception Failures
3. types for Tooling

## variable

```ts
let myName: string = "Alice"
```

## function
```ts
function greet(name: string): void {
  console.log("Hello, " + name.toUpperCase() + "!!")
}
```

## object
```ts
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

optional properties: use `?` after the property name

```ts
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

## union
```ts
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
```

## aliase & interface
```ts
type Point = {
  x: number;
  y: number;
};

// or
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

### Differences
type cannot be re-opened to add new properties vs an interface which is always extendable

```ts
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
        
// ======== vs =======

type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}
// Error: Duplicate identifier 'Window'.
```

## Type Assertion
```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

## Literal Types
specific **strings** and **numbers** in type positions
```ts
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

## null & undefined

### strictNullChecks --off

### strictNullChecks --on
when a value is null or undefined, you will need to test for those values before using methods or properties on that value

## Less Common Primitive

bigint:
```ts
const oneHundred: bigint = BigInt(100);
```

symbol:
```ts
const firstName = Symbol("name");
const secondName = Symbol("name");
 
if (firstName === secondName) {
  // Can't ever happen
}
```