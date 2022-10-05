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

const monto = dameElMonto();
const descripcion = dameLaDescripcion();
monto.addEventListener("change", montoListener);

// reaccionar al click del boton agregar
// y cuando eso pase => validar que el monto sea correcto
const formulario = dameElFormulario();
formulario.addEventListener("submit", validarMonto);





















