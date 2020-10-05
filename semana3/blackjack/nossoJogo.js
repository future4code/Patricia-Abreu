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

//Mensagem inicial
console.log("Bem vindo ao jogo de Blackjack!")

let user = []
let pc = []


let inicioJogo = confirm("Quer iniciar uma nova rodada?")

//Iniciar uma rodada.
if(inicioJogo){
   
   let userCarta1 = comprarCarta()
   let userCarta2 = comprarCarta()
   let pcCarta1 = comprarCarta()
   let pcCarta2 = comprarCarta()


   // Imprime no console as cartas(naipe + número) e pontuação do Usuário e Computador.
   console.log("Usuário - cartas: " + userCarta1.texto + " " + userCarta2.texto + " - pontuação " + Number(userCarta1.valor + userCarta2.valor) +".")
   console.log("Computador - cartas: " + pcCarta1.texto + " " + pcCarta2.texto + " - pontuação " + Number(pcCarta1.valor + pcCarta2.valor) + ".")


   //Guarda a pontuação da soma das 2 cartas sorteadas para cada jogador.
   let userPoints = userCarta1.valor + userCarta2.valor
   let pcPoints = pcCarta1.valor + pcCarta2.valor

   if (userPoints === pcPoints) {
      console.log("Empate!")  // Imprime no console "Empate!" se os pontos do Usuário e Computador forem iguais.
   } else if (userPoints>pcPoints) {
      console.log("O usuário ganhou!") // Imprime 'O usuário ganhou!' se os pontos do Usuário for maior que do Computador.
   } else {console.log("O computador ganhou!")} // Imprime 'O computador ganhou!' se os pontos do Computador for maior que do Usuário.

   // Se a resposta do 'confirm' inicial for 'cancelar', o console imprime a mensagem 'O jogo acabou!'.
   } else {
   console.log("O jogo acabou!")
   }