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

/*const mongoose = require('mongoose');
require('dotenv').config();

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou');
        
        const mongoUrl = process.env.MONGO_URL;
        if (!mongoUrl) {
            throw new Error('MONGO_URL não está definido no arquivo .env');
        }

        console.log('URL do MongoDB:', mongoUrl);

        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('Conexão com o banco de dados feita com sucesso!');
    } catch (erro) {
        console.log('Erro ao conectar ao banco de dados:', erro);
    }
}

module.exports = conectaBancoDeDados;*/


