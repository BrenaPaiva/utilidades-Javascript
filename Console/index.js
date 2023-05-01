// var grupo = [1, 2, 3, 4, 5].map(i => {
//     return (i % 2 === 0 ? 'even' : 'odd');
// })
// console.log(grupo)

///NUMBER

// const av1 = 70;
// const av2 = 80;
// const total = av1 + av2 / 3;
// console.log(total.toFixed(2))
// toString 2 converte o valor em binário
// console.log(total.toString(2))

// Alguns cuidados com números em javascript
// console.log("10" / 2)
// console.log(0.1 + 0.7)

//Usando o Math
//Math é um objeto 
const raio = 5.6
const area = Math.PI

console.log(area)

//String
const escola = "cod3er"

console.log(escola.charAt(4))
console.log(escola.charAt(6))
console.log(escola.charCodeAt(3))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace('3', ''))
//Utilizando regex
console.log(escola.replace(/\w/g, 'e'))
console.log('Ana,Maria,Braga'.split('.'))

//Expressões
const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)

//BOOLEAN
let isAtivo = false
console.log(isAtivo)

isAtivo = true;
console.log(isAtivo);

isAtivo = 'feliz'
console.log(!!isAtivo)

// Os verdadeiros...
console.log('verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//Os falsos:
console.log('falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Ana'

console.log(nome || 'Desconhecido')