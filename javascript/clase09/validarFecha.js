// pistas
// funciones, .trim(), .length, for, >, <, &&, ==, !=, palabra[index] ejemplo

// fechaEsCorrecta(fecha, fechaDeValidacion)
// function fechaEsCorrecta(fecha, fechaDeValidacion) {
//   // sanitizar / normalizar
//   const fechaSinEspacios = fecha.trim();
//   const fechaDeValidacionSinEspacios = fechaDeValidacion.trim();
//   if (fechaSinEspacios == fechaDeValidacionSinEspacios) {
//     return true;
//   }
//   if (dameElAnio(fechaSinEspacios) < dameElAnio(fechaDeValidacionSinEspacios)) {
//     return true;
//   } else {
//     if (dameElMes(fechaSinEspacios) < dameElMes(fechaDeValidacionSinEspacios)) {
//       return true;
//     } else {
//       if (dameElDia(fechaSinEspacios) < dameElDia(fechaDeValidacionSinEspacios)) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// Refactoring
function fechaEsCorrecta(fecha, fechaDeValidacion) {
  const fechaSinEspacios = fecha.trim();
  const fechaDeValidacionSinEspacios = fechaDeValidacion.trim();

  if (fechaSinEspacios == "" || fechaDeValidacionSinEspacios == "") {
    return false;
  }

  if (fechaSinEspacios == fechaDeValidacionSinEspacios) {
    return true;
  }

  if (dameElAnio(fechaSinEspacios) < dameElAnio(fechaDeValidacionSinEspacios)) {
    return true;
  } else {
    if (dameElMes(fechaSinEspacios) < dameElMes(fechaDeValidacionSinEspacios)) {
      return true;
    } else {
      if (dameElDia(fechaSinEspacios) < dameElDia(fechaDeValidacionSinEspacios)) {
        return true;
      }
    }
  }

  return false;
}

function dameElDia(fecha) {
  return fecha.split("-")[2]; // => ["2022", "10", "12"] => 0,1,2
  // let dia = "";
  // for (let index = 8; index < 10; index++) {
  //   const caracterActual = fecha[index];
  //   dia = dia + caracterActual;
  // }
  // return dia;
}

function dameElMes(fecha) {
  return fecha.split("-")[1];
  // let mes = "";
  // for (let index = 5; index < 7; index++) {
  //   const caracterActual = fecha[index];
  //   mes = mes + caracterActual;
  // }
  // return mes;
}

// dameElAnio -> "yyyy-mm-dd"
function dameElAnio(fecha) {
  return fecha.split("-")[0];
  // "2022-10-08" => el anio son los primeros cuatro caracteres => 2022
  // let anio = ""; // declarando y asignando el valor vacio a la variable anio.
  // for (let index = 0; index < 4; index++) {
  //   const caracterActual = fecha[index];
  //   anio = anio + caracterActual;
  //   // primera pasada/iteracion/vuelta
  //   // const caracterActual = "2022-10-08"[0]; => "2"
  //   // anio = "" + "2"; => "2"
  //   // anio = "2"
  //   // segunda pasada/iteracion/vuelta
  //   // const caracterActual = "2022-10-08"[1]; => "0"
  //   // anio = "2" + "0";
  //   // anio = "20"
  //   // tercera pasada/iteracion/vuelta
  //   // const caracterActual = "2022-10-08"[2]; => "2"
  //   // anio = "20" + "2";
  //   // anio = "202"
  //   // cuarta pasada/iteracion/vuelta
  //   // const caracterActual = "2022-10-08"[3]; => "2"
  //   // anio = "202" + "2";
  //   // anio = "2022"
  // }
  // return anio;
}
// "2022-10-08"[5]
// console.log(dameElAnio("2022-10-08"));

// fechaEsCorrecta("2023-10-29", "2022-10-05"); => false
console.log("La fechaEsCorrecta tiene que dar FALSE cuando el primer parametro de la función es una fecha que tiene el anio mayor al segundo y nos dío: ", fechaEsCorrecta("2023-10-29", "2022-10-05"));

// fechaEsCorrecta("2000-10-29", "2022-10-05"); => true
console.log("La fechaEsCorrecta tiene que dar TRUE cuando el primer parametro de la función es una fecha que tiene el anio menor al segundo y nos dío: ", fechaEsCorrecta("2000-10-29", "2022-10-05"));

// fechaEsCorrecta("", "2022-10-05"); => false
console.log("La fechaEsCorrecta tiene que dar FALSE cuando el primer parametro de la función es una fecha vacia", fechaEsCorrecta("", "2022-10-05"));

// fechaEsCorrecta("2022-11-05", "2022-10-05"); => false
console.log("La fechaEsCorrecta tiene que dar FALSE cuando el primer parametro de la función es una fecha que tiene el mismo anio pero mayor mes", fechaEsCorrecta("2022-11-05", "2022-10-05"));

// fechaEsCorrecta("2022-11-05", "2022-12-05"); => true
console.log("La fechaEsCorrecta tiene que dar TRUE cuando el primer parametro de la función es una fecha que tiene el mismo anio pero menos mes", fechaEsCorrecta("2022-11-05", "2022-12-05"));

// fechaEsCorrecta("2022-11-05", "2022-11-06"); => true
console.log("La fechaEsCorrecta tiene que dar TRUE cuando el primer parametro de la función es una fecha que tiene el mismo anio y mes pero menor dia", fechaEsCorrecta("2022-11-05", "2022-11-06"));

// fechaEsCorrecta("2022-10-05", "2022-10-05"); => true
console.log("La fechaEsCorrecta tiene que dar TRUE cuando el primer parametro de la función es una fecha que es igual a la otra", fechaEsCorrecta("2022-10-05", "2022-10-05"));

// fechaEsCorrecta("2022-10-05                ", "2022-10-05"); => true
console.log("La fechaEsCorrecta tiene que dar TRUE cuando el primer parametro de la función es una fecha que es igual a la otra", fechaEsCorrecta("2022-10-05                ", "2022-10-05"));

// fechaEsCorrecta("                                2023-10-29", "2022-10-05"); => false
console.log("La fechaEsCorrecta tiene que dar FALSE cuando el primer parametro de la función es una fecha que tiene el anio mayor al segundo y nos dío: ", fechaEsCorrecta("                                2023-10-29", "2022-10-05"));

// fechaEsCorrecta("2022-10-09", ""); => false
console.log("La fechaEsCorrecta tiene que dar FALSE cuando el segundo parametro de la función es una fecha vacia", fechaEsCorrecta("2022-10-09", ""));