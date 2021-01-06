//a
let minhaString: string = 7;
//o Typescript não permite nenhum tipo de valor que seja uma string

//b
let meuNumero: number = 8;
//para que aceite strings, podemos fazer um union type de number e string, assim:
let meuNumero2: number | string;
meuNumero2 = 8;
meuNumero2 = "oito";

//c
let meuObjeto: {nome: string, idade: number, corFavorita: string};
//posso definir os dados aceitos pelo meu objeto descrevendo os dados que quero que objeto aceite.

//d
type Pessoa = {nome: string, idade: number, corFavorita: string};

const jim: Pessoa = {nome: "Jim Halpert", idade: 42, corFavorita: "azul"}
const pam: Pessoa = {nome: "Pam Beesly", idade: 41, corFavorita: "violeta"}
const dwight: Pessoa = {nome: "Dwight Schrute", idade: 50, corFavorita: "amarelo"}
//para facilitar o reuso das propriedades, criamos um type

//e
enum COR_ARCO_IRIS {
    AMARELO = "amarelo",
    ANIL = "anil",
    AZUL = "azul",
    LARANJA = "laranja",
    VERDE = "verde",
    VERMELHO = "vermelho",
    VIOLETA = "violeta"
}
type Pessoa2 = {nome: string, idade: number, corFavorita: COR_ARCO_IRIS};
const jim2: Pessoa2 = {nome: "Jim Halpert", idade: 42, corFavorita: COR_ARCO_IRIS.AZUL}
const pam2: Pessoa2 = {nome: "Pam Beesly", idade: 41, corFavorita: COR_ARCO_IRIS.VIOLETA}
const dwight2: Pessoa2 = {nome: "Dwight Schrute", idade: 50, corFavorita: COR_ARCO_IRIS.AMARELO}
//aqui podemos restringir os dados utilizando os enums