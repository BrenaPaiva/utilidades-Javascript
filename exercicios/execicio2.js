//////////SISTEMAS DE GASTOS FAMILIAR
/*Crie um objeto que possuirá duas propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá
    mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

/////////////Forma explicada

let familia = {
    receitas: [300.33367],
    despesas: [120, 87, 90, 115, 900]
}



function sum(array){
 let total = 0;
 
 for(let value of array) {
    total += value

 }
 return total 
}

function calcular(){
    const calculaSaldo = sum(familia.receitas)
    const calculaDespesas = sum(familia.despesas)

    const total = calculaSaldo - calculaDespesas

    const itsOk = total >= 0

    let balanceText = "Negativo"
    if(itsOk){
        balanceText = "Positivo"

    }
    console.log(`Seu saldo é R$${total.toFixed(2)}, e ele está ${balanceText}`)
}
calcular()
 


// let familia = {
//     receitas: [300],
//     despesas: [120, 87, 90, 115, 900]
// }


// function sum(array){
//  let total = 0;
 
//  for(let value of array) {
//     total += value

//  }
//  return total 
// }
 
// function calculateBalance(){
//     const calculateIcoms = sum(familia.receitas)
//     const calculateReceitas = sum(familia.despesas)

//     let total = calculateIcoms - calculateReceitas
    
//     if(total >= 0){
//         console.log(`saldo positivo no valor ${total}`)
//     } else {
//         console.log(`saldo negativo no valor ${total}`)
//     }

// }
// calculateBalance()