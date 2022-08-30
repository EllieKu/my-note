# Controllers

Controllers are responsible for handling incoming requests and returning responses to the client.
![https://docs.nestjs.com/assets/Controllers_1.png](https://docs.nestjs.com/assets/Controllers_1.png)

## Routeing

**@Controller()** 用來定義一個 controller, 可接受string作為route path

```ts title="dogs.controller.ts"
import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```

`GET http://localhost:3000/dogs`

---

- **@Get()** 為HTTP method, 可接受string作為route path
- 其他HTTP method: **@Get()**, **@Post()**, **@Put()**, **@Delete()**, **@Patch()**, **@Options()**, and **@Head()**
- **@All()** 處理全部method
- **findAll()** 為自定義方法, 函數名稱自訂

```ts title="dogs.controller.ts"
import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class CatsController {
  @Get('golden-retriever')
  getHello2(): string {
    return 'golden retriever';
  }
}
```

`GET http://localhost:3000/dogs/golden-retriever`

---
Nest employs two different options for manipulating responses:

### Standard (recommended)

built-in method

when a request handler returns a JavaScript object or array, it will automatically be serialized to JSON. When it returns a JavaScript primitive type (e.g., string, number, boolean), however, Nest will send just the value without attempting to serialize it.

the response's status code is always 200 by default, except for POST requests which use 201. We can easily change this behavior by adding the @HttpCode(...)

### Library-specific

We can use the library-specific (e.g., Express) response object, which can be injected using the @Res() decorator in the method handler signature (e.g., findAll(@Res() response)). With this approach, you have the ability to use the native response handling methods exposed by that object. For example, with Express, you can construct responses using code like response.status(200).send().

---

## Request Object

**@Req()** 獲取request detail

```ts title="dogs.controller.ts"
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get('req')
  findAll(@Req() requset: Request): string {
    console.log(requset);
    return 'server will console log request';
  }
}
```

`GET http://localhost:3000/dogs/req`

其他 decorators:

| decorators | plain platform-specific objects |
| :--------- | :------------------------------ |
| @Request(), @Req() | req |
| @Response(), @Res()* | res |
| @Next() | next |
| @Session() | req.session |
| @Param(key?: string) | req.params / req.params[key] |
| @Body(key?: string) | req.body / req.body[key] |
| @Query(key?: string) | req.query / req.query[key] |
| @Headers(key?: string) | req.headers / req.headers[key] |
| @Ip() | req.ip |
| @HostParam() | req.hosts |

---

## Route Wildcards

route 可使用通配符：

```js
@Get('ab*cd')
findAll() {
  return 'This route uses a wildcard';
}
```

---

## Status Code

response status code 預設200, 除了POST request 預設201, 利用 **@HttpCode(...)** 修改狀態碼

```ts
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
```

---

## Headers

使用 **@Header()** 修改 res.header

```ts
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}
```

---

## Redirect

使用 **Redirect()** 重新導向, 接受兩個參數 url 和 statusCode

```ts
@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
getDocs(@Query('version') ve) {
  if (ve && ve === '5') {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
}
```

`GET http://localhost:3000/dogs/docs?version=5`

---

## Router Parameters

```ts
@Get(':id')
GetId(@Param() params): string {
  return `id: ${params.id}`;
}
```

`GET http://localhost:3000/dogs/1`

---

## Sub-Domain Routing

看無 待補

## Scope

看無 待補

## Asynchronicity

好像是可以async function, 待補

## Request payloads

使用 DTO(data transfer object)schema 定義 data.

```ts title="create-cat.dto.ts"
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
```

```ts title="cats.controller.ts"
@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}
```

## Reference

- @Controller(route: string)
  - route: optimal
- @Get(path: string)
  - path: optimal
- @HttpCode(response)
  - response: number
- @Header(field, value)
  - field: string
  - value:
- @Redirect(url, statusCode)
  - url: string
  - statusCodeL number
