const curso = "Técnico em Informática";

console.log(typeof curso);

console.log(`Curso tem ${curso.length} de caracteres`);

console.log("Tudo em maiúsculas:", curso.toUpperCase());
console.log("contéudo de curso:", curso);
console.log("Tudo para minúsculas:", curso.toLowerCase());

const cursoCaixaAlta = curso.toUpperCase();
console.log(cursoCaixaAlta);

const nomeCompleto = " Fulano     Crister     ";
console.log('Tamanho "original" do nome:', nomeCompleto.length);
console.log(nomeCompleto);
const nomeLimpo = nomeCompleto.trim();
console.log("Tamanho do nome sem espaços extras:", nomeLimpo.length);
console.log(nomeLimpo);

// Pesquisar o contéudo de uma string com .includes()
console.log("Pesquisar 'co' em curso:", curso.includes('co'));
// Se encontrar o .includes retorna true ou false
console.log("Pesquisar 'co' em nomeLimpo:", nomeLimpo.includes('co'));

// Pesquisar se existe um padrão no início da string com .startsWith()
console.log("Pesquisar se nomeCompleto inicia com 'Fu':", nomeCompleto.startsWith('Fu'));
console.log("Pesquisar se nomeLimpo inicia com 'Fu':", nomeLimpo.startsWith('Fu'));

// Pesquisar se existe um padrão no final da string com .endsWith()
console.log("Pesquisar se curso termina com 'na':", curso.endsWith('na'));

// Pesquisar pela posição (índice) de um padrão na string com .indexOf()
// u v a
// 0 1 2
console.log("Onde está a primeira letra v em 'uva':", 'uva'.indexOf('v'));
console.log("Onde está a 1ª ocorrência da letra 'n' em curso:", curso.indexOf('n'));
console.log("Onde está a 1ª ocorrência o termo 'yoga' em curso:", curso.indexOf('yoga'));

// Substituir uma parte ou toda string por outro texto com .replace()
console.log("Alterar de 'Informática' para 'Yoga' em curso:", curso.replace('Informática', 'Yoga'));
console.log(curso);
// Substituindo espaços em branco
const cidade = 'São    Sebastião';
const cidadeSemEspacos = cidade.replace('    ', ' ');
console.log('Cidade sem espaços:', cidadeSemEspacos);

// Obter apenas uma parte da string com .slice(indice_inicial, quantidade)
console.log("Obter os 3 primeiros caracteres de cidade:", cidade.slice(0, 3));

// Dividir uma string em partes usando um caractere separador gerando um array
console.log("Dividir o curso separando por espaços:", curso.split(' '));

console.log("Dividir cidade sem espaços separando pela letra 's'", cidadeSemEspacos.split('s'));

console.log(cidadeSemEspacos[8]);



