"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(u,".").concat(m)]||s[m]||p[m]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2185:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={slug:"introduce",title:"Introduce",tags:["redux"]},i=void 0,o={unversionedId:"Redux/introduce",id:"Redux/introduce",isDocsHomePage:!1,title:"Introduce",description:"*",source:"@site/docs/04-Redux/01-introduce.md",sourceDirName:"04-Redux",slug:"/Redux/introduce",permalink:"/my-note/docs/Redux/introduce",tags:[{label:"redux",permalink:"/my-note/docs/tags/redux"}],version:"current",sidebarPosition:1,frontMatter:{slug:"introduce",title:"Introduce",tags:["redux"]},sidebar:"tutorialSidebar",previous:{title:"Hooks Additional",permalink:"/my-note/docs/React/hooks-additional"},next:{title:"Middleware",permalink:"/my-note/docs/Redux/middleware"}},u=[{value:"Redux \u662f\u4ec0\u9ebc",id:"redux-\u662f\u4ec0\u9ebc",children:[]},{value:"\u4f7f\u7528\u539f\u56e0\u8207\u6642\u6a5f",id:"\u4f7f\u7528\u539f\u56e0\u8207\u6642\u6a5f",children:[]},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[{value:"\u72c0\u614b\u7ba1\u7406 State Management",id:"\u72c0\u614b\u7ba1\u7406-state-management",children:[]},{value:"\u4e0d\u53ef\u8b8a\u6027 Immutability",id:"\u4e0d\u53ef\u8b8a\u6027-immutability",children:[]}]},{value:"\u8853\u8a9e",id:"\u8853\u8a9e",children:[{value:"Actions",id:"actions",children:[]},{value:"Reducers",id:"reducers",children:[]},{value:"Store",id:"store",children:[]},{value:"Dispatch",id:"dispatch",children:[]},{value:"Selector",id:"selector",children:[]}]},{value:"\u793a\u610f\u5716",id:"\u793a\u610f\u5716",children:[]}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"redux-\u662f\u4ec0\u9ebc"},"Redux \u662f\u4ec0\u9ebc"),(0,a.kt)("p",null,"\u96c6\u4e2d\u5316\u7ba1\u7406\u8207\u66f4\u65b0\u61c9\u7528\u7a0b\u5f0f\u7684\u72c0\u614b."),(0,a.kt)("h2",{id:"\u4f7f\u7528\u539f\u56e0\u8207\u6642\u6a5f"},"\u4f7f\u7528\u539f\u56e0\u8207\u6642\u6a5f"),(0,a.kt)("p",null,"Redux \u66f4\u5bb9\u6613\u7ba1\u7406\u61c9\u7528\u7a0b\u5f0f\u7684\u72c0\u614b, \u4ee5\u53ca\u7406\u89e3\u4e8b\u4ef6\u908f\u8f2f. \u4ee5\u4e0b\u60c5\u6cc1\u9069\u5408\u4f7f\u7528\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u61c9\u7528\u7a0b\u5f0f\u5167\u6709\u591a\u7d44\u4ef6\u9700\u5171\u4eab\u72c0\u614b, Redux \u63d0\u4f9b\u4e86\u4e00\u500b\u96c6\u4e2d\u5f0f\u5b58\u5132\uff0c\u65b9\u4fbf\u7d44\u4ef6\u8a2a\u554f\u548c\u4fee\u6539\u72c0\u614b"),(0,a.kt)("li",{parentName:"ul"},"\u7576\u6578\u64da\u66f4\u65b0\u908f\u8f2f\u8907\u96dc, Redux \u5f37\u5236\u4f7f\u7528\u55ae\u5411\u6578\u64da\u6d41\u548c\u7d14\u51fd\u5f0f\u66f4\u65b0\u61c9\u7528\u72c0\u614b\uff0c\u4f7f\u72c0\u614b\u8b8a\u66f4\u66f4\u5bb9\u6613\u9810\u6e2c\u548c\u7406\u89e3")),(0,a.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,a.kt)("h3",{id:"\u72c0\u614b\u7ba1\u7406-state-management"},"\u72c0\u614b\u7ba1\u7406 State Management"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"state"),": \u6578\u64da\u72c0\u614b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"view"),": \u5448\u73fe\u6578\u64da\u7684\u756b\u9762"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"action"),": \u63cf\u8ff0\u6578\u64da\u72c0\u614b\u8b8a\u5316\u7684\u4e8b\u4ef6")),(0,a.kt)("p",null,"\u55ae\u5411\u6578\u64da\u6d41"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png",alt:"https://redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png"})),(0,a.kt)("h3",{id:"\u4e0d\u53ef\u8b8a\u6027-immutability"},"\u4e0d\u53ef\u8b8a\u6027 Immutability"),(0,a.kt)("p",null,"redux \u7684\u72c0\u614b\u66f4\u65b0\u90fd\u662f immutably. \u6bcf\u7576\u6539\u8b8a\u72c0\u614b\u6642, \u6703\u5275\u5efa\u4e00\u500b\u65b0\u72c0\u614b\u526f\u672c, \u4e26\u5c07\u4fee\u6539\u61c9\u7528\u5728\u526f\u672c\u4e0a."),(0,a.kt)("h2",{id:"\u8853\u8a9e"},"\u8853\u8a9e"),(0,a.kt)("h3",{id:"actions"},"Actions"),(0,a.kt)("p",null,"\u767c\u751f\u7684\u4e8b\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),": \u4e8b\u4ef6\u540d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"payload"),": \u53c3\u6578")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Action Creator\nconst addTodo = text => {\n  return {\n    type: 'todos/todoAdded',\n    payload: text\n  }\n}\n")),(0,a.kt)("h3",{id:"reducers"},"Reducers"),(0,a.kt)("p",null,"\u63a5\u6536 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"action"),", \u6c7a\u5b9a\u5982\u4f55\u66f4\u65b0\u72c0\u614b. \u4e0b\u5217\u898f\u5247\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u50b3\u5165\u53c3\u6578 ",(0,a.kt)("inlineCode",{parentName:"li"},"state")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"action")," \u4f86\u8a08\u7b97\u65b0\u72c0\u614b"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4fee\u6539\u73fe\u5b58 ",(0,a.kt)("inlineCode",{parentName:"li"},"state"),", \u61c9\u8907\u88fd\u526f\u672c\u5f8c\u4fee\u6539\u526f\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u6709 asynchronous logic, random values, side effect")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const initialState = { value: 0 }\n\nfunction counterReducer(state = initialState, action) {\n  if (action.type === 'counter/increment') {\n    return {\n      ...state,\n      value: state.value + 1\n    }\n  }\n  return state\n}\n")),(0,a.kt)("h3",{id:"store"},"Store"),(0,a.kt)("p",null,"\u50b3\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"reducer")," \u4f86\u5275\u5efa. \u5167\u5efa\u65b9\u6cd5 ",(0,a.kt)("inlineCode",{parentName:"p"},"getState")," \u7372\u53d6\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit'\n\nconst store = configureStore({ reducer: counterReducer })\n\nconsole.log(store.getState()) // {value: 0}\n")),(0,a.kt)("h3",{id:"dispatch"},"Dispatch"),(0,a.kt)("p",null,"\u552f\u4e00\u80fd\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u65b9\u6cd5. ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," \u7684\u5167\u5efa\u65b9\u6cd5\u4e26\u50b3\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"action object")," \u4f86\u547c\u53eb ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"store.dispatch({ type: 'counter/increment' })\n\nconsole.log(store.getState()) // {value: 1}\n")),(0,a.kt)("h3",{id:"selector"},"Selector"),(0,a.kt)("p",null,"\u63d0\u53d6\u548c\u8a08\u7b97 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const selectCounterValue = state => state.value\n\nconst currentValue = selectCounterValue(store.getState())\nconsole.log(currentValue) // 2\n")),(0,a.kt)("h2",{id:"\u793a\u610f\u5716"},"\u793a\u610f\u5716"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif",alt:"https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif"})))}d.isMDXComponent=!0}}]);