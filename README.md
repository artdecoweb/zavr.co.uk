# @artdeco/zavr.co.uk

[![npm version](https://badge.fury.io/js/@artdeco/zavr.co.uk.svg)](https://npmjs.org/package/@artdeco/zavr.co.uk)

`@artdeco/zavr.co.uk` is The zavr.co.uk Website.

```sh
yarn add -E @artdeco/zavr.co.uk
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`zavrCoUk(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import zavrCoUk from '@artdeco/zavr.co.uk'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `zavrCoUk(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-config">`Config`</a>__: Options for the program.

|   Name    |   Type    |    Description    | Default |
| --------- | --------- | ----------------- | ------- |
| shouldRun | _boolean_ | A boolean option. | `true`  |
| __text*__ | _string_  | A text to return. | -       |

```js
/* yarn example/ */
import zavrCoUk from '@artdeco/zavr.co.uk'

(async () => {
  const res = await zavrCoUk({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2019

[1]: https://artd.eco

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>