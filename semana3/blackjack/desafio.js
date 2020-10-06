/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// DESAFIO 8

let user = []
let pc = []

console.log("Bem vindo ao jogo de Blackjack!")

let iniciarRodada = confirm("Quer iniciar uma nova rodada?")

   let userCarta1 = comprarCarta()
   let userCarta2 = comprarCarta()
   let pcCarta1 = comprarCarta()
   let pcCarta2 = comprarCarta()

   if (userCarta1.valor !== 11 && userCarta2.valor !== 11) {
      user.push(userCarta1)
      user.push(userCarta2)
      } else {
      userCarta1 = comprarCarta()
      userCarta2 = comprarCarta()
      user.push(userCarta1)
      user.push(userCarta2)
      }

   if (pcCarta1.valor !== 11 && pcCarta2.valor !== 11){
      pc.push(pcCarta1)
      pc.push(pcCarta2)
      } else {
      pcCarta1 = comprarCarta()
      pcCarta2 = comprarCarta()
      pc.push(pcCarta1)
      pc.push(pcCarta2)
      }