"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[7728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2228:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={slug:"code-splitting",title:"Code Splitting",tags:["react"]},i=void 0,p={unversionedId:"React/code-splitting",id:"React/code-splitting",isDocsHomePage:!1,title:"Code Splitting",description:"*",source:"@site/docs/03-React/11-code-splitting.md",sourceDirName:"03-React",slug:"/React/code-splitting",permalink:"/my-note/docs/React/code-splitting",tags:[{label:"react",permalink:"/my-note/docs/tags/react"}],version:"current",sidebarPosition:11,frontMatter:{slug:"code-splitting",title:"Code Splitting",tags:["react"]},sidebar:"tutorialSidebar",previous:{title:"Lifting State Up",permalink:"/my-note/docs/React/lifting-state-up"},next:{title:"Context",permalink:"/my-note/docs/React/context"}},l=[{value:"purpose",id:"purpose",children:[]},{value:"import()",id:"import",children:[]},{value:"React.lazy and Suspense",id:"reactlazy-and-suspense",children:[]}],c={toc:l};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"purpose"},"purpose"),(0,o.kt)("p",null,'code splitting can help you "lazy-loading" the things are currently needed by user, which can improve loading speed'),(0,o.kt)("h2",{id:"import"},"import()"),(0,o.kt)("p",null,"before:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { add } from './math'\n\nconsole.log(add(16, 26))\n")),(0,o.kt)("p",null,"after:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import("./math").then(math => {\n  console.log(math.add(16, 26))\n})\n')),(0,o.kt)("h2",{id:"reactlazy-and-suspense"},"React.lazy and Suspense"),(0,o.kt)("p",null,"dynamic import as a regular component."),(0,o.kt)("p",null,"before:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import OtherComponent from './OtherComponent'\nimport AnotherComponent from './AnotherComponent'\n")),(0,o.kt)("p",null,"after:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Suspense } from 'react';\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\nconst AnotherComponent = React.lazy(() => import('./AnotherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <OtherComponent />\n        <AnotherComponent />\n      </Suspense>\n    </div>\n  );\n}\n")))}s.isMDXComponent=!0}}]);