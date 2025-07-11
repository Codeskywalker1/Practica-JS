let miNumero = "10";
let edad = Number(miNumero); //funcion para cambiar string a numero
console.log(typeof edad);

if (edad >= 18){ 
    console.log("Es mayor de edad");
}
else{
    console.log("Es menor de edad");
}

//Solucion con operador ternario
let mensaje = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje);

//funcion 'isNaN()' nos indica con true o false si el valor es un numero 