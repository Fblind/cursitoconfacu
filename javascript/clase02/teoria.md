# Clase 2

* repaso general y QA
* comments
* tipos de datos, primitivas, valores.
* variables (const, let, var, hoisting, TDZ)


## Comentarios (Commnents)

Los comentarios son **partes del código que no van a hacer evaluadas** ni ejecutadas por nuestro entorno de ejecución. Son útiles en ciertas ocasiones aunque mi *recomendación es no tener muchos en nuestro código*, lo podemos utilizar para poner extender y aclarar el porqué de una decisión, como una forma de representar que tenemos que hacer algo y lo agregamos temporalmente (el famoso `// TODO: hacer esto!`) o simplemente si queremos probar qué pasa si no ejecutamos ciertas lineas de nuestro código, pero no mucho más.

> Deberías tener pocos comentarios en tu código, tu **código mismo y los tests deberían ser los que te muestran la utilización del sistema**.

En JavaScript tienen dos formas, **comentario de una linea o oneline comment** y **comentario de multiples lineas o multiline comment**.

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

## Valores (values)

En JavaScript decimos que un valor es algo que nosotros definimos, por ejemplo el valor de que algo sea gratis lo podemos definir como que sale **$0 o decir que es gratis**, si tenes una promocion podes decir que tenes un **2*1 o las dos al 50%**, o si te digo vamos a tomar una birra? vos me decis **si o no**.

Entonces los ejemplos anteriores son valores y estos como vemos pueden ser un texto, una oración o parte de ella, números, u otras expresiones cómo 50%. En programación las diferentes *representaciones que un valor puede tomar* decimos que son los **tipos de datos**, qué veremos más en detalle en la próxima sección.

Es importante aclarar que en JavaScript, cualquier expresion puede ser un valor, por lo que tanto un **número cómo una función pueden ser considerados valores**. 

Los **valores que incluimos directamente en nuestro código, los llamamos valores literales**, y algunos ejemplos son `"hola"`, `10`, `true`.

> !JavaScript tiene **valores tipados no variables tipadas**

## Tipos de datos
En la sección anterior definimos brevemente qué era un tipo de dato, **la representación que un valor puede tomar**, ahora vamos a ver más caracteristicas de estos en JavaScript.

## Debilmente tipado

Se dice que JavaScript tiene un **tipado de datos débil**, esto es porque:

* El tipo de dato de un valor **se define en tiempo de ejecución**, es decir en el momento en que una línea de nuestro código esta siendo ejecutada se verá de que tipo de dato es nuestro valor. A diferencia de otros lenguajes donde los tipos se chequean y definen en tiempo de compilación, un paso anterior a la ejecución del programa.

* A diferencia de los lenguajes de *tipado estricto o fuerte*, JavaScript **no asocia las variables a un tipo de dato sino que asocia los valores a un tipo de dato**. Por lo que **las variables pueden modificar sus valores ("mutar") asi como sus tipos** a lo largo de su vida, siendo entonces el tipo de las variables **pseudo dinamico**, ya que el tipo de dato que toma la variable se realiza mediante la asignación de un valor.

> En la próxima sección vamos a ver bien qué es una variable :)

* Los diferentes tipos que tiene el lenguaje son relativamente **pocos y muy abarcativos**, en contraposición a los lenguajes más fuertes que tienen más especificos, por ejemplo en JavaScript representamos un número y decimos que es un número, en cambio en otros lenguajes un número puede ser un número flotante, un entero, uno largo, etc.

## Tipos del lenguaje
JavaScript puede clasificar de 8 formas diferentes los valores hasta el momento, es importante recalcar que es *hasta el momento* en que este texto fue escrito ya que en los últimos años fue creciendo la cantidad de tipos gracias a que se agregaron nuevos, tales como `Symbol` y `BigInt`.

> Existen los primitivos y los no...

Ahora veamos un poco más en detalle todos ellos

### [Number](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md#numbers)
Los números se representan con el tipo de dato `number`, cualquier número (o la mayoría) ya sea un entero, un número que tenga partes decimales, un negativo, etc.

La sintaxis para escribir números literales es simple, solo tenemos que escribir el que querramos en nuestro código directamente:
```javascript
10 // numero diez entero (10)
10.5 // numero diez coma cinco (10.5) prestar atencion a que separamos con punto y no comas en JavaScript asi como en la mayoria de los lenguajes.
0.5 // cero coma cinco
.5 // podemos optar no escribir el cero (parecido a como funcionan la mayoria de las calculadoras)
```

Algo importante para mencionar es que los números en JavaScript usan la notacion de **punto flotante binaria**, *al igual que muchos otros lenguajes*, esta representación de los números no es exacta por lo que puede originar en algunos comportamientos no esperados o que los resultados de operar con los números decimales principalmente tengan cierta discrepancia a lo que pensamos que tendría que dar o error, tal es el caso de este famoso código:
```javascript
0.1 + 0.2 === 0.3 // false (no vimos el operador ===, pero digamos que nos dice si lo que esta a su derecha es igual a lo que esta a nuestra izquierda)
```

JavaScript tiene el concepto de *números especiales* y entre ellos tenemos:
* **NaN (Not a Number)**: Obtenemos este valor como resultado de querer hacer una operación matematica con un número y otro tipo de dato, en vez de darnos un error nos da un número especial que representa que hubo una falla en nuestra operación.
* **Infinity & -Infinity**: Estos valores los obtenemos cuando hacemos alguna operación que nos dé como resultado un número mayor (Infinity) o un número menor (-Infinity) al máximo o menor número valido en JavaScript, ya que la representación de los números se basa en un estandar que usa números finitos.
* **0 & -0**: Tenemos ambos ceros, preservando el signo en caso de que alguna operación nos retorne cero como resultado, si venia de un negativo será -0, de un positivo +0 o 0 simplemente.

### BigInt

### String
https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md#strings

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



Links:
* [Capitulo sobre números explicado mucho más en detalle](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md#numbers) 