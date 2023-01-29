"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[4512],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5098:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={slug:"forwarding-refs",title:"Forwarding Refs",tags:["react"]},s=void 0,p={unversionedId:"React/forwarding-refs",id:"React/forwarding-refs",isDocsHomePage:!1,title:"Forwarding Refs",description:"*",source:"@site/docs/03-React/13-forwarding-refs.md",sourceDirName:"03-React",slug:"/React/forwarding-refs",permalink:"/my-note/docs/React/forwarding-refs",tags:[{label:"react",permalink:"/my-note/docs/tags/react"}],version:"current",sidebarPosition:13,frontMatter:{slug:"forwarding-refs",title:"Forwarding Refs",tags:["react"]},sidebar:"tutorialSidebar",previous:{title:"Context",permalink:"/my-note/docs/React/context"},next:{title:"Higher-Order Components",permalink:"/my-note/docs/React/higher-order-components"}},l=[{value:"Forwarding refs to DOM components",id:"forwarding-refs-to-dom-components",children:[]},{value:"In Higher Order Components",id:"in-higher-order-components",children:[]}],f={toc:l};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"forwarding-refs-to-dom-components"},"Forwarding refs to DOM components"),(0,a.kt)("p",null,"Ref forwarding \u662f\u4e00\u7a2e\u6280\u5de7. \u5c07 ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," \u50b3\u905e\u5230\u5b50\u7d44\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4,13,14}","{1,4,13,14}":!0},'const FancyButton = React.forwardRef((props, ref) => {\n  return (\n    <button\n      ref={ref}\n      className="FancyButton"\n    >\n      {props.children}\n    </button>\n  )\n})\n\n// \u73fe\u5728\u53ef\u8a2a\u554f FancyButton \u4e0b button \u7684 DOM\nconst ref = React.createRef()\n<FancyButton ref={ref}>Click me!</FancyButton>\n')),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7b2c\u4e8c\u500b\u53c3\u6578 ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," \u53ea\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"React.forwardRef")," \u6642\u5b58\u5728"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"in-higher-order-components"},"In Higher Order Components"))}u.isMDXComponent=!0}}]);