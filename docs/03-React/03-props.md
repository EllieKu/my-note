# props
- 組件會將JSX接收的屬性(attribute)和子組件(children)轉換為single object, 此稱為 *props*
- 無論是用 function 或 class 聲明組件, 都不能修改自身的props
- 使用前必須在 *constructor* 加上 `super(props)` 取得繼承class的變數結構
```jsx
import React, { Component} from 'react'
class App extends Component {
  constructor(props) {
    super(props)
  }
  ...
}

export default App
```
- 可以設置默認值
```jsx
HelloMessage.defaultProps = {name: "老臣", msg: "諫書"}
```

- 可以傳遞function; 可以傳遞父元素的function, 就可修改父元素的state, 從而達到傳遞數據給父元素
```jsx
class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  render() {
    let strClass = null
    if(this.state.isActive) {
      strClass = " active"
    } else {
      strClass = ""
    }
    return (
      <div>
        <Children onChildClick={this.handleClick}/>
        <h1
          className={"content" + strClass}>子元素控制父元素</h1>
      </div>
    )
  }
}

class Children extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onChildClick()
  }

  render() {
    return (
      <button onClick={this.handleClick}>show/hide</button>
    )
  }
}

ReactDOM.render(
  <Parent />, document.getElementById('root')
)
```