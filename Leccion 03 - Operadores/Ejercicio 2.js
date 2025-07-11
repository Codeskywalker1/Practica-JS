// Ejemplo valor dentro del rango
// Deginimos las variables
let minimo = 0, maximo = 5;

//valor para saber si esta dentro del rango
let dato = 3;

let dentroRango = (dato => minimo) && (dato <= maximo);
console.log( 'Valor dentro del rango: ' + dentroRango);
