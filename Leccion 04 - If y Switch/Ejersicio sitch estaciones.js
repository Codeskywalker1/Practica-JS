let mes = 4;
let estacion = "Estacion desconocida";

switch (mes) {
    case 1: case 2:  case 12:
        estacion = "Invierno";
        break;
    case 3: case 4:  case 5:
        estacion = "Invierno";
        break;
    case 6: case 7:  case 8:
        estacion = "Invierno";
        break;
    case 9: case 10: case 11:
        estacion = "Invierno";
        break;
    default:
        break;
}

console.log(estacion)