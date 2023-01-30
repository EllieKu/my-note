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


