# Clase 1 - JS

TODO:
* Videos (que es la programacion, javascript: historia, caracteristicas e instalacion)

## Temario

* Introducción a la programación, los programas (o apps) y sus puntos de vista ?
* Paradigmas de programacion
* Javascript: Historia, complejidad, diferencia con lenguajes "tradicionales" y backward compatilibility
* Javascript: "Instalación" y Creación de nuestro primer programa
* Javascript: conceptos generales de nuestro primer programa

## Qué es la programación ?

Para mi la programación es simplemente el arte de **crear soluciones (resolver problemas) usando los recursos de la computadora**. Esta computadora puede ser cualquier dispositivo que pueda interpretar nuestras ordenes, como una computadora, un celular, hasta un robot o un microondas ! 😱. 

Los llamados **desarrolladores o programadores** son los que *hablan con la computadora a través del código* usando **lenguajes de programación**. Estos lenguajes de programación fueron creados con la intención de ayudar al humano a crear soluciones y conectarse con la computadora, ya que el *"lenguaje" que entiende la computadora es el binario* (impulsos electricos).

Una forma de definir un lenguaje es a partir de su **nivel de abstracción**, *"este lenguaje es más de alto nivel que el otro"*. Los lenguajes de alto nivel son en los cuales el usuario, es decir nosotros los programadores, no tenemos que ocuparnos de cómo administrar los recursos de la computadora y el sistema, como JavaScript, C#, Java, etc. En cambio los que son más de bajo nivel son los que dejan al usuario ocuparse de la administración mencionada anteriormente, como C, Assembler, entre otros.

Otro punto importante sobre los lenguajes es que no todos fueron pensados con el mismo proposito y entonces es importante antes de crear una solución **saber qué es lo que se requiere y buscar el lenguaje más indicado para eso**, por ejemplo si queremos hacer aplicaciones web usaremos JavaScript porque fue creado con ese proposito pero si queremos crear una utilidad para nuestro sistema operativo tal vez usaremos Bash o Perl.

Además los lenguajes tienen una **sintaxís** que debemos cumplir, es decir las *reglas que tiene que cumplir nuestro código para que el lenguaje nos entienda* y asi pueda traducir nuestras intenciones a la computadora.

Por último asi como teniamos lenguajes que estaban destinados para propositos especificos también tenemos lenguajes que encajan mejor para ciertos **paradigmas**, es decir que encajan mejor para la *forma de pensar nuestra solución*. Entre los paradigmas más conocidos tenemos el *funcional*, *lógico*, el *orientado a objetos* y el *estructurado o procedural o imperativo*. Este último es el que vamos a utilizar, es la forma más sencilla de entrar al mundo de la programación ya que en este paradigma pensaremos las cosas **como si estuvieramos dandole ordenes paso a paso a la computadora**, algo así como una receta de cocina. 

> HTML y CSS no se consideran lenguajes de programación ya que no podemos controlar o cambiar el flujo de ejecución del programa ni crear estructuras que nos ayuden para solucionar nuestros problemas.


## JavaScript: Historia

JavaScript fue creado originalmente por **Brendan Eich** mientras trabajaba en Netscape, en sus comienzos se llamo *Mocha*, *LiveScript* pero finalmente se optó por JavaScript, nombre por el cual lo conocemos hoy en día.

Todo comenzó con la intención de **manipular e interactuar dinamicamente los elementos de los documentos HTML**, tales cómo cambiar el texto de un `h1` o reaccionar y hacer algo cuando el usuario hace click sobre un botón o cambiar los estilos de nuestro HTML dinamicamente a través del código, etc. Hay que entender que hasta ese momento tanto el HTML como el CSS eran estaticos y si queriamos hacer algo cómo lo que mencioné teniamos que recargar la página.

Al momento de su creación no sólo Netscape quería conseguir esto, sino que Microsoft también estaba tras este objetivo. Lo cuál resulto que tiempo después Microsoft también tenga su versión de JavaScript en su explorador Internet Explorer, lo llamaron *JScript*, esto hizo que a pesar de que se parecieran no eran lo mismo y no compartian la misma forma de hablar con los documentos HTML. A partir de esto fue que la W3C diseñó el **Document Object Model (DOM)** para estandarizar esto y que todos hablen de la misma manera y no sea un mayor problema a la hora de programar y que el usuario pueda tener la misma experiencia en todos los exploradores.

> JavaScript **NO ES JAVA!**, simplemente fue una movida de marketing para hacer creer que tenía algo que ver ya que en ese momento Java era el lenguaje más conocido y utilizado, cabe mencionar que también es por eso que la sintaxis de JavaScript es muy parecida a la de Java.

Un tiempo después también se propuso que JavaScript fuera adoptado como éstandar de la **European Computer Manufacturers' Association (ECMA)**, este éstandar es conocido como el **ECMAScript** y se dice que es un éstandar viviente ya que a través de la TC39, un grupo de desarrolladores, implementadores, academicos y demás van definiendo y agregando funcionalidades año tras año. Hoy en día todos los browsers pueden tener diferentes implementaciones pero todas deben cumplir con el éstandar.

Hoy en día JavaScript esta en todos lados, aunque fue pensado con la intención de manipular los elementos de los documentos, ahora también podemos hacer muchas otras cosas ya que también podemos crear aplicaciones que parezcan nativas de escritorio o para el celular y correr JavaScript en el server para manipular archivos por ejemplo.


## JavaScript: Caracteristicas

JavaScript tiene ciertas caracteristicas que lo diferencian de los lenguajes más comunes, a continuación veremos algunas:

* Se lo conoce cómo un lenguaje **debilmente tipado y con tipado dinámico**.
* Es **interpretado** o mejor dicho se **compila en el momento (just in time compiler)**.
* Es multiparadigma, siendo **orientado a objetos y funcional** ademas de estructurado.
* Debe ser **compatible con todas sus versiones anteriores**, es por ello que hay tantas maneras diferentes de hacer las cosas.
* Tiene **un solo hilo de ejecución**.
* Utiliza la **herencia prototipada** en vez de la herencia de clases como la mayoria de los lenguajes orientados a objetos.

> Vamos a ir viendo estas caracteristicas más en detalle a medida que avancemos.

## JavaScript: "Instalación"

No necesitamos instalar JavaScript en nuestra computadora y se dice que el código que escribamos en JavaScript **puede ejecutarse en el cliente y/o en el servidor**.

El cliente y el servidor en esta frase se refiere al **entorno de ejecución o runtime**, entonces el runtime del cliente es el **navegador o browser** y el del servidor es **NodeJS**.

Entonces para ejecutar código JavaScript en el cliente lo unico que necesitamos es agregar una etiqueta `script` en nuestro HTML y dentro de esa poner nuestro código o escribir el código en un archivo con la extensión `.js` y referenciarlo a traves de esa misma etiqueta. Pero esa no es la única forma, también podemos utilizar algo llamado **console o command line interface (CLI)** para ejecutar y probar nuestro codigo, para poder usar esto tenemos que abrir las **herramientas del desarrollador o devtools** en nuestro explorador.

En cambio si queremos ejecutar el código en el servidor o nuestra propia computadora necesitamos instalar **NodeJS** y usar la consola que tengamos en nuestro sistema operativo para ejecutar cada archivo que querramos. Como no estamos en el cliente no tenemos forma de acceder al documento html, por lo que cuando escribamos codigo JavaScript que querramos ejecutar en nuestro servidor debemos estar atentos a no tratar de interactuar con estos elementos.

## JavaScript: IDEs y herramientas.

Les dejo unos videos que pueden seguir para instalar y configurar su entorno de desarrollo https://youtu.be/69WJeXGBdxg y https://youtu.be/9nKTxtv6D1w

## JavaScript: Primer programa.

Vamos a escribir nuestro primer programa, para eso vamos a **crear un archivo nuevo** en nuestro *IDE (Integrated Development Environment o Entorno de desarrollo integrado)* con la extension **.js**.

Lo vamos a llamar **index.js** y dentro de él escribiremos `console.log("Hola" + " " + "Mundo!");`, y por último vamos a crear otro archivo en el mismo directorio con el nombre de **index.html** y dentro de él vamos a agregar lo minimo necesario para poder relacionar nuestro archivo HTML con nuestro archivo JavaScript.

Los archivos quedarían de la siguiente forma:

index.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Primer programa javascript</title>
</head>
<body>
  <script src="index.js"></script>
</body>
</html>
```

index.js
```javascript
console.log("Hola" + " " + "Mundo!");
```

> También podemos hacer esto mismo desde la consola de nuestro explorador usando las herramientas para los desarrolladores.

### Y esto qué hace, cómo se come ?

Vamos a analizar y ver todo lo que pasa en la linea de que escribimos en el archivo `index.js`. Primero y lo más importante cómo ejecutamos y qué hace lo que acabamos de escribir ?.

Para ejecutarlo lo único que **tenemos que hacer es abrir nuestro archivo index.html en el navegador**. Pero ahora bien, qué hace lo que acabamos de escribir, lo que va a ocurrir es mostrarnos un mensaje **Hola Mundo!** en la consola del navegador, la cuál accedemos haciendo **click derecho sobre la página que acabamos de abrir y seleccionamos inspeccionar**, una vez hecho esto se nos va a abrir lo que llamamos las **herramientas del desarrollador o devtools** y si vamos a la pestaña que dice **consola** vamos a ver el mensaje `Hola Mundo`.

## JavaScript: conceptos generales de nuestro primer programa

Luego de escribir nuestro primer programa y ejecutarlo vamos a ver en términos generales (a medida que avancemos vamos a entrar más en detalle sobre estos conceptos) todo lo que ocurrió y los conceptos.

Lo primero que podemos ver es la línea completa `console.log("Hola" + " " + "Mundo!");`, esto se lo conoce con el nombre de **sentencia o statement** y es el conjunto de cosas (letras, numeros, variables, valores) y operadores que se esta ejecutando en ese momento y terminan o delimitan conun punto y coma (`;`). Los programas en JavaScript y en la mayoria de los lenguajes **son un conjunto de estas sentencias que se van ejectuando de arriba hacia abajo**.

> Si tu sentencia es de una linea, como en el programa que acabamos de crear podes optar por no agregar el punto y coma, ya que hay mecanismos en los entornos de ejecución que las agregan. Igualmente es recomendable agregarlas.

En el párrafo anterior vimos el concepto de sentencia y dijimos que estaba formada por *"cosas" y operadores*, a esto le llamamos **expresiones o expressions** y una o el conjunto de ellas forman las sentencias. Las **expresiones pueden ser valores**, es decir palabras (entre comillas), números, referencias a variables y cosas literales, **o un conjunto de valores combinados con operadores**.

Ahora vamos a analizar las partes de esta sentencia, primero tenemos la palabra `console`, esta hace referencia a la **consola donde vimos el mensaje** y a su vez es lo que llamamos un **objeto**, es decir una **estructura de datos para representar un conjunto de pares clave-valor** y lo usamos para agrupar funcionalidades y delegar en este objeto la responsabilidad de darnos cierta información. 

Podemos definir un objeto de la siguiente manera: 
```javascript
console = {
  log: function (word) {
    return word;
  },
  name: "console"
}

// aca tenemos un objeto console que tiene 2 propiedades o claves, "log" y "name", y a su vez cada propiedad tiene un valor que es lo que esta a la derecha de la propiedad después del dos puntos (:)
```

> Console es un objeto que podemos acceder "magicamente" cuando estamos ejecutando nuestro codigo en el entorno de ejecución, en este caso el explorador web y es éste quien nos lo proveé al igual que otros objetos como `window` o `document`. Lo importante es reconocer que no es parte del lenguaje sino que nos lo provee el runtime, diferente es el caso de la funcion `parseInt` o el objeto `Math`.

Luego nos encontramos con nuestro primer **operador**, el punto (`.`) que en este caso al estar al lado de un objeto representa el **operador de accesso a las propiedades de los objetos o object property access** y nos da la posibilidad de pedir una propiedad especifica de nuestro objecto, en este caso estamos **pidiendo el valor de la propiedad log cuando hacemos console.log**. No solo existe este operador, sino que hay muchos más, por ejemplo operadores de asignación (`=`), matematicos (`+`, `-`, `*`, `/`), de igualdad (`==`. `!=`, `===`, `!===`), de comparación (`>`, `<`, `>=`, `<=`), lógicos (`&&`, `||`), [entre otros](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

Ni bien seguimos viendo nos topamos con que la propiedad log tiene pegado a ella unos parentesis con algo en el medio (`"Hola" + " " + "Mundo!"`) y si volvemos para atrás y vemos los que leimos anteriormente encontramos que **si haciamos console.log nos daban el valor de la propiedad log** y como tenemos unos parentesis pegados a la propiedad podemos deducir que el valor de esa propiedad es una **función o function**. Las funciones son un **conjunto de sentencias que representan algo y queremos reutilizar o darle un nombre concreto y descriptivo para entender mejor nuestro código**. Se puede decir que tienen dos momentos una cuando se la **define o declara**, por ejemplo `function(word) { return word }` como la definimos en el objeto de ejemplo, y otro momento cuando se la **usa o ejecuta**, por ejemplo `console.log("Hola" + " " + "Mundo!")`.

Cuando declaramos nuestras funciones **podemos hacer que reciban parametros**, es decir valores, datos o información que nos vamos a aceptar y nos van a servir para las sentencias que tengamos adentro. Entonces cuando ejecutamos la función debemos pasarle estos valores que necesitan y en este caso los llamaremos **argumentos**.

> Acordate que cuando programamos lo hacemos para humanos no para las maquinas !, asi que siempre que escribamos algo hay que tratar de hacerlo lo más descriptivo posible

Por último tenemos toda esta **expresion** `"Hola" + " " + "Mundo!"` que se la pasamos como argumento a la funcion log del objeto console. Y al analizar más en detalle esta expresion podemos ver que hay **palabras o espacios envueltos por comillas** (`"`), a esto los conocemos como **valores string literales o string literal**, que son uno de los **tipos de datos o data types** que tiene JavaScript.

Entre esos strings tenemos los operadores (`+`) que en este caso diremos que es el operador de concatenación y lo que va a hacer es unir todos nuestros strings, dandonos cómo resultado `"Hola Mundo"`.

## Conclusión

En esta clase vimos muchos conceptos nuevos y juntos, lo importante es no desanirmarse y entender que todo esto lo vamos a ir afianzando a medida que avancemos y vayamos practicando y realizando proyectos.

## Links

De todo un poco
* https://github.com/getify/You-Dont-Know-JS/tree/1st-ed
* https://eloquentjavascript.net/
* https://exploringjs.com/
* https://tc39.es/
* https://blog.teamtreehouse.com/mastering-developer-tools-console
* https://github.com/leonardomso/33-js-concepts
* https://github.com/microsoft/Web-Dev-For-Beginners
* https://mumuki.io/

