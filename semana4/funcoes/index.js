EXERCÍCIOS DE INTERPRETAÇÃO

EXERCÍCIO 1.
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// Ele testa se o número é par ou ímpar.
// Sendo número PAR, passa no teste.
//A mensagem "não passou no teste" é para os números ímpares.

EXERCÍCIO 2.
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// A. Seria para verificar o preço da fruta escolhida.
// B. 2.25
// C. Se retirássemos ele daria o preço do próximo item, no caso o DEFAULT.

EXERCÍCIO 3
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
}
let mensagem = "Essa mensagem é secreta!!!"

console.log(mensagem)

//A. Está pedindo para o usuário digitar um número, no formato "Number".
//B. Se o usuário digitar 10 a mensagem será "Esse número passou no teste", pois é um número maior que 10.
// Se fosse -10 não aconteceria nada, pois não há uma mensagem definida para este comportamento.
//C. Sim, há um erro no código. Embora haja uma segunda mensagem a ser impressa, a variável que a armazena está dentro
// de um escopo inacessível, o que não permite a sua leitura.


EXERCÍCIO 4
let idadeUsuario = Number(prompt("Digite sua idade"))

if (idadeUsuario>= 18) {
    console.log("Você pode dirigir")
} else {console.log("Você não pode ditigir")
}

EXERCÍCIO 5
// let turnoUsuario = prompt("Digite em qual turno você estuda, indicando por sua letra inicial. Exemplo: M (matutino), V (vespertino) ou N (noturno).")

// console.log(turnoUsuario)

// let turnoMatutino = "M" || "m"
// let turnoVespertino = "V" || "v"
// let turnoNoturno = "N" || "n"

// if (turnoUsuario === turnoMatutino) {console.log("Bom Dia!")
//     } else if (turnoUsuario === turnoVespertino) {console.log("Boa Tarde!")
//         } else {console.log("Boa Noite!")}


EXERCÍCIO 6

const turnoUsuario = prompt("Digite em qual turno você estuda, indicando por sua letra inicial. Exemplo: M (matutino), V (vespertino) ou N (noturno).").toUpperCase()

console.log(turnoUsuario)

let turnoMatutino = "M"
let turnoVespertino = "V"
let turnoNoturno = "N"

switch (turnoUsuario){
    case "M":
        console.log("Bom Dia!")
        break;
    
    case "V":
       turnoVespertino
        console.log("Boa Tarde!")
        break;
    
    case "N":
     turnoNoturno
        console.log("Boa Noite!")
        break;

    default:
        console.log ("Não entendemos usa resposta.")
    }

01/10/2020 - aula12

/* EXERCÍCIO 1 DE INTERPRETAÇÃO */

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

/* Está criando um laço de repetição no bloco do for até que "i" seja 4,
e no bloco de condição ele soma os valores atualizados a cada passagem pela incrementação do for. */
/* O resultado impresso é 10. */


EXERCÍCIO 2 DE INTERPRETAÇÃO

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

/* A) Vai imprimir os números maiores que 18, ou seja, [19, 21, 23, 25, 27, 30]. */

/* B) o for...of... não é suficiente para acessar o índice dos elementos. */

EXERCÍCIO 3 - ESCRITA DE CÓDIGO

/* A) 

let arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for (let numero of arrayOriginal) {
  if (numero >= 0){
  console.log(numero)
  }
}

*/


/* B) 
let arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
for (let numero of arrayOriginal){
  let divisao = numero/10
  console.log(divisao)
}
 */


/*  C)

let divArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let novoArray = [];

for (let number of divArray){
  if (number%2 === 0){
      novoArray.push(number)
  }
}
console.log(novoArray) */


/* D)
let arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let arrayStrings = []
let texto = " "
let i = 0

for(let numero of arrayOriginal) {
  texto = "O elemento do índex "+ i + " é " + numero
  arrayStrings.push(texto)
  i++
}
console.log(arrayStrings) */



E)
/* let arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let valorMaximo = []
let valorMinimo = []

for (let i = 0; i < arrayOriginal.length; i++) {
  if (arrayOriginal(i)>= number) {valorMaximo = arrayOriginal(i);}
  if (arrayOriginal(i)<= number) {valorMinimo = arrayOriginal(i);}
}
console.log("O maior número é " + valorMaximo + " e o menor é " + valorMinimo + ".") 

incompleto*/
//----------------------------------------------------------------------------------------


FUNÇÕES

// EXERCÍCIO 1

function minhaFuncao(variavel) {
	return variavel * 5
}
minhaFuncao(2)
minhaFuncao(10)

//a) Será impresso no console os números 10 e 50 (correspondente, respectivamente à console.log(minhaFuncao(2))
// ... e console.log(minhaFuncao(10)).

//b) Apareceria somente o 50, pois o segundo valor atribuído a variável é 10, substintuindo assim primeiro valor atribuído a ela que era 2.


//EXERCÍCIO 2

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}
outraFuncao(arrayDeNomes)

// a) Darvas e Caio.
// b) Amanda e Caio.



// EXERCÍCIO 3

const metodo = ([2,4,6]) => {
  let arrayFinal = [];

  for (let x of array) {
		if (x % 2 === 0) {
	    arrayFinal.push(x * x)
		}
  }
  return arrayFinal;
}
// RESPOSTA: Ele vai pegar só os números positivos do array, multiplicar por ele mesmo e inserir no arrayFinal.



 //EXERCÍCIO 4
 a)
 let meusDados = () => {console.log("Eu sou Patrícia, tenho 29 anos, moro em Florianópolis e sou estudante.")}
 meusDados()

b)
let dadosPessoais = (nome, idade, cidade, estudante) => {
  if (estudante) {
    estudante = "sou estudante"
  } else {estudante = "não sou estudante"
}
  console.log(`Eu sou a ${nome}, tenho ${idade}, moro na ${cidade} e sou ${estudante}`)
}
  let nome = "Patrícia"
  let idade = "29"
  let cidade = "Florianópolis"
  let estudante = true
    
  const resultado = dadosPessoais(nome, idade, cidade, estudante)
  
  console.log(resultado)



  //EXERCÍCIO 5
  
a)
  function somaDois (a,b){
  const soma = a+b
  return(1+2)
  }
  somaDois(1,2)
  console.log(somaDois(1,2))


b) 
 function doisNumeros (a,b){
   if(a>=b) {return true
  } else {
     return false}
   }
  doisNumeros(a,b)
  console.log(return doisNumeros(1,2))


c)
function repetirMensagem (mensagem){
  for(let i = 0; i < 10; i++)
  console.log(mensagem)}

repetirMensagem ("Uma mensagem")


//EXERCÍCIO 6

a)
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let tamanhoArray = (array)=>{
return array.length
}

console.log(tamanhoArray(array))

b) */ let novoNumero = (num) => {
  if(num % 2 === 0) { 
    let par = true
  } else {
    let impar =  false
    }
    return (num % 2 === 0);
  }


c)
const array = [10, 23, 82, 64]

const numPar = (array) => {
let novoArray = [];
    for(let i of array){
        if (i % 2 === 0){
          novoArray.push(i)
         }
    }
return novoArray.length;
}

d) NÃO REALIZADO
