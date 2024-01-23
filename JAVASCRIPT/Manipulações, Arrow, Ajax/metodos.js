let nome = "Rafael Mantovaneli Garcia";

// quantidade de caracteres
console.log(nome.length);

// se existe o texto e qual a posição desse texto
console.log(nome.indexOf("Mantovaneli"));

// separa o texto da posição inicial informada até a posição final informada.(aceita um numero negativo, pegando assim do final para o começo.)
console.log(nome.slice(0, 10));

// separa o texto dentro do intervalo solicitado no substring.
console.log(nome.substring(10, 15));

//separa o texto, o primeiro parametro é a posição e o segundo a quantidade de caracteres que vai pegar após a posição.
console.log(nome.substr(8, 3));

// Substitui o texto pelo segundo parametro
console.log(nome.replace("Mantovaneli", "JavaScript"));

// transforma tudo em maiusculo
console.log(nome.toUpperCase());

// retira os espaços inúteis da extremidade da string.
console.log(nome.trim());

// Saber qual caractere está na posição informada.
console.log(nome.charAt(3));

// transforma uma string em um array no espaço em branco passado como parâmetro.
console.log(nome.split(" "));

let lista = ["ovo", "farinha", "corante", "massa"];

//pop remove o ultimo item de uma matriz
lista.pop();
console.log(lista);

//shift remove o primeiro numero de uma matriz
console.log(lista.shift());

//push adiciona um item na matriz
lista.push("chocolate");
console.log(lista);

//delete remove um item da lista mas deixa o slot vazio
//delete lista[1];

//splice deleta e remove o espaço, primeiro passa a posição e depois manda quantos elementos quer eliminar
lista.splice(1, 1);

// sort ordena a lista por ordem alfabetica
lista.sort();
console.log(lista);

// reverse reverte a ordem do array
lista.reverse();
console.log(lista);

let lista2 = [45, 4, 9, 16, 25];

let lista3 = [];

// map corre toda a lista e pede uma função que irá executar um determinado comando.
lista3 = lista2.map(function (item) {
  return item * 2;
});
console.log(lista3);

// filter roda uma função que retorna true ou false, true ela aproveita o item do array e false não aproveita
lista3 = lista2.filter(function (item) {
  return item > 20;
});
console.log(lista3);

// every ele retonra true ou false, tem que ser todo mundo atendendo a condição estipulada.. retornando true ou false para o array.
lista3 = lista2.every(function (item) {
  return item > 20;
});
console.log(lista3);

// some retorna true ou false se algum dos itens atenderem a condição
lista3 = lista2.some(function (item) {
  return item > 20;
});
console.log(lista3);

//find retorna true quando a condição for encontrada
lista3 = lista2.find(function (item) {
  return item == 45 ? true : false;
});
console.log(lista3);

//findIndex retorna true quando a condição for encontrada
lista3 = lista2.findIndex(function (item) {
  return item == 45 ? true : false;
});
console.log(lista3);

//                                                    DATAS

let d = new Date();

//NO JAVASCRIPT OS MESES VÃO DE 0 A 11, 0 SENDO JANEIRO E 11 DEZEMBRO

//formatar data toDateString(), toUTCString(), toString()
console.log(d.toDateString());

//date string
let d1 = new Date("2020-01-01 15:42:17");
console.log(d1);

//pegar somente o ano
let novoValor = d.getFullYear();
console.log(novoValor);

//pegar o mes
novoValor = d.getMonth();
console.log(novoValor);

//pegar o dia da semana 0 para domingo e 6 para sabado
novoValor = d.getDay();
console.log(novoValor);

//pega o dia do mes
novoValor = d.getDate();
console.log(novoValor);

// troca o ano
d1.setFullYear(2022);

// troca o mes
d1.setMonth(11);

//troca o dia
d1.setDate(23);

// aumentar 5 dias apartir da data atual
d1.setDate(d1.getDate() + 5);
console.log(d1);

//// FUNÇÕES MATEMATICAS MATH

let mat = Math.PI;
console.log(mat);

//Arredonda o numero
mat = Math.round(Math.PI);
console.log(mat);

// Arredonda para baixo. Math.floor()

// Arredonda para cima. Math.ceil()

//Valor Absoluto(valor positivo) Math.abs()

// Math.min(); acha o menor numero

// Math.max(); acha o maior numero.

// Math.random(); numero aleatorio entre 0 e 1.. Podendo ser multiplicado para uma faixa. ex; entre 0 e 100 -  Math.random*100

///////////// TIIIMERS OU INTERVALOS

let timer;

// setInterval seleciona o periodo a ser executado, primeiro recebe a função sem executála e depois o tempo em milisegundos
function comecar() {
  timer = setInterval(showTime, 1000);
}

// clearInterval para o intervalo disparado.
function parar() {
  clearInterval(timer);
}

function showTime() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let txt = `${h} : ${m} : ${s}`;

  document.querySelector(".demo").innerHTML = txt;
}

// setTimeout(); roda uma unica vez no tempo determinado.
function rodar() {
  setTimeout(function () {
    alert("rodou");
  }, 5000);
}

//clearTimeout(); pausa o clearTimeout antes dele rodar!

/////////// DESCONSTRUINDO OBJETOS

let pessoa = {
  nomeP: "Rafael",
  sobrenome: "Garcia",
  idade: "31",
  social: {
    facebook: "rmgarcia",
    instagram: "rmgarcia2",
  },
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
};

/// desconstrução em uma unica linha

let { nomeP, sobrenome, idade = 0 } = pessoa;

console.log(nomeP, sobrenome, idade);

//definindo um valor padrao para variavel
//let { nomeP, sobrenome, idade = 0 } = pessoa;

// mudando a variavel
//let { nomeP:nomePessoal, sobrenome, idade} = pessoa;

//pegando de objeto dentro de objeto
// let {facebook, instagram} = pessoa.social;
//ou
//let (nome, idade, social:{instagram}) = pessoa;

/////////////////////// DESCONSTRUINDO ARRAYS /////////////////////////

let array = ["Rafael Garcia", "Rafael", "Garcia", "@rmgarcia"];

let [nomeCompleto, nomeComp, sobrenomeComp, instagram] = array;
