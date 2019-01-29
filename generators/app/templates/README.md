# 项目名

项目描述：`[your project description]`，本项目第一负责人为 `[owner]`。


## 1. 如何运行

> node版本 `[xxx]`

### 1.1 开发环境配置

安装feflow：

```sh
$ npm install -g feflow-cli
```

更多feflow操作请前往feflow文档: http://www.feflowjs.org/zh-cn/docs/

### 1.2 开发过程

#### 1.2.1 命令

```sh
# 开发
$ feflow dev

# 发布
$ feflow build
```

#### 1.2.2 代理配置

`Fiddler` 代理：

- `regex:^https?://a\.b\.com/(.)*/([\w\-]*).html(.*)$` `http://127.0.0.1:8001/$1.html`
- `regex:^https?://a\.b\.com/(.*\.(js|css|png|jpg|gif|jpeg|svg|blob).*)$` `http://127.0.0.1:8001/$1`
- `regex:^https?://a\.b\.com/(__webpack_hmr)$` `http://127.0.0.1:8001/$1`

`Whistle` 代理：

- `/^https?://a\.b\.com/(.)*/([\w\-]*).html(.*)$` `http://127.0.0.1:8001/$1.html`
- `/^https?://a\.b\.com/(.*\.(js|css|png|jpg|gif|jpeg|svg|blob).*)$` `http://127.0.0.1:8001/$1`
- `/^https?://a\.b\.com/(__webpack_hmr)$/` `http://127.0.0.1:8001/$1`

### 1.3 发布

| 发布产品 | 发布模块 |
| -------- | -------- |
| `[xxx]`  | `[xxx]`  |

> 发布时的备注

### 1.4 CGI

| CGI(url) | 描述 | CGI开发人员 |
| -------- | ---- | ----------- |
| XXX      | XXXX | xxx         |



### 1.5 相关人员

| 角色     | 人员 |
| -------- | ---- |
| 产品经理 | xxx  |
| 前端开发 | xxx  |
| 后台开发 | xxx  |
| 交互设计 | xxx  |


### 1.6 其他

- [设计稿](xxx)


## 2. 业务介绍

### 2.1 xx业务入口

入口地址为 `xxx`，目前有哪些渠道:

1. AAA
2. BBB
3. CCC

| 页面目录 | 页面描述 | 页面链接 | 参数描述 |
| -------- | -------- | -------- | -------- |
| XXX      | XXX      | XXX      | XXX      |


- - -

## 3. 其他
