const service = require('../service/UserServices')
const moment = require('moment')

module.exports = {
    async index(req, res) {
        res.send({
            users: await service.findAll()
        })
    },
    async show(req, res) {
        res.send({
            user: await service.find(req.params.id)
        })
    },
    async store(req, res) {
        user: await service.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            createdAt: moment(),
            updatedAt: moment()
        })
    },
    async update(req, res) {
        result: await service.update(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            updatedAt: moment()
        })
    },
    async delete(req, res) {
        result: await service.delete(req.params.id)
    }
}