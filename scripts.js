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


// Exercícios

// 1. Declare uma variavel do tipo weight
let weight;
//2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float, número quebrado)
    * isSubscribed: Boolean
    *
*/
let student = {
    name:"Brena",
    age: 12,
    weight: 4.5,
    isSubscribed:true
}

console.log(`a ${student.name} tem ${student.age} anos e pesa ${student.weight} kilos`)
//Parei em exercícios
const jhon = {
    name:"Jhon",
    age: 34,
    weight: 77,
    isSubscribed: false
}

students[1] = jhon
console.log(students)
