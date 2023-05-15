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
// //Math é um objeto 
// const raio = 5.6
// const area = Math.PI

// console.log(area)

// //String
// const escola = "cod3er"

// console.log(escola.charAt(4))
// console.log(escola.charAt(6))
// console.log(escola.charCodeAt(3))
// console.log(escola.substring(0, 3))

// console.log('Escola '.concat(escola).concat('!'))
// console.log(escola.replace('3', ''))
// //Utilizando regex
// console.log(escola.replace(/\w/g, 'e'))
// console.log('Ana,Maria,Braga'.split('.'))

// //Expressões
// const up = texto => texto.toUpperCase()
// console.log(`Ei...${up('cuidado')}!`)

// //BOOLEAN
// let isAtivo = false
// console.log(isAtivo)

// isAtivo = true;
// console.log(isAtivo);

// isAtivo = 'feliz'
// console.log(!!isAtivo)

// // Os verdadeiros...
// console.log('verdadeiros:')
// console.log(!!3)
// console.log(!!-1)
// console.log(!!' ')
// console.log(!!'texto')
// console.log(!![])
// console.log(!!{})
// console.log(!!Infinity)
// console.log(!!(isAtivo = true))

// //Os falsos:
// console.log('falsos:')
// console.log(!!0)
// console.log(!!'')
// console.log(!!null)
// console.log(!!NaN)
// console.log(!!undefined)
// console.log(!!(isAtivo = false))
// console.log(!!(isAtivo = false))

// console.log('para finalizar...')
// console.log(!!('' || null || 0 || ' '))

// let nome = 'Ana'

// console.log(nome || 'Desconhecido')


// // ARRAY
// const valores = [0.1, 0.2, 4, 4.5]
// console.log(valores[0], valores[3])
// console.log(valores.length)

// valores.push({ id: 3 }, false, null, 'teste')
// console.log(valores);
// // Pega o ultimo valor:
// console.log(valores.pop())
// delete valores[0]
// console.log(valores)
// console.log(typeof valores) // porque todo array é um objeto

// // Null e Undefined
// const a = { name: 'teste' }
// const b = a;
// console.log('Letra b')
// console.log(b)
// console.log('Mudando o valor de b mas chamando a constante de a:')
// b.name = 'Opa'
// console.log(a)
// Os valores armazenados na memório vão para as duas constantes por um estar armazenando na outra seus
//respectivos valores

// um exemplo de undefined:
// let brena
// console.log(brena)
// // vai dar undefined pq a variavel nao tem valor definido, só foi apenas declarada
// let valor = null
//Aqui, ela foi declarada e tem um valor, porém o seu valor é null(vazio)
//Atribuir o nulo apenas quando eu nao quero que ela tenha valor, jamais usar undefined

// Até o object é uma função:

// console.log(typeof Object)

// function imprimirSoma(a, b) {
//   console.log(a + b);
// }
// imprimirSoma(2, 1);
// //console fora da função:
// function soma(a, b = 1) {
//   return a + b
// }
// console.log(soma(2, 5))

// Funções
// Função arrow em uma variavel
// const soma = (a, b) => {
//   return a + b;
// }

// Quando eu nao tenho as chaves de uma função, isso significa que o meu código vai executar apenas em uma única linha.
// const subtracao = (a, b) => a - b; // Se for apenas um parametro, não tem a necessidade de se ter os parenteses.
// console.log(subtracao(2, 3));

//Loops na variavel Let

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log("valor de i:", i);

//Var em loop
const funcs = []

for (var i = 0; 1 < 10; i++) {
  funcs.push(function () {
    console.log("Valor de i:")
    console.log(i)
  })
}
funcs[2]()
funcs[8]()