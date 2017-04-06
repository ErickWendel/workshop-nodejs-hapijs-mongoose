const Hapi = require('hapi')
const app = new Hapi.Server()
const Routes = require('./routes')
const Db = require('./db')
const Bluebird = require('bluebird')
const Mongoose = require('mongoose')
Mongoose.Promise = Bluebird

Db.connect()
app.connection({ port: 3000})
const routes = new Routes()
routes.registerRoutes(app)

app.start(() => {
    console.log('Servidor rodando !!')
})