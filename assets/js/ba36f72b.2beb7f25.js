"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[8365],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,k=s["".concat(m,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9162:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},m="Memory Leak",c={unversionedId:"Sundries/memoryLeak",id:"Sundries/memoryLeak",isDocsHomePage:!1,title:"Memory Leak",description:"\u8d77\u56e0",source:"@site/docs/07-Sundries/memoryLeak.md",sourceDirName:"07-Sundries",slug:"/Sundries/memoryLeak",permalink:"/docs/Sundries/memoryLeak",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/07-Sundries/memoryLeak.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"markdownSkill",permalink:"/docs/Sundries/markdownSkill"},next:{title:"\u624b\u6a5f\u700f\u6d77\u6709\u7121\u7684UI",permalink:"/docs/Sundries/mobile"}},p=[{value:"\u8d77\u56e0",id:"\u8d77\u56e0",children:[]},{value:"\u6aa2\u6e2c",id:"\u6aa2\u6e2c",children:[]},{value:"\u5f15\u8d77 memory leak \u7684\u539f\u56e0",id:"\u5f15\u8d77-memory-leak-\u7684\u539f\u56e0",children:[]},{value:"\u53c3\u8003\u4f86\u6e90",id:"\u53c3\u8003\u4f86\u6e90",children:[]}],u={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"memory-leak"},"Memory Leak"),(0,o.kt)("h3",{id:"\u8d77\u56e0"},"\u8d77\u56e0"),(0,o.kt)("p",null,"Memory leak\uff08\u8a18\u61b6\u9ad4\u6d41\u5931\uff09\uff0c\u662f\u6307\u7a0b\u5f0f\u904b\u884c\u7684\u904e\u7a0b\u4e2d\uff0c\u4e0d\u518d\u4f7f\u7528\u7684\u8a18\u61b6\u9ad4\u7a7a\u9593\u6c92\u6709\u6b63\u5e38\u88ab\u91cb\u653e\uff0c\u6301\u7e8c\u4f54\u7528\u7a7a\u9593\u800c\u9020\u6210\u7684\u8a18\u61b6\u9ad4\u6d6a\u8cbb\u3002\u5982\u679c\u9019\u7a2e\u72c0\u6cc1\u4e0d\u65b7\u767c\u751f\uff0c\u5c31\u6703\u4f7f\u53ef\u7528\u7684\u8a18\u61b6\u9ad4\u8d8a\u4f86\u8d8a\u5c11\uff0c\u800c\u964d\u4f4e\u96fb\u8166\u7684\u6548\u80fd\uff0c\u6700\u5f8c\u53ef\u80fd\u5c0e\u81f4\u7a0b\u5f0f\u5d29\u6f70\u3002"),(0,o.kt)("p",null,"\u5728 JavaScript \u88e1\uff0c\u8a18\u61b6\u9ad4\u56de\u6536\u7684\u5de5\u4f5c\u662f\u4ea4\u7531\u81ea\u52d5\u5316\u7684 Garbage Collection \u4f86\u5b8c\u6210\uff0c\u5b83\u5c31\u50cf\u8a18\u61b6\u9ad4\u88e1\u7684\u6e05\u9053\u592b\uff0c\u6703\u5224\u65b7\u4e0d\u518d\u4f7f\u7528\u7684\u8a18\u61b6\u9ad4\u4e26\u5c07\u5176\u56de\u6536\u3002"),(0,o.kt)("h3",{id:"\u6aa2\u6e2c"},"\u6aa2\u6e2c"),(0,o.kt)("p",null,"Chrome \u63d0\u4f9b\u7684 DevTool \u627e\u51fa memory leak"),(0,o.kt)("h3",{id:"\u5f15\u8d77-memory-leak-\u7684\u539f\u56e0"},"\u5f15\u8d77 memory leak \u7684\u539f\u56e0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"global \u8b8a\u6578\n\u5982\u679c\u5728\u700f\u89bd\u5668\u4e2d, global \u8b8a\u6578\u5c31\u662f window \u7269\u4ef6. \u8b8a\u6578\u5728\u8996\u7a97\u95dc\u9589\u6216\u91cd\u65b0\u6574\u7406\u9801\u9762\u4e4b\u524d\u90fd\u4e0d\u6703\u88ab\u91cb\u653e."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u672a\u5ba3\u544a\u8b8a\u6578"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function fn() {\n  a = 'global variable'\n}\nfn()\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528 this \u5efa\u7acb\u7684\u8b8a\u6578"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function fn() {\n  this.a = 'global variable'\n}\nfn()\n\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9589\u5305\u5f15\u8d77\n\u9589\u5305\u53ef\u4ee5\u8b80\u53d6\u51fd\u5f0f\u5167\u90e8\u7684\u8b8a\u6578, \u7136\u5f8c\u8b93\u9019\u4e9b\u8b8a\u6578\u59cb\u7d42\u5b58\u5728\u8a18\u61b6\u9ad4\u4e2d. \u5982\u679c\u4f7f\u7528\u7d50\u675f\u5f8c\u6c92\u6709\u5c07\u5340\u57df\u6027\u8b8a\u6578\u6e05\u9664, \u5c31\u53ef\u4ee5\u5c0e\u81f4\u8a18\u61b6\u9ad4\u6d29\u6f0f."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"for (var k = 0; k < 10; k++) {\n  var t = function (a) {\n  console.log(a)\n}\n  t(k)\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6c92\u6709\u6e05\u7406\u7684 DOM \u5143\u7d20\u5f15\u7528"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5728\u7269\u4ef6\u4e2d\u5f15\u7528DOM\nvar elements = {\n  btn: document.getElementById('btn'),\n}\nfunction doSomeThing() {\n  elements.btn.click()\n}\n\nfunction removeBtn() {\n  // \u5c07body\u4e2d\u7684btn\u79fb\u9664, \u4e5f\u5c31\u662f\u79fb\u9664 DOM\u6a39\u4e2d\u7684btn\n  document.body.removeChild(document.getElementById('button'))\n  // \u4f46\u662f\u6b64\u6642\u5168\u57df\u6027\u8b8a\u6578elements\u9084\u662f\u4fdd\u7559\u4e86\u5c0dbtn\u7684\u5f15\u7528, btn\u9084\u662f\u5b58\u5728\u65bc\u8a18\u61b6\u9ad4\u4e2d,\u4e0d\u80fd\u88abGC\u56de\u6536\n}\n\n// \u89e3\u6c7a\u65b9\u6cd5: \u624b\u52d5\u522a\u9664\nelements.btn = null\u3002\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b9a\u6642\u5668\u8207\u4e8b\u4ef6\u76e3\u807d"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"")),(0,o.kt)("p",{parentName:"li"},"\u5f85\u88dc\u5145"))),(0,o.kt)("h2",{id:"\u53c3\u8003\u4f86\u6e90"},"\u53c3\u8003\u4f86\u6e90"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://vocus.cc/article/61176c17fd89780001942f1c?fbclid=IwAR0Og2wcBv8RikB1bXQum0egwoxKJlpUn4Wp66mrClRzCShyavG8peDQcrQ"},"\u5f9e\u4f60\u7684 Node.js \u5c08\u6848\u88e1\u627e\u51fa Memory leak\uff0c\u53ca\u65e9\u767c\u73fe\u3001\u53ca\u65e9\u6cbb\u7642\uff01")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/#view_snapshots"},"Record heap snapshots")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://iter01.com/579814.html"},"https://iter01.com/579814.html"))))}s.isMDXComponent=!0}}]);