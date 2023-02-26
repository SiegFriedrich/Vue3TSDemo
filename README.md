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

#### What's ERROR STATUS 400 401 403 503 ?

> Error code 400 indicates a client-side error, error code 401 indicates an authentication error, error code 500 indicates a server-side error, and error code 503 indicates a temporary server overload or maintenance.

# PAY MORE ATTENTION

- In real produce environment we need to run lint and write jest to retrieve the coverage

- In Api.ts file cannot export more than 1 default function

# SOMETHING NEED TO KNOW

- USING POSTMAN TO IMITATE/MOCK A VIRTUAL SERVER
