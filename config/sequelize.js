const Sequelize = require('sequelize')
const sequelize = new Sequelize('node', 'username', 'password', {
    host: 'host',
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    },
    logging: false,
    operatorsAliases: false
})

const type = {}
type.Sequelize = Sequelize
type.sequelize = sequelize

module.exports = type