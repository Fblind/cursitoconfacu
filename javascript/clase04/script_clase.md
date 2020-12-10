# Clase 4

- repaso clase anterior var, let, const
- functions
- ejercicios (practica variables y functiones con test)

## Functions

- https://www.youtube.com/watch?v=XgKsD6Zwvlc&list=PLlrxD0HtieHhW0NCG7M536uHGOtJ95Ut2&index=37 (functions)
- https://www.youtube.com/watch?v=OP6eEbOj2sc&list=PLlrxD0HtieHhW0NCG7M536uHGOtJ95Ut2&index=39 (arrow)
- https://eloquentjavascript.net/03_functions.html

* Qué son ?, para qué sirven ?, beneficios ?
  - una forma de **identificar varios bloques** de codigos (sentencias) con un nombre y poder ejecutarlos paso a paso.
  - hacen que nuestro codigo sea **reutilizable**, mas **mantenible**, mas **expresivo**, mas **resistente a fallos** y mas **extensible no es la palabra pero que sea dinamico** (explicar por que de cada uno)
  - It gives us a way to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other.
  - buenas practicas:
    - camelCase
    - buenos nombres (no tener miedo de cambiarlos si se nos ocurre uno mejor)
    - funciones cortas y que hagan una sola cosa
* Sintaxis

  - importante procedimientos (aunque en javascript siempre retorna "algo") vs functiones (return value o hacen cosas)
  - efectos de lado
  - reciben args, se le pasan params => que van a hacer el valor incial que va a tomar ese argumento.
  - 2 momentos (def + implementation)
  - optional arguments! más o menos
  - despues del return funcion no sigue
  - valor por defecto
  - funciones son OBJETOS, pueden asignarle propiedades entonces
  - como son OBJETOS => son VALORES => pueden ser pasadas como parametros o retornadas
  - function declaration (hoisting) vs function expresion (not hosting const = function()=>{})
  - arrow function (anonima)

  - recursion! ?
  - higher order function (funciones de orden superior)


  - CLOSURES => This feature—being able to reference a specific instance of a local binding in an enclosing scope—is called closure.
  - Partial application

  ```javascript
  let asd = {
    mensaje: "hola",
  };

  function cambiarIndeseado(que) {
    que.mensaje = "chau";
  }

  console.log(asd);
  cambiarIndeseado(asd);
  console.log(asd);
  ```

## Estructuras de control

### if (operadores)

## Tests
