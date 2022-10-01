function dameElMonto() {
  return window.document.querySelector("#monto");
}

function dameLaDescripcion() {
  return window.document.querySelector("#descripcion");
}

function ponerMontoEnLaDescripcion(elNuevoValor) {
  descripcion.value = elNuevoValor;
}

function montoListener(evento) {
  const monto = evento.target;
  ponerMontoEnLaDescripcion(monto.value);
}

// selecciono el primer elemento con el id=monto
const monto = dameElMonto();
// const monto = window.document.querySelector("#monto");

// selecciono el primer elemento con el id=descripcion
const descripcion = dameLaDescripcion();
// const descripcion = window.document.querySelector("#descripcion");

// console.log(monto);
// monto.value = "420";
                    // "420"
// descripcion.value = monto.value;
// ponerMontoEnLaDescripcion(monto.value);

// hacer algo cuando el monto grita change
monto.addEventListener("change", montoListener);









// function ponerMontoEnLaDescripcionCadaVezQueSeCambia(monto) {
//   const monto = dameElMonto();
//   monto.addEventListener("change", ponerMontoEnLaDescripcion);
// }

// function ponerMontoEnLaDescripcion(evento) {
//   const descripcion = dameLaDescripcion();
//   descripcion = evento.target.value;
// }

// ponerMontoEnLaDescripcionCadaVezQueSeCambia();







// const a = window.document.querySelector("#monto");
// const b = window.document.querySelector("#descripcion");
// a.addEventListener("change", (evento) => {
//   b.value = evento.target.value;
// });


























