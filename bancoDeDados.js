const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados() {
    //try-tente executar o codigo, caso nao consiga catch(pegue) o erro
    try {
        console.log('Conexão com o banco de dados iniciou')

        await mongoose.connect(process.env.MONGO_URL)
          
        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados

