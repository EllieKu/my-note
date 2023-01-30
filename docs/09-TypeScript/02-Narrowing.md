---
slug: narrowing
title: Narrowing
tags: [TypeScript]
---
***

the process of refining types to more specific types than declared is called narrowing

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input; 
  }
  return padding + input;
}
```

## typeof

| Type | Result |
| ---- | ------ |
| Boolean | "boolean" |
| BigInt | "bigint" |
| String | "string" |
| Symbol | "symbol" |
| Function | "function" |
| Any other object | "object" |
| Null | "object" [(reason)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) |
| Undefined | "undefined" |

## in operator

if an object has a property with a name, use `in` operator

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}
```

## instanceof

check whether or not a value is an “instance” of another value

```ts

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
```

## type predicate

`parameterName is Type` define a function whose return type is a type predicate

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

## never

never type represent a state which shouldn’t exist.

```ts
type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```
