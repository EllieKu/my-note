# Condition Rendering
使用JS運算符`if`或`條件運算符`來更新UI
- element variable
- && 運算符
- 三目運算符

```jsx
function UserGreeting(props) {
  return <h1>Hi User</h1>
}

function GuessGreeting(props) {
  return <h1>Hi Guess</h1>
}

function Greeting(props) {
  const isLogin = props.isLog
  if(isLogin) {
    return <UserGreeting />
  } else {
    return <GuessGreeting />
  }
}

ReactDOM.render(
  // 依據參數isLog決定渲染何種組件
  <Greeting isLog={false}/>,
  document.getElementById('root')
)
```

## Element Variable
```jsx
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

```

## Logical && Operator
`true && expression` 總是返回 `expression`; `false && expression` 總是返回 `false`
```jsx
function Mailbox(props) {
  const unreadMessages = props.unreadMessages
  return(
    <div>
      <h1>Hello</h1>
      {unreadMessages.length > 0 && <p>You have {unreadMessages.length} unread messages</p>}
    </div>
  )
}
const messages = ['1', '2', '3']
ReactDOM.render(
  <Mailbox unreadMessages={messages}/>,
  document.getElementById('root')
)
```

## Inline If-Else with Conditional Operator 三目運算符
```jsx
  ...
  render() {
    const isLoggedIn = this.state.isLoggedIn
    return (
      <div>
        The user is {isLoggedIn ? 'currently' : 'not'} logged in.
      </div>
    )
  }
```

## 阻止組件渲染
利用`render()`返回`null`
```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```
