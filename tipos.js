"use strict";
// Para ver o texto inteiro na tela (caso sua tela seja menor) use o atalho: ALT + Z
// -------------------------------- TIPOS EM TYPESCRIPT ---------------------------------------
// ------------------------------------- BOOLEAN ----------------------------------------------
// Boolean
var contaPaga = false;
// ------------------------------------- NUMBER -----------------------------------------------
// Number
var idade = 23;
var avaliacao = 4.5;
// ------------------------------------- STRING -----------------------------------------------
// String
var nome = 'Vitor Farias';
// ------------------------------------- ARRAY ------------------------------------------------
// Array
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 28, 45, 32, 45];
// ------------------------------------- TUPLE ------------------------------------------------
// Tuple
var jogadores;
jogadores = ['Vitor', 3, 'Patrícia'];
// ------------------------------------- ENUM -------------------------------------------------
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// ------------------------------------- ANY --------------------------------------------------
// Any (Usar apenas quando necessário)
var retornoDaAPI = [123, 'Vitor', false];
var retornoDaAPI2 = {
// ...
};
// ------------------------------------ VOID --------------------------------------------------
// Void (apenas para explicitar no código que a função não tem retorno, não é muito usado)
function printarNaTela(msg) {
    console.log(msg);
    // return true
}
// ------------------------------ NULL E UNDEFINED --------------------------------------------
// Null e Undefined
var u = undefined;
var n = null;
// ---------------------------------- OBJECT --------------------------------------------------
// Object (Objeto é um tipo não primitivo)
function criar(objeto) {
    // ...
}
// criar('Vitor') // Dá erro, porque 'Vitor' é do tipo string e a função espera um objeto
criar({
    propriedade: 1,
});
// ---------------------------------- NEVER ---------------------------------------------------
// Never (é um tipo para coisas que nunca ocorrem)
function loopInfinito() {
    while (true) { }
}
// Toda vez que essa função for chamada, ela vai simplesmente abrir uma exceção no código, mas nunca a finalizará. Vai simplesmente estourar uma enceção no código.
function erro(mensagem) {
    throw new Error(mensagem);
}
// O TypeScript vai inferir que essa função é do tipo never, porque estamos retornando uma função do tipo never e, assim, o TypeScript consegue inferir que essa também é uma função do tipo never.
function falha() {
    return erro('Algo falhou');
}
// -------------------------------- UNION TYPES -----------------------------------------------
// Union Types (Quando pode ter um tipo ou outro)
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
exibirNota(true);
// type Funcionarios = Array<string>; 
// type Funcionarios = string[] | number | boolean;
// const funcionarios: Funcionarios = ['Patrícia', 'Cristina', 'Vitor'];
// function tratarFuncionarios(funcionarios: Funcionarios) {
//     // ...
// }
// type Funcionarios = Array<Funcionario>;
// const funcionarios: Funcionarios = [{
//     nome: 'Patrícia',
//     sobrenome: 'Vitor',
//     dataNascimento: new Date()
// }];
//  OU
// const funcionarios: Array<Funcionario> = [{
//     nome: 'Patrícia',
//     sobrenome: 'Vitor',
//     dataNascimento: new Date()
// }]
//  OU
var funcionarios = [{
        nome: 'Patrícia',
        sobrenome: 'Vitor',
        dataNascimento: new Date()
    }, {
        nome: 'Vitor',
        sobrenome: 'Farias',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
// ------------------------- VALORES NULOS OU OPCIONAIS ---------------------------------------
var altura = 1.6;
// altura = null;
// Para poder atribuir um valor null a algo que o TS já identifica como outro tipo de variável, teríamos que habilitar no tsconfig.json a linha:
// "strictNullChecks": true,       /* Enable strict null checks. */
// Mas estando ativado o modo estrito ("strict": true) :
// "strict": true,       /* Enable all strict type-checking options. */
// todas as regras de    /* Strict Type-Checking Options */    são ativadas.
// Outra forma seria:
var altura2 = 1.6;
altura2 = null;
var contato = {
    nome: 'Vitor',
    telefone1: '1393483',
    telefone2: null
};
var contato1 = {
    nome: 'Vitor',
    telefone1: '1393483',
    // telefone2 pode ou não ser declarado
};
// ------------------------------- TYPE ASSERTION ---------------------------------------------
// Type Assertion (é parecido com casting em outras linguagens, mas no TS não se tem nenhum tratamento sobre os dados, é mais para que o TS entenda qual é o tipo de determinada variável
var minhaIdade = 23;
// minhaIdade.toString() // Vai aceitar, não vai dar erro, mas não vai ter o auto complete porque a variável é do tipo any
// Fazendo um type assertion dizemos para o TS que o resultado de (minhaIdade as number) vai produzir algo do tipo number. Agora é possível usar o auto complete.
minhaIdade.toString();
// (minhaIdade as boolean).toString();
// Outra forma de fazer o type assertion:
// (<number>minhaIdade).toString();
var input = document.getElementById('numero1'); // Sabendo que o elemento do HTML é um input, podemos fazer o type assertion para deixar claro para o TS que é esse tipo de elemento que vamos ter de retorno nesse momento
// Outra forma de fazer o type assertion:
// const input = <HTMLInputElement>document.getElementById('numero1');
console.log(input.value);
