# I/O

1. **bufio library:** implements buffered I/O. It wraps an io.Reader or io.Writer object, creating another object (Reader or Writer) that also implements the interface but provides buffering and some help for textual I/O.
2. **io library:** provides basic interfaces to I/O primitives
3. **os library:** provides a platform-independent interface to operating system functionality.


帶緩衝的讀取文件
```go
func main() {
	file, err := os.Open("/Users/80006932/Desktop/golang_p/file/test.txt") // 檔案開啟
	if err != nil {
		fmt.Println("open file err = ", err)
	}

	defer file.Close() // 檔案關閉, 避免造成memory leak

	reader := bufio.NewReader(file)

	for {
		str, err := reader.ReadString('\n')

		if err == io.EOF { // 檔案結尾
			break
		}

		fmt.Print(str)
	}
}
```
***

一次將整個文件讀取到內存（適合文件不大）
```go
func main() {
	file := "/Users/80006932/Desktop/golang_p/file/test.txt"
	content, err := os.ReadFile(file)

	if err != nil {
		fmt.Printf("read file err=%v", err)
	}

	fmt.Printf("%v", string(content)) // 將 []byte 轉成 string
}
```

***

開起並讀寫文件 [func OpenFile](https://pkg.go.dev/os@go1.17.1#OpenFile)


```go
func main() {
	filePath := "/Users/80006932/Desktop/golang_p/file/new.txt"
  // perm FileMode 在windows 下無效, 故隨便寫
	file, err := os.OpenFile(filePath, os.O_RDWR|os.O_APPEND, 0666)

	if err != nil {
		fmt.Printf("read file err=%v", err)
		return
	}

	defer file.Close()

	// 寫入內容
	str := "write and read \n"
	writer := bufio.NewWriter(file) // 帶緩存的 *Writer
	for i := 0; i < 3; i++ {
		writer.WriteString(str) // 內容是先寫在緩存的
	}

	reader := bufio.NewReader(file)
	defer file.Close()
	for {
		str, err := reader.ReadString('\n')

		if err == io.EOF {
			break
		}

		fmt.Print(str)
	}
	writer.Flush() // 將數據寫入文件中
}
```