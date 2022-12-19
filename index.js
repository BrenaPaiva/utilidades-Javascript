//Object
//tipo de dado estrutural
//o ex abaixo é o básico do básico da criação de um objeto
// console.log( {
//     nome: "Brena",
//     idade:22,
//     andar:function(){
//         console.log('andar')
//     }
// } )
//Array (Vetores) Agrupamento de dado
    // console.log([
    //     "Brena",
    //     "Freire",

    // ])

    // //Operadores lógicos
    // let pao = false;
    // let queijo = false;

    // // AND &&
    // // console.log(pao && queijo)
    // //OR ||
    // // console.log(pao || queijo)

    // //NOT !
    // console.log(!pao)

    //Operador condicional ternário

    //Café da manhã top
    let bread = true;
    let cheese = false;

    // condição em que o meu pão e queijo deve fazer parte do meu café da manha top, senão, não é top
     const niceBreakfast = bread && cheese ? 'Café top' : 'Não gostei do café'
     console.log(niceBreakfast)

    
     //Maior de 18
     let age = 14
     let canDrive = age >= 18 ? 'Can Drive' : "can't not drive"  
     console.log(canDrive)


    //  if e else
    //básico
    let temperature =  36.9;
    let hightTemperature = temperature >= 38.5
    let mediumTemperature = temperature >= 37  

    if(hightTemperature){
        console.log('febre alta')
    }else if(mediumTemperature){ 
        console.log('febre moderada')
    }else{
        console.log('Saudavel')
    }


    // switch
    //calculadora
     function calculadora(number1, operator, number2){
       let result 
        switch(operator){
            case '+': 
            result = number1 + number2
            break
            case '-': 
            result = number1 - number2
            break
            case '/': 
            result = number1 / number2
            break
            case '*': 
            result = number1 * number2
            break  
            default:
            console.log('não implementado')
            break   
        }

       return result
     }

     console.log(calculadora(9, '+', 9))    


    //  throw(disparar ou lançar) e try(tentar) catch(pegar)
    function sayMyName(name ='Brena'){
        if(name === ''){
            throw 'Nome é obrigatório'
        }

        console.log(name)
    }
        
    try{
        //função de erro
        sayMyName()
    }catch(e){
        //captura do erro
        console.log(e)
    }

    console.log('após ao try catch  ')

    // estruturas de repetição
    //for
    //break - para a execução do loop
    // continue - pula a execução do momento

    // for(i = 100; i > 0; i--){
    //     if(i === 5){
    //         continue;
    //         // break;
    //     }
    //     console.log(i)
    // }

    // while

    let i = 10395;
    // O while vai ficar dividindo até o momento em que o i for maior que 10
    while(i > 10){
        //Quando não sabemos o momento da parada, geralmente usamos o while
        console.log(i);

        i /= 35;
    }

    //for of
    //Criará o loop através de alguma variavel
    let nam = 'Brena';
    let names = ['Ana', 'Maria','Braga']
    for(let name of nam){
        console.log(name)
    }


    //for in
    //Criará um loop em cima de um objeto
    let person = {
        name:  'Ana',
        age: 22,
        wheight: 54.9
    }
    for(let property in person){
        console.log(property)
        console.log(person[property])
    }