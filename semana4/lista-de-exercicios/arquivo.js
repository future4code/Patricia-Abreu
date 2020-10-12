
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



3.