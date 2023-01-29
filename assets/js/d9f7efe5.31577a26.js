"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[9797],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||l[f]||c;return r?t.createElement(d,a(a({ref:n},s),{},{components:r})):t.createElement(d,a({ref:n},s))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5232:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var t=r(7462),o=r(3366),c=(r(7294),r(3905)),a=["components"],i={},p="Higher-Order Components",u={unversionedId:"React/higher-order-components",id:"React/higher-order-components",isDocsHomePage:!1,title:"Higher-Order Components",description:"Concretely, a higher-order component is a function that takes a component and returns a new component.",source:"@site/docs/03-React/14-higher-order-components.md",sourceDirName:"03-React",slug:"/React/higher-order-components",permalink:"/my-note/docs/React/higher-order-components",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Forwarding Refs",permalink:"/my-note/docs/React/forwarding-refs"},next:{title:"Portal",permalink:"/my-note/docs/React/portal"}},s=[],l={toc:s};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"higher-order-components"},"Higher-Order Components"),(0,c.kt)("p",null,"Concretely, a higher-order component is a function that takes a component and returns a new component."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"const EnhancedComponent = higherOrderComponent(WrappedComponent);\n")))}m.isMDXComponent=!0}}]);