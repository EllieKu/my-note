---
title: Memory Leak
description: Memory Leak
slug: memory-leak
tags: [sundry]
hide_table_of_contents: false
---

## 起因

Memory leak（記憶體流失），是指程式運行的過程中，不再使用的記憶體空間沒有正常被釋放，持續佔用空間而造成的記憶體浪費。如果這種狀況不斷發生，就會使可用的記憶體越來越少，而降低電腦的效能，最後可能導致程式崩潰。

在 JavaScript 裡，記憶體回收的工作是交由自動化的 Garbage Collection 來完成，它就像記憶體裡的清道夫，會判斷不再使用的記憶體並將其回收。

## 檢測

Chrome 提供的 DevTool 找出 memory leak

## 引起 memory leak 的原因

- global 變數
  如果在瀏覽器中, global 變數就是 window 物件. 變數在視窗關閉或重新整理頁面之前都不會被釋放.
  - 未宣告變數

    ```js
    function fn() {
      a = 'global variable'
    }
    fn()
    ```

  - 使用 this 建立的變數

    ```js
    function fn() {
      this.a = 'global variable'
    }
    fn()

    ```

- 閉包引起
  閉包可以讀取函式內部的變數, 然後讓這些變數始終存在記憶體中. 如果使用結束後沒有將區域性變數清除, 就可以導致記憶體洩漏.

  ```js
  for (var k = 0; k < 10; k++) {
    var t = function (a) {
      console.log(a)
    }
    t(k)
  }
  ```

- 沒有清理的 DOM 元素引用

  ```js
  // 在物件中引用DOM
  var elements = {
    btn: document.getElementById('btn'),
  }
  function doSomeThing() {
    elements.btn.click()
  }

  function removeBtn() {
    // 將body中的btn移除, 也就是移除 DOM樹中的btn
    document.body.removeChild(document.getElementById('button'))
    // 但是此時全域性變數elements還是保留了對btn的引用, btn還是存在於記憶體中,不能被GC回收
  }

  // 解決方法: 手動刪除
  elements.btn = null。
  ```

- 定時器

```js
var serverData = loadData()
setInterval(function () {
  var renderer = document.getElementById('renderer')
  if (renderer) {
    renderer.innerHTML = JSON.stringify(serverData)
  }
}, 5000)
```

## 參考來源

1. [從你的 Node.js 專案裡找出 Memory leak，及早發現、及早治療！](https://vocus.cc/article/61176c17fd89780001942f1c?fbclid=IwAR0Og2wcBv8RikB1bXQum0egwoxKJlpUn4Wp66mrClRzCShyavG8peDQcrQ)
2. [Record heap snapshots](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/#view_snapshots)
3. [https://iter01.com/579814.html](https://iter01.com/579814.html)
