const Sequelize = require('sequelize')
const db = require('./db')

module.exports = db.define('user', {
  firstName: Sequelize.STRING(100),
  lastName: Sequelize.STRING(100),
})
