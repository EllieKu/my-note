"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[6484],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2088:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],i={slug:"forms",title:"Forms",tags:["react"]},u=void 0,s={unversionedId:"React/forms",id:"React/forms",isDocsHomePage:!1,title:"Forms",description:"*",source:"@site/docs/03-React/09-forms.md",sourceDirName:"03-React",slug:"/React/forms",permalink:"/my-note/docs/React/forms",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/03-React/09-forms.md",tags:[{label:"react",permalink:"/my-note/docs/tags/react"}],version:"current",sidebarPosition:9,frontMatter:{slug:"forms",title:"Forms",tags:["react"]},sidebar:"tutorialSidebar",previous:{title:"List and Keys",permalink:"/my-note/docs/React/lists-and-keys"},next:{title:"Lifting State Up",permalink:"/my-note/docs/React/lifting-state-up"}},p=[{value:"Controlled Component",id:"controlled-component",children:[]},{value:"&lt;select&gt; tag",id:"select-tag",children:[]},{value:"&lt;input type=&quot;file&quot;&gt; Tag",id:"input-typefile-tag",children:[]},{value:"Handling Multiple Inputs",id:"handling-multiple-inputs",children:[]},{value:"Controlled Input Null Value",id:"controlled-input-null-value",children:[]},{value:"\u5176\u4ed6\u65b9\u6848",id:"\u5176\u4ed6\u65b9\u6848",children:[]}],c={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"controlled-component"},"Controlled Component"),(0,l.kt)("p",null,"\u6e32\u67d3\u8868\u55ae\u7684 React \u7d44\u4ef6\u5229\u7528 state \u4f86\u63a7\u5236\u8457\u4f7f\u7528\u8005\u8f38\u5165\u5f8c\u7684\u884c\u70ba\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u53d7\u63a7\u7ec4\u4ef6\u6765\u8bf4\uff0c\u8f93\u5165\u7684\u503c\u59cb\u7ec8\u7531 React \u7684 state \u9a71\u52a8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{7,12-14,25}","{7,12-14,25}":!0},'// write the form as a controlled component\n\nclass NameForm extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {value: \'\'}\n    this.handleChange = this.handleChange.bind(this)\n    this.handleSubmit = this.handleSubmit.bind(this)\n  }\n\n  handleChange(e) {\n    this.setState({value: e.target.value})\n  }\n\n  handleSubmit(e) {\n    alert(`\u8f38\u5165\u7684\u540d\u5b57: ${this.state.value}`)\n    e.preventDefault()\n  }\n\n  render() {\n    return(\n      <form onSubmit={this.handleSubmit}>\n        <label>\n          <input type="text" value={this.state.value} onChange={this.handleChange}></input>\n        </label>\n        <button type="submit" onClick={this.handleSubmit}>\u63d0\u4ea4</button>\n      </form>\n    )\n  }\n}\n')),(0,l.kt)("h3",{id:"select-tag"},"<select",">"," tag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{4,10-12,24}","{4,10-12,24}":!0},'class FlavorForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {value: \'coconut\'};\n\n    this.handleChange = this.handleChange.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  handleChange(event) {\n    this.setState({value: event.target.value});\n  }\n\n  handleSubmit(event) {\n    alert(\'\u4f60\u559c\u6b22\u7684\u98ce\u5473\u662f: \' + this.state.value);\n    event.preventDefault();\n  }\n\n  render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <label>\n          \u9009\u62e9\u4f60\u559c\u6b22\u7684\u98ce\u5473:\n          <select value={this.state.value} onChange={this.handleChange}>\n            <option value="grapefruit">\u8461\u8404\u67da</option>\n            <option value="lime">\u9178\u6a59</option>\n            <option value="coconut">\u6930\u5b50</option>\n            <option value="mango">\u8292\u679c</option>\n          </select>\n        </label>\n        <input type="submit" value="\u63d0\u4ea4" />\n      </form>\n    );\n  }\n}\n')),(0,l.kt)("h3",{id:"input-typefile-tag"},'<input type="file"',">"," Tag"),(0,l.kt)("p",null,"\u5141\u8a31\u4f7f\u7528\u8005\u5f9e\u88dd\u7f6e\u4e2d\u9078\u64c7\u6587\u4ef6\u4e0a\u50b3\u81f3 server\uff0c\u6216\u900f\u904e\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications"},"File API")," \u63a7\u5236\u3002\n\u56e0\u70ba\u5176 value \u662f\u552f\u8b80\uff0c\u6240\u4ee5\u662f\u4e00\u500b\u975e\u53d7\u63a7\u7d44\u4ef6\u3002",(0,l.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag"},"\u5176\u5b83\u975e\u53d7\u63a7\u7d44\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<input type="file">\n')),(0,l.kt)("h3",{id:"handling-multiple-inputs"},"Handling Multiple Inputs"),(0,l.kt)("p",null,"\u53ef\u4ee5\u7d66\u6bcf\u500b\u5143\u7d20\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u5c6c\u6027, \u4e26\u8b93\u4e8b\u4ef6\u8655\u7406\u51fd\u6578\u4f9d ",(0,l.kt)("inlineCode",{parentName:"p"},"event.target.name")," \u5c0d\u61c9\u57f7\u884c\u7684\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{15,18,28,37}","{15,18,28,37}":!0},'class Reservation extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isGoing: true,\n      numberOfGuests: 2\n    };\n\n    this.handleInputChange = this.handleInputChange.bind(this);\n  }\n\n  handleInputChange(event) {\n    const target = event.target;\n    const value = target.type === \'checkbox\' ? target.checked : target.value;\n    const name = target.name;\n\n    this.setState({\n      [name]: value\n    });\n  }\n\n  render() {\n    return (\n      <form>\n        <label>\n          Is going:\n          <input\n            name="isGoing"\n            type="checkbox"\n            checked={this.state.isGoing}\n            onChange={this.handleInputChange} />\n        </label>\n        <br />\n        <label>\n          Number of guests:\n          <input\n            name="numberOfGuests"\n            type="number"\n            value={this.state.numberOfGuests}\n            onChange={this.handleInputChange} />\n        </label>\n      </form>\n    );\n  }\n}\n')),(0,l.kt)("h3",{id:"controlled-input-null-value"},"Controlled Input Null Value"),(0,l.kt)("p",null,"\u6307\u5b9a\u53d7\u63a7\u7d44\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," \u6703\u963b\u6b62\u7528\u6236\u8f38\u5165\u3002\u5982\u679c\u6307\u5b9a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," \u4f46\u8f38\u5165\u4ecd\u53ef\u7de8\u8f2f\uff0c\u5247\u53ef\u80fd\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," \u503c\u610f\u5916\u8b8a\u6210\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'// \u4e00\u958b\u59cb\u88ab\u9396\u5b9a, \u4f461\u79d2\u5f8c\u8b8a\u53ef\u7de8\u8f2f\nReactDOM.render(<input value="hi" />, mountNode);\n\nsetTimeout(function() {\n  ReactDOM.render(<input value={null} />, mountNode);\n}, 1000);\n')),(0,l.kt)("h3",{id:"\u5176\u4ed6\u65b9\u6848"},"\u5176\u4ed6\u65b9\u6848"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://formik.org/"},"Formik")))}m.isMDXComponent=!0}}]);