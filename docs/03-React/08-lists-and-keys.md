---
slug: lists-and-keys
title: List and Keys
tags: [react]
---
***

## 🍉 List

### Rendering Multiple Components

使用 `{ }` 在建構元素集合

```jsx
function List() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  )

  return (
    <ul>{listItems}</ul>
  )
}
```

## 🍉 Keys

keys 用來識別哪些元素有變動。

```jsx {3}
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
)
```

當元素沒有 id 時，萬不得已可以用 index 作為 key。但不建議使用因為會導致性能變差，還可能引起組件狀態問題。

```jsx {3}
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
)
```

### Extracting Components with Keys

key 放在就近數組的上下文中才有意義

```jsx {3,9}
function Item(props) {
  // 不需要在這裡指定key
  return <li>{props.value}</li>
}

function NumberList(props) {
  const number = props.numbers
  const elements = number.map((el) => 
    <Item key={el.toString()} value={el} />
  )
  return elements
}

const numbers = [6, 7, 8, 9, 10]

ReactDOM.render(
  <ul>
    <NumberList numbers={numbers} />
  </ul>,
  document.getElementById('root')
)
```

### Keys Must Only Be Unique Among Siblings

當生成兩個不同數組時，可以使用相同 key 值：

```jsx {5,12}
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
```

key 會傳遞數據給 React，但不會傳遞給組件：

```jsx
// Post組件可讀出id值, 但不能讀出key值
const content = posts.map((post) => 
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
)
```
