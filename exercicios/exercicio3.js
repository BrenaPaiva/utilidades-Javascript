/////// Celsius em fahrenheit

/*Crie uma função que receba uma string em Celsius ou Farenheit e faça a conversão de uma unidade
para outra 

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/
////////////////EXEMPLO PROFESSOR

function transform(degree){
    const celsiusExist = degree.toUpperCase().includes('C');
    const farenheitExist = degree.toUpperCase().includes('F');

    //Fluxo de erro

    if(!celsiusExist && !farenheitExist){
        throw new Error('Campo Inválido');
    }


    //Fluxo ideal F

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (farenheit) => (farenheit - 32) * 5/9;
    let nomenclatura = 'C'

    //Fluxo alternativo C
    if(celsiusExist){
         updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = (celsius) => celsius * 9/5 + 32;
        nomenclatura = 'F'
}
    // //Fluxo de nomenclatura
    // if(!nomenclatura){
    //     nomenclatura = new Error("Insira um grau válido")
    // }

    return formula(updatedDegree) + nomenclatura

}

    try{
       console.log(transform('50F'));
       console.log(transform('10C'));
       console.log(transform('24C'));
  
    }catch(e){
        // message me trará apenas a mensagem de erro

        console.log(e.message);
    }

transform()












// let Celsius = "23"
// let Faranheit = "23"
// function temperature(){
//     let ConvertCelsius =  (Faranheit - 32) * 5/9;
//     let ConvertFarenheit =  Celsius  * 9/5 + 32;

//     console.log(`Temperatura em Faranheit ${ConvertFarenheit.toFixed(1)}`)
//     console.log(`Temperatura em Celsius ${ConvertCelsius.toFixed(1)}`)
// }
// temperature()