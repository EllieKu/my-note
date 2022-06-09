"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[2484],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9697:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={},s="forms",u={unversionedId:"React/forms",id:"React/forms",isDocsHomePage:!1,title:"forms",description:"Controlled Component \u53d7\u63a7\u7d44\u4ef6",source:"@site/docs/03-React/06-forms.md",sourceDirName:"03-React",slug:"/React/forms",permalink:"/docs/React/forms",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/03-React/06-forms.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lists and Keys",permalink:"/docs/React/lists-and-keys"},next:{title:"Lifting State Up",permalink:"/docs/React/lifting-state-up"}},p=[{value:"Controlled Component \u53d7\u63a7\u7d44\u4ef6",id:"controlled-component-\u53d7\u63a7\u7d44\u4ef6",children:[]},{value:"\u975e\u53d7\u63a7\u7d44\u4ef6",id:"\u975e\u53d7\u63a7\u7d44\u4ef6",children:[]},{value:"\u8655\u7406\u591a\u500b\u8f38\u5165\u5143\u7d20",id:"\u8655\u7406\u591a\u500b\u8f38\u5165\u5143\u7d20",children:[]},{value:"\u5176\u4ed6\u65b9\u6848",id:"\u5176\u4ed6\u65b9\u6848",children:[]}],c={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"forms"},"forms"),(0,o.kt)("h2",{id:"controlled-component-\u53d7\u63a7\u7d44\u4ef6"},"Controlled Component \u53d7\u63a7\u7d44\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8868\u55ae\u5143\u7d20(",(0,o.kt)("inlineCode",{parentName:"li"},"<input>"),".",(0,o.kt)("inlineCode",{parentName:"li"},"<textarea>"),".",(0,o.kt)("inlineCode",{parentName:"li"},"<select>"),"\u7b49)\u503c\u4fdd\u5b58\u5728 state, \u7531 state \u63a7\u5236\u6210\u70ba",(0,o.kt)("strong",{parentName:"li"},"\u552f\u4e00\u6578\u64da\u6e90"),". \u88ab React \u4ee5\u9019\u7a2e\u65b9\u5f0f\u63a7\u5236\u53d6\u503c\u7684\u8868\u55ae\u8f38\u5165\u5143\u7d20\u5c31\u7a31\u70ba\u53d7\u63a7\u7d44\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class NameForm extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {value: 'test'}\n    this.handleChange = this.handleChange.bind(this)\n    this.handleSubmit = this.handleSubmit.bind(this)\n  }\n\n  handleChange(e) {\n    this.setState({value: e.target.value})\n  }\n\n  handleSubmit(e) {\n    alert(`\u8f38\u5165\u7684\u540d\u5b57: ${this.state.value}`)\n    e.preventDefault()\n  }\n\n  render() {\n    return(\n      <form>\n        <label>\n          <input type=\"text\" value={this.state.value} onChange={this.handleChange}></input>\n        </label>\n        <button type=\"submit\" onClick={this.handleSubmit}>\u63d0\u4ea4</button>\n      </form>\n    )\n  }\n}\n\nReactDOM.render(\n  <NameForm />,\n  document.getElementById('root')\n)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<select>")," tag")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'class FlavorForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {value: \'coconut\'};\n\n    this.handleChange = this.handleChange.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  handleChange(event) {\n    this.setState({value: event.target.value});\n  }\n\n  handleSubmit(event) {\n    alert(\'\u4f60\u559c\u6b22\u7684\u98ce\u5473\u662f: \' + this.state.value);\n    event.preventDefault();\n  }\n\n  render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <label>\n          \u9009\u62e9\u4f60\u559c\u6b22\u7684\u98ce\u5473:\n          <select value={this.state.value} onChange={this.handleChange}>\n            <option value="grapefruit">\u8461\u8404\u67da</option>\n            <option value="lime">\u9178\u6a59</option>\n            <option value="coconut">\u6930\u5b50</option>\n            <option value="mango">\u8292\u679c</option>\n          </select>\n        </label>\n        <input type="submit" value="\u63d0\u4ea4" />\n      </form>\n    );\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u53d7\u63a7\u7d44\u4ef6\u4e0a\u6307\u5b9a ",(0,o.kt)("em",{parentName:"li"},"value")," \u7684 ",(0,o.kt)("em",{parentName:"li"},"props")," \u6703\u963b\u6b62\u7528\u6236\u8f38\u5165, \u5982\u679c\u6307\u5b9a\u4e86 ",(0,o.kt)("em",{parentName:"li"},"value")," \u4ecd\u53ef\u7de8\u8f2f, \u90a3\u53ef\u80fd\u662f ",(0,o.kt)("em",{parentName:"li"},"value")," \u503c\u610f\u5916\u8b8a\u6210\u4e86 ",(0,o.kt)("em",{parentName:"li"},"undefined")," \u6216 ",(0,o.kt)("em",{parentName:"li"},"null"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u8f38\u5165\u88ab\u9396\u5b9a\nReactDOM.render(<input value=\"hi\" />, document.getElementById('root'));\n\n// \u8f38\u5165\u53ef\u7de8\u8f2f\nReactDOM.render(<input value={null} />, document.getElementById('root'));\n")),(0,o.kt)("h2",{id:"\u975e\u53d7\u63a7\u7d44\u4ef6"},"\u975e\u53d7\u63a7\u7d44\u4ef6"),(0,o.kt)("p",null,"\u53c3\u95b1 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications"},"File API")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-HTML"},'\x3c!--\u56e0\u70ba\u5b83\u7684value\u70bareadonly --\x3e\n<input type="file">\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag"},"\u5176\u9918\u8acb\u53c3\u95b1\u6587\u6a94")),(0,o.kt)("h2",{id:"\u8655\u7406\u591a\u500b\u8f38\u5165\u5143\u7d20"},"\u8655\u7406\u591a\u500b\u8f38\u5165\u5143\u7d20"),(0,o.kt)("p",null,"\u53ef\u4ee5\u7d66\u6bcf\u500b\u5143\u7d20\u6dfb\u52a0 ",(0,o.kt)("em",{parentName:"p"},"name")," \u5c6c\u6027, \u4e26\u8b93\u4e8b\u4ef6\u8655\u7406\u51fd\u6578\u4f9d ",(0,o.kt)("em",{parentName:"p"},"event.target.name")," \u5c0d\u61c9\u57f7\u884c\u7684\u64cd\u4f5c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'class NameForm extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      isGoing: true,\n      guests: 2\n    }\n\n    this.handleSubmit = this.handleSubmit.bind(this)\n    this.handleChange = this.handleChange.bind(this)\n  }\n\n  handleSubmit(e) {\n    console.log(`isGoing: ${this.state.isGoing}, guests: ${this.state.guests}`)\n    e.preventDefault()\n  }\n  \n  handleChange(e) {\n    const name = e.target.name\n    const checked = e.target.checked\n    const value = e.target.value\n    const result = e.target.type === \'checkbox\' ? checked : value\n    this.setState({[name]: result}) \n    // console.log(e)\n  }\n\n  render() {\n    return (\n      <form>\n        <label>is going:\n          <input \n            type="checkbox"\n            name="isGoing"\n            checked={this.state.isGoing}\n            onChange={this.handleChange}></input>\n        </label>\n        <br/>\n        <label>number of guests:\n          <input\n            type="number"\n            name="guests"\n            value={this.state.guests}\n            onChange={this.handleChange}></input>\n        </label>\n        <button type="submit" onClick={this.handleSubmit}>\u63d0\u4ea4</button>\n      </form>\n    )\n  }\n}\n')),(0,o.kt)("h2",{id:"\u5176\u4ed6\u65b9\u6848"},"\u5176\u4ed6\u65b9\u6848"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://formik.org/"},"Formik")," --- \u9084\u6c92\u770b"))}m.isMDXComponent=!0}}]);