// Declaração de variáveis

// Com let o conteúdo da variável é mutável
let cidade = 'Caraguatatuba';
// Com const o conteúdo é imutável 
const dataNascimento = '2010-04-09';
// data_nascimento, datanascimento, DataNascimento

// com var é uma sintaxe legada, não recomenda atualmente

console.log('cidade:', cidade);
console.log('data nascimento:', dataNascimento);

cidade = 'Ubatuba';
//dataNascimento = '2017-08-17';

if (cidade = 'Ilhabela') {
    console.log('cidade:', cidade);
}

const anoEmissao = 2010;
let portaAberta = true;
let numeroSala;

console.log('cidade:', typeof cidade);
console.log('anoEmissao:', typeof anoEmissao);
console.log('portaAberta:', typeof portaAberta);
console.log('numeroSala:', typeof numeroSala);
// console.log('precoTotal:', precoTotal); // is not defined

// variáveis primitivas => simples -> armazena um único valor por identificador

// Variáveis compostas => armazena multiplos valores em um único identificador

// Array object => definido por colchetes, e indexado por inteiros começando no zero 
const cadeiras = [1, 2, 3, 4, 5];
console.log('cadeiras[0]:', cadeiras[0]);
console.log('cadeiras[3]:', cadeiras[3]);

// Importância dos tipos de variáveis
if (anoEmissao == '2010') {
    console.log('correto! anoEmissao == ', anoEmissao);
}

if (anoEmissao === '2010') {
    console.log('correto! anoEmissao === ', anoEmissao);
}

console.log(10 + 10);
console.log(10 + '10');
console.log(10 + '1A');
console.log(10 / '1A'); // NaN => Not a Number 

if (isNaN(10 / '1A')) {
    console.log('Operação inválida!');
}

console.log(1 / 0); // Infinity

// isFinite()

// Variável composta
// Object padrão do JS

const qtdeLetras = cidade.length;
console.log('qtdeLetras de cidade:', qtdeLetras);
console.log('cidade em maiúsculas:', cidade.toUpperCase()); // comportamentos são executado com () no final
console.log('cidade original:', cidade);

// Na orientação a objetos os comportamentatos são métodos do objeto

console.log('cadeiras invertida:', cadeiras.reverse());

// Criando objetos em tempo de execução
// Objeto padrão em JS é definido por chaves {}

// As característas do objeto se chamam de propriedades
let pessoa1 = {
    nome: "Fulado Sparts",
    cpf: "000.000.000-00",
    dataNascimento: "2010-06-02",
    interesses: ['games', 'artes', 'futebol'],
    endereco: {
        rua: "xpto",
        numero: "1111",
        cidade: "Otrein",
        cep: "00000-000",
        bairro: "gtr",
        coordenadas: {
            latitude: '0000',
            longitude: '1100'
        }
    }
}
console.log(pessoa1.nome);
console.log('principal interesse da pessoa1:', pessoa1.interesses[0]);
console.log('latitude do endereço da pessoa1:', pessoa1.endereco.coordenadas.latitude);

// JSON => Javascript Object Notation
// Uma representação em texto (código) de objetos Javascript. Usado para troca de informações entre sistemas.

// pessoa1 em JSON
/*
    No JSON as propriedades são escritas entre aspas.

    {
        "nome": "Fulado Sparts",
        "cpf": "000.000.000-00",
        "dataNascimento": "2010-06-02",
        "interesses": ['games', 'artes', 'futebol'],
    }

*/

/*

console => objeto que representa o terminal JS, definido pelo ambiente de execução, a própria linguagem cria este objeto na memória em tempo de execução - runtime

.log() é um método do objeto console (comportamento)

*/

console.log('mensagem');
