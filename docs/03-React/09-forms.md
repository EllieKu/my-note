---
slug: forms
title: Forms
tags: [react]
---
***

### Controlled Component
渲染表單的 React 組件利用 state 來控制著使用者輸入後的行為。 
对于受控组件来说，输入的值始终由 React 的 state 驱动。
```jsx {7,12-14,25}
// write the form as a controlled component

class NameForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    alert(`輸入的名字: ${this.state.value}`)
    e.preventDefault()
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <button type="submit" onClick={this.handleSubmit}>提交</button>
      </form>
    )
  }
}
```

<br/>

### <select\> tag
```jsx {4,10-12,24}
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```

<br/>

### <input type="file"\> Tag
允許使用者從裝置中選擇文件上傳至 server，或透過使用 [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) 控制。
因為其 value 是唯讀，所以是一個非受控組件。[其它非受控組件](https://zh-hans.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag)
```html
<input type="file">
```

<br/>

### Handling Multiple Inputs
可以給每個元素添加 <code>name</code> 屬性, 並讓事件處理函數依 <code>event.target.name</code> 對應執行的操作

```jsx {15,18,28,37}
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

<br/>

### Controlled Input Null Value
指定受控組件的 <code>value</code> 會阻止用戶輸入。如果指定了 <code>value</code> 但輸入仍可編輯，則可能是 <code>value</code> 值意外變成了 <code>undefined</code> 或 <code>null</code>。

```jsx
// 一開始被鎖定, 但1秒後變可編輯
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

<br/>

### 其他方案
[Formik](https://formik.org/)