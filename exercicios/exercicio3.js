function transform(degree){
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    if(!celsiusExists && !fahrenheitExists){
        throw new Error("Celsius or Fahrenheit must be entered");
    }
    //fluxo ideial, F > C
    let updatedDegree = degree.toUpperCase().replace("F", "");

    let formula = farenheit => (farenheit - 32) * 5/9
    let degreeSign = 'C'

    return formula(updatedDegree) + degreeSign
}
try{
    transform('50F');
    transform('50Z');
}catch(e){
    console.log(e.message);

}

transform()