const Db = require('./db')
class Services {
    constructor () {
        this.products = Db.products
    }
    async cadastrar(item) {
       return await this.products.create(item)
    }

    async listar () {
        return await this.products.find()
    }
    async deletar (id) {
        return await this.products.remove({_id: id}) 
    }

}

module.exports = new Services()