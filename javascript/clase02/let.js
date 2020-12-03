// let

let joaqui; // declacion
joaqui = "joaqui"; // asignacion
let vale = "vale"; // declaracion y asignacion en la misma linea
vale = "vale2"; // reasignacion

// Alcance (alcance de bloque)
// {
//   // esto es un bloque (espacio entre una llave y otra)
//   console.log("aca estoy adentro de un bloque");
//   console.log("aca sigo adentro de un bloque");
//   console.log("y aca sigo sigo sigoooo !");
//   // aca termina el bloque
// }

// {
//   let saludo = "hola";
//   console.log(saludo);
// }

// console.log(saludo);

{
  let lala = "lala";
  {
    console.log(lala);
  }
}

function hola() {
  console.log("voy a ejecutar la funcion hola");
  if (true) {
    var facu = "facu";
    let joaco = "joaco";
  }
  console.log(facu);
  console.log(joaco);
}

hola();
