# [generator-ivweb](http://git.code.oa.com/feflow/generator-ivweb)

generator-ivweb is a project scaffolding plugin developed by the ivweb team, generate multi-page applications based on react and redux

## Quick Overview

``` sh
npm install feflow-cli -g
feflow install generator-ivweb -g
feflow init
feflow dev
```

## Creating an App

To create a new programe, you can follow this steps

### install feflow-cli
```sh
npm install feflow-cli -g
```

### install generator
```sh
feflow install generator-ivweb -g
```
you can install your generator or own generator, [how to develop a generator?]()

### init programe

```sh
feflow init
请输入项目名称(不要写空格和汉字) feflow-react-app
请输入项目描述信息 init a feflow app
```
In this step, feflow will create a programe and installation project dependency.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:
```
feflow-react-app
├── README.md
├── package.json
├── .babelrc
├── .editorconfig
├── .eslintrc.js
├── .gitattributes
├── feflow.json
├── config.json
├── node_modules
└── src
    ├── assets
    ├── middleware
    ├── modules
    └── pages
        └── index
            ├── index.html
            ├── index.js
            ├── index.less
            ├── index.js
            ├── init.js
            ├── pageComponent.js
            ├── actions
            ├── assets
            ├── components
            └── reducers
             
```

### start develop

```sh
cd feflow-react-app
feflow dev
```
Runs the app in development mode.
Open http://localhost:8001 to view it in the browser.

#### Attention
If you want to enjoy HMR function while using agent, please add `/^https?:\/\/xxx\.xxx\.com\/__webpack_hmr$/ http://127.0.0.1:8001/__webpack_hmr`in to your agent rule.

### build

```sh
$ feflow build
```
You can config output dir in feflow.json.
```
dist
├── offline
├── cdn
    └── pageName
        ├── img
        └── index_xxx.js
└── webserver
    └── pageName
        └── index.html
```

## What’s Included?

- React, redux and ES6 support.
- Use webpack4 and babel7.
- Support for multi-page development and package.
- Integration Rem solution to solve adaptation problems.
- Autoprefixed CSS(compatible with ios7).
- Css preprocessor(less).

## Contributing

1. Check for open issues or open a fresh issue to start a discussion around a feature idea or a bug.
2. Fork [the repository](https://github.com/feflow/generator-feflow-react) on GitHub to start making your changes to the **master** branch (or branch off of it).
3. Write a test which shows that the bug was fixed or that the feature works as expected.
4. Send a pull request and bug the maintainer until it gets merged and published. :) Make sure to add yourself to [AUTHORS_](AUTHORS).

## Changelog

[Changelog](CHANGELOG.md)

## License
generator-feflow-react is open source software [MIT](https://tldrlegal.com/license/mit-license).

