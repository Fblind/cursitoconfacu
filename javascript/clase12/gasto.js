const listaDeGastos = [];

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

// tipo => puede ser error o exito
function mostrarMensaje(texto, elemento, tipo) {
  const elementoMensaje = window.document.createElement("p");
  elementoMensaje.textContent = texto;
  elementoMensaje.classList.add(tipo);
  elemento.insertAdjacentElement("afterend", elementoMensaje);
}

function mostrarError(texto, elemento) {
  // un pasamos
  mostrarMensaje(texto, elemento, "error");
}

function mostrarExito(texto, elemento) {
  mostrarMensaje(texto, elemento, "exito");
}

// el numero es del 1 al 31
function rellenarConZeros(numero) {
  if (numero <= 9) {
    // devolve el numero rellenado
    // 1 => "01"
    // el operador +: 
    // funciona para dos tipos de datos: string y number (cadena de texto y numero)
    // cuando es para un string => concatena => "hola" + " " + "mundo" => "hola mundo"
    // cuando es para un number => suma => 0 + 1 => 1
    // cuando uso los dos tipos en la misma operacion => "0" + 1 => "01" o 1

    // en este caso queremos concatenar => "0" + "1" => "01"
    // cuando hay algun string en la operacion todo se transforma en un string entonces concatena (COHERSION de tipos)
    return "0" + numero;
  }
  return numero;
}

function dameLaFechaDeHoy() {
  const ahora = new Date();
  const anio = ahora.getFullYear(); // "=> 2022"
  const mes = rellenarConZeros(ahora.getMonth() + 1); // "=> 10"
  const dia = rellenarConZeros(ahora.getDate()); // "=> 26"
  return anio + "-" + mes + "-" + dia; // => "2022-10-26"
}

function dameLosErrores(elemento) {
  return elemento.querySelectorAll(".error");
}

function dameLosExitos(elemento) {
  return elemento.querySelectorAll(".exito");
}

function eliminameLosElementos(elementos) {
  for (let index = 0; index < elementos.length; index++) {
    const elemento = elementos[index];
    elemento.remove();
  }
}

function limpiarFormulario(formulario) {
  const elementosError = dameLosErrores(formulario);
  const elementosExito = dameLosExitos(formulario);
  if (elementosError.length > 0) {
    eliminameLosElementos(elementosError);
  }
  if (elementosExito.length > 0) {
    eliminameLosElementos(elementosExito);
  }
}

function reiniciarFormulario(formulario) {
  formulario.elements.montoAAgregar.value = "";
  formulario.elements.descripcionAAgregar.value = "";
  formulario.elements.diaAAgregar.value = "";
}

function hayErrores(formulario) {
  // ver dentro del formulario si hay algun elemento que tenga la clase error
  const losErrores = dameLosErrores(formulario);
  return losErrores.length > 0;
}

function crearGasto(formulario) {
  // object literals
  return {
    monto: formulario.elements.montoAAgregar.value,
    fecha: formulario.elements.diaAAgregar.value,
    descripcion: formulario.elements.descripcionAAgregar.value
  };
}

// recibe una lista y un gasto (el que acabamos de crear)
function agregarGasto(lista, gasto) {
  lista.push(gasto);
  // lista.push(123)
  // lista.push("pepito");
}

function esconderFormulario() {
  const formulario = dameElFormulario();
  formulario.style.display = "none";
}

function mostrarGastosVacios(button) {
  const elemento = document.createElement("div");
  elemento.id = "gastos";
  elemento.innerHTML = `
  <div>
    <h2>Todavia no han sido agregado gastos</h2>
  </div>
  `;
  button.insertAdjacentElement("afterend", elemento)
}

function habilitar(selector) {
  const elemento = document.querySelector(selector);
  elemento.removeAttribute("disabled");
}

function mostrarGastos(evento) {
  console.log(listaDeGastos);
  // volver a ver el refactor de habilitar
  habilitar("#agregarGasto");
  evento.target.setAttribute("disabled", "");
  if (listaDeGastos.length === 0) {
    esconderFormulario();
    eliminameLosElementos(document.querySelectorAll("#gastos"));
    mostrarGastosVacios(evento.target);
  }

  // proxima semana => mostrar todos los gastos
}

function mostrarFormularioGasto(evento) {
  evento.target.setAttribute("disabled", "");
  habilitar("#verGastos");
  eliminameLosElementos(document.querySelectorAll("#gastos"));
  const formulario = dameElFormulario();
  formulario.removeAttribute("style");
}

// funcion principal
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

  // pseudo-codigo
  // verificar que no haya errores y si no hay mostrar mensaje de exito !
  if (!hayErrores(formulario)) {
    const texto = "Agregado con exito !!! 🥳";
    const elemento = formulario.querySelector("button");
    mostrarExito(texto, elemento);
    // guardarlo en algun lugar para despues poder verlo
    // ese algun lugar va a ser dentro de una LISTA !!!!
    // [12, "JOAQUIN", "facu"]
    // Crear objectos nosotros {}
    // a lo que quiero llegar, una lista de gastos :
    // [{monto: 12, fecha: "2022-01-01", descripcion: "holis"}]
    const gasto = crearGasto(formulario);
    agregarGasto(listaDeGastos, gasto);
    reiniciarFormulario(formulario);
    setTimeout(() => limpiarFormulario(formulario), 3 * 1000);
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

const verGastos = document.querySelector("#verGastos");
verGastos.addEventListener("click", mostrarGastos);

const agregarGastoBoton = document.querySelector("#agregarGasto");
agregarGastoBoton.addEventListener("click", mostrarFormularioGasto);




















