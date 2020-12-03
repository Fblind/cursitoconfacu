# Clase 2

- https://revealjs.com/

- repaso general y QA
- comments
- variables (const, let, var, hoisting)
- tipos de datos o primitivas, valores y referencias ?

## Comentarios (Commnents)

Esto lo comentamos la semana pasada pero lo vamos a ver un poco más, es un concepto que ya conocen pero quiero hacer hincapie en un par de cosas.
Los comentarios son **partes del código que no van a hacer evaluadas** ni ejecutadas por nuestro entorno de ejecución. Nos pueden servir pero mi recomendación es no tener muchos de estos comentarios en nuestro código, lo podemos utilizar para poner un comentario del porqué de una decisión, como una forma de representar que tenemos que hacer algo y lo agregamos temporalmente (el famoso `// TODO: hacer esto!`) o simplemente si queremos probar qué pasa si no ejecutamos ciertas lineas de nuestro código, pero no mucho más.

> Deberías tener pocos comentarios en tu código, tu **código mismo y los tests deberían ser los que te muestran la utilización del sistema**.

En JavaScript tienen dos formas, **comentario de una line o oneline comment** y **comentario de multiples lineas o multiline comment**.

### Comentario de una linea (oneline comment)

```javascript
// Esto es un comentario de una linea
// Esto es otro comentario de una linea
// Esto es otro comentario más de una linea y asi como los anteriores este tampoco se va a ejecutar.
```

### Comentario de una multiples lineas (multiline comment)

```javascript
/* 
  Con el `/*` comienza el comentario de multiples lineas
  donde podes escribir las lineas que quieras hasta que lo cierres
 */
```

## Values

- Un valor es algo que nosotros definimos, por ejemplo si algo es gratis podes decir que sale **$0 o que es gratis**, si tenes una promocion podes decir que tenes un **2\*1 o las dos al %50**, o si te digo vamos a tomar una birra? vos me decis **si o no**.
- En programación Some values are numbers, some values are pieces of text, some values are functions, and so on y a esto es lo que le llamamos **tipos de datos**, las diferentes _representaciones que un valor puede tomar_.
- Valores que estan **directamente incluidos en el codigo los llamamos valores literales** como "hola" o 1 o true. diferente de const a = 2; a es un valor pero no literal.

> JavaScript tiene **valores tipados no variables tipadas**

## Tipos de datos

> Aca más teorico y en las variables mostrar bien !!1

- SON **representaciones que un valor puede tomar**
- Variable caja para guardar algo, lo vamos a ver más adelante

- Es debilmente tipado, lo que quiere decir es que las **variables no estan asociadas con un tipo de dato de por vida**
- **Pueden modificar sus valores en el tiempo**, por ejemplo una variable que al principio era un numero dsp puede convertirse en una palabra.
- A su vez tambien se dice que es debilmente tipado xq tiene una **representacion de tipos (o primitivas) muy pequeñas**, un tipo de dato es Number, pero en otros lenguajes number es un conjunto que tiene varios otros que tienen reglas especificas, como float, integer, long, etc etc.
- El tipo de las variables se tiene en un modo **pseudo dinamico, quiere decir que toma el tipo de dato mediante la asignacion**.

> MOSTRAR FORMA DE ESCRIBIR, comentar convencion de escritura importante para el proyecto.

- number => para valores **numericos** positivos negativos, decimales, infinity bigint, -0, 0, +infitinty
- string => para valores **alfanumericos**
- boolean => **true o false**
- object => representacion que querramos siguiente **key-value pair** (array y funciones tmb subtypes)
- null => representa **algo vacio**, typeof bug que da "object"
- undefined => representa algo que **todavia no esta definido**
- symbol (esnext) => no tiene literal form, representar un **string que no puede ser duplicado**

- PRIMITIVOS => **No metodos ni propiedades, inmutables**
- Ahora voy a mostrar como una variable puede mutar y lo que deciamos de que era pseudo dinamico
- comentar que asi se declara una variable y las dos sentencias juntas
- typeof (string representativo, MOSTRAR BUG NULL!)

- Como vimos una variable puede cambiar sus valores, pero cual es el concepto y quien y como se hace ?
- coercion
  => como elige el compilador que tipo de datos es cada valor ?
- change types (ejemplo string y NaN)

https://youtu.be/AWfA95eLdq8
https://eloquentjavascript.net/00_intro.html

## Variables

> Piola la forma de mostrar en dibujitos!, decirla especialmente para const y objects !

- Cajas que nos sirven para guardar **valores o referencias** (referencias lo vamos a ver en el futuro), ponerle un **nombre** representativo (etiquetarlo) y luego **usarlo** con ese nombre donde querramos.
- **"posiciones de memoria"** en la computadora.
- Los nombres se consideran validos si start with a-z, A-Z, $, or \_. It can then contain any of those characters plus the numerals 0-9.
- Se acostumbra a escribirlo en **camelCase** al igual que todo el codigo js
- Hay tres momentos en la vida de una variable:

  - **declaracion**
  - **inicializacion** (u asignacion)
  - **uso**
  - a veces **re-assignacion**

- **Declaracion**:

  - Difieren por scopes (**lugares donde vamos a poder usar y leer nuestra variable**)

  - **var** (function scope o global si estas por fuera de todo) => re asignacion

    > COMENTAR EL OPERADOR DE ASIGNACION
    > => ejemplo

    ```javascript
    // function scope, global scope si pensamos como si el file seria una funcion
    function lala() {
      var gratis = 10;
      console.log(gratis);
      // nested scope ?
    }
    console.log(gratis);

    // re asignacion
    var gratis = 0;
    var gratis;
    gratis = 0;
    gratis = 10;

    // hoisting
    //   => declaracion y asignacion 2 cosas aunque parezcan una (volver a decir lo de arriba)
    //   => function declaration si, function expression no !
    a = 2;
    var a;
    console.log(a);

    console.log(a);
    var a = 2;
    ```

  - **let** (block scope) => re assignacion, los lenguajes son block scope por lo gral.
    => ejemplo

    ```javascript
    // block {}
    {
      let hola = "hola";
      console.log(hola);
    }
    console.log(hola);

    // block comunes => function, if,
    if (true) {
      let acavive = "vive";
      acavive = "muere";
    }
    console.log(acavive);
    ```

  - **const** (block scope) => not re asignacion
    => ejemplo

  ```javascript
  // igual pero con const mostrar error
  ```

  - nada (es5 y browsers) (global function scope)

> TDZ
> => **let y const son hoisting pero sin valor, acceder a referenceerror, lugar hasta que se declara**

```javascript
console.log(aVar); // undefined
console.log(aLet); // causes ReferenceError: aLet is not defined
var aVar = 1;
let aLet = 2;

let aLet;
console.log(aLet); // undefined
aLet = 10;
console.log(aLet); // 10

let x = "outer value";
(function () {
  // start TDZ for x
  console.log(x);
  let x = "inner value"; // declaration ends TDZ for x
})();
```

https://youtu.be/JNIXfGiDWM8
https://youtu.be/EQMPAaAo6Fc

## Projects

- https://50reactprojects.com/
- javascript30
- traversy media 20 projects
- workshop kentc

## Links

- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20%26%20going/ch2.md#values--types
- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20&%20grammar/README.md#you-dont-know-js-types--grammar
- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch1.md (types)
- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md (values)
- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch4.md (coercion)
- https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/1-data-types/README.md (doodle)
- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch4.md (hoisting)
- la cocina del codigo
- caracterres especiañes escapado

## Ejercicios

- https://github.com/kentcdodds/es6-workshop/blob/master/exercises/01_block-scoping.test.js
- algunos de ada
- loco pen ?

## Next clase => operadores

- truthy and falsy values ("", 0, false, null, undefined)
