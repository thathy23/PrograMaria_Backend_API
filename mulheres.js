const express = require("express")  //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota
const cors = require('cors') // aqui estou trazendo o pacote cors que permite consumir essa api no frontend

const conectaBancoDeDados = require('./bancoDeDados')// aqui estou ligando ao arquivo bancoDeDados
conectaBancoDeDados() // chamando a função que conecta o banco de dados

const Mulher = require('./mulherModel')

const app = express() // aqui estou iniciando o app
app.use(express.json())
app.use(cors())
const porta = 3333 // aqui criando a porta

//GET
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find()
        //aqui o .find é a abstração do mongoose pra encontrar mulheres no BD

        response.json(mulheresVindasDoBancoDeDados)
    }catch(erro) {
        console.log(erro)
    }    
}

//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({        
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao,
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro)
    }
}

//PATCH
 async function corrigeMulher(request, response) {
    try{
      const mulherEncontrada = await Mulher.findById(request.params.id) 
      if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    if (request.body.citacao) {
        mulherEncontrada.citacao = request.body.citacao
    }
    
    const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        
    response.json(mulherAtualizadaNoBancoDeDados) 
    } catch (erro) {
        console.log(erro)
    }
    
}
//DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ mensagem: 'Mulher deletada com sucesso!' })

    }catch(erro) {
        console.log(erro)
    }
} 

app.use(router.get('/mulheres', mostraMulheres)) // configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) // configurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) // configurei a rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) // configurei a rota DELETE /mulheres/:id

//PORTA
function mostraPorta() {
    console.log ("Servidor criado e rodando na porta" , porta)
}

app.listen(porta, mostraPorta) // servidor ouvindo a porta

/*const express = require("express");
const cors = require('cors');
require('dotenv').config();
const conectaBancoDeDados = require('./bancoDeDados');
const Mulher = require('./mulherModel');

const app = express();
const porta = process.env.PORT || 3333;

// Middleware para processar JSON e permitir CORS
app.use(express.json());
app.use(cors());

// Conectar ao banco de dados
conectaBancoDeDados();

//GET
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find();
        response.json(mulheresVindasDoBancoDeDados);
    } catch (erro) {
        console.log(erro);
    }
}

//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao,
    });

    try {
        const mulherCriada = await novaMulher.save();
        response.status(201).json(mulherCriada);
    } catch (erro) {
        console.log(erro);
    }
}

//PATCH
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id);
        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome;
        }
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio;
        }
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem;
        }
        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao;
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save();
        response.json(mulherAtualizadaNoBancoDeDados);
    } catch (erro) {
        console.log(erro);
    }
}

//DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id);
        response.json({ mensagem: 'Mulher deletada com sucesso!' });
    } catch (erro) {
        console.log(erro);
    }
}

// Definir as rotas
app.get('/', mostraMulheres);
app.post('/api/mulheres', criaMulher);
app.patch('/api/mulheres/:id', corrigeMulher);
app.delete('/api/mulheres/:id', deletaMulher);

// Servir arquivos estáticos
app.use(express.static('public'));

// Iniciar o servidor
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

app.listen(porta, mostraPorta); // "ligando a porta" - escutando a porta

module.exports = app;*/
