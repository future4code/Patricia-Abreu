
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