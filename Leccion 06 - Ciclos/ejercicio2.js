//Realizar la suma acumulativa de 1 - 5 y mostrar como se va realizando

let resultadoSuma = 0;

for (let numero = 1; numero < 6; numero++) {

    console.log(`${resultadoSuma} + ${numero}`);
    resultadoSuma += numero;
    
    
     console.log(resultadoSuma);
    
}

console.log(`El resultado de la suma es: ${resultadoSuma}`);