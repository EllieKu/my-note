"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[791],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=t.createContext({}),s=function(e){var r=t.useContext(f),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(f.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,f=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,d=u["".concat(f,".").concat(m)]||u[m]||p[m]||i;return n?t.createElement(d,a(a({ref:r},c),{},{components:n})):t.createElement(d,a({ref:r},c))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var f in r)hasOwnProperty.call(r,f)&&(l[f]=r[f]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9370:function(e,r,n){n.r(r),n.d(r,{contentTitle:function(){return f},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var t=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},f="I/O",s={unversionedId:"Go/IO",id:"Go/IO",isDocsHomePage:!1,title:"I/O",description:"1. bufio library: implements buffered I/O. It wraps an io.Reader or io.Writer object, creating another object (Reader or Writer) that also implements the interface but provides buffering and some help for textual I/O.",source:"@site/docs/06-Go/IO.md",sourceDirName:"06-Go",slug:"/Go/IO",permalink:"/my-note/docs/Go/IO",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/06-Go/IO.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Controllers",permalink:"/my-note/docs/NestJs/controllers"},next:{title:"\u51fd\u6578\u7684\u5e95\u5c64\u5206\u6790",permalink:"/my-note/docs/Go/Operate-System/basic"}},c=[],p={toc:c};function u(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"io"},"I/O"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"bufio library:")," implements buffered I/O. It wraps an io.Reader or io.Writer object, creating another object (Reader or Writer) that also implements the interface but provides buffering and some help for textual I/O."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"io library:")," provides basic interfaces to I/O primitives"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"os library:")," provides a platform-independent interface to operating system functionality.")),(0,i.kt)("p",null,"\u5e36\u7de9\u885d\u7684\u8b80\u53d6\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    file, err := os.Open("/Users/80006932/Desktop/golang_p/file/test.txt") // \u6a94\u6848\u958b\u555f\n    if err != nil {\n        fmt.Println("open file err = ", err)\n    }\n\n    defer file.Close() // \u6a94\u6848\u95dc\u9589, \u907f\u514d\u9020\u6210memory leak\n\n    reader := bufio.NewReader(file)\n\n    for {\n        str, err := reader.ReadString(\'\\n\')\n\n        if err == io.EOF { // \u6a94\u6848\u7d50\u5c3e\n            break\n        }\n\n        fmt.Print(str)\n    }\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u4e00\u6b21\u5c07\u6574\u500b\u6587\u4ef6\u8b80\u53d6\u5230\u5167\u5b58\uff08\u9069\u5408\u6587\u4ef6\u4e0d\u5927\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    file := "/Users/80006932/Desktop/golang_p/file/test.txt"\n    content, err := os.ReadFile(file)\n\n    if err != nil {\n        fmt.Printf("read file err=%v", err)\n    }\n\n    fmt.Printf("%v", string(content)) // \u5c07 []byte \u8f49\u6210 string\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u958b\u8d77\u4e26\u8b80\u5beb\u6587\u4ef6 ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/os@go1.17.1#OpenFile"},"func OpenFile")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    filePath := "/Users/80006932/Desktop/golang_p/file/new.txt"\n  // perm FileMode \u5728windows \u4e0b\u7121\u6548, \u6545\u96a8\u4fbf\u5beb\n    file, err := os.OpenFile(filePath, os.O_RDWR|os.O_APPEND, 0666)\n\n    if err != nil {\n        fmt.Printf("read file err=%v", err)\n        return\n    }\n\n    defer file.Close()\n\n    // \u5beb\u5165\u5167\u5bb9\n    str := "write and read \\n"\n    writer := bufio.NewWriter(file) // \u5e36\u7de9\u5b58\u7684 *Writer\n    for i := 0; i < 3; i++ {\n        writer.WriteString(str) // \u5167\u5bb9\u662f\u5148\u5beb\u5728\u7de9\u5b58\u7684\n    }\n\n    reader := bufio.NewReader(file)\n    defer file.Close()\n    for {\n        str, err := reader.ReadString(\'\\n\')\n\n        if err == io.EOF {\n            break\n        }\n\n        fmt.Print(str)\n    }\n    writer.Flush() // \u5c07\u6578\u64da\u5beb\u5165\u6587\u4ef6\u4e2d\n}\n')))}u.isMDXComponent=!0}}]);