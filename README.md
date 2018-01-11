# koa-rest-demo
>REST demo with koa2

## Installation
```github
git clone https://github.com/chaohangz/koa-rest-demo.git

cd koa-rest-demo

npm install
```

## 说明

该项目有两个分支，master 分支比较简单，是一个完整的 mvc 的小架构。

从master分支演变到 routes 分支，省去了 router 的手动编写。我们添加了 handleRoutes 函数和统一了 controller 导出规则，项目一启动就查找整个 controller 目录，生成 router。这个方法来自[廖雪峰老师的教程](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471133885340dad9058705804899b1cc2d0a10e7dc80000)。

routes 分支还添加了一个简单的 cookie 登录。

前后端分离的项目和前端开发在做本地调试的时候，会遇到跨域问题，routes 分支还添加了跨域处理。

## Use

#### [koa2](https://github.com/koajs/koa)
Node HTTP framework.

#### [koa-body](https://github.com/dlau/koa-body)
A full-featured koa body parser middleware.

#### [body-logger](https://github.com/koajs/logger)
Development style logger middleware for koa.

#### [koa-router](https://github.com/alexmingoia/koa-router)
Router middleware for koa.

#### [koa-static](https://github.com/koajs/static)
Static file server middleware.

#### [sequelize](http://docs.sequelizejs.com/)
Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

#### [@koa/cors](https://github.com/koajs/cors)
Cross-Origin Resource Sharing(CORS) for koa