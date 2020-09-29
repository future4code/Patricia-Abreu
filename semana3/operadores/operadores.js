
1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2         
console.log("a. ", resultado)       //   a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultad)        // b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)           // c. true

console.log("e. ", typeof resultado)        // e. boolean


2.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
let array
console.log('a. ', array)       // a. undefined

array = null
console.log('b. ', array)       // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)                //c.  11

let i = 0
console.log('d. ', array[i])            // d. 3

array[i+1] = 19
console.log('e. ', array)           // e. 19

const valor = array[i+6]            // f. 6
console.log('f. ', valor)


EXERCÍCIOS DE ESCRITA DE CÓDIGO

1.

let suaIdade = prompt("Qual é a sua idade?")
console.log(suaIdade)

let idadeAmigo = prompt("Qual é a idade do seu melhor amigo?")
console.log(idadeAmigo)

const maior = Number(suaIdade) > Number(idadeAmigo)

const diferenca = Number(suaIdade) - Number(idadeAmigo)


console.log("Sua idade é maior do que a do seu melhor amigo?", maior)



2. 

let numero = prompt("Insira um número par:")
console.log(numero)

console.log(numero%2)

// o resto da divisão é sempre o número 0.



3. 

let listaDeTarefas = []

tarefa0 = prompt("Cite 3 tarefas que você precisa realizar no dia:")
tarefa1 = prompt("Cite outra tarefa: 1")
tarefa2 = prompt("Cite mais uma tarefa: 2")

listaDeTarefas.push(tarefa0)
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2) 

console.log(listaDeTarefas)

let tarefaRealizada = prompt("Das 3 tarefas citadas, qual você já realizou: 0, 1 ou 2?")

listaDeTarefas.splice(tarefaRealizada)

console.log(listaDeTarefas)


4.

let nomeDoUsuario = prompt("Qual é o seu nome?")
let emailDoUsuario = prompt("Digite o seu e-mail")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vindo(a)," + nomeDoUsuario + "!")
