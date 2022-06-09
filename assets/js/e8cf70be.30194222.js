"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[6589],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4472:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},c="JSX",s={unversionedId:"React/jsx",id:"React/jsx",isDocsHomePage:!1,title:"JSX",description:"`jsx",source:"@site/docs/03-React/02-jsx.md",sourceDirName:"03-React",slug:"/React/jsx",permalink:"/my-note/docs/React/jsx",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/03-React/02-jsx.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic",permalink:"/my-note/docs/React/basic"},next:{title:"props",permalink:"/my-note/docs/React/props"}},u=[{value:"Embedding Expressions in JSX \u5d4c\u5165\u8868\u9054\u5f0f",id:"embedding-expressions-in-jsx-\u5d4c\u5165\u8868\u9054\u5f0f",children:[]},{value:"Specifying Attributes with JSX \u7279\u5b9a\u5c6c\u6027",id:"specifying-attributes-with-jsx-\u7279\u5b9a\u5c6c\u6027",children:[]},{value:"Prevents Injection Attacks \u9632\u6b62\u6ce8\u5165\u653b\u64ca",id:"prevents-injection-attacks-\u9632\u6b62\u6ce8\u5165\u653b\u64ca",children:[]},{value:"Represent Object",id:"represent-object",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jsx"},"JSX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = <h1>Hello World</h1>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u662f JavaScript \u7684\u8a9e\u6cd5\u62d3\u5c55"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5f88\u597d\u7684\u5448\u73fe UI \u7684\u5f62\u5f0f, \u900f\u904e\u5c07 markup \u548c logic \u5171\u540c\u653e\u5728 component \u7684\u8026\u5408\u55ae\u5143\u4e2d, \u4f86\u5be6\u73fe\u95dc\u6ce8\u9ede\u5206\u96e2"),(0,l.kt)("li",{parentName:"ul"},"React \u4e0d\u5f37\u5236\u4f7f\u7528JSX")),(0,l.kt)("h2",{id:"embedding-expressions-in-jsx-\u5d4c\u5165\u8868\u9054\u5f0f"},"Embedding Expressions in JSX \u5d4c\u5165\u8868\u9054\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u5927\u62ec\u5f27{}\u4e2d\u5305\u88f9JS\u8868\u9054\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function formatName(user) {\n  return user.firstName + ' ' + user.lastName;\n}\n\nconst user = {\n  firstName: 'Harper',\n  lastName: 'Perez'\n};\n\nconst element = (\n  <h1>\n    Hello, {formatName(user)}!\n  </h1>\n);\n\nReactDOM.render(\n  element,\n  document.getElementById('root')\n);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JSX\u4e5f\u662f\u8868\u9054\u5f0f")),(0,l.kt)("h2",{id:"specifying-attributes-with-jsx-\u7279\u5b9a\u5c6c\u6027"},"Specifying Attributes with JSX \u7279\u5b9a\u5c6c\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c6c\u6027\u503c\u900f\u904e\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"li"},'""')," \u5f15\u865f\u6307\u5b9a\u70ba string literals"),(0,l.kt)("li",{parentName:"ul"},"\u5c6c\u6027\u503c\u900f\u904e\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"li"},"{ }")," \u5927\u62ec\u865f\u4f86\u63d2\u5165JS\u8868\u9054\u5f0f (number, boolean...)"),(0,l.kt)("li",{parentName:"ul"},"\u547d\u540d\u4f7f\u7528 camelCase ")),(0,l.kt)("h2",{id:"prevents-injection-attacks-\u9632\u6b62\u6ce8\u5165\u653b\u64ca"},"Prevents Injection Attacks \u9632\u6b62\u6ce8\u5165\u653b\u64ca"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ReactDOM \u518d\u6e32\u67d3\u6240\u6709\u8f38\u5165\u5167\u5bb9\u524d, \u9ed8\u8a8d\u6703\u9032\u884c\u8f49\u8b6f. \u6240\u6709\u5167\u5bb9\u5728\u6e32\u67d3\u4e4b\u524d\u90fd\u88ab\u8f49\u63db\u6210\u4e86string")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const title = response.potentiallyMaliciousInput;\n// \u76f4\u63a5\u4f7f\u7528\u662f\u5b89\u5168\u7684\uff1a\nconst element = <h1>{title}</h1>;\n")),(0,l.kt)("h2",{id:"represent-object"},"Represent Object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Babel \u6703\u628a JSX \u8f49\u8b6f\u70ba ",(0,l.kt)("code",null,"React.createElement()"),"\u51fd\u6578\u8abf\u7528")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u4ee5\u4e0b\u5169\u7a2e\u4ee3\u78bc\u5b8c\u5168\u7b49\u6548\n\nconst element = (\n  <h1 className=\"greeting\">Hello</h1>\n)\n\nconst element = React.createElement(\n  'h1',\n  {className: 'greeting'},\n  'Hello'\n)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"React.createElement()"),"\u6703\u9810\u5148\u57f7\u884c\u4e00\u4e9b\u6aa2\u67e5, \u5be6\u969b\u4e0a\u5b83\u5275\u5efa\u4e86\u4e00\u500b\u9019\u6a23\u7684\u5c0d\u8c61")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = { // \u9019\u662f\u7c21\u5316\u904e\u7684\u7d50\u69cb\n  type: 'h1',\n  props: {\n    className: 'greeting',\n    children: 'Hello'\n  }\n}\n")))}m.isMDXComponent=!0}}]);