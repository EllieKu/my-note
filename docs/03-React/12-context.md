---
slug: context
title: Context
tags: [react]
---
***

```jsx {2,8,30}
// create a context for current theme (with "light" as the default)
const ThemeContext = React.CreateContext('light')

class App extends React.Component {
  render() {
    return (
      // use a Provider to pass the current theme to the tree below 
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

// a component in the middle doesn't have to pass the theme down
function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

class ThemeButton extends React.Component {
  // asign a contextType to read the current theme context
  // React will find the closet theme Provider above and use its value
  // in this example, the current theme is "dark"
  static contextType = ThemeContext
  render() {
    return <Button theme={this.context}
  }
}

```

## 🍉 API

- [🍉 API](#-api)
  - [React.createContext](#reactcreatecontext)
  - [Context.Provider](#contextprovider)
  - [Class.contextType](#classcontexttype)
  - [Context.Consumer](#contextconsumer)
  - [Context.displayName](#contextdisplayname)

### React.createContext

```jsx
const MyContext  = React.CreateContext(defaultValue)
```

- `createContext` 創建 Context object，訂閱該 Context 的組件會讀取"層級高於"且"最接近"的 `Provider` 值。
- `defaultValue` 只在當組件沒有匹配到 Provider 時才生效。
- Provider value 使用 `undefined` 不會使組件轉而使用 `defaultValue`。

### Context.Provider

```jsx
<MyContext.Provider value={/*某個值*/}>
```

1. 每個 Context object 會返回一個 Provider React，它允許 consumer 組件訂閱 context 變化
2. Provider 接受一個 value 屬性，將它傳給 consumer 組件
3. 可以多個 Provider 嵌套使用，內層覆蓋外層數據
4. 當 Provider 的 value 值發生變化，它內部所有的 consumer 組件都會重新渲染。
5. Provider 到 consumer 組件的傳遞不受制於 `shouldComponentUpdate` 函數，因此當其祖先組件跳過更新的情況下也能更新。

### Class.contextType

```jsx
class MyClass extends React.component {
  componentDidMount() {
    let value = this.context
    /* perform a side-effect at mount using the value of MyContext */
  }
  componentDidUpdate() {
    let value = this.context
  }
  componentWillUnmount(){
    let value = this.context
  }
  render() {
    let value = this.context
    /* render something based on the value of MyContext */
  }
}
MyClass.contextType = MyContext
```

1. 掛載在 class 上的 `contextType` 屬性可被 `React.createContext( )` 創建的 Context object 賦值，用 `this.context` 獲取context 值
2. 可在所有生命週期及 render 函數中訪問到

### Context.Consumer

```jsx
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

1. 在 function 組件訂閱 context

### Context.displayName

```jsx
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" 在 DevTools 中
<MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中
```

1. context object 接受 `displayName` 的 string 類型屬性。在 React DevTools 使用該 string 呈現 context 的内容。
