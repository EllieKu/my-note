# Basic

## Predeclared identifiers

```
Types:
  bool byte(alias for uint8) complex64 complex128 error float32 float64
  int int8 int16 int32 int64
  rune(alias for int32, represents a Unicode code point)
  string uint uint8 uint16 uint32 uint64 uintpt

Constants:
  true false iota

Zero value:
  nil

Functions:
  append cap close complex copy delete imag len
  make new panic print println real recover
```


### 
- Type conversions
  - The expression T(v) converts the value v to the type T.

- Pointer: holds the memory address of a value
  - *T is a pointer to a T value 
    ```
    var p *int
    ```
  - The & operator generates a pointer to its operand.
    ```
    i := 42
    p = &i
    ```
  - The * operator denotes the pointer's underlying value.
    ```
    fmt.Println(*p) // read i through the pointer p
    *p = 21         // set i through the pointer p
    ```

### slice
  -  A slice is a dynamically-sized, flexible view into the elements of an array.
  -  Slices are like references to arrays.
  -  The length of a slice is the number of elements it contains.
  - The capacity of a slice is the number of elements in the underlying array, counting from the first element in the slice.