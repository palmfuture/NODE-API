 const UserController = require('../controller/UserController')

 module.exports = (app) => {
     app.get('/users', UserController.index)
     app.get('/user/:id', UserController.show)
     app.post('/user', UserController.store)
     app.patch('/user/:id', UserController.update)
     app.delete('/user/:id', UserController.delete)
 }