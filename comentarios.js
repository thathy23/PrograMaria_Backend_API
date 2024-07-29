/**
 * ENTENDENDO O PROJETO:
 * 
 * - Sempre dividimos nosso problema em pequenos passos lógicos
 * 
 * - Padrão em todas as camadas: verbo, request, response, endereço, uma lógica pra permitir 
 *   receber os dados da request e enviar resposta
 * 
 * - Ao final de cada código sempre testamos (insomnia)
 * 
 * - Nossa configuração de servidor é feita apenas uma vez
 * 
 * - Toda vez que usamos um verbo http precisamos permitir o app usar (app.use(router.verboHTTP))
 * 
 * - Sempre precisa rodar o servidor para testar (node mulheres no terminal)
 * 
 * - O unico que permite testar no navegador é o GET, o restante usamos ferrramentad de tete tipo Insomnia, PostMan.
 
BANCO DE DADOS:
usamos MongoDB - melhor para documentos

analogia entre verbos:

HTTP        FUNÇÃO             CRUD         MONGODB
POST        criaMulher()       CREATE       SAVE 
GET         mostraMulher()     READ         FIND 
PATCH       corrigeMulher()    UPDATE       SAVE 
DELETE      deletaMulher()     DELETE       FINDBYIDANDDELETE


OBSERVE QUE :
As operações de CRUD vão aparecer dentro das nossas funções mostraMulheres(),
criaMulher(), corrigeMulher() e deletaMulher()

Assim , sera atualizado no MongoBD e o retorno sera sempre com as ultimas alterações que forem feitas.



*/