# Clase 1 - JS

TODO:
* Finalizar primer programa
* Agregar links de referencia
* Videos (que es la programacion, javascript: historia, caracteristicas e instalacion)

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

## JavaScript: Primer programa.

