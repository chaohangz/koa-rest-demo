const Sequelize = require('sequelize')
const db = require('./db')

module.exports = db.define('user', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true,
  },
  firstName: Sequelize.STRING(100),
  lastName: Sequelize.STRING(100),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
}, {
  timestamps: false,
})
