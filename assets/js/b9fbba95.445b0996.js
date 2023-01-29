"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[1224],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3752:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u="Redux",c={unversionedId:"Redux/redux",id:"Redux/redux",isDocsHomePage:!1,title:"Redux",description:"State",source:"@site/docs/04-Redux/redux.md",sourceDirName:"04-Redux",slug:"/Redux/redux",permalink:"/my-note/docs/Redux/redux",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/my-note/docs/Redux/middleware"},next:{title:"Thunk",permalink:"/my-note/docs/Redux/thunk"}},p=[{value:"State",id:"state",children:[]},{value:"Action",id:"action",children:[]},{value:"Action Creator",id:"action-creator",children:[]},{value:"Reducer",id:"reducer",children:[]},{value:"Store",id:"store",children:[]},{value:"Data Flow",id:"data-flow",children:[]}],d={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"redux"},"Redux"),(0,l.kt)("h2",{id:"state"},"State"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5141\u8a31\u4fee\u6539\u73fe\u5b58 ",(0,l.kt)("inlineCode",{parentName:"li"},"state"),", \u800c\u662f\u8907\u88fd\u4e00\u4efd\u73fe\u5b58",(0,l.kt)("inlineCode",{parentName:"li"},"state"),"\u4e26\u4fee\u6539"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"state"),"\u70ba object, array, primitives")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"action"},"Action"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"action"),"\u70baobject, \u4e26\u6709",(0,l.kt)("inlineCode",{parentName:"li"},"type"),"\u5c6c\u6027")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const addTodoAction = {\n  type: 'todos/todoAdded',\n  payload: 'Buy milk'\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"action-creator"},"Action Creator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const addTodo = text => {\n  return {\n    type: 'todos/todoAdded',\n    payload: text\n  }\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reducer"},"Reducer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5229\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"state")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"action")," \u7576\u53c3\u6578, \u4f86\u8a08\u7b97\u65b0\u7684\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5141\u8a31\u4fee\u6539\u73fe\u5b58 ",(0,l.kt)("inlineCode",{parentName:"li"},"state"),", \u800c\u662f\u8907\u88fd\u4e00\u4efd\u73fe\u5b58",(0,l.kt)("inlineCode",{parentName:"li"},"state"),"\u4e26\u4fee\u6539"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u57f7\u884c",(0,l.kt)("em",{parentName:"li"},"\u7570\u6b65\u64cd\u4f5c"),"\u6216\u662f\u6709",(0,l.kt)("em",{parentName:"li"},"\u526f\u4f5c\u7528"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function counterReducer(state = initialState, action) {\n  switch (action.type) {\n    case 'counter/incremented':\n      return {\n        ...state,\n        value: state.value + 1\n      }\n    case 'counter/decremented':\n      return { \n        ...state,\n        value: state.value - 1 \n      }\n    default:\n      return state\n  }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ea\u6709\u7576\u4f7f\u7528 Redux Toolkit's \u7684 ",(0,l.kt)("strong",{parentName:"li"},"createSlice")," \u548c ",(0,l.kt)("strong",{parentName:"li"},"createReducer"),' \u6642\u53ef\u4ee5 "mutating" logic, \u56e0\u70ba\u4f7f\u7528\u4e86 ',(0,l.kt)("a",{parentName:"li",href:"https://immerjs.github.io/immer/"},"Immer"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"store"},"Store"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u552f\u4e00\u66f4\u65b0",(0,l.kt)("inlineCode",{parentName:"li"},"state"),"\u7684\u65b9\u6cd5\u662f\u547c",(0,l.kt)("inlineCode",{parentName:"li"},"store.dispatch()"),"\u4e26\u50b3\u5165\u4e00\u500b",(0,l.kt)("inlineCode",{parentName:"li"},"action"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const store = Redux.createStore(counterReducer)\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"data-flow"},"Data Flow"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521d\u59cb\u8a2d\u7f6e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"store \u5efa\u7acb, \u4f7f\u7528 root reducer"),(0,l.kt)("li",{parentName:"ul"},"store \u547c\u53eb root reducer, \u4e26\u5c07\u56de\u50b3\u503c\u8a2d\u70ba\u521d\u59cb state"),(0,l.kt)("li",{parentName:"ul"},"\u7576UI\u5c64\u7b2c\u4e00\u6b21\u63cf\u7e6a, UI\u7d44\u4ef6\u901a\u904e\u7372\u53d6 store \u5167\u7684 state \u63cf\u7e6a\u756b\u9762, \u4e26\u8a02\u95b1\u672a\u4f86\u4efb\u4f55 store \u66f4\u65b0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u66f4\u65b0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u767c\u751f, \u50cf\u9ede\u64ca\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"dispatch \u4e00\u500b action \u5230 store, \u50cf dispatch({type: 'counter/increment'})"),(0,l.kt)("li",{parentName:"ul"},"store \u900f\u904e\u57f7\u884c reducer(previousState, action\uff09, \u5f97\u5230\u65b0 state \u5132\u5b58"),(0,l.kt)("li",{parentName:"ul"},"store \u901a\u77e5\u6240\u6709\u6709\u8a02\u95b1\u7684UI\u53bb\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u500bUI\u7d44\u4ef6\u78ba\u8a8d\u81ea\u8eab\u7684\u6578\u64da\u662f\u5426\u6709\u6539\u8b8a"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u7d44\u4ef6\u7684\u6578\u64da\u6539\u8b8a\u4fc3\u4f7f\u91cd\u65b0\u6e32\u67d3\u5229\u7528\u65b0\u6578\u64da")))))}s.isMDXComponent=!0}}]);