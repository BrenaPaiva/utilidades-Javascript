//Tranformar notas escolares.
/**
 * Crie um algoritmo que trasnforme as notas do sistema numérico para sistema 
 * de notas em carácteres em carácteres do tipo A B C 
 * 
 * De 90 para cima  - A
 * Entre 80 e 89 - B
 * entre 70 e 79 - C
 * entre 60 e 69 - D
 * menor que 60 - F 
 */
////////ABAIXO A MINHA PRIMEIRA TENTATIVA//////////

// function getNota(notaAluno) {
//     let notaA = 90;
//     let notaB = 89;
//     let notaC = 70;
//     let notaD = 60;
//     let notaF = 60

//     if (notaAluno >= notaA && notaAluno <= 100) {
//         console.log(`Parabéns, nota A ${notaAluno}`)
//     } else if (notaAluno >= notaB) {
//         console.log(`Voce foi bem, nota B ${notaAluno}`)
//     } else if (notaAluno >= notaC) {
//         console.log('Voce foi bem, mas pode melhorar. Nota C')
//     } else if (notaAluno >= notaD) {
//         console.log('O esforço é o segredo do sucesso, nota D. Não se desanime')
//     } else if (notaAluno < notaF && notaAluno >= 0) {
//         console.log('voce está reprovado, nota F')
//     }
//     else {
//         console.log('nota invalida')
//     }
// }

// console.log(getNota(70));


//////////////////////////////*FORMA SIMPLIFICADA*////////////////////////


function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;
    if (scoreA) {
        scoreFinal = 'nota A'
    } else if (scoreB) {
        scoreFinal = 'nota B'
    } else if (scoreC) {
        scoreFinal = 'nota C'
    } else if (scoreD) {
        scoreFinal = 'nota D'
    } else if (scoreF) {
        scoreFinal = 'nota F'
    } else {
        console.log('score invalido')
    }
    return scoreFinal;
}
let Alunos = {
    name:'Maik', nota: 42,
    name1:'Francielly', nota1: 42,
    name2:'Mickael',nota2: 69,
    name3:'Ana Luiza',nota3: 75,
    name4:'Maria Braga',nota4: 82,
    name5:'Victor Freitas', nota5: 94

}
console.log(` ${Alunos.name1}, sua nota é ${getScore(Alunos.nota1)}`)
console.log(` ${Alunos.name2}, sua nota é ${getScore(Alunos.nota2)}`)
console.log(` ${Alunos.name3}, sua nota é ${getScore(Alunos.nota3)}`)
console.log(` ${Alunos.name4}, sua nota é ${getScore(Alunos.nota4)}`)
console.log(` ${Alunos.name5}, sua nota é ${getScore(Alunos.nota5)}`)

