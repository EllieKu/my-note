# Method

- 可以在 type 內定義 method
- method 是個有 receiver 的函數
- receiver 所屬 type 必須同位於 package
- method 名字可以一樣, 只要 receiver 不一樣 method 就是不同的

```go
type Vertex struct {
 X, Y float64
}

func (v Vertex) Abs() float64 { // Abs method has a receiver of type Vertex named v
 return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
 v := Vertex{3, 4}
 fmt.Println(v.Abs()) // 5
}
```

## Point Receiver

pointer receiver 的 method 可以修改 receiver 指向的值

```go
type Vertex struct {
 X, Y float64
}

func (v Vertex) Abs() float64 {
 return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

// 當為pointer receiver, method 會改變 Vertex 原始值 (此行為同函數傳參數)
func (v *Vertex) Scale(f float64) {
 v.X = v.X * f
 v.Y = v.Y * f
}

// 當為value receiver, method 會複製一份 Vertex 值
func (v Vertex) ScaleValue(f float64) {
 v.X = v.X * f
 v.Y = v.Y * f
}

func main() {
 v := Vertex{3, 4}
 fmt.Println(v.Abs()) // 5
 v.ScaleValue(2)
 fmt.Println(v.Abs()) // 5
 v.Scale(10)
 fmt.Println(v.Abs()) // 50
}
```

- pointer receiver 可接受傳入 value 或 pointer
- 當method 為 pointer receiver, Go 會自動轉換 v.Scale(5) 理解成 (&v).Scale(5)
- value receiver 可接受傳入 value 或 pointer.

```go
type Vertex struct {
 X, Y float64
}

func (v Vertex) Abs() float64 {
 return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
 p := &Vertex{4, 3}
 fmt.Println(p.Abs()) // p.Abs() 會理解成 (*p).Abs()
}

```

## 何時使用 pointer receiver

1. method 可以修改 receiver 的指向值
2. 避免 method 每次呼叫都複製一份值, 更有效率.
