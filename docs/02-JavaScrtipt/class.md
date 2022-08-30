# Classes

[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## 定義

*Classes* 是"特殊的函數", 可用兩種語法來定義：

1. **class expressions**
2. **class declarations**

### class declaration

- 可命名聲明

```js
class Rectangle {
  constructor (height, width) {
    this.height = height
    this.width = width
  }
}
```

- No Hoisting

class declaration 不會 hoisting, 否則將拋出 *ReferenceError*

```js
let p = new Rectangle() // ReferenceError
class Rectangle {
  ...
}
```

### class expression

- 可命名或匿名

```js
// 匿名
// 可以透過class's (not an instance's) 的 name 屬性來訪問
let Rectangle = class {
  constructor (height, width) {
    this.height = height
    this.width = width
  }
}
console.log(Rectangle.name) // Rectangle
```

```js
// 命名
let Obj = class Rectangle {
  constructor (height, width) {
    this.height = height
    this.width = width
  }
}
console.log(Obj.name) // Rectangle
```

***

## Class body and method definitions 類體和方法定義

1. Strict mode 嚴格模式
2. Constructor 構造函數
3. Prototype methods 原型方法
4. Generator methods 迭代器方法
5. Static methods and properties 靜態方法
6. Instance properties 實例屬性
7. Field declarations 字段聲明(實驗中)
8. Sub classing with extends 擴展子類
9. Species
10. Super class calls with super
11. Mix-ins

### Strict mode

class body 都在 strict mode下執行

### Constructor

用於creating創建和initializing初始化一個由 *class* 創建的 object.
一個 *class* 只能有一個 *constructor*, 否則將拋出 *SyntaxError*

可使用[*super*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)來調用父類的 *constructor*

### Prototype methods

[*methods definition*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)

### Generator methods

[*Iterators and generators*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

### Static methods and properties

關鍵字 *static* 是定義 *class* 的methods或properties, 故不需initializing該*class*即可調用*static method*, 也不能被 class instance類實例調用

### Binding this with prototype and static methods

當調用 *static method* 或 *prototype method* 時沒有指定 *this* 值, 則該方法的 *this* 將被設置為 **undefined**

### Instance property

- instance's property 必須定義在 *class methods* 裡面

```js
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
}
```

- *static data property* & *prototype data property* 必須定義在 *classBody declaration* 外

```js
Rectangle.staticWidth = 20
Rectangle.prototype.prototypeWidth = 25
```

### Field declarations (實驗中)

### Sub classing with extends

create a *class* as a child of another *class*

- 如果子類中定義了constructor, 必須先調用super( )才能使用this

```js
class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(`${this.name} make a noise.`)
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
    this.name = `Schnauzer-${name}`
  }
  speak() {
    console.log(`${this.name} barks.`)
  }
}
```

- 可以繼承基於傳統function的class

``` js
function Animal(name) {
  this.name = name
}

Animal.prototype.speak = function() {
  console.log(`${this.name} make a noise.`)
}

class Dog extends Animal {
  speak() {
    // this.speak() // error
    super.speak()
    console.log(`${this.name} barks.`)
  }
}

let dog = new Dog('bubu')
dog.speak()
// bubu make a noise.
// bubu barks.
```

- *class* 不能繼承 regular (non-constructible) objects. 如果繼承一個常物件, 可用**Object.setPrototypeOf( )**

```js
const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// If you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.
```

### Species

[Symbol.species](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species)
[https://zhuanlan.zhihu.com/p/120383551](https://zhuanlan.zhihu.com/p/120383551)

### Super class calls with super

*super* 用於調用其父層class的方法

### Mix-ins
