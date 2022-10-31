function dameElMonto() {
  return window.document.querySelector("#monto");
}

function dameLaDescripcion() {
  return window.document.querySelector("#descripcion");
}

function dameElFormulario() {
  return window.document.querySelector("form");
}

function dameLaFecha() {
  return window.document.querySelector("#dia");
}

function ponerMontoEnLaDescripcion(elNuevoValor) {
  descripcion.value = elNuevoValor;
}

function montoListener(evento) {
  const monto = evento.target;
  ponerMontoEnLaDescripcion(monto.value);
}

function elMontoEsCorrecto(valor) {
  return valor >= 1;
}

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
    mostrarElErrorEnElMonto(formulario.elements.montoAAgregar);
  }
}

function dameLosCaracteresDe(palabra) {
  return palabra.trim().length;
}

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
  return fecha.split("-")[2];
}

function dameElMes(fecha) {
  return fecha.split("-")[1];
}

function dameElAnio(fecha) {
  return fecha.split("-")[0];
}


function laDescripcionEsCorrecta(descripcion) {
  const cantidadCaracteres = dameLosCaracteresDe(descripcion);
  return cantidadCaracteres > 1 && cantidadCaracteres < 10;
}

function mostrarElErrorEnElDescripcion(elementoDescripcion) {
  const error = window.document.createElement("p");
  error.textContent = "Hay un error, la descripcion tiene que tener entre 1 y 10 caracteres";
  elementoDescripcion.insertAdjacentElement("afterend", error);
}

function mostrarError(texto, elemento) {
  const error = window.document.createElement("p");
  error.textContent = texto;
  error.classList.add("error");
  elemento.insertAdjacentElement("afterend", error);
}

function dameLaFechaDeHoy() {
  const ahora = new Date();
  const anio = ahora.getFullYear(); // "=> 2022"
  const mes = ahora.getMonth() + 1; // "=> 10"
  const dia = ahora.getDate(); // "=> 26"
  return anio + "-" + mes + "-" + dia; // => "2022-10-26"
}

function dameLosErrores(elemento) {
  return elemento.querySelectorAll(".error");
}

function eliminameLosElementos(elementos) {
  for (let index = 0; index < elementos.length; index++) {
    const elemento = elementos[index];
    elemento.remove();
  }
}

function limpiarFormulario(formulario) {
  const elementosError = dameLosErrores(formulario);
  if (elementosError.length > 0) {
    eliminameLosElementos(elementosError);
  }
}

function validarFormulario(evento) {
  evento.preventDefault();
  const formulario = evento.target;
  limpiarFormulario(formulario);

  // validar monto
  const elementoMonto = formulario.elements.montoAAgregar;
  const valorDelMonto = elementoMonto.value;
  const mensajeErrorMonto = "Hay un error, tiene que ser mayor que cero";
  if (!elMontoEsCorrecto(valorDelMonto)) {
    mostrarError(mensajeErrorMonto, elementoMonto);
  }
  
  // validar descripcion
  const elementoDescripcion = formulario.elements.descripcion;
  const valorDeLaDescripcion = elementoDescripcion.value;
  const mensajeErrorDescripcion = "Hay un error, la descripcion tiene que tener entre 1 y 10 caracteres";
  if (!laDescripcionEsCorrecta(valorDeLaDescripcion)) {
    mostrarError(mensajeErrorDescripcion, elementoDescripcion);
  }

  // validar fecha
  const elementoFecha = formulario.elements.dia;
  const valorDeLaFecha = elementoFecha.value;
  const mensajeErrorFecha = "Fecha tiene que ser anterior a hoy";
  const hoy = dameLaFechaDeHoy();
  if (!fechaEsCorrecta(valorDeLaFecha, hoy)) {
    mostrarError(mensajeErrorFecha, elementoFecha);
  }
}

function setearMaximoFecha() {
  const hoy = dameLaFechaDeHoy();
  const elementoFecha = dameLaFecha();
  // elementoFecha.max = hoy;
  elementoFecha.setAttribute("max", hoy);
}

setearMaximoFecha();

// reaccionar al click del boton agregar
// y cuando eso pase => validar que el monto sea correcto
const formulario = dameElFormulario();
formulario.addEventListener("submit", validarFormulario);





















