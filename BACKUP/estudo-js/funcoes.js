// Funções definidas pelo usuário

// Poder ter parâmetros => entrada de dados da função
// um parâmetro de função pode ter um valor padrão
// param = valor
function exibeMensagem(nome = 'Visitante') {
    console.log(`Olá, ${nome}!`);
}

// Chamada da função é indica pelo identificador seguido por () com ou sem argumentos func('valor1', 'valor2')
exibeMensagem();
exibeMensagem('Fulano');

// Funções para serem reutilizadas nunca executar saída de dados dentro da função (no corpo)

function obterMensagem(nome = 'Visitante') {
    return `Olá, ${nome}`;
}
const boasVindas1 = obterMensagem();
const boasVindas2 = obterMensagem('Fulano');
console.log(boasVindas1);
console.log(boasVindas2);

// Salvar funções em variáveis.
const somar = function soma(a, b) {
    return a + b;
}
const resultado = somar(5, 76);
// somar

// No JS salvar uma função ela pode ser tratada como callback
// No callback quem executa a chamada da função é uma outra função / método.
const numeros = [1, 2, 3];
numeros.forEach(exibeMensagem); // automaticamente chama a função e passa o item do array como argumento (entrada de dados para o callback)

// Variedades de sintaxes de funções no javaScript
// Função anônima -> para ser executada em um escopo único, não pode ser chamada novamente
numeros.forEach(
    function (item) {
        console.log(item);
    }
)

// Arrow function -> sintaxe moderna para funções JS
// Simplifica a declaração das funções () => {}
// () -> entrada de dados, parâmetros
// {} -> corpo da função

const multiplicar = (a, b) => { return a * b };
console.log('5 * 323 = ', multiplicar(5, 323));

// o return pode ser implícito quando o corpo da função tem uma única linha
const subtrair = (a, b) => a - b;
console.log('765 - 43 = ', subtrair(765, 43));

// Com um único parâmetro (sem valor padrão), pode-se omitir os ()
const mensagem = nome => `Olá, ${nome}`; // () => {}
console.log('Mensagem = ', mensagem('Fulano'));

// Como atribuir funções a objetos para que se tornem métodos ?
let aluno1 = {
    nome: 'Fulano',
    media: 7.8,
    situacao: (aluno) => {
        if (aluno.media >= 6) {
            return 'Aprovado';
        }
        return 'Reprovado'
    }
}
console.log(aluno1.situacao(aluno1));
aluno1.media = 5.5;
console.log(aluno1.situacao(aluno1));

