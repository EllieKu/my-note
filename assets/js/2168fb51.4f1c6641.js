"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[71],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,x=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(x,l(l({ref:t},u),{},{components:n})):r.createElement(x,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8868:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={slug:"context",title:"Context",tags:["react"]},c=void 0,s={unversionedId:"React/context",id:"React/context",isDocsHomePage:!1,title:"Context",description:"*",source:"@site/docs/03-React/12-context.md",sourceDirName:"03-React",slug:"/React/context",permalink:"/my-note/docs/React/context",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/03-React/12-context.md",tags:[{label:"react",permalink:"/my-note/docs/tags/react"}],version:"current",sidebarPosition:12,frontMatter:{slug:"context",title:"Context",tags:["react"]},sidebar:"tutorialSidebar",previous:{title:"Lifting State Up",permalink:"/my-note/docs/React/lifting-state-up"},next:{title:"Forwarding Refs",permalink:"/my-note/docs/React/forwarding-refs"}},u=[{value:"\ud83c\udf49 API",id:"-api",children:[{value:"React.createContext",id:"reactcreatecontext",children:[]},{value:"Context.Provider",id:"contextprovider",children:[]},{value:"Class.contextType",id:"classcontexttype",children:[]},{value:"Context.Consumer",id:"contextconsumer",children:[]},{value:"Context.displayName",id:"contextdisplayname",children:[]}]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,8,30}","{2,8,30}":!0},'// create a context for current theme (with "light" as the default)\nconst ThemeContext = React.CreateContext(\'light\')\n\nclass App extends React.Component {\n  render() {\n    return (\n      // use a Provider to pass the current theme to the tree below \n      <ThemeContext.Provider value="dark">\n        <Toolbar />\n      </ThemeContext.Provider>\n    )\n  }\n}\n\n// a component in the middle doesn\'t have to pass the theme down\nfunction Toolbar() {\n  return (\n    <div>\n      <ThemeButton />\n    </div>\n  )\n}\n\nclass ThemeButton extends React.Component {\n  // asign a contextType to read the current theme context\n  // React will find the closet theme Provider above and use its value\n  // in this example, the current theme is "dark"\n  static contextType = ThemeContext\n  render() {\n    return <Button theme={this.context}\n  }\n}\n\n')),(0,o.kt)("h2",{id:"-api"},"\ud83c\udf49 API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#-api"},"\ud83c\udf49 API"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#reactcreatecontext"},"React.createContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#contextprovider"},"Context.Provider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#classcontexttype"},"Class.contextType")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#contextconsumer"},"Context.Consumer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#contextdisplayname"},"Context.displayName"))))),(0,o.kt)("h3",{id:"reactcreatecontext"},"React.createContext"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const MyContext  = React.CreateContext(defaultValue)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createContext"),' \u5275\u5efa Context object\uff0c\u8a02\u95b1\u8a72 Context \u7684\u7d44\u4ef6\u6703\u8b80\u53d6"\u5c64\u7d1a\u9ad8\u65bc"\u4e14"\u6700\u63a5\u8fd1"\u7684 ',(0,o.kt)("inlineCode",{parentName:"li"},"Provider")," \u503c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"defaultValue")," \u53ea\u5728\u7576\u7d44\u4ef6\u6c92\u6709\u5339\u914d\u5230 Provider \u6642\u624d\u751f\u6548\u3002"),(0,o.kt)("li",{parentName:"ul"},"Provider value \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," \u4e0d\u6703\u4f7f\u7d44\u4ef6\u8f49\u800c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"defaultValue"),"\u3002")),(0,o.kt)("h3",{id:"contextprovider"},"Context.Provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<MyContext.Provider value={/*\u67d0\u500b\u503c*/}>\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6bcf\u500b Context object \u6703\u8fd4\u56de\u4e00\u500b Provider React\uff0c\u5b83\u5141\u8a31 consumer \u7d44\u4ef6\u8a02\u95b1 context \u8b8a\u5316"),(0,o.kt)("li",{parentName:"ol"},"Provider \u63a5\u53d7\u4e00\u500b value \u5c6c\u6027\uff0c\u5c07\u5b83\u50b3\u7d66 consumer \u7d44\u4ef6"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u591a\u500b Provider \u5d4c\u5957\u4f7f\u7528\uff0c\u5167\u5c64\u8986\u84cb\u5916\u5c64\u6578\u64da"),(0,o.kt)("li",{parentName:"ol"},"\u7576 Provider \u7684 value \u503c\u767c\u751f\u8b8a\u5316\uff0c\u5b83\u5167\u90e8\u6240\u6709\u7684 consumer \u7d44\u4ef6\u90fd\u6703\u91cd\u65b0\u6e32\u67d3\u3002"),(0,o.kt)("li",{parentName:"ol"},"Provider \u5230 consumer \u7d44\u4ef6\u7684\u50b3\u905e\u4e0d\u53d7\u5236\u65bc ",(0,o.kt)("inlineCode",{parentName:"li"},"shouldComponentUpdate")," \u51fd\u6578\uff0c\u56e0\u6b64\u7576\u5176\u7956\u5148\u7d44\u4ef6\u8df3\u904e\u66f4\u65b0\u7684\u60c5\u6cc1\u4e0b\u4e5f\u80fd\u66f4\u65b0\u3002")),(0,o.kt)("h3",{id:"classcontexttype"},"Class.contextType"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class MyClass extends React.component {\n  componentDidMount() {\n    let value = this.context\n    /* perform a side-effect at mount using the value of MyContext */\n  }\n  componentDidUpdate() {\n    let value = this.context\n  }\n  componentWillUnmount(){\n    let value = this.context\n  }\n  render() {\n    let value = this.context\n    /* render something based on the value of MyContext */\n  }\n}\nMyClass.contextType = MyContext\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u639b\u8f09\u5728 class \u4e0a\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"contextType")," \u5c6c\u6027\u53ef\u88ab ",(0,o.kt)("inlineCode",{parentName:"li"},"React.createContext( )")," \u5275\u5efa\u7684 Context object \u8ce6\u503c\uff0c\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"this.context")," \u7372\u53d6context \u503c"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u5728\u6240\u6709\u751f\u547d\u9031\u671f\u53ca render \u51fd\u6578\u4e2d\u8a2a\u554f\u5230")),(0,o.kt)("h3",{id:"contextconsumer"},"Context.Consumer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<MyContext.Consumer>\n  {value => /* render something based on the context value */}\n</MyContext.Consumer>\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728 function \u7d44\u4ef6\u8a02\u95b1 context")),(0,o.kt)("h3",{id:"contextdisplayname"},"Context.displayName"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const MyContext = React.createContext(/* some value */);\nMyContext.displayName = \'MyDisplayName\';\n\n<MyContext.Provider> // "MyDisplayName.Provider" \u5728 DevTools \u4e2d\n<MyContext.Consumer> // "MyDisplayName.Consumer" \u5728 DevTools \u4e2d\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"context object \u63a5\u53d7 ",(0,o.kt)("inlineCode",{parentName:"li"},"displayName")," \u7684 string \u985e\u578b\u5c6c\u6027\u3002\u5728 React DevTools \u4f7f\u7528\u8a72 string \u5448\u73fe context \u7684\u5185\u5bb9\u3002")))}m.isMDXComponent=!0}}]);