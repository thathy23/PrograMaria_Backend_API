const express = require("express")  
const router = express.Router() 

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Tatiane Fontes',
        imagem: 'https://github.com/thathy23.png',
        minibio: 'Mãe e estudante de Sistemas para Internet' 
    })
}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta" , porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)