"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[4371],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4370:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={slug:"handling-events",title:"Handling Events",tags:["react"]},c=void 0,u={unversionedId:"React/handling-events",id:"React/handling-events",isDocsHomePage:!1,title:"Handling Events",description:"*",source:"@site/docs/03-React/06-handling-events.md",sourceDirName:"03-React",slug:"/React/handling-events",permalink:"/my-note/docs/React/handling-events",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/03-React/06-handling-events.md",tags:[{label:"react",permalink:"/my-note/docs/tags/react"}],version:"current",sidebarPosition:6,frontMatter:{slug:"handling-events",title:"Handling Events",tags:["react"]},sidebar:"tutorialSidebar",previous:{title:"State and Lifecycle",permalink:"/my-note/docs/React/state-and-lifecycle"},next:{title:"Condition rendering",permalink:"/my-note/docs/React/condition-rendering"}},s=[{value:"\ud83c\udf49 Passing Arguments to Event Handlers",id:"-passing-arguments-to-event-handlers",children:[]}],p={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u547d\u540d\u63a1\u5c0f\u99dd\u5cf0 camelCase"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 JSX \u8a9e\u6cd5\u6642\u9700\u8981\u50b3\u5165 function \u4f5c\u70ba event handler\uff0c\u800c\u4e0d\u662f string")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- HTML --\x3e\n<button onclick="handleClick()">click1</button>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// JSX\n<button onClick={handleClick}>click1</button>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u963b\u6b62\u9ed8\u8a8d\u884c\u70ba\u5728 React \u4e2d\u5fc5\u9808\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"preventDefault"),"\uff0c\u4e0d\u80fd\u50cf html \u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"return false"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- HTML --\x3e\n<button onclick=\"console.log('The link was clicked'); return false\">click2</button>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{4}","{4}":!0},"// JSX\nfunction ActionLink() {\n  function handleClick(e) {\n    e.preventDefault();\n    console.log('The link was clicked.');\n  }\n\n  return (\n    <a href=\"#\" onClick={handleClick}>\n      click2\n    </a>\n  );\n}\n")),(0,o.kt)("h2",{id:"-passing-arguments-to-event-handlers"},"\ud83c\udf49 Passing Arguments to Event Handlers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u82e5\u8981\u50b3\u905eid, \u4e0b\u5217\u5169\u7a2e\u7b49\u50f9:\n// 1. \u7bad\u982d\u51fd\u5f0f\u4e0b React event \u6703\u4f5c\u70ba\u7b2c\u4e8c\u500b\u53c3\u6578\u50b3\u905e, \u5fc5\u9808\u986f\u793a\u9032\u884c\u50b3\u905e\n<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>\n\n// 2. \u900f\u904e bind \u7684\u65b9\u5f0f, React event \u6703\u96b1\u5f0f\u9032\u884c\u50b3\u905e\n<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>\n")))}d.isMDXComponent=!0}}]);