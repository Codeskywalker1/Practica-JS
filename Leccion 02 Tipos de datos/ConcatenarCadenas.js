var nombre = "Miguel"
var apellido = "Garcia"

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Kenia" + " " + "Gonzalez";
console.log(nombreCompleto2);

var x = nombre + 219; //al encontrar primero una cadena los trata a ambos como cadenas
console.log(x);

x = nombre + 2 + 4; //otro ejemplo de concatenación
console.log(x);

x = nombre + (2 + 4); //en este caso hace la suma por los parentesis y lo concatena con el nombre
console.log(x);

x= 2 + 4 + nombre;
console.log(x);