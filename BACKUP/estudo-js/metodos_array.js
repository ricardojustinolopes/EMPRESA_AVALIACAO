const frutas = ['uva', 'manga'];

console.log("Tamanho do array:", frutas.length);

console.log("Incluir uma fruta no final do array:", frutas.push('goiaba'));
console.log("Alterações são persistentes:", frutas);
frutas.push('limão');
frutas.push('laranja');
console.log("Alterações são persistentes:", frutas);
console.log("Excluir o último elemento do array:", frutas.pop());
console.log(frutas);

console.log("Inclui 'laranja' no ínicio do array:", frutas.unshift('laranja'));
frutas.unshift('banana');
console.log(frutas);
console.log("Exclui o item do início do array:", frutas.shift());
console.log(frutas);

// Verificar se existe "banana" no array de frutas
console.log("Existe 'banana' em frutas ?", frutas.includes('banana'));
console.log("Existe 'uva' em frutas ?", frutas.includes('uva'));

frutas.push('uva');
console.log(frutas);

// Verifica a posição de uma elemento pelo valor
console.log("Onde está a 1ª ocorrência de 'uva' ?", frutas.indexOf('uva'));
console.log("Onde está a 1ª ocorrência de 'banana' ?", frutas.indexOf('banana'));

/// Posso ter array multidimensionais (matrizes)
// exemplo de uma matriz 2 x 2 =>   [ [1, 2], [3, 4], ]
// 1 2
// 3 4

// Extrair uma parte do array com .slice()
console.log(frutas);
console.log("Extair 2 elementos a partir do 3º elemento:", frutas.slice(2, 4));
console.log(frutas);

// Adiciona, remove ou substitui elementos com .splice()

console.log("Excluir dois elementos a paritr do 1º item:", frutas.splice(0, 2));
console.log(frutas);

console.log("Substituir 'limão' e 'uva' por 'banana' e 'melância' a partir do 3º elemento:", frutas.splice(2, 2, 'banana', 'melância'));
console.log(frutas);

console.log("Incluir 'pitaya' no índice 1 (2ª) sem excluir nada: ", frutas.splice(1, 0, 'pitaya'));
console.log(frutas);

// mostrar todas as frutas que inicia com a letra "m"

for ( const item of frutas) {
    console.log(item);
}

frutas.forEach( (item) => console.log(item));

for (const elemento of frutas) {
    if (elemento.startsWith('m')) {
        console.log(elemento, " começa com a letra 'm'");
    }
}

// Exibir as frutas que tem "a" na segunda letra
for (const item of frutas) {
    if (item[1] === 'a') {
        console.log(item, " tem 'a' na 2ª letra");
    }
}


// Parte 2 - métodos Array

// forEach(callback) -> executa o callback de entrada para cada um dos elementos do array. O próprio forEach chama (executa o callback) passando o elemento como argumento.

// No forEach() posso trabalhar com os indices do array 
frutas.forEach( 
    (fruta, indice) => console.log(`${fruta} está na posição ${indice}`)
)
console.log(frutas);

console.log(frutas[2]);

// .map(callback) => cria (retorna) um novo array que contem os elementos processados pelo callback
// callback é um função chamada indiretamente por outra função ou método.
const frutasMap = frutas.map( 
    (item, indice) => `${indice + 1} = ${item}`
)
console.log(frutasMap);

const transformaLetras = texto => texto.toUpperCase();
const frutas2 = frutas.map(transformaLetras);
console.log(frutas2);

console.log(frutas.map( (item) => item.toUpperCase()) );
console.log(transformaLetras('abacate'));

const numeros = [ 1, 5 , 8 , 14, 678];
const numeroX2 = numeros.map( (item) => item * 2 );
console.log(numeroX2);
// Multiplicar por 2 todos os itens menores ou igual a 10
const numeros2 = numeros.map(
    (num) => {
        if (num <= 10) {
            return num * 2
        }
        return num;
    }
)
console.log(numeros2);

// Com array de objetos
// Catalogo de produtos (frutas)
const catalogo = [
    {nome: 'Goiaba', preco: 10.50},
    {nome: 'Manga', preco: 8.9},
    {nome: 'Uva', preco: 12.79}
];

const listaProdutos = catalogo.map( 
    (produto) => produto.nome
);
console.log(listaProdutos);

// .filter(callback) => retorna um novo array contendo apenas os itens que passem no critério (deve ser uma lógica que retorne true ou false)
const frutasM = frutas.filter( 
    (item) => item.startsWith('m')
);
console.log(frutasM);
const produtoAte10 = catalogo.filter( 
    (item) => item.preco < 10
);
console.log(produtoAte10);

// .find(callback) retorna um único elemento (primera ocorrência) de acordo com o critério (true ou false)
const primeiraM = frutas.find(
    (item) => item.startsWith('m')
);
console.log(primeiraM);

// .some(callback) retorna true ou false se encontrar algum elemento que atenda o critério (verifica se existe)
const temBanana = frutas.some( 
    item => item === 'banana'
);
console.log(temBanana);

// .every(callback) retorna true ou false se todos os elementos do array atender ao critério.
const temLetraAEmTodos = catalogo.every( 
    (item) => item.nome.includes('a')
);
console.log(temLetraAEmTodos);

// .reduce(callback) retorna um único valor (reduz) baseado na combinação (cálculo dos items);

// somar todos os valores do array numeros
const valorTotal = numeros.reduce( 
    (total, item) => total + item, 
    0 // valor inicial
);
console.log(valorTotal);