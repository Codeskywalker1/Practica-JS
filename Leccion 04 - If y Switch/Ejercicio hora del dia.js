/*
    6am - 11am - Buenos días
    12pm - 18pm - Buenas tardes
    19pm - 24 pm - Buenas noches
    0am - 6am - Durmiendo
*/

let hora = 6;
let mensaje;

if (hora >= 0 && hora < 6 ){
    mensaje="Duemiendo";
}
else if (hora >= 6 && hora <= 11){
    mensaje="Buenas días";
}
else if (hora >= 12 && hora <= 18){
    mensaje="Buenas días";
}
else if (hora >= 19 && hora <= 24){
    mensaje="Buenas días";
}

console.log(mensaje);