const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define('t_user', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING(100),
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING(100),
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: Sequelize.CHAR(4),
  },
  desc: Sequelize.STRING(255),
  createTime: Sequelize.BIGINT,
  updateTime: Sequelize.BIGINT,
}, {
  timestamps: false,
})

module.exports = User
