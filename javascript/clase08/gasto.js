function dameElMonto() {
  return window.document.querySelector("#monto");
}

function dameLaDescripcion() {
  return window.document.querySelector("#descripcion");
}

function dameElFormulario() {
  return window.document.querySelector("form");
}

function ponerMontoEnLaDescripcion(elNuevoValor) {
  descripcion.value = elNuevoValor;
}

function montoListener(evento) {
  const monto = evento.target;
  ponerMontoEnLaDescripcion(monto.value);
}

// function elMontoEsCorrecto(valor) {
//   if (valor >= 1) {
//     // si es verdadero vengo aca
//     return true;
//   } else {
//     // si no es verdadero vengo aca
//     return false;
//   }
// }

// function elMontoEsCorrecto(valor) {
//   if (valor >= 1) {
//     // si es verdadero vengo aca
//     return true;
//   }
//   return false;
// }

function elMontoEsCorrecto(valor) {
  return valor >= 1; // true o false
}



// testing
// elMontoEsCorrecto(0) => false
// elMontoEsCorrecto(1000) => true
// elMontoEsCorrecto(-1000) => false
// elMontoEsCorrecto(50) => true

// console.log("este me tiene que dar: false", elMontoEsCorrecto(0))
// console.log("este me tiene que dar: true", elMontoEsCorrecto(1000))
// console.log("este me tiene que dar: false", elMontoEsCorrecto(-1000))
// console.log("este me tiene que dar: true", elMontoEsCorrecto(50))

// p && q
// p || q
// !p && q
// !true => false
// !false => true

// Definicion o declaracion de funcion
function mostrarElErrorEnElMonto(elementoMonto) {
  const error = window.document.createElement("p");
  error.textContent = "Hay un error, tiene que ser mayor que cero";
  elementoMonto.insertAdjacentElement("afterend", error);
}
// monto tiene que ser mayor o igual a uno
function validarMonto(evento) {
  evento.preventDefault();
  const formulario = evento.target;
  const valor = formulario.elements.montoAAgregar.value;
  const elValorEsCorrecto = elMontoEsCorrecto(valor);
  if (!elValorEsCorrecto) {
    // usando la funcion que definimos arriba
    // la informacion que la funcion necesita se la pasamos por POSICION
    // mostrarElErrorEnElMonto(posicion0, posicion1, posion2, ..., ultima posicion)
    mostrarElErrorEnElMonto(formulario.elements.montoAAgregar);
  }
}

function dameLosCaracteresDe(palabra) {
  // trim => nos devuelve un nuevo string sin los espacios en blanco de adelante y atras
  // "     hola          ".trim() => "hola"
  // "     hola joaco         ".trim() => "hola joaco"
  return palabra.trim().length;

  // return palabra.length;
  // let contador = 0;
  
  // // famoso FOR
  // for (let index = 0; index < palabra.length; index++) {
  //   contador = contador + 1;
  //   console.log(palabra[index]);
  // }
  
  // return contador;
}


// descripcion tiene que tener entre 1 caracter y 10 caracteres pero que no sean todos espacios (tweet)
function laDescripcionEsCorrecta(descripcion) {
  const cantidadCaracteres = dameLosCaracteresDe(descripcion);
  return cantidadCaracteres > 1 && cantidadCaracteres < 10;
  // 1 < dameLosCaracteresDe(descripcion) < 10
  // return dameLosCaracteresDe(descripcion) > 1 && dameLosCaracteresDe(descripcion) < 10
  // return descripcion != "";
}
// ==
// !=

// casos de prueba
// laDescripcionEsCorrecta("") => false
// laDescripcionEsCorrecta("fibertel") => true
// laDescripcionEsCorrecta("Lorem ipsum dolor sit") => false
// laDescripcionEsCorrecta("       ") => false

// console.log("este me tiene que dar: false", laDescripcionEsCorrecta(""))
// console.log("este me tiene que dar: true", laDescripcionEsCorrecta("fibertel"))
// console.log("este me tiene que dar: false", laDescripcionEsCorrecta("Lorem ipsum dolor sit"))
// console.log("este me tiene que dar: false ", laDescripcionEsCorrecta("       "))

function mostrarElErrorEnElDescripcion(elementoDescripcion) {
  const error = window.document.createElement("p");
  error.textContent = "Hay un error, la descripcion tiene que tener entre 1 y 10 caracteres";
  elementoDescripcion.insertAdjacentElement("afterend", error);
}

function mostrarError(texto, elemento) {
  const error = window.document.createElement("p");
  error.textContent = texto;
  elemento.insertAdjacentElement("afterend", error);
}

function validarFormulario(evento) {
  evento.preventDefault();
  const formulario = evento.target;

  const elementoMonto = formulario.elements.montoAAgregar;
  const valorDelMonto = elementoMonto.value;
  const mensajeErrorMonto = "Hay un error, tiene que ser mayor que cero";
  if (!elMontoEsCorrecto(valorDelMonto)) {
    // usando la funcion que definimos arriba
    // la informacion que la funcion necesita se la pasamos por POSICION
    // mostrarElErrorEnElMonto(posicion0, posicion1, posion2, ..., ultima posicion)
    mostrarError(mensajeErrorMonto, elementoMonto);
  }

  const elementoDescripcion = formulario.elements.descripcion;
  const valorDeLaDescripcion = elementoDescripcion.value;
  const mensajeErrorDescripcion = "Hay un error, la descripcion tiene que tener entre 1 y 10 caracteres";
  if (!laDescripcionEsCorrecta(valorDeLaDescripcion)) {
    // mostrar el error de la descripcion
    // mostrarElErrorEnElDescripcion(formulario.elements.descripcion);
    mostrarError(mensajeErrorDescripcion, elementoDescripcion);
  }
}

const monto = dameElMonto();
const descripcion = dameLaDescripcion();
monto.addEventListener("change", montoListener);

// reaccionar al click del boton agregar
// y cuando eso pase => validar que el monto sea correcto
const formulario = dameElFormulario();
formulario.addEventListener("submit", validarFormulario);


// fecha tiene que ser menor o igual a hoy

// mostrar los errores para cada uno

// tarea
// crear funcion llamada fechaEsCorrecta que va a recibir una fecha y nos va a dar true si la fecha es anterior a un dia o false si no lo es
// valor de la fecha, es año mes dia

// casos de prueba:
// fechaEsCorrecta(fecha, fechaDeValidacion)
// fechaEsCorrecta("2000-10-29", "2022-10-05"); => true
// fechaEsCorrecta("2023-10-29", "2022-10-05"); => false
// fechaEsCorrecta("", "2022-10-05"); => false
// fechaEsCorrecta("2022-11-05", "2022-10-05"); => false
// fechaEsCorrecta("2022-10-05", "2022-10-05"); => true

// pistas
// funciones, .trim(), .length, for, >, <, &&, ==, !=, palabra[index] ejemplo





















