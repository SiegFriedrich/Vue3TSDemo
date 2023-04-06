# vue3-ts-demo

#

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### About Git

- To delete remote branches
  > $ git push <remote_name> --delete <branch_name>
  > zB. % git push origin --delete dev_user_roles

# About VSCode

### Format

> shift + cmd + p
> select Format Document --> to choose which formatter to be your default formatter

# ABOUT NPM DEPENDENCIES

- _pinia-plugin-persistedstate_
  Configurable persistence and rehydration of Pinia stores.

- _underscore_ is not a package in npm, but it is a popular JavaScript library that provides a collection of utility functions for common programming tasks.

# Q&A

#### What if sometimes find the css or layout wierd?

> maybe it's the cache, hard refresh it by pressing ctrl + F5 or using Incogito mode of Chrome

#### How to update Typescript version?

> sudo npm install -g typescript@latest

#### Failed to resolve component: Record ?

> This error message means we lose to import the relative components when we use

#### 为什么会出现子组件内容先加载，值为 class 的 init 数据？

> 因为在数据类型定义时，class 类型里面数组的值被具体定义了，而不是被定义成 []这样。所以数据会被初始化 吧。
> 需要学习 interface class 和 type 的区别。

#### What's ERROR STATUS 400 401 403 503 ?

> Error code 400 indicates a client-side error, error code 401 indicates an authentication error, error code 500 indicates a server-side error, and error code 503 indicates a temporary server overload or maintenance.

# CSS

- By using vm can scale the font-size accoding to the browser window!

# PAY MORE ATTENTION

- In real produce environment we need to run lint and write jest to retrieve the coverage

- In Api.ts file cannot export more than 1 default function

# SOMETHING NEED TO KNOW

- USING POSTMAN TO IMITATE/MOCK A VIRTUAL SERVER
