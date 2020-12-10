// Sintaxis

// DRY: Don't repeat yourself

// funciones tienen dos momentos! (def y ejecucion)

// declaracion o definicion de la funcion (function declaration)
// funcion con "efecto de lado" o procedimiento
function prepararLaPizza(gusto, tipo = "al molde") {
  // argumentos (se definen por posicion, le podemos poner un valor por defecto)

  // cuerpo de la function
  console.log("1. Hacer masa");
  console.log("2. Amasar");
  console.log("3. Dejar levar");
  console.log("4. Poner salsa");
  console.log(`5. Poner ${gusto}`); // 5. Poner muzarella y tomate
  console.log(`6. Cocinar ${tipo}`);
  // return "termino!" // si no hay ningun return, devuelve o retorna undefined
}

// usamos, llamamos o ejecutamos la funcion
// prepararLaPizza();

// parametros (son los valores iniciales que van a tomar los argumentos dentro de la funcion)
// prepararLaPizza("muzarella y tomate");
// prepararLaPizza("provolone", "a la piedra");
// prepararLaPizza(12, "a la piedra"); // sintacticamente correcto pero semanticamente incorrecto

// prepararLaPizza("provolone", 123, 123, 123, 123, 454565656);

// funcion pura
// function declaracion (hoisting)
function sumar(numero, otroNumero) {
  const anioActual = 2020;
  // const anioActual = new Date().getFullYear();
  // return numero + otroNumero + anioActual;
  return numero + otroNumero;
  // console.log("termine de sumar"); // todo lo que viene dsp del return no se ejecuta
  // return undefined; // todas las funciones al final de todo si no tienen un return antes, van a devolver undefined
}

sumar.propiedad = "valor";
// console.log(sumar(2, 2));
// console.log(sumar.propiedad); // "valor"

// let resultadoDosMasDos = sumar(2, 2); // 4
// console.log(resultadoDosMasDos);

// function expression
const sumarExpression = function (numero, otroNumero) {
  return numero + otroNumero;
};

// console.log(sumarExpression(2, 2));

// arrow function (anonymous function expression)
// const sumarArrowFunction = (numero, otroNumero) => numero + otroNumero;
// const sumarArrowFunction = (numero) => numero + 2;
// const sumarArrowFunction = numero => ({ prop: "value" });
// const sumarArrowFunction = (numero, otroNumero) => {
//   console.log("estoy por hacer la suma");
//   return numero + otroNumero;
// };

// console.log(sumarArrowFunction(2, 2));

// Recursividad (recursion)
// Ejecutar la misma funcion en el cuerpo de la definicion.
// Se necesita al menos una condicion de corte.

// function recursiva() {
//   console.log("blablabla")
//   console.log("blablabla")
//   console.log("blablabla")
//   recursiva();
// }

// recursiva();

// Sucesion de fibonacci

// f{0}=0
// 
// f{1}=1
// 
// f{n}=f{n-1}+f{n-2}
function fib(numero) {
  // keyboard if, lo que esta en parentesis se evalua si es true o false, si es true hace lo que esta entre llaves.
  // == es un operador de igualdad, chequea si lo que esta del lado izquierdo es igual a lo que esta en el derecho.
  console.log("ejecutando fib");
  if (numero == 0) {
    return 0;
  }

  if (numero == 1) {
    return 1;
  }

  return fib(numero - 1) + fib(numero - 2);
}

// console.log("resultado de fib(0): ", fib(0)); // 0
// console.log("resultado de fib(1): ", fib(1)); // 1
// console.log("resultado de fib(2): ", fib(2)); // 1
// console.log("resultado de fib(3): ", fib(3)); // 2
// console.log("resultado de fib(8): ", fib(8)); // 21

// Funciones de orden superior (higher order functions)
// Cualquier funcion que recibe como parametro la definicion de una funcion y/o devuelve la definicion de una funcion.


function ordenSuperior(definicionDeFuncion) {
  // return definicionDeFuncion; // el valor que devuelve es la definicion de esa ejecucion, no la ejecuta.
  return definicionDeFuncion(); // el valor que devuelve es el valor que devuelve el hecho de ejecutar la funcion que le pasamos por argumento.
}

const defincionDeHola = () => "hola";
console.log(ordenSuperior(defincionDeHola));

// ordenSuperior(() => console.log("hola"));
