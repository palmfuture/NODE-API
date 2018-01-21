const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./config/sequelize')
const app = express()

const UserRoutes = require('./route/UserRoutes')

/* config express */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

/* initial sequelize */
UserRoutes(app)

module.exports = app