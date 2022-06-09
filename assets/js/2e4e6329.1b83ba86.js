"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[558],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7468:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={},c="props",l={unversionedId:"React/props",id:"React/props",isDocsHomePage:!1,title:"props",description:"- \u7d44\u4ef6\u6703\u5c07JSX\u63a5\u6536\u7684\u5c6c\u6027(attribute)\u548c\u5b50\u7d44\u4ef6(children)\u8f49\u63db\u70basingle object, \u6b64\u7a31\u70ba props",source:"@site/docs/03-React/03-props.md",sourceDirName:"03-React",slug:"/React/props",permalink:"/my-note/docs/React/props",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/03-React/03-props.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JSX",permalink:"/my-note/docs/React/jsx"},next:{title:"Condition Rendering",permalink:"/my-note/docs/React/conditio-rendering"}},p=[],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"props"},"props"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7d44\u4ef6\u6703\u5c07JSX\u63a5\u6536\u7684\u5c6c\u6027(attribute)\u548c\u5b50\u7d44\u4ef6(children)\u8f49\u63db\u70basingle object, \u6b64\u7a31\u70ba ",(0,a.kt)("em",{parentName:"li"},"props")),(0,a.kt)("li",{parentName:"ul"},"\u7121\u8ad6\u662f\u7528 function \u6216 class \u8072\u660e\u7d44\u4ef6, \u90fd\u4e0d\u80fd\u4fee\u6539\u81ea\u8eab\u7684props"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u524d\u5fc5\u9808\u5728 ",(0,a.kt)("em",{parentName:"li"},"constructor")," \u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"li"},"super(props)")," \u53d6\u5f97\u7e7c\u627fclass\u7684\u8b8a\u6578\u7d50\u69cb")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component} from 'react'\nclass App extends Component {\n  constructor(props) {\n    super(props)\n  }\n  ...\n}\n\nexport default App\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8a2d\u7f6e\u9ed8\u8a8d\u503c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'HelloMessage.defaultProps = {name: "\u8001\u81e3", msg: "\u8aeb\u66f8"}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u50b3\u905efunction; \u53ef\u4ee5\u50b3\u905e\u7236\u5143\u7d20\u7684function, \u5c31\u53ef\u4fee\u6539\u7236\u5143\u7d20\u7684state, \u5f9e\u800c\u9054\u5230\u50b3\u905e\u6578\u64da\u7d66\u7236\u5143\u7d20")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'class Parent extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      isActive: true\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n  handleClick() {\n    this.setState({\n      isActive: !this.state.isActive\n    })\n  }\n  render() {\n    let strClass = null\n    if(this.state.isActive) {\n      strClass = " active"\n    } else {\n      strClass = ""\n    }\n    return (\n      <div>\n        <Children onChildClick={this.handleClick}/>\n        <h1\n          className={"content" + strClass}>\u5b50\u5143\u7d20\u63a7\u5236\u7236\u5143\u7d20</h1>\n      </div>\n    )\n  }\n}\n\nclass Children extends React.Component {\n  constructor(props) {\n    super(props)\n    this.handleClick = this.handleClick.bind(this)\n  }\n\n  handleClick() {\n    this.props.onChildClick()\n  }\n\n  render() {\n    return (\n      <button onClick={this.handleClick}>show/hide</button>\n    )\n  }\n}\n\nReactDOM.render(\n  <Parent />, document.getElementById(\'root\')\n)\n')))}d.isMDXComponent=!0}}]);