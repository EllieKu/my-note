# 函數的底層分析

內存：

- 棧區： 一般來說基本數據類型分配到棧區, 編譯器存在一個逃逸分析
- 堆區： 一般來說引用數據類型分配到堆區, 編譯器存在一個逃逸分析
- 代碼區： 代碼存放