const mongoose = require('mongoose')
class Db {
    constructor () {
        this.products = this.registerProduct()
    }
    connect() {
        mongoose.connect('mongodb://localhost/products')
        const db = mongoose.connection
        db.on('error', (e) => console.error(e))
        db.once('open', () => console.log('db connected'))
        return db
    }
    registerProduct () {
        const product = new mongoose.Schema({
            name: String
        })
        const model = mongoose.model('product', product)
        return model
    }
}
module.exports = new Db()