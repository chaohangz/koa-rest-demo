const Sequelize = require('sequelize')
const config = require('../config')
const sqlconf = config.Sql

// 连接数据库
const sequelize = new Sequelize(sqlconf.database, sqlconf.username, sqlconf.password, {
  host: sqlconf.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
})

// 测试连接是否成功
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.log('Unable to connect to the database', err)
  })

module.exports = sequelize