/**
* 遍历 controllers 文件夹
* 生成 route 的中间件
**/
const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

const router = new Router()

const addMapping = (mapping) => {
  for (let url in mapping) {
    if (url.startsWith('GET ')) {
      // 处理GET
      const path = url.substring(4)
      router.get(path, mapping[url])
    } else if (url.startsWith('POST ')) {
      // 处理POST
      const path = url.substring(5)
      router.post(path, mapping[url])
    } else if (url.startsWith('PUT ')) {
      // 处理PUT
      const path = url.substring(4)
      router.put(path, mapping[url])
    } else if (url.startsWith('DELETE ')) {
      // 处理DELETE
      const path = url.substring(7)
      router.delete(path, mapping[url])
    } else {
      // 无效URL
      console.log(`无效URL: ${url}`)
    }
  }
}

const addControllers = (dir) => {
  // 获得controllers文件夹中所有文件的数组
  const files = fs.readdirSync(path.resolve(__dirname, '../' + dir))

  // 过滤出.js文件
  const jsFiles = files.filter((f) => {
    return f.endsWith('.js')
  })

  // 处理每个js文件
  for (let f of jsFiles) {
    console.log(`process controller: ${f}...`)
    // 导入js文件
    let mapping = require('../' + dir + '/' + f)
    addMapping(mapping)
  }
}

module.exports = (dir) => {
  // 如果不传参，则默认扫描 controllers 目录
  const controllerDir = dir || 'controllers'
  addControllers(controllerDir)
  return router.routes()
}
