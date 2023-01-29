"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[4298],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),c=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,l=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),p=c(t),g=o,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return t?r.createElement(m,a(a({ref:e},u),{},{components:t})):r.createElement(m,a({ref:e},u))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1994:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={slug:"condition-rendering",title:"Condition rendering",tags:["react"]},l=void 0,c={unversionedId:"React/conditio-rendering",id:"React/conditio-rendering",isDocsHomePage:!1,title:"Condition rendering",description:"*",source:"@site/docs/03-React/07-conditio-rendering.md",sourceDirName:"03-React",slug:"/React/condition-rendering",permalink:"/my-note/docs/React/condition-rendering",tags:[{label:"react",permalink:"/my-note/docs/tags/react"}],version:"current",sidebarPosition:7,frontMatter:{slug:"condition-rendering",title:"Condition rendering",tags:["react"]},sidebar:"tutorialSidebar",previous:{title:"Handling Events",permalink:"/my-note/docs/React/handling-events"},next:{title:"List and Keys",permalink:"/my-note/docs/React/lists-and-keys"}},u=[{value:"\ud83c\udf49 Element Variable",id:"-element-variable",children:[]},{value:"\ud83c\udf49 Inline If with Logical &amp;&amp; Operator",id:"-inline-if-with-logical--operator",children:[]},{value:"\ud83c\udf49 Inline If-Else with Conditional Operator",id:"-inline-if-else-with-conditional-operator",children:[]},{value:"\ud83c\udf49 Preventing Component from Rendering",id:"-preventing-component-from-rendering",children:[]}],d={toc:u};function p(n){var e=n.components,t=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"conditional operator")," \u4f86\u5448\u73fe UI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function UserGreeting(props) {\n  return <h1>Hi User</h1>\n}\n\nfunction GuessGreeting(props) {\n  return <h1>Hi Guess</h1>\n}\n\nfunction Greeting(props) {\n  const isLogin = props.isLog\n  if(isLogin) {\n    return <UserGreeting />\n  } else {\n    return <GuessGreeting />\n  }\n}\n\nReactDOM.render(\n  // \u4f9d\u64da\u53c3\u6578isLog\u6c7a\u5b9a\u6e32\u67d3\u4f55\u7a2e\u7d44\u4ef6\n  <Greeting isLog={false}/>,\n  document.getElementById('root')\n)\n")),(0,i.kt)("h2",{id:"-element-variable"},"\ud83c\udf49 Element Variable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function LoginButton(props) {\n  return (\n    <button onClick={props.onClick}>\n      Login\n    </button>\n  )\n}\n\nfunction LogoutButton(props) {\n  return (\n    <button onClick={props.onClick}>\n      Logout\n    </button>\n  )\n}\n\nclass LoginControl extends React.Component {\n  constructor(props) {\n    super(props)\n    this.handleLoginClick = this.handleLoginClick.bind(this)\n    this.handleLogoutClick = this.handleLogoutClick.bind(this)\n    this.state = {isLoggedIn: false}\n  }\n\n  handleLoginClick() {\n    this.setState({isLoggedIn: true})\n  }\n\n  handleLogoutClick() {\n    this.setState({isLoggedIn: false})\n  }\n\n  render() {\n    const isLoggedIn = this.state.isLoggedIn\n    let button\n    if (isLoggedIn) {\n      button = <LogoutButton onClick={this.handleLogoutClick} />\n    } else {\n      button = <LoginButton onClick={this.handleLoginClick} />\n    }\n\n    return (\n      <div>\n        <Greeting isLoggedIn={isLoggedIn} />\n        {button}\n      </div>\n    )\n  }\n}\n\nReactDOM.render(\n  <LoginControl />,\n  document.getElementById('root')\n);\n\n")),(0,i.kt)("h2",{id:"-inline-if-with-logical--operator"},"\ud83c\udf49 Inline If with Logical && Operator"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true && expression")," return ",(0,i.kt)("inlineCode",{parentName:"p"},"expression")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"false && expression")," return ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{6}","{6}":!0},"function Mailbox(props) {\n  const unreadMessages = props.unreadMessages\n  return(\n    <div>\n      <h1>Hello</h1>\n      {unreadMessages.length > 0 && <p>You have {unreadMessages.length} unread messages</p>}\n    </div>\n  )\n}\nconst messages = ['1', '2', '3']\nReactDOM.render(\n  <Mailbox unreadMessages={messages}/>,\n  document.getElementById('root')\n)\n")),(0,i.kt)("h2",{id:"-inline-if-else-with-conditional-operator"},"\ud83c\udf49 Inline If-Else with Conditional Operator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{5}","{5}":!0},"render() {\n  const isLoggedIn = this.state.isLoggedIn\n  return (\n    <div>\n      The user is {isLoggedIn ? 'currently' : 'not'} logged in.\n    </div>\n  )\n}\n")),(0,i.kt)("h2",{id:"-preventing-component-from-rendering"},"\ud83c\udf49 Preventing Component from Rendering"),(0,i.kt)("p",null,"\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2-4}","{2-4}":!0},"function WarningBanner(props) {\n  if (!props.warn) {\n    return null;\n  }\n\n  return (\n    <div className=\"warning\">\n      Warning!\n    </div>\n  );\n}\n\nclass Page extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {showWarning: true};\n    this.handleToggleClick = this.handleToggleClick.bind(this);\n  }\n\n  handleToggleClick() {\n    this.setState(state => ({\n      showWarning: !state.showWarning\n    }));\n  }\n\n  render() {\n    return (\n      <div>\n        <WarningBanner warn={this.state.showWarning} />\n        <button onClick={this.handleToggleClick}>\n          {this.state.showWarning ? 'Hide' : 'Show'}\n        </button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(\n  <Page />,\n  document.getElementById('root')\n);\n")))}p.isMDXComponent=!0}}]);