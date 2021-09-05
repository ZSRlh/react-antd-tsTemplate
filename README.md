# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Todo

- 嵌套路由；

## ts + eslint

1. 安装 eslint 及 ts 插件

```
yarn add eslint
yarn add @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

2. 配置 eslint 规则: .eslintrc.json

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 11
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["off", "windows"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "no-constant-condition": "warn"
  }
}
```

3. vscode 配置:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
},
"eslint.codeAction.disableRuleComment": {
  "enable": false
},
"eslint.debug": true,

```
