"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[4857],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,x=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(x,c(c({ref:t},u),{},{components:n})):r.createElement(x,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7508:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],l={},i="Context",p={unversionedId:"React/context",id:"React/context",isDocsHomePage:!1,title:"Context",description:"- \u7121\u9700\u5728\u6bcf\u5c64\u6dfb\u52a0props, \u5c31\u80fd\u7d44\u4ef6\u6a39\u9593\u9032\u884c\u6578\u64da\u50b3\u905e",source:"@site/docs/03-React/08-context.md",sourceDirName:"03-React",slug:"/React/context",permalink:"/my-note/docs/React/context",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/03-React/08-context.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lifting State Up",permalink:"/my-note/docs/React/lifting-state-up"},next:{title:"Higher-Order Components",permalink:"/my-note/docs/React/higher-order-components"}},u=[{value:"API",id:"api",children:[{value:"React.createContext",id:"reactcreatecontext",children:[]},{value:"Context.Provider",id:"contextprovider",children:[]},{value:"Class.contextType",id:"classcontexttype",children:[]},{value:"Context.Consumer",id:"contextconsumer",children:[]},{value:"Context.displayName",id:"contextdisplayname",children:[]}]}],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"context"},"Context"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7121\u9700\u5728\u6bcf\u5c64\u6dfb\u52a0props, \u5c31\u80fd\u7d44\u4ef6\u6a39\u9593\u9032\u884c\u6578\u64da\u50b3\u905e"),(0,a.kt)("li",{parentName:"ul"},"API:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"###React.createContext"},"React.createContext")),(0,a.kt)("li",{parentName:"ul"},"Context.Provider"),(0,a.kt)("li",{parentName:"ul"},"Class.contextType"),(0,a.kt)("li",{parentName:"ul"},"Context.Consumer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"###Context.displayName"},"Context.displayName"))))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"reactcreatecontext"},"React.createContext"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"const MyContext  = React.CreateContext(defaultValue)\n")),(0,a.kt)("p",null,"\u5275\u5efacontext\u5c0d\u8c61, \u53ea\u6709\u7576\u7d44\u4ef6\u6240\u8655\u7684\u6a39\u4e2d\u6c92\u6709\u5339\u914dProvider\u6642, defaultValue\u53c3\u6578\u624d\u6703\u751f\u6548"),(0,a.kt)("h3",{id:"contextprovider"},"Context.Provider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"<MyContext.Provider value={/*\u67d0\u500b\u503c*/}>\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8a02\u95b1context\u8b8a\u5316, Provider\u63a5\u53d7\u4e00\u500bvalue\u5c6c\u6027, \u50b3\u905e\u7d66consumer\u7d44\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"Provider\u53ef\u4ee5\u5d4c\u5957\u4f7f\u7528, \u5167\u5c64\u6703\u8986\u84cb\u5916\u5c64\u6578\u64da"),(0,a.kt)("li",{parentName:"ol"},"\u7576Provider\u7684value\u503c\u767c\u751f\u8b8a\u5316, \u5b83\u5167\u90e8\u6240\u6709\u7684consumer\u7d44\u4ef6\u90fd\u6703\u91cd\u65b0\u6e32\u67d3. Provider\u53ca\u5176\u5167\u90e8consumer\u7d44\u4ef6\u90fd\u4e0d\u53d7\u5236\u65bcshouldComponentUpdate\u51fd\u6578")),(0,a.kt)("h3",{id:"classcontexttype"},"Class.contextType"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"class MyClass extends React.component {\n  componentDidMount() {\n    let value = this.context;\n  }\n  componentDidUpdate() {\n    let value = this.context\n  }\n  componentWillUnmount(){\n    let value = this.context\n  }\n  render() {\n    let value = this.context\n  }\n}\nMyClass.contextType = MyContext\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u639b\u8f09\u5728class\u4e0a\u7684contextType\u5c6c\u6027\u6703\u88ab\u91cd\u65b0\u8ce6\u503c, \u70ba\u7531React.createContext()\u5275\u5efa\u7684context\u5c0d\u8c61, \u8b93\u4f60\u80fd\u4f7f\u7528this.context\u4f86\u6d88\u8cbb\u6700\u8fd1context\u4e0a\u7684\u90a3\u500b\u503c"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5728\u4efb\u4f55\u751f\u547d\u9031\u671f\u53carender\u51fd\u6578\u4e2d\u8a2a\u554f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"// \u4f60\u6b63\u5728\u4f7f\u7528\u5b9e\u9a8c\u6027\u7684 public class fields \u8bed\u6cd5\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 static \u8fd9\u4e2a\u7c7b\u5c5e\u6027\u6765\u521d\u59cb\u5316\u4f60\u7684 contextType\u3002\nclass MyClass extends React.Component {\n  static contextType = MyContext;\n  render() {\n    let value = this.context;\n    /* \u57fa\u4e8e\u8fd9\u4e2a\u503c\u8fdb\u884c\u6e32\u67d3\u5de5\u4f5c */\n  }\n}\n")),(0,a.kt)("h3",{id:"contextconsumer"},"Context.Consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"<MyContext.Consumer>\n  {value => /* \u57fa\u4e8e context \u503c\u8fdb\u884c\u6e32\u67d3*/}\n</MyContext.Consumer>\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u51fd\u6578\u5f0f\u7d44\u4ef6\u8a02\u95b1context")),(0,a.kt)("h3",{id:"contextdisplayname"},"Context.displayName"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},'const MyContext = React.createContext(/* some value */);\nMyContext.displayName = \'MyDisplayName\';\n\n<MyContext.Provider> // "MyDisplayName.Provider" \u5728 DevTools \u4e2d\n<MyContext.Consumer> // "MyDisplayName.Consumer" \u5728 DevTools \u4e2d\n')),(0,a.kt)("p",null,"context \u5bf9\u8c61\u63a5\u53d7\u4e00\u4e2a\u540d\u4e3a displayName \u7684 property\uff0c\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u3002React DevTools \u4f7f\u7528\u8be5\u5b57\u7b26\u4e32\u6765\u786e\u5b9a context \u8981\u663e\u793a\u7684\u5185\u5bb9\u3002"))}m.isMDXComponent=!0}}]);