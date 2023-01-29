"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[1566],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},606:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],s={},i="Controllers",p={unversionedId:"NestJs/controllers",id:"NestJs/controllers",isDocsHomePage:!1,title:"Controllers",description:"Controllers are responsible for handling incoming requests and returning responses to the client.",source:"@site/docs/05-NestJs/controllers.md",sourceDirName:"05-NestJs",slug:"/NestJs/controllers",permalink:"/my-note/docs/NestJs/controllers",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Thunk",permalink:"/my-note/docs/Redux/thunk"},next:{title:"I/O",permalink:"/my-note/docs/Go/IO"}},u=[{value:"Routeing",id:"routeing",children:[{value:"Standard (recommended)",id:"standard-recommended",children:[]},{value:"Library-specific",id:"library-specific",children:[]}]},{value:"Request Object",id:"request-object",children:[]},{value:"Route Wildcards",id:"route-wildcards",children:[]},{value:"Status Code",id:"status-code",children:[]},{value:"Headers",id:"headers",children:[]},{value:"Redirect",id:"redirect",children:[]},{value:"Router Parameters",id:"router-parameters",children:[]},{value:"Sub-Domain Routing",id:"sub-domain-routing",children:[]},{value:"Scope",id:"scope",children:[]},{value:"Asynchronicity",id:"asynchronicity",children:[]},{value:"Request payloads",id:"request-payloads",children:[]},{value:"Reference",id:"reference",children:[]}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"controllers"},"Controllers"),(0,l.kt)("p",null,"Controllers are responsible for handling incoming requests and returning responses to the client.\n",(0,l.kt)("img",{parentName:"p",src:"https://docs.nestjs.com/assets/Controllers_1.png",alt:"https://docs.nestjs.com/assets/Controllers_1.png"})),(0,l.kt)("h2",{id:"routeing"},"Routeing"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"@Controller()")," \u7528\u4f86\u5b9a\u7fa9\u4e00\u500b controller, \u53ef\u63a5\u53d7string\u4f5c\u70baroute path"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="dogs.controller.ts"',title:'"dogs.controller.ts"'},"import { Controller, Get } from '@nestjs/common';\n\n@Controller('dogs')\nexport class CatsController {\n  @Get()\n  findAll(): string {\n    return 'This action returns all cats';\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET http://localhost:3000/dogs")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"@Get()")," \u70baHTTP method, \u53ef\u63a5\u53d7string\u4f5c\u70baroute path"),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6HTTP method: ",(0,l.kt)("strong",{parentName:"li"},"@Get()"),", ",(0,l.kt)("strong",{parentName:"li"},"@Post()"),", ",(0,l.kt)("strong",{parentName:"li"},"@Put()"),", ",(0,l.kt)("strong",{parentName:"li"},"@Delete()"),", ",(0,l.kt)("strong",{parentName:"li"},"@Patch()"),", ",(0,l.kt)("strong",{parentName:"li"},"@Options()"),", and ",(0,l.kt)("strong",{parentName:"li"},"@Head()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"@All()")," \u8655\u7406\u5168\u90e8method"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"findAll()")," \u70ba\u81ea\u5b9a\u7fa9\u65b9\u6cd5, \u51fd\u6578\u540d\u7a31\u81ea\u8a02")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="dogs.controller.ts"',title:'"dogs.controller.ts"'},"import { Controller, Get } from '@nestjs/common';\n\n@Controller('dogs')\nexport class CatsController {\n  @Get('golden-retriever')\n  getHello2(): string {\n    return 'golden retriever';\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET http://localhost:3000/dogs/golden-retriever")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Nest employs two different options for manipulating responses:"),(0,l.kt)("h3",{id:"standard-recommended"},"Standard (recommended)"),(0,l.kt)("p",null,"built-in method"),(0,l.kt)("p",null,"when a request handler returns a JavaScript object or array, it will automatically be serialized to JSON. When it returns a JavaScript primitive type (e.g., string, number, boolean), however, Nest will send just the value without attempting to serialize it."),(0,l.kt)("p",null,"the response's status code is always 200 by default, except for POST requests which use 201. We can easily change this behavior by adding the @HttpCode(...)"),(0,l.kt)("h3",{id:"library-specific"},"Library-specific"),(0,l.kt)("p",null,"We can use the library-specific (e.g., Express) response object, which can be injected using the @Res() decorator in the method handler signature (e.g., findAll(@Res() response)). With this approach, you have the ability to use the native response handling methods exposed by that object. For example, with Express, you can construct responses using code like response.status(200).send()."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"request-object"},"Request Object"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"@Req()")," \u7372\u53d6request detail"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="dogs.controller.ts"',title:'"dogs.controller.ts"'},"import { Controller, Get, Req } from '@nestjs/common';\nimport { Request } from 'express';\n\n@Controller('cats')\nexport class CatsController {\n  @Get('req')\n  findAll(@Req() requset: Request): string {\n    console.log(requset);\n    return 'server will console log request';\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET http://localhost:3000/dogs/req")),(0,l.kt)("p",null,"\u5176\u4ed6 decorators:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"decorators"),(0,l.kt)("th",{parentName:"tr",align:"left"},"plain platform-specific objects"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@Request(), @Req()"),(0,l.kt)("td",{parentName:"tr",align:"left"},"req")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@Response(), @Res()*"),(0,l.kt)("td",{parentName:"tr",align:"left"},"res")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@Next()"),(0,l.kt)("td",{parentName:"tr",align:"left"},"next")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@Session()"),(0,l.kt)("td",{parentName:"tr",align:"left"},"req.session")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@Param(key?: string)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"req.params / req.params","[key]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@Body(key?: string)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"req.body / req.body","[key]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@Query(key?: string)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"req.query / req.query","[key]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@Headers(key?: string)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"req.headers / req.headers","[key]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@Ip()"),(0,l.kt)("td",{parentName:"tr",align:"left"},"req.ip")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@HostParam()"),(0,l.kt)("td",{parentName:"tr",align:"left"},"req.hosts")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"route-wildcards"},"Route Wildcards"),(0,l.kt)("p",null,"route \u53ef\u4f7f\u7528\u901a\u914d\u7b26\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"@Get('ab*cd')\nfindAll() {\n  return 'This route uses a wildcard';\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"status-code"},"Status Code"),(0,l.kt)("p",null,"response status code \u9810\u8a2d200, \u9664\u4e86POST request \u9810\u8a2d201, \u5229\u7528 ",(0,l.kt)("strong",{parentName:"p"},"@HttpCode(...)")," \u4fee\u6539\u72c0\u614b\u78bc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"@Post()\n@HttpCode(204)\ncreate() {\n  return 'This action adds a new cat';\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"headers"},"Headers"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"@Header()")," \u4fee\u6539 res.header"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"@Post()\n@Header('Cache-Control', 'none')\ncreate() {\n  return 'This action adds a new cat';\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"redirect"},"Redirect"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"Redirect()")," \u91cd\u65b0\u5c0e\u5411, \u63a5\u53d7\u5169\u500b\u53c3\u6578 url \u548c statusCode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"@Get('docs')\n@Redirect('https://docs.nestjs.com', 302)\ngetDocs(@Query('version') ve) {\n  if (ve && ve === '5') {\n    return { url: 'https://docs.nestjs.com/v5/' };\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET http://localhost:3000/dogs/docs?version=5")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"router-parameters"},"Router Parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"@Get(':id')\nGetId(@Param() params): string {\n  return `id: ${params.id}`;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET http://localhost:3000/dogs/1")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sub-domain-routing"},"Sub-Domain Routing"),(0,l.kt)("p",null,"\u770b\u7121 \u5f85\u88dc"),(0,l.kt)("h2",{id:"scope"},"Scope"),(0,l.kt)("p",null,"\u770b\u7121 \u5f85\u88dc"),(0,l.kt)("h2",{id:"asynchronicity"},"Asynchronicity"),(0,l.kt)("p",null,"\u597d\u50cf\u662f\u53ef\u4ee5async function, \u5f85\u88dc"),(0,l.kt)("h2",{id:"request-payloads"},"Request payloads"),(0,l.kt)("p",null,"\u4f7f\u7528 DTO(data transfer object)schema \u5b9a\u7fa9 data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="create-cat.dto.ts"',title:'"create-cat.dto.ts"'},"export class CreateCatDto {\n  name: string;\n  age: number;\n  breed: string;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="cats.controller.ts"',title:'"cats.controller.ts"'},"@Post()\nasync create(@Body() createCatDto: CreateCatDto) {\n  return 'This action adds a new cat';\n}\n")),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@Controller(route: string)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"route: optimal"))),(0,l.kt)("li",{parentName:"ul"},"@Get(path: string)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"path: optimal"))),(0,l.kt)("li",{parentName:"ul"},"@HttpCode(response)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"response: number"))),(0,l.kt)("li",{parentName:"ul"},"@Header(field, value)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"field: string"),(0,l.kt)("li",{parentName:"ul"},"value:"))),(0,l.kt)("li",{parentName:"ul"},"@Redirect(url, statusCode)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"url: string"),(0,l.kt)("li",{parentName:"ul"},"statusCodeL number")))))}d.isMDXComponent=!0}}]);