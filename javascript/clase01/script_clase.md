# Clase 1

> ! Decir el temario !!!!!!

* Qué es la programación, los programas (o apps) y sus puntos de vista ?
* Paradigmas de programacion
* Javascript: Historia, complejidad, diferencia con lenguajes "tradicionales" y backward compatilibility
* Javascript: "Instalación" y Creación de nuestro primer programa
* Javascript: conceptos generales de nuestro primer programa
* Javascript: expresiones, valores, sentencias, tipos de datos, variables y scope


## Qué es la programación, los programas (o apps) y sus puntos de vista ?
* Explicar intención que la idea no es solo saber usar javascript sino **aprender a programar** y para eso **necesitamos un lenguaje** y como el lenguaje de la web es js vamos con este.

> !Aunque tal vez no sea el más amigable para aprender primero.

* Programación TL;DR: 
  * Es **crear soluciones a diversos problemas** (soluciones === programas, apps)
  * Cosa que usa **recursos de computadora para resolver un problema**

> !Hincapie en la palabra solucion y resolver problema.
> !Computadora cualquier cosa electronica, tal vez mencionar impulsos electricos.

* Puntos de vista:
  * **Usuario**: ve lo lindo, la parte visual, solo la usa, no le importa como esta hecha.
  * **Codigo**: implementacion, como esta hecha, lo que estuvieron viendo con html y css.
    * Es la forma que tenemos para mandar esos impulsos que mencioné antes a la compu. A través de los **lenguajes de programación de alto nivel**.

> !Comentar sobre la **sintaxis** y la **semantica**

## Paradigmas de programación
* Pero cómo hago estas soluciones ?, hay una sola manera ? todos los lenguajes son lo mismo ?
  * NO, los lenguajes se eligen por las necesidades y lo que queremos hacer (en este caso js porque queremos interactuar con el explorador y hacer app web del lado del cliente dinamicas)
  * Tambien tenemos diferentes *formas de pensar la resolucion de estos problemas*. Lo cual vamos a llamar **paradigmas de programación**.
  * Acá vamos a ver **estructurado**, pero hay **funcional, logico, orientado a objetos los mas conocidos**

> !Explicar un poco de cada paradigma.

## Javascript: Historia, complejidad, diferencia con lenguajes "tradicionales" y backward compatilibility

* Primero un poco de historia: 
  * **Brendan Eich** el creador, laburando para **netscape** (guerra contra ms)
  * Idea original meter **scheme** (lenguaje funcional en el browser)
  * Netscape algo mas **C o Java** que eran los lenguajes mas conocidos en ese momento. Entonces la sintaxis parecida.
  * MS saca una version pero bastante diferente por lo que habia que **cambiar el codigo entre browsers**.
  * Por esto se hace estandar **ECMA** que todos los que creen su entorno javascript deben cumplir esas condiciones.
  * Este es un **estandar vivo defindo por la TC39**.

* Complejidad y "exentricidades" de JS 
  * No es un lenguaje que se compile al principio como Java
  * No es un lenguaje que te obligue a elegir un tipo de dato y lo chequee para cada cosa.
  * Al tener cosas de Scheme y Java es multiparadigma (funcional y objetos) manejando la herencia de una manera diferente usando herencia prototipada.
  * Como fue creado para qe ande en los exploradores y la web tiene millones de años, tiene que ser **backward compatible**. (Por eso hay tantas formas de escribir las cosas)
  * Maneja el asynchronismo de una manera "especial", ya que no tiene hilos de ejecucion, sino que tiene uno solo.


## Javascript: "Instalación" y Creación de nuestro primer programa

* Instalacion
  * Los lenguajes por lo general necesitan que la computadora tenga instalado el **lenguaje y un entorno necesario para la ejecucion** (VMs, compilers, etc)
  * El entorno donde corremos JS => **Browser** o **NodeJS**.

* Primer programa:
  * Explicar consola de chrome (about:blank)
  * `console.log("Hola" + "Mundo");`

## Javascript: conceptos generales de nuestro primer programa

> ! Demostrar que pasan muchas cosas en esta simple linea
> ! Decir que en realidad esta sentencia no es propia del lenguaje (built-in), sino del entorno. Como si es por ejemplo `4.toString() o parseInt("4")`

1. **Sentencia** (statement) => es toda la linea hasta el `;` (aunque ; no es necesario, contarlo AST (abstract syntax tree) ?)
2. Las sentencias se forman de **expresiones** (expresions) => todo lo que cuando se evalua se convierte en un **valor** (por lo general puede estar formada de **valores y operadores**)
3. console es un **objeto** (object) => estructura de datos formada por key-value pairs.
4. El **.** es un **operador** de acceso a las propiedades de los objetos.
5. log es una **propiedad del objeto** y como vemos que luego de ella tiene parentesis entonces podemos deducir que esa propiedad es una **funcion**. Y aqui la estamos ejecutando, las funciones tienen dos momentos uno en donde se lo **declara** y otro donde se la **ejecuta**.
6. Dentro de los parentesis tenemos un `"Hola"` que es un valor de tipo **string** (alfanumerico) ya que tiene comillas.
7. un **operador de suma (+) o concatenacion en este caso** (cohersion !)
8. otro string. (todo eso es una expresion que al ser evaluada te da un valor).
9. **;** y `enter` nos da en la siguiente linea el resultado de la sentencia ejecutada.

> !Tiempo de que lo hagan ustedes

* Hacer esto mismo usando un archivo html (linkear)

## Javascript: expresiones, valores, sentencias, tipos de datos, variables y scope

En resumen que es ?
* **sentencia**
* **expresion**
* **valor**
* **operandor** => Assignment, matematico, asignacion compuesto, de incremento decremento, property access, igualdad, de comparacion, logicos, etc. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
  * Assignment operators
  * Comparison operators
  * Arithmetic operators
  * Bitwise operators
  * Logical operators
  * String operators
  * Conditional (ternary) operator
  * Comma operator
  * Unary operators
  * Relational operators

## Tipos de datos (primitivos) y valores

* Un valor es algo que nosotros definimos, por ejemplo si algo es gratis podes decir que sale **$0 o que es gratis**, si tenes una promcion podes decir que tenes un **2*1 o las dos al %50**, o si te digo vamos a tomar una birra? vos me decis **si o no**.

* Las diferentes representaciones de los valores son los tipos de datos
* En javascript tenemos **7 datos primitivos**, aunque se dice que no tiene tipado estatico si tiene tipos y la conversion y validacion se hace "dinamicamente".

* string => para valores **alfanumericos**
* number => para valores **numericos**
* boolean => **true o false**
* object => representacion que querramos siguiente **key-value pair** (array y funciones tmb subtypes)
* undefined => representa algo que **todavia no esta definido**
* null => representa **algo vacio**, typeof bug que da "object"
* symbol (esnext) => no tiene literal form, representar un **string que no puede ser duplicado**

> !Explicar lo de literals => "", true, 45, {}
> !typeof

## Variables

* Cajas que nos sirven para guardar **valores o referencias** (referencias lo vamos a ver en el futuro), ponerle un **nombre** representativo (etiquetarlo) y luego **usarlo** con ese nombre donde querramos.
* Los nombres se consideran validos si start with a-z, A-Z, $, or _. It can then contain any of those characters plus the numerals 0-9.
* Hay tres momentos en la vida de una variable:
  * **declaracion**
  * **inicializacion** (u asignacion)
  * **uso**
  * a veces **re-assignacion**

* **Declaracion**:
  * **var** (function scope o global si estas por fuera de todo) => re asignacion
  * **let** (block scope) => re assignacion
  * **const** (block scope) => not re asignacion
  * nada (es5 y browsers) (global function scope)

* Difieren por scopes (lugares donde vamos a poder usar y leer nuestra variable)

> !Mostrar variables con sus tipos de datos

> !camelCase
> !hoisting
> !nested scopes

> Ejercicios: Play around with typeof and variables

