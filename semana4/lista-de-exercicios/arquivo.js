
Exercícios de interpretação de código

1. Cria uma função chama 'conversorDeMoeda'. Essa função deve receber um valor em dólar (parâmetro = 'valorEmDolar'). Ao usuário cabe
definir o valor da cotação do dólar. Que retornará o valor em reais, quando da multiplicaação do dólar sobre sua cotação.
Na variável 'cons' a função acima descrita é chamada, informando o valor em dólar (100) o qual será multiplicado pela cotação inserida
pelo usuário.
Por fim, é impresso no console o resultado da multipicação, qual seja, o valor em dólar convertido em reais, expresso no seguinte
formato "R$ 000.00".



2. A função 'investDinheiro' analisa o tipo de investimento, o valor aplicado e retorna o montante previsto após o investimento.
Os parâmetros estabelecidos entram em cada 'case', buscando a compatibilidade de investimento para realizar a multipicação.
Se o tipo de investimento informado não coincidir com aquele disposto na 'case' ele vai para a próxima 'case', pelo comando 'break',
e assim repetidamente até encontrar a compatibilidade. Caso não encontre o tipo de investimento ele vai para o 'default', que vai
emitir pelo comando 'alert' uma mensagem ao usuário: "TIPO DE INVESTIMENTO INFORMADO INCORRRETO".

Na situação "const novoMontante = insvesteDinheiro('Ações, 150')", a função é chamada e seus parâmetros são estabelecidos como 'ações'
e 150, que são respectivamente o tipo de investimento e o valor aplicado. Assim, o console.log(novoMontante) irá imprimir '165'.

Na situação "const segundoMontante = insvesteDinheiro('Tesouro Direto, 150')", que funciona como explicado anteriormente, apenas
substitui o tipo de investimento e o valor, o console imprime o valor "TIPO DE INVESTIMENTO INFORMADO INCORRETO!", pois não é um
tipo de investimento previsto na função.



3. Nesse exercício a 'const numero' dispõe de de uma coletânea de números aleatórios. As variáveis 'const array1' e 'const array2' são
arrays vazios que receberão números posteriormente.
Abaixo, o laço for dispõe que para cada 'numero' existente no array 'numeros', sendo ele um número par - ou seja, que dividido por 2 tem
resto zero (numero % 2 === 0), este será adicionado a variável 'const array1', e não sendo irá para a variável 'const array2'.
Ao final, o console vai imprimir a quantidade de números existente na 'const numeros', a quantidade existente na 'const array1' - que são
os números pares, e por fim a quantidade de números na 'const array2' que é dos números ímpares.
Em resumo, essa codificação separa do array principal os números pares e ímpares para seus respectivos 'arrays'.



4. Na questão em comento há um array de números chamado 'const numeros'. Há ainda duas variáveis, respectivamente de nome e valor: 'numero1'
com valor atribuído como 'infinity' e 'numero2' de valor 0.
Abaixo há um laço for, que procura em cada numero do array 'numeros' duas condições sucessivas: primeiro o menor número comparado a variável
'numero1', de valor 'infinity'. Posteriormente compara se o mesmo número é maior qua variável 'numero2' de valor 0.
Ao final, o console irá imprimir o menor e o maior número constante no array 'numeros'.
Portanto, pode-se dizer que a função busca saber o menor e o maior número existente no array.


EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO

1. Pode-se percorrer uma lista por meio do laço 'for', 'while' ou 'forEach'.

Exemplo 01: 

let array = [1, 3, 4, 6, 8]

for(let i = 0; i < array.length; i++)



Exemplo 02:

let listaDeFrutas = []

listaDeFrutas[1] = 'banana'
listaDeFrutas[2] = 'maçã'
listaDeFrutas[3] = 'pêra'

let i = 0

while (i < listaDeFrutas.length) {
    //ação
    i++
}




2.
a) false
b) false
c) false
d) true
e) true



3.

const quantidadeDeNumerosPares =

let i = 0

while(i <= quantidadeDeNumerosPares) { //adicionei .length para ler todo o 'array'
console.log(i*2)
  i++ // adicionei a condição de incremento
}



4. 
let ladoA = 1
let ladoB = 2
let ladoC = 3

if ( ladoA === ladoB && ladoB === ladoC) {
    console.log("Triângulo EQUILÁTERO")
} else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
        console.log("Triângulo ESCALENO")
        } else {
            console.log("Triângulo ISÓSCELES")
        }


5.
i)
let valorA = Number(prompt("Digite um número."))
let valorB = Number(prompt("Digite outro número."))

if (valorA > valorB) {
    console.log( valorA + " é MAIOR que " + valorB)
} else {
    console.log(valorB + " é MAIOR que " valorA)}

ii)
if (valorA % valorB === 0) {
    console.log(valorA + " é divisível por " + valorB)
} else {
    console.log(valorA + " não é divisível por " + valorB)
}

iii)
let resultado = valorA - valorB

if(resultado >= 0 ){
console.log("A diferença entre " + valorA + " e " + valorB + " é igual a " + resultado)
} else {
    console.log("A diferença é um número negativo!")
}



EXERCÍCIOS DE FUNÇÕES

1.
let arrayDeNumeros = [40, 70, 45, 22, 13, 10, 88, 92, 103]
let primeiroMaior = 0
let primeiroMenor = Infinity

for(let numero of arrayDeNumeros){
    if(numero > primeiroMaior){
        primeiroMaior = numero;
    }
    if (numero < primeiroMenor){
        primeiroMenor = numero;
    }
}

let indice = arrayDeNumeros.indexOf(primeiroMenor);
while(indice >= 0){
    arrayDeNumeros.splice(indice, 1);
    indice = arrayDeNumeros.indexOf(indice)
}

let indice2 = arrayDeNumeros.indexOf(primeiroMaior);
while(indice2 >= 0){
    arrayDeNumeros.splice(indice2, 1);
    indice2 = arrayDeNumeros.indexOf(indice2)
}

let segundoMaior = 0
let segundoMenor = Infinity

for(let numero of arrayDeNumeros){
    if(numero > segundoMaior){
        segundoMaior = numero;
    }
    if (numero < segundoMenor){
        segundoMenor = numero;
    }
}
console.log(segundoMaior + " é o segundo MAIOR número do array.")
console.log(segundoMenor + " é o segundo MENOR número do array.")



2. 
let alerta = () => {
    alert("Hello Future4");
}

alerta()


EXERCÍCIOS DE OBJETOS
1.
ARRAYS são vários elementos dentro de uma variável. Um array pode guardar valores em strings ou números. Portanto, serve para guardar todo e 
qualquer tipo de listas que contenham essas características.

OBJETOS são 'containeres' que guardam vários elementos de características distintas, como por exemplo, tipo de material do container, peso,
altura etc. Logo, o objeto é usado quando é necessário guardar vários elementos, de tipos diferentes, em conjunto.

2.

let criaRetangulo = (lado1, lado2) => {
    const retangulo = {
        largura : lado1,
        altura: lado2,
        perímetro: (2 * (lado1 + lado2)),
        área: lado1 * lado2,
    }
    return retangulo
}

criaRetangulo(10,7)



3. 
const aBeautifulMind = {
    titulo: 'A beautiful mind',
    ano: '2001',
    diretor: 'Ron Howard',
    ator:'Russell Crowe',
    atriz:'Jennifer Connelly',
}

console.log('Venha assistir ao filme ' + aBeautifulMind.titulo + ' de ' + aBeautifulMind.ano + ' dirigido por ' +  aBeautifulMind.diretor + ' e estrelado por ' + aBeautifulMind.ator + ' e ' + aBeautifulMind.atriz + '.')



4.
const pessoaQualquer = {
    nome: 'Juliana',
    idade: '27',
    email: 'ju@email.com',
    endereco: 'Rua Santa Maria, n3'
}

let anonimizarPessoa = {
    ...pessoaQualquer,
    nome: 'ANÔNIMO',
    idade: 'ANÔNIMO',
    email: 'ANÔNIMO',
    endereco: 'ANÔNIMO',
 }
console.log(anonimizarPessoa.nome)




EXERCÍCIOS DE FUNÇÕES DE ARRAYS
1.
a)
const pessoas = [
    {nome: "Pedro", idade: 20},
	{nome: "João", idade: 10},
	{nome: "Paula", idade: 12},
	{nome: "Artur", idade: 89}
]

let maiorIdade = pessoas.filter((elemento) => {
    return elemento.idade>=20
})

console.log(maiorIdade)


b)
const pessoas = [
    {nome: "Pedro", idade: 20},
	{nome: "João", idade: 10},
	{nome: "Paula", idade: 12},
	{nome: "Artur", idade: 89}
]

let menorIdade = pessoas.filter((elemento) => {
    return elemento.idade<=20
})

console.log(menorIdade)


2.
a)
const array = [1, 2, 3, 4, 5, 6];

let dobroArray = array.map(function(num){
    return num * 2;
})

console.log(dobroArray)



b)

const array2 = ['1', '2', '3', '4', '5', '6'];

let triploArray = parseInt(array2.map(function(num))){
    return num * 3;
}

console.log(triploArray)