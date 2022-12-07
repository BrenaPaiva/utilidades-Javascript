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