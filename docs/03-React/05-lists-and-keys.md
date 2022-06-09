# Lists and Keys

## Rendering Multiple Components
- 透過 `{}` 在 JSX 內建構元素集合
```jsx
const numbers = [1, 2, 3, 4, 5]
const elements = numbers.map(el =>
  <li>{el}</li>
)

ReactDOM.render(
  <ul>{elements}</ul>,
  document.getElementById('root')
)
```
- Embedding map() in JSX
```jsx
function List(props) {
  const numbers = props.numbers
  return (
    <ul>
      {
        numbers.map(el =>
          <Item key={el.toString()}
                value={el} />
      )}
    </ul>
  )
}
```

## Key
- key 幫助 React 識別哪些元素增加或刪除
```jsx
function NumberList(props) {
  const numbers = props.numbers

  const elements = numbers.map((el, index) =>
    // 不建議用index作爲key, 因會會導致性能變差
    <li key={index)}>{el}</li>
  )
  return elements
}
ReactDOM.render(
  <ul><NumberList numbers={[1, 2, 3]}/></ul>,
  document.getElementById('root')
)
```
```jsx
function Item(props) {
  // correct, 不需要在這裡指定key
  return <li>{props.value}</li>
}

function NumberList(props) {
  const number = props.numbers
  const elements = number.map((el) => 
    // correct, key應該在數組的上下文中被指定
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
- key 只是在兄弟節點中必需唯一
```jsx
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

- key 屬性值只會傳遞給 React, 不會傳遞給組件
```jsx
const content = posts.map(el => 
  <Post
    key={el.id}
    id={el.id}
    title={el.title} />
)
// Post組件可讀出id值, 但不能讀出key值
``` 
