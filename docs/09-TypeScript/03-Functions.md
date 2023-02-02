---
slug: functions
title: Functions
tags: [TypeScript]
---
***

## function type expressions

```ts
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}

// or

// type GreetFunction = (a: string) => void

// function greeter(fn: GreetFunction) {
//   ...
// }
 
greeter(printToConsole);
```

## Call Signatures

In JavaScript, functions can have properties in addition to being callable. we can write a call signature in an object type:

```ts
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(10));
}

function test(num:number):boolean {
  return num > 5
}

test.description = 'is lager than 5'

doSomething(test) // "is lager than 5 returned true"
```

## Construct Signatures

????

## Generic Functions

use `type` to describe a correspondence between two values
```ts
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
```

```ts
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```

## Constraints

use `extends` to set a subset of values

```ts
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
```