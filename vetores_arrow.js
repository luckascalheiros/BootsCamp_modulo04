//const é uma variavel que não pode muadar, a não ser valores que mantenham o mesmo formato, elementos de array por ex
const arr = [4, 35, 65, 6888, 8, 9, 7, 8, 97, 83, 2, 243, 454, 56, 7, 6];

const funcArr = arr.map(function(item, index) {
  return `${index}: ${item}*2=${item * 2}`;
});

// const newArr = function() {
//   let arrey = [];
//   for (item of arr) {
//     arrey.push(item * 2);
//   }
//   return arrey;
// };

//reduce percorre todo o vetor, a primeira variavel é o valor a se trabalhar e a segunta pega o proximo elemento do vetor
//no caso pega o maior valor do vetor
const maior = arr.reduce(function(valor, next) {
  if (valor > next) {
    return valor;
  } else {
    valor = next;
    return next;
  }
});

var vetor = ["lucas", "breno", "luana", "rosana"];
vetor[6] = "teste"; //acrecenta variavel na posição desejada, os demais fica undefined
vetor.push("icaro"); //coloca valor na ultima posição do arrey
vetor.sort(); //organiza o vetor em ordem crescente considerando letras maiusculas

//percorre o vetor e armazena o index na variavel
for (var v in vetor) {
  //console.log(vetor[v]);
}
//percorre o vetor e armazena o elemento na variavel
for (var v of vetor) {
  //console.log(vetor[v]);
}

var busca = vetor.indexOf("l"); //busca valor e retorna o indice

//percorre o array e retorna itens que seja, true para a espressão de retorno, no caso os numeros pares
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

//percorre array e retorna o item encontrado
const find = arr.find(function(item) {
  return item === 8;
});

const filter2 = arr.filter(function(item) {
  return item === 8;
});

//forEach percorre o array e recebe o valor do elemento
arr.forEach(function(rep) {
  console.log(rep);
});

arr.forEach(rep => {
  console.log(rep);
});

console.log(filter2);
