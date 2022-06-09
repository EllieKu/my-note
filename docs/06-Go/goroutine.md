# Goroutine

- **程式 Program:** 程式碼的集合, 尚未執行時存放在次級儲存裝置, 還沒有被載入至記憶體中.
- **進程 Process:** 被執行且載入記憶體的program; process也是os分配資源的最小單位.
- **線程、執行緒 Thread:** 一個process內至少有一個thread, thread是os能夠進行運算排程的最小單位.
- **並發 Concurrency:** 許多任務爭搶同一個CPU資源, 因此一個時間點只有一個任務在執行.
- **並行 Parallel:** 利用多個CPU達到同時並行處理多個任務.
- **協程 Coroutine:** coroutine在thread內, 是一種使用者態的輕量級執行緒, 協程的排程完全由使用者控制

 ![Concurrency-Parallel](https://techdifferences.com/wp-content/uploads/2017/12/Untitled.jpg)