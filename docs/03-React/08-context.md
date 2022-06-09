# Context

- 無需在每層添加props, 就能組件樹間進行數據傳遞
- API:
  - [React.createContext](###React.createContext)
  - Context.Provider
  - Class.contextType
  - Context.Consumer
  - [Context.displayName](###Context.displayName)

## API

### React.createContext
```JavaScript
const MyContext  = React.CreateContext(defaultValue)
```
創建context對象, 只有當組件所處的樹中沒有匹配Provider時, defaultValue參數才會生效


### Context.Provider
```JavaScript
<MyContext.Provider value={/*某個值*/}>
```
1. 訂閱context變化, Provider接受一個value屬性, 傳遞給consumer組件
2. Provider可以嵌套使用, 內層會覆蓋外層數據
3. 當Provider的value值發生變化, 它內部所有的consumer組件都會重新渲染. Provider及其內部consumer組件都不受制於shouldComponentUpdate函數

### Class.contextType
```JavaScript
class MyClass extends React.component {
  componentDidMount() {
    let value = this.context;
  }
  componentDidUpdate() {
    let value = this.context
  }
  componentWillUnmount(){
    let value = this.context
  }
  render() {
    let value = this.context
  }
}
MyClass.contextType = MyContext
```
1. 掛載在class上的contextType屬性會被重新賦值, 為由React.createContext()創建的context對象, 讓你能使用this.context來消費最近context上的那個值
2. 可以在任何生命週期及render函數中訪問

```JavaScript
// 你正在使用实验性的 public class fields 语法，你可以使用 static 这个类属性来初始化你的 contextType。
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* 基于这个值进行渲染工作 */
  }
}
```


### Context.Consumer
```JavaScript
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>
```
1. 函數式組件訂閱context



### Context.displayName
```JavaScript
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" 在 DevTools 中
<MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中
```
context 对象接受一个名为 displayName 的 property，类型为字符串。React DevTools 使用该字符串来确定 context 要显示的内容。