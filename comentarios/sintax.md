# Sintaxe
Toda linguagem tem uma boa comunicação e necessita de uma boa sintaxe

# Tipos de dados
 * Gramática
 * Elementos da linguagem e suas combinações
 * A arte de falar e escrever corretamente

 # Vocabulário
 -> Significado das coisas

 # Undefined é diferente de null
 *null = (algo que existe, mas não tem nada dentro dele)objeto que não possui nada dentro
 *undefined = indefinido(não existe)

 # Object
 * Array
 * Map
 * Set
 * Date
 * ...
 * Function
 ## Primitivo e estrutural
 * null(caixa vazia)
# Variáveis 
* Nomes simb[olicos para receber algum valor
* atalhos de código
* identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const

# Tipos dinamicos
* O JS é uma linguagem fracamente tipada e dinamica
- Variáveis não precisam ter um tipo previamente definido
- Podemos mudar o conteúdo da variável
* lembrando que uma constante não pode ser alterada(Não posso atribuir vários valores nela)

# Scope
* Escopo determina a visibilidade de alguma variável no JS

## Block steatement(declaração)
``` js
    // vamos iniciar um bloco
    {
        // aqui dentro é um bloco e posso colocar qualquer código
        // aqui fechamos o bloco
    }
```
O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## var
* O ideial é evitar o uso de var, por ser global seu uso pode gerar bugs inesperados
``` js
    //var é global e poderá funcionar fora de um escopo de bloco
    console.log('> existe x antes do bloco? ', x)
    {
        var x = 0
    }
    console.log('> existe x antes do bloco', x)
```
## scope da let e do const
São locais, só serão utilizadas no escopo em que foram criadas e não tem conversa
```js
//const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco? ', y)
    {
        let y = 0
    }
console.log('> existe y antes do bloco? ', y)

```
# O que é hoisting?
* Elevação do código por baixo dos panos, este conceito é importante para entender como um código funciona por baixo dos panos sem ser declarado dentro de uma variável

# Declaration assigment var (declaração e atribuição de variáveis)
* Conteúdo está em <link src='./comentarios/praticando.html'>praticando</link>

Parei em revisão de objects no módulo praticando e avançando

# Functions
* Argumentos e parâmetros
```js
    //função anonima
    const sum = function(){}
```

* Retornando valores dentro de uma função
```js
    const sum = function(number1, number2){
            let total = number1 + number2
            console.log(total)
    }
    sum(5, 6)
```
## function scope
```js
let subject
function createThing(subject){
    return subject
}
console.log(createThink(subject))
```
## function hoisting
```js
    sayMyName()

    function sayMyName(){
        console.log('Brena')
    }
```
* Uma função que é chamada antes de ter sido criada, sofre um hoisting, por debaixo dos panos é "como se".

# Arrow function
```js
    const sayMyName = () => {}
```
# Callback function(chamar de volta)
```js
function sayMyName (name) {
    console.log('Antes de executar uma callback')
    name()
    console.log('Depois de executar uma callback')
}
//posso passar qualquer tipo de dado aqui dentro
sayMyName(
    () => {
        console.log('Estou dentro de uma callback')
    }
)
```
* O callback é uma função que está passando como parâmetro uma outra função
# Funções construtoras
```js
function person(){

}
const Brena = new person()
console.log(Brena)
```
* this = vai referenciar a const que está do lado de fora
* A prática de colocar o nome de uma função com a primeira leitra maiúscula é importante, pois o javascript já contém algumas funções construtoras

# Msnipulando dados
* Javascript também é uma linguagem baseada em protótipos
* Antes de qualquer objeto ser criado, ele vai herdar um protótipo ascendente
* A maioria dos dados em javascript são encapsulados por um objeto
* O mesmo não funcionaria para números inteiros(float), mas se for números decimais, o javascript me traria uma cadeia de objetos com o __proto__
```js
/*
    Prototype
    * protoype-based language
    * prototype chain (cadeia de protótipos)
    * __proto__ (propriedade criada que referencia o outro objeto que é ascendente)

*/
```
# Type conversion coersion
```js
    /*
    Type conversion (typecasting) vs Type coersion
    * Alteração de um tipo de dado para outro tipo
    Ex:
    */
   console.log(Number('9')+ 5)

```
*  No console o javascript irá concatenar os valores, para não haver erro na operação. Este é o conversion

# Strings e números
* Manipular strings e números 
* Transformar string em número e número em string
* FUTURO EU, ESSA É BEM SIMPLES
```js
    let string = "123"
    console.log(Number(string))
    let number = 124
    String(number)
```
# Contando carácteres e dígitos
* QUERIDA EU DO FUTURO, ESSA É MAIS SIMPLES AINDA
```js
    let world = "paralelepipedo"
    console.log(world.length)
    //precisáremos converter o número que for um number
    let number = 123
    String(number).length 
```
# Casas decimais
* Tranformar um número quebrado com duas casas decimais e trocar ponto por vírgula
```js
    let number = 304.304950
    console.log(number.toFixed(2).replace(".", ","))
    //transformando um número quebrado com duas casas decimais e trocando o "." por "/" ou qualquer outro caráctere
```
# Maiúsculas e minúsculas
* Transforme as letras minúsculas em maiúsculas, faça o contrário disso também
```js
   //RESPOSTA
    let word = "Programar é muito bacana"
    document.write(word.toUpperCase())
    document.write(word.toLowerCase())
```
# Manipulando arrays e strings
* Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso
* transforme o array em um texto e onde eram espaços coloque _
```js
let phrase = "Eu quero viver o amor"
let myArray = phrase.split(" ")
let underscore = myArray.join("/")
console.log(underscore.toUpperCase())
```
# Encontrando palavras em frases
* Método includes,eu passo como argumento o que eu quero verificar se tem ou não
* O Includes é um case sensitive, ou seja, ele faz diferença entre maiúsculas e minúsculas.
Ex: 
```js
//Método includes, verificando se tem o argumento que eu estou procurando ou não
let frase = "Eu quero aprender a viver"
console.log(frase.includes("viver"))
```
# Criando array com construtor
Neste tópico, eu vi a construção de um array, cadeia de arrays, manipulação do array, array como um objeto do tipo string e desencadenado ele.
 FUTURO EU, CASO ESQUEÇA DESSE CONTEÚDO, SAIBA QUE ELE FOI MUITO FÁCIL DE APRENDER. TAVLEZ O CÓDIGO ESTEJA UM POUCO CONFUSO, MAS A LÓGICA EM SI DAR PRA ENTENDER

# Condição em que a falta do ; faria diferença no javascript
```js
//Essa é uma expressão
    let number = 1;
(function(){
    //O que ele entender por baixo dos panos é que ele está querendo é executar number 1, passar uma função como argumento e ele vai receber de volta uma outra função, por isso daria erro sem o ponto e vírgula(;) na minha variavel
    console.log('alo')
})()

/*Operadores
* Binary
* Unary
* Ternary
*/

//Binary
let number = 1
console.log(number + 1)
//Unary
let number = 1
console.log(++number)
//Ternary
let number = 1
//único caso em que tenho 3 expressões para que se defina alguma coisa no final das contas
console.log( true ? 'alo' : 'nada')
```
* New(Novo objeto)
```js
 // left-hand-side expression
// apenas uma expressão que serve para criar um novo objeto
        let name = new String('Brena') // a String é uma cadeia de caracteres
        name.surName = 'Paiva'
        let age = new Number(22)
        console.log(name.surName, age)
        let date = new Date('2022-12-07')
        console.log(date)
```
# Typeof delete
* Operadores unários
```js
    
const pessoa ={
    name: 'Brena',
    color: 'red',
    tom: 25
}   
    //meu delete deleta a propriedade do meu objeto, desde que ela exista é claro
        delete pessoa.color
console.log(pessoa)
```
# Operadores aritiméticos

* Multiplicação
```js
    console.log(3 * 15.5)
```
* Divisão
```js
    console.log(12/2)
```
* Soma
```js
    console.log(34 + 67)
```
* Subtração
```js
    console.log(3 - 15)
```

* Resto da divisão
```js
   let remainder
   remainder = 11 % 3
   console.log(remainder)
```
* Incremento
```js
   let increment = 0
   increment++
   console.log(increment)
```
* Decremento
```js
   //funciona igual o outro
   let decrement = 0
   console.log(--decrement)
```
* Exponencial
```js
    console.log(3 ** 3)
```
### Grouping operator
```js
    let total = (2 + 3) * 5
    console.log(total)
``` 
## Operadores de comparação
* Igual a e diferente de
```js
    1
let two = 2
 // == igual a
 console.log(two == 2)
 console.log(one == "1")
 // != diferente de
 console.log(one != two)
 console.log(one != 1)
 console.log(one != "1")
```
### Operadores de comparação estritamente igual a e estritamente diferente
```js
    let one = 1
    let two = 2
    // === estritamente ou seja, completamente igual a
    console.log(one === "1") //este campo será falso
    console.log(one === 1) //este campo será verdadeiro
```
* Quando adicionamos um número string "1" e concatena ele + com um número que não é string 1, o javascript vai entender que eu quero juntar os número e logo ele não será somado, seu valor será 11

```js
    // !== estritamente diferente de 
    console.log(two !== "2") // true (este campo pe verdadeiro porque o nosso número não é uma string)
    console.log(two !== 2) //false
```
### Operadores lógicos
```js
//Operadores lógicos
    let pao = false;
    let queijo = false;

    // AND &&
     console.log(pao && queijo)
    //OR ||
     console.log(pao || queijo)

    //NOT !
    // como se fosse uma lampada, liga/desliga
    console.log(!pao)
```
###  Falsy e truthy
    * Falsy: quando um valor é considerado false em contextos onde um booleano é obrigatório(condicionais e loops)

    ```js
    false
    0
    -0
    ""
    null
    undefined
    NaN

    console.log(true ? 'verdadeiro' : 'falso')
    ```
    * Truthy: Quando um valor é considerado true em contextos onde um booleno é obrigatório(condicionais e loops)

    ```js
    true
    []
    {}
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

    console.log({} ? 'verdadeiro' : 'falso')
    ```
## Controle de fluxo da aplicação
```js

    //  if e else
    //básico
    let temperature =  36.9;
    let hightTemperature = temperature >= 38.5
    let mediumTemperature = temperature >= 37  

    if(hightTemperature){
        console.log('febre alta')
    }else if(mediumTemperature){ 
        console.log('febre moderada')
    }else{
        console.log('Saudavel')
    }

    //switch
    //dar para criar muitos casos dependendo da necessidade
    //calculadora
     function calculadora(number1, operator, number2){
       let result 
        switch(operator){
            case '+': 
            result = number1 + number2
            break
            case '-': 
            result = number1 - number2
            break
            case '/': 
            result = number1 / number2
            break
            case '*': 
            result = number1 * number2
            break  
            default:
            console.log('não implementado')
            break   
        }

       return result
     }

     console.log(calculadora(9, '%', 9))    

```

## Throw e try catch
```js
//  throw(disparar ou lançar) e try(tentar) catch(pegar)
    function sayMyName(name ='Brena'){
        if(name === ''){
            throw 'Nome é obrigatório'
        }

        console.log(name)
    }
        
    try{
        //função de erro
        sayMyName()
    }catch(e){
        //captura do erro
        console.log(e)
    }

    console.log('após ao try catch  ')
```