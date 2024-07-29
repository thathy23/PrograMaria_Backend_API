// MODELAGEM DE DADOS: definindo como serão os dados de mulher
// Responsabilidade do Model: é um objeto que não define os valores de cada propriedade, apenas cria um formato
// o modelo dos dados que o backend recebe do frontend e envia para salvar no banco de dados. 
const mongoose = require('mongoose')


// aqui é definido o modelo que sera criado pelo front, tem que seguir igual esta definido aqui
// observe que required true torna obrigatório o preenchimento.

// contrato com o frontend:
const MulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
    },
    citacao: {
        type: String,
        required: true,
    },
    minibio: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('diva', MulherSchema)// aqui a criação da coleção diva, deixamos no singular, pois o 
// mongoDB que vai acrescentar o s apos o nome criado diva, o que ficará la  uma coleção de divas
