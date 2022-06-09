# Interface

- interface type 是一組 method signature 表示行為, 行為具體如何實現由 method 定義
- interface 本身不能創建實例, 但可指向一個實現該 interface 的自定義類型的變量. (自定義類型需要將該接口的所有方法都實現, 我們就說該自定義類型實現的該接口)
- 一個自定義類型可以實現多個 interface
- interface value 可被分成 value 和 concrete type. 

```go
type I interface {
	M()
}

type T struct {
	S string
}

func (t *T) M() {
	fmt.Println(t.S)
}

type F float64

func (f F) M() {
	fmt.Println(f)
}

func main() {
	var i I

	i = &T{"Hello"}
	describe(i) // (&{Hello}, *main.T)
	i.M() // Hello

	i = F(math.Pi)
	describe(i) // (3.141592653589793, main.F)
	i.M() // 3.141592653589793
}

func describe(i I) {
	fmt.Printf("(%v, %T)\n", i, i)
}

```

## nil
- The interface type that specifies zero methods:
```go
interface{}
```
- 


## type assertion
type assertion 能訪問是否是

