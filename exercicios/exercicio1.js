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
const notaAluno = "ww";
let notaA = 90;
let notaB = 89;
let notaC = 70;
let notaD = 60;
let notaF = 60

if(notaAluno >= notaA){
    console.log(`Parabéns, nota A ${notaAluno}`)
}else if(notaAluno >= notaB){
    console.log(`Voce foi bem, nota B ${notaAluno}`)
} else if(notaAluno >= notaC){
    console.log('Voce foi bem, mas pode melhorar. Nota C')
}else if(notaAluno >= notaD){
    console.log('O esforço é o segredo do sucesso, nota D. Não se desanime')
}else if(notaAluno < notaF && notaAluno >= 0 ){
    console.log('voce está reprovado, nota F')
}
else{
    console.log('nota invalida')
}


//////////////////////////////*FORMA SIMPLIFICADA*////////////////////////

let score = -58;
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;
if(scoreA){
    scoreFinal = 'A'
}else if(scoreB){
    scoreFinal = 'B'
}else if(scoreC){
    scoreFinal = 'C'
}else if(scoreD){
    scoreFinal = 'D'
}else if(scoreF){
    scoreFinal = 'F'
}else{
    console.log('score invalido')
}

console.log(scoreFinal)