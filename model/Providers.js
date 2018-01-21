const models = {}
const config = require('../config/sequelize')

const User = require('../model/User')(config.sequelize, config.Sequelize)
const Post = require('../model/Post')(config.sequelize, config.Sequelize)

models.User = User
models.Post = Post

/* Relations */
models.User.hasMany(models.Post)
models.Post.belongsTo(models.User)

module.exports = models