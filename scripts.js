const person = {
    name: 'Ana',
    age: 18,
    weight: 22.3,
    isAdmin: true

}
//buscando somente um tipo de informação dentro do objeto
console.log(person.name)

//Arrays
const animals = [
    'cat',
    'lion',
    {
        name: 'Cat',
        age: 4
    }
]

//Acessar valores dentro do array
console.log(animals)
//Acessando uma propriedade de objeto dentro de um array
console.log(animals[0].name)

// Condição em que a falta do ; faria diferença no javascript
let number = 1;
(function(){
    //O que ele entender por baixo dos panos é que ele está querendo é executar number 1, passar uma função como argumento e ele vai receber de volta uma outra função, por isso daria erro sem o ponto e vírgula(;) na minha variavel
    console.log('alo')
})()

// left-hand-side expression
// apenas uma expressão que serve para criar um novo objeto
let name = new String('Brena') // a String é uma cadeia de caracteres
name.surName = 'Paiva'
let age = new Number(22)
console.log(name.surName, age)
let date = new Date('2022-12-07')
console.log(date)

const pessoa ={
    name: 'Brena',
    color: 'red',
    tom: 25
}   
    //meu delete deleta a propriedade do meu objeto, desde que ela exista é claro
        delete pessoa.color
console.log(pessoa)

/* Operadores de comparação
    * Irá comparar valores e retornar um boolean
*/
let one = 1
let two = 2
 // == igual a
//  console.log(two == 2)
//  console.log(one == "1")
 // != diferente de
 console.log(one != two)
 console.log(one != 1)
 console.log(one != "1")

 // Maior ou menor ou igual a
 let um = 1
 let dois = 2

 console.log(um > dois)
 console.log(um >= 1)
 console.log(dois >= 1)

 // menor que
 console.log(one < two)