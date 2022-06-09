# forms

## Controlled Component 受控組件
- 表單元素(`<input>`.`<textarea>`.`<select>`等)值保存在 state, 由 state 控制成為**唯一數據源**. 被 React 以這種方式控制取值的表單輸入元素就稱為受控組件
```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: 'test'}
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
      <form>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <button type="submit" onClick={this.handleSubmit}>提交</button>
      </form>
    )
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
)
```
- `<select>` tag
```jsx
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
- 在受控組件上指定 *value* 的 *props* 會阻止用戶輸入, 如果指定了 *value* 仍可編輯, 那可能是 *value* 值意外變成了 *undefined* 或 *null*
```jsx
// 輸入被鎖定
ReactDOM.render(<input value="hi" />, document.getElementById('root'));

// 輸入可編輯
ReactDOM.render(<input value={null} />, document.getElementById('root'));
```

## 非受控組件
參閱 [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
```HTML
<!--因為它的value為readonly -->
<input type="file">
```
[其餘請參閱文檔](https://zh-hans.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag)

## 處理多個輸入元素

可以給每個元素添加 *name* 屬性, 並讓事件處理函數依 *event.target.name* 對應執行的操作

```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      guests: 2
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    console.log(`isGoing: ${this.state.isGoing}, guests: ${this.state.guests}`)
    e.preventDefault()
  }
  
  handleChange(e) {
    const name = e.target.name
    const checked = e.target.checked
    const value = e.target.value
    const result = e.target.type === 'checkbox' ? checked : value
    this.setState({[name]: result}) 
    // console.log(e)
  }

  render() {
    return (
      <form>
        <label>is going:
          <input 
            type="checkbox"
            name="isGoing"
            checked={this.state.isGoing}
            onChange={this.handleChange}></input>
        </label>
        <br/>
        <label>number of guests:
          <input
            type="number"
            name="guests"
            value={this.state.guests}
            onChange={this.handleChange}></input>
        </label>
        <button type="submit" onClick={this.handleSubmit}>提交</button>
      </form>
    )
  }
}
```

## 其他方案
[Formik](https://formik.org/) --- 還沒看