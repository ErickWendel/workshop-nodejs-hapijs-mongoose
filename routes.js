const Service = require('./services')
const Joi = require('joi')
class Routes {
    
    cadastrar() {
        const config = {
            'path': '/products',
            'method': 'POST',
            'config': {
                'handler': async (req, reply) => {
                    const dadosTela = req.payload
                    const result = await Service.cadastrar(dadosTela)
                    return reply(result)
                },
                'validate': {
                    'payload': {
                        name: Joi.string().required()
                    }
                }
            }
        }
        return config
    }
    listar() {
        const config = {
            'path': '/products',
            'method': 'GET',
            'config': {
                'handler': async (req, reply) => {
                    const result = await Service.listar()
                    return reply(result)
                },

            }
        }
        return config
    }
    deletar() {
        const config = {
            'path': '/products/{id}',
            'method': 'DELETE',
            'config': {
                'handler': async (req, reply) => {
                    const dadosTela = req.params.id
                    const result = await Service.deletar(dadosTela)
                    return reply(result)
                },

            }
        }
        return config
    }

    registerRoutes(app) {
        app.route(this.cadastrar())
        app.route(this.deletar())
        app.route(this.listar())
    }

}
module.exports = Routes