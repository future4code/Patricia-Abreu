/* EXERCÍCIO 1 DE INTERPRETAÇÃO */

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

/* Está criando um laço de repetição no bloco do for até que "i" seja 4,
e no bloco de condição ele soma os valores atualizados a cada passagem pela incrementação do for. */
/* O resultado impresso é 10. */


/* EXERCÍCIO 2 DE INTERPRETAÇÃO */

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}


