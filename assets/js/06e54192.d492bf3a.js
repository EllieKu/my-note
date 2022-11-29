"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[4512],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||l[d]||o;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5098:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={slug:"forwarding-refs",title:"Forwarding Refs",tags:["react"]},s=void 0,u={unversionedId:"React/forwarding-refs",id:"React/forwarding-refs",isDocsHomePage:!1,title:"Forwarding Refs",description:"*",source:"@site/docs/03-React/13-forwarding-refs.md",sourceDirName:"03-React",slug:"/React/forwarding-refs",permalink:"/my-note/docs/React/forwarding-refs",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/03-React/13-forwarding-refs.md",tags:[{label:"react",permalink:"/my-note/docs/tags/react"}],version:"current",sidebarPosition:13,frontMatter:{slug:"forwarding-refs",title:"Forwarding Refs",tags:["react"]},sidebar:"tutorialSidebar",previous:{title:"Context",permalink:"/my-note/docs/React/context"},next:{title:"Higher-Order Components",permalink:"/my-note/docs/React/higher-order-components"}},f=[],l={toc:f};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Ref forwarding \u662f\u4e00\u7a2e\u6280\u5de7. \u5c07 ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," \u50b3\u905e\u5230\u5b50\u7d44\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4,12,13}","{1,4,12,13}":!0},'const FancyButton = React.forwardRef((props, ref) => {\n  return (\n    <button\n      ref={ref}\n      className="FancyButton"\n    >\n      {props.children}\n    </button>\n  )\n})\n\n// \u73fe\u5728 FancyButton \u53ef\u7372\u53d6 DOM button \u7684 ref \u6216\u8a2a\u554f\nconst ref = React.createRef()\n<FancyButton ref={ref}>Click me!</FancyButton>\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7b2c\u4e8c\u500b\u53c3\u6578 ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," \u53ea\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.forwardRef")," \u6642\u5b58\u5728"))))}p.isMDXComponent=!0}}]);