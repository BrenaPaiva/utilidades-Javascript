//Crie uma função que receba uma string em celsius ou farenheint e faça a conversão
// F = C * 9/5 + 32
// C = (F - 32) * 5/9;

function transform(degree){
    const celsiusExist = degree.toUpperCase().includes("C");
    const farenheintExist = degree.toUpperCase().includes("F");

        //erro    
    if(!celsiusExist && !farenheintExist){
        throw new Error("Grau inválido");
    }
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));

    let formula = (farenheint) => (farenheint - 32) * 5/9;
    let degreeSign = 'C'

    if(celsiusExist){
        updatedDegree =  Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32;
        degreeSign = 'F';
    }

    return formula(updatedDegree) + degreeSign;    
 }

try{
     console.log(transform('50f'))
     console.log(transform('50C'))
    //  console.log(transform('30C'))
     transform('50G')
}catch(e){
 console.log(e.message);

}

transform()