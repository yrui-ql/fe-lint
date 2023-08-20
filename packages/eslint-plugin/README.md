## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
$ npm install @yrui/eslint-plugin eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ['@yrui/eslint-plugin'],
  rules: {
    '@yrui/eslint-plugin/no-secret-info': 'error',
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: 'plugin:@yrui/eslint-plugin/recommended',
};
```

## 支持的规则

- [`no-broad-semantic-versioning`]()不要指定宽泛的版本范围
- [`no-http-url`]() 使用 HTTPS 协议头的 URL，而不是 HTTP
- [`no-js-in-ts-project`]() 不要在 TS 项目中使用 JS
- [`no-secret-info`]() 不要在代码中直接设置 `password` `token` and `secret` 信息
