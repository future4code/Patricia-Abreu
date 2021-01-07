

//a

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
//as entradas dessa função são um array de números.

//b
type estatistica = {
    maior: number,
    menor: number,
    media: number
}
//numerosOrdenados é um array de numeros, soma é um número e estatísticas pode ter um type próprio, com 3 numeros, maior, menor e média

//c
type AmostraDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[])=>estatistica
}
//a criação de um type que possui um array de numeros e seus calculos a partir da amostra


