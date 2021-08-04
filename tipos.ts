// Para ver o texto inteiro na tela (caso sua tela seja menor) use o atalho: ALT + Z

// -------------------------------- TIPOS EM TYPESCRIPT ---------------------------------------

// ------------------------------------- BOOLEAN ----------------------------------------------
// Boolean
const contaPaga: boolean = false;

// ------------------------------------- NUMBER -----------------------------------------------
// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// ------------------------------------- STRING -----------------------------------------------
// String
const nome: string = 'Vitor Farias';

// ------------------------------------- ARRAY ------------------------------------------------
// Array
const idades: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [23, 28, 45, 32, 45];

// ------------------------------------- TUPLE ------------------------------------------------
// Tuple
let jogadores: [string, number, string];
jogadores = ['Vitor', 3, 'Patrícia'];

// ------------------------------------- ENUM -------------------------------------------------
// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// ------------------------------------- ANY --------------------------------------------------
// Any (Usar apenas quando necessário)
const retornoDaAPI: any[] = [123, 'Vitor', false];
const retornoDaAPI2: any = {
    // ...
};

// ------------------------------------ VOID --------------------------------------------------
// Void (apenas para explicitar no código que a função não tem retorno, não é muito usado)
function printarNaTela(msg: string) {
    console.log(msg);
    // return true
}

// ------------------------------ NULL E UNDEFINED --------------------------------------------
// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// ---------------------------------- OBJECT --------------------------------------------------
// Object (Objeto é um tipo não primitivo)
function criar(objeto: object) {
    // ...
}
// criar('Vitor') // Dá erro, porque 'Vitor' é do tipo string e a função espera um objeto
criar({
    propriedade: 1,
})

// ---------------------------------- NEVER ---------------------------------------------------

// Never (é um tipo para coisas que nunca ocorrem)
function loopInfinito(): never {
    while(true) { }
}

// Toda vez que essa função for chamada, ela vai simplesmente abrir uma exceção no código, mas nunca a finalizará. Vai simplesmente estourar uma enceção no código.
function erro(mensagem: string): never {
    throw new Error(mensagem);
}

// O TypeScript vai inferir que essa função é do tipo never, porque estamos retornando uma função do tipo never e, assim, o TypeScript consegue inferir que essa também é uma função do tipo never.
function falha() {
    return erro('Algo falhou');
}

// -------------------------------- UNION TYPES -----------------------------------------------
// Union Types (Quando pode ter um tipo ou outro)
const nota: string | number = 5;

function exibirNota(nota: number | string | boolean) {
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);
exibirNota(true);

// ----------------------------------- ALIAS --------------------------------------------------
// Alias (Criar "atalhos" pros seus tipos)

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

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
const funcionarios: Funcionario[] = [{
    nome: 'Patrícia',
    sobrenome: 'Vitor',
    dataNascimento: new Date()
}, {
    nome: 'Vitor',
    sobrenome: 'Farias',
    dataNascimento: new Date()
}]

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log('Nome do funcionário: ', funcionario.nome)
    }
}

// ------------------------- VALORES NULOS OU OPCIONAIS ---------------------------------------
let altura = 1.6;
// altura = null;

// Para poder atribuir um valor null a algo que o TS já identifica como outro tipo de variável, teríamos que habilitar no tsconfig.json a linha:
// "strictNullChecks": true,       /* Enable strict null checks. */
// Mas estando ativado o modo estrito ("strict": true) :
// "strict": true,       /* Enable all strict type-checking options. */
// todas as regras de    /* Strict Type-Checking Options */    são ativadas.

// Outra forma seria:
let altura2: number | null = 1.6;
altura2 = null;

// Valor opcional
type Contato = {
    nome: string;
    telefone1: string;
    telefone2: string | null; // Quero que esse valor seja opcional
}

const contato: Contato = {
    nome: 'Vitor',
    telefone1: '1393483',
    telefone2: null
}

// Valor que não precise ser declarado
type Contato1 = {
    nome: string;
    telefone1: string;
    telefone2?: string; // O ponto de interrogação serve para dizer para o TS que esse campo é opcional
}

const contato1: Contato1 = {
    nome: 'Vitor',
    telefone1: '1393483',
    // telefone2 pode ou não ser declarado
}

// ------------------------------- TYPE ASSERTION ---------------------------------------------
// Type Assertion (é parecido com casting em outras linguagens, mas no TS não se tem nenhum tratamento sobre os dados, é mais para que o TS entenda qual é o tipo de determinada variável

const minhaIdade: any = 23;
// minhaIdade.toString() // Vai aceitar, não vai dar erro, mas não vai ter o auto complete porque a variável é do tipo any

// Fazendo um type assertion dizemos para o TS que o resultado de (minhaIdade as number) vai produzir algo do tipo number. Agora é possível usar o auto complete.
(minhaIdade as number).toString();
// (minhaIdade as boolean).toString();

// Outra forma de fazer o type assertion:
// (<number>minhaIdade).toString();


const input = document.getElementById('numero1') as HTMLInputElement; // Sabendo que o elemento do HTML é um input, podemos fazer o type assertion para deixar claro para o TS que é esse tipo de elemento que vamos ter de retorno nesse momento

// Outra forma de fazer o type assertion:
// const input = <HTMLInputElement>document.getElementById('numero1');
console.log(input.value);