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

console.log("Bem vindo ao jogo de Blackjack!")

const inicioJogo = confirm("Quer iniciar uma nova rodada?")

let cartasUser = []
let pontosUser = []
let PrintCartasUser = ""
let printPontosUser = 0

let cartaPc =[]
let pontosPc = []
let printCartasPc = ""
let printPontosPc = 0

if(inicioJogo) {
   for (let i = 0; i<2;) {
      let carta = comprarCarta()
      cartasUser.push(carta.texto)
      pontosUser.push(carta.valor)
      if ((cartasUser[0] === "A") && (cartasUser[1] ==="A")){
         i = i
      } else {
         i++
      }
      }
   }

   for (let carta of cartasUser) {
      printPontosUser += (carta + " ")
   }