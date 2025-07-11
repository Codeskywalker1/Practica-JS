let a = 3, b =2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b;
console.log("Resultado de la operación modulo (residuo): " + z);

z = a ** b;
console.log("Resultado del exponente: " + z);

//Incremento
//Pre-incremento ( el operador ++ antes de la variable)

z = ++a; //primero se incremente y luego se asigna
console.log(a);
console.log(z);

//Post-incremento (el operador ++ despues de la variable)

z = b++;
console.log(b);
console.log(z);

//Decremento
//Pre-decremento ( el operador -- antes de la variable)

z = --a; //primero se decrementa y luego se asigna
console.log(a);
console.log(z);

//Post-decremento (el operador -- despues de la variable)

z = b--;
console.log(b);
console.log(z);