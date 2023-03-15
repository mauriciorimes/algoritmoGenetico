// cria os arrays vazios
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];

// cria um array com os valores/lucro
const lucro = [200, 200, 300, 400, 400]

// funcao para adicionar 0 ou 1 de forma randomica
function adicionaRandom() {
  return Math.floor(Math.random() * 2)
}

// Para um array de tamanho 5, adiciona 0 ou 1 de forma randomica
for (let i = 0; i < 5; i++) {
  arr1.push(adicionaRandom())
  arr2.push(adicionaRandom())
  arr3.push(adicionaRandom())
  arr4.push(adicionaRandom())
  arr5.push(adicionaRandom())
  arr6.push(adicionaRandom())
}

// cria uma copia dos arrays, antes de serem modificados
let cros1 = [...arr1];
let cros2 = [...arr2];
let cros3 = [...arr3];
let cros4 = [...arr4];
let cros5 = [...arr5];
let cros6 = [...arr6];

// Onde o indica for 1, ou seja, quando for adicionado o item, substituiu o 1 pelo valor do lucro
for (let i = 0; i < 5; i++) {
  if (arr1[i] === 1) arr1.splice(i, i, lucro[i])  
}

for (let i = 0; i < 5; i++) {
  if (arr2[i] === 1) arr2.splice(i, i, lucro[i])  
}

for (let i = 0; i < 5; i++) {
  if (arr3[i] === 1) arr3.splice(i, i, lucro[i])  
}

for (let i = 0; i < 5; i++) {
  if (arr4[i] === 1) arr4.splice(i, i, lucro[i])  
}

for (let i = 0; i < 5; i++) {
  if (arr5[i] === 1) arr5.splice(i, i, lucro[i])  
}

for (let i = 0; i < 5; i++) {
  if (arr6[i] === 1) arr6.splice(i, i, lucro[i])  
}

// Conferindo os numeros adicionados
//console.log(arr1);

// Calcula o valor fitness, somando os lucros
const fitness1 = arr1.reduce((anterior, soma) => anterior += soma)
const fitness2 = arr2.reduce((anterior, soma) => anterior += soma)
const fitness3 = arr3.reduce((anterior, soma) => anterior += soma)
const fitness4 = arr4.reduce((anterior, soma) => anterior += soma)
const fitness5 = arr5.reduce((anterior, soma) => anterior += soma)
const fitness6 = arr6.reduce((anterior, soma) => anterior += soma)

const x11 = {
  cromosso: cros1,
  fitness: fitness1,
}

const x12 = {
  cromosso: cros2,
  fitness: fitness2,
}

const x13 = {
  cromosso: cros3,
  fitness: fitness3,
}

const x14 = {
  cromosso: cros4,
  fitness: fitness4,
}

const x15 = {
  cromosso: cros5,
  fitness: fitness5,
}

const x16 = {
  cromosso: cros6,
  fitness: fitness6,
}

// printa a populacao inicial - primeira geracao
// console.log(x11);
// console.log(x12);
// console.log(x13);
// console.log(x14);
// console.log(x15);
// console.log(x16);

// transforma em um array de objetos
const arrX = [
  x11,
  x12,
  x13,
  x14,
  x15,
  x16
]

// printa sem ta ordenado, p array de objetos
console.log(arrX);

// ordenando o array de objetos
const ordenado = arrX.sort((a, b) => {
  return b.fitness - a.fitness
})

// printando o array de objetos ordenado
console.log(ordenado);

// criando primeiro par
const aux1Primeiro = ordenado.slice(0, 1);
const aux2Primeiro = ordenado.slice(ordenado.length - 1, ordenado.length)
const primeiroPar = aux1Primeiro.concat(aux2Primeiro)

// criando segundo par
const aux1Segundo = ordenado.splice(1, 1);
const aux2Segundo = ordenado.splice(-2)
aux2Segundo.pop();
const segundoPar = aux1Segundo.concat(aux2Segundo);

// criando terceiro par
const aux1Terceiro = ordenado.slice(1)
aux1Terceiro.pop();
const aux2Terceiro = ordenado.splice(2)
const terceiroPar = aux1Terceiro.concat(aux2Terceiro);

// printa os 3 pares selecionados
// console.log(primeiroPar);
// console.log(segundoPar);
// console.log(terceiroPar);

// Funcao pra gerar de forma random, o quanto vai pegar de gene de cada pai
function adicionaRandomGene() {
  return Math.floor(Math.random() * 4) + 1
}
// recebe o corte numa variavel e printa
const corte = adicionaRandomGene()
// console.log(`corte: ${corte}`);

// Separa os genes de cada pai, de acordo com o corte random gerado.

// Casal 1
// filho 1
const primeiroCorteCasalUm = primeiroPar[0].cromosso.slice(0, corte);
const segundoCorteCasalUm = primeiroPar[1].cromosso.slice(corte , primeiroPar[1].cromosso.length + 1);

// filho 2
const filho2CasalUm1 = primeiroPar[1].cromosso.slice(0, corte);
const filho2CasalUm2 = primeiroPar[0].cromosso.slice(corte , primeiroPar[0].cromosso.length + 1)

// Casal 2
// filho 1
const primeiroCorteCasalDois = segundoPar[0].cromosso.slice(0, corte);
const segundoCorteCasalDois = segundoPar[1].cromosso.slice(corte , segundoPar[1].cromosso.length + 1);

// filho 2
const filho2CasalDois1 = segundoPar[1].cromosso.slice(0, corte);
const filho2CasalDois2 = segundoPar[0].cromosso.slice(corte , segundoPar[0].cromosso.length + 1)

// Casal 3
// filho 1
const primeiroCorteCasalTres = terceiroPar[0].cromosso.slice(0, corte);
const segundoCorteCasalTres = terceiroPar[1].cromosso.slice(corte , terceiroPar[1].cromosso.length + 1);

// filho 2
const filho2CasalTres1 = terceiroPar[1].cromosso.slice(0, corte);
const filho2CasalTres2 = terceiroPar[0].cromosso.slice(corte , terceiroPar[0].cromosso.length + 1)


// printa os genes de forma random de cada pai
// console.log(primeiroCorteCasalUm);
// console.log(segundoCorteCasalUm);

// console.log(primeiroCorteCasalDois);
// console.log(segundoCorteCasalDois);

// console.log(primeiroCorteCasalTres);
// console.log(segundoCorteCasalTres);

// Junta os genes para criar os filhos
const filhoUmPrimeiroCasal = primeiroCorteCasalUm.concat(segundoCorteCasalUm)
const filhoDoisPrimeiroCasal = filho2CasalUm1.concat(filho2CasalUm2)

const filhoUmSegundoCasal = primeiroCorteCasalDois.concat(segundoCorteCasalDois)
const filhoDoisSegundoCasal = filho2CasalDois1.concat(filho2CasalDois2)

const filhoUmTerceiroCasal = primeiroCorteCasalTres.concat(segundoCorteCasalTres)
const filhoDoisTerceiroCasal = filho2CasalTres1.concat(filho2CasalTres2)

// printa os filhos
// console.log(filhoUmPrimeiroCasal);
// console.log(filhoDoisPrimeiroCasal);

// console.log(filhoUmSegundoCasal);
// console.log(filhoDoisSegundoCasal);

// console.log(filhoUmTerceiroCasal);
// console.log(filhoDoisTerceiroCasal);

// cria um array que recebe todos os filhos
const arrFilhos = [
  filhoUmPrimeiroCasal,
  filhoDoisPrimeiroCasal,
  filhoUmSegundoCasal,
  filhoDoisSegundoCasal,
  filhoUmTerceiroCasal,
  filhoDoisTerceiroCasal
]

// imprime todos os filhos
console.log(arrFilhos);

// funcao para escolher o cromossomo de forma random
function escolheCromossomoRandom() {
  return Math.floor(Math.random() * 6)
}

// funcao para escolher de forma random o gene
function escolheGeneRandom() {
  return Math.floor(Math.random() * 5)
}

// inverte o gene mutado de 0 pra 1 ou 1 pra 0
const indiceCromossomoRandom = escolheCromossomoRandom();

console.log(`Indice do cromossomo: ${indiceCromossomoRandom}`);

console.log(arrFilhos[indiceCromossomoRandom]);

const indiceGeneRandom = escolheGeneRandom();

console.log(`Indice do gene: ${indiceGeneRandom}`);

console.log(arrFilhos[indiceCromossomoRandom][indiceGeneRandom]);

const aux = arrFilhos[indiceCromossomoRandom].indexOf(indiceGeneRandom);

if (arrFilhos[indiceCromossomoRandom][indiceGeneRandom] === 0) {  
  arrFilhos[indiceCromossomoRandom][indiceGeneRandom] = 1
} else {  
  arrFilhos[indiceCromossomoRandom][indiceGeneRandom] = 0
}

// printa o cromossomo com o gene mutado.
console.log(arrFilhos[indiceCromossomoRandom]);




















