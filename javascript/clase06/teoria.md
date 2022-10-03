# Clase 6 - JS

## Interactuando con el navegador
En clases anteriores (clase1, clase2, clase3 y clase4) vimos como usar JavaScript y sus diferentes caracteristicas, funcionalidades y herramientas que nos sirven para poder resolver problemas mediante este lenguaje.

Vimos que en JavaScript, por ejemplo, teniamos variables, funciones, objetos, strings, entre otros. Pero a su vez también vimos que existia un **objecto llamado console**, el cuál nos da acceso a la **consola o cli** de debug de **nuestro environment (node o el browser)**.

## [Console - Browser](https://developer.mozilla.org/en-US/docs/Web/API/console)
La consola, este objeto nos sirve principalmente para **descubrir y probar, o testear** ciertas partes de nuestro sistema, o de la página, o simplemente de JavaScript.

En nuestro caso usaremos la consola del browser y más precisamente la de Chrome. Para utilizarla y ver lo que le enviemos, necesitamos acceder a las **[devtools o herramientas del desarrollador del navegador](https://developer.chrome.com/docs/devtools/overview/)**.

Una vez que abrimos podemos ir la pestaña **console** y hacer las pruebas que querramos.

> Para ver más info sobre la consola de chrome y lo que podemos hacer podes ir [acá](https://developer.chrome.com/docs/devtools/console/)

## Interactuando con el Navegador
Existen varias [APIs](https://developer.mozilla.org/en-US/docs/Glossary/API) para poder acceder a diferentes funcionalidades de nuestro navegador, de cada pestaña y de la página web que esa pestaña esta mostrando.
Podemos acceder a él mediante el **objeto global [window](https://developer.mozilla.org/en-US/docs/Web/API/Window)**, cuando digo objeto global significa que con solo escribir window en un archivo JavaScript o consola que se ejecute en el navegador vamos a poder interactuar con la ventana del navegador.

```javascript
window.console.log("hola");
// interactuamos con la consola de debug de nuestro navegador, a su vez tambien podemos acceder como hemos accedido anteriormente, simplemente con la palabra console, pero esa variable apunta a window.console, todo parte de window cuando queremos interactuar con algo del navegador.
```

## [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Glossary/DOM)
El DOM, pertenece al window y representa el documento actual (documento HTML o XML), a través de él podemos podemos interactuar con nuestro HTML/CSS de la página.

Este objeto es escencial conocerlo y entenderlo para poder trabajar con la web, ya que nos permite modificar nuestro HTML completo, incluyendo los elementos dentro de este como `<body>, <h1>` y a su vez también podemos crear nuevos dinamicamente y hasta modificar los estilos de cada uno de ellos.

Podemos acceder al DOM de la siguiente manera:
```javascript
window.document // y dentro de él vamos a poder recorrer todo el árbol del documento HTML
```

## Obtener elementos especificos de nuestra página
Muchas veces necesitamos obtener información actual de nuestra página, por ejemplo algún valor que agregó un usuario en un formulario, con JavaScript usando el DOM podemos seleccionar elementos de nuestra página y asi **consultar su valor, cambiar estilos, eliminarlo, cambiar el valor y muchas otras cosas**.

Para poder hacer todo eso primero debemos seleccionarlo, y hoy en día hay dos formas que son las mejores a mi entender, utilizando los metodos **[querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) y [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) del document**:

```javascript
// ambos reciben como argumento un string que representa un selector css
window.document.querySelector("#monto"); // nos dara el elemento que matchee con el id=monto 

window.document.querySelectorAll("input"); // nos dara todos los elementos que matcheen con el tag input
```

## Objetos, Variables, Funciones, Hoisting, Scope
Debemos tener en claro estos conceptos, ya que vamos a estar utilizandolos todo el tiempo cuando estemos programando e interactuando con el DOM.

> Recordar que cuando usamos objetos podemos acceder a sus propiedades y métodos (funciones como propiedades del objeto) mediante el punto `.`, por ejemplo **window es un objeto que tiene document como propiedad y a su vez document tiene querySelector como un método**.

## Interactuar con los elementos
Ahora que ya sabemos como seleccionar un **[elemento](https://developer.mozilla.org/en-US/docs/Web/API/Element)**, podemos interactuar con él. Este elemento que obtuvimos es una representación en JavaScript del elemento que creamos con HTML, por lo que podemos obtener toda la información que tiene y también modificarlo. En nuestro caso veremos **[elementos de HTML](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)** que tienen las mismas propiedades y metodos que el elemento general además de cosas propias, pero también existen otros tipos de elementos con diferentes capacidades.

Por ejemplo si tenemos este elemento en nuestro código HTML
```html
<input type="number" min="1" max="2" name="aNumber" data-role="input" id="aNumberId" style="color: white" />
```
Podemos seleccionarlo, ver que información tiene y modificarla:
```javascript
// le asigno el valor del primer elemento que cumpla con la condición de tener el id igual a aNumberId a la variable aNumber, que al ser const, no puede ser re asignada. 
const aNumber = document.querySelector("#aNumberId");
// podemos inspeccionar su valor actual haciendo
aNumber.value
// podemos cambiar su valor actual haciendo
aNumber.value = 45;
// podemos inspeccionar su estilo haciendo
aNumber.style
// podemos cambiar alguna propiedad de su style haciendo
aNumber.style.backgroundColor = "red"; // notar aca que los estilos que nosotros escribimos en css de formal kebab-case como background-color, en javascript se escribe en camelCase como backgroundColor.
// usando classList podemos agregar y sacar clases usando javascript
aNumber.classList = "hide"; // el elemento va a tener el atributo class="hide"
aNumber.classList.add("yellow"); // el elemento va a tener el atributo class="hide yellow"
aNumber.classList.remove("hide"); // el elemento va a tener el atributo class="yellow"
// podemos obtener el valor de atributos especificos:
aNumber.getAttribute("min"); // nos dara 1
```

> Para saber todas las cosas que podemos hacer podemos ver la documentación de los [elementos](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Interactuar con el usuario
Ahora que ya sabemos que existe una forma desde JavaScript para obtener y cambiar elementos de la página, podemos aprovechar ese conocimiento y hacerlo dependiendo lo que haga el usuario que esta usando la página y no al cargarla.

La Web y JavaScript, funcionan de manera asyncronica y reaccionan a cosas que hace el usuario en nuestra página, como por ejemplo cuando hacemos click en un botón o completamos un campo de un formulario. Puede que en esos momentos, nosotros como desarrolladores queremos que nuestra página reaccione de una manera en especial, ejemplo, cada vez que cambie el valor de nuestro elemento `aNumber` (ver sección anterior) se muestre el valor en palabras.

Este concepto de reaccionar a cosas que pasan en la página de una manera en especial involucra dos partes, un **[event](https://developer.mozilla.org/en-US/docs/Web/API/Event)** y un **listener**. Este concepto de tener *eventos y escuchadores* es común en programación, y existen patrones para crear sistemas de esta manera como **Publisher-Subscriber o PubSub**, **Event driven programming**, **Observer Pattern**.

Ahora bien, recapitulando, en nuestra página **ocurren eventos**, también decimos que se **emiten eventos**, de ciertos tipos, como por ejemplo **cuando hacemos click en un boton se emite el evento de tipo click**, y entonces si nosotros queremos hacer algo cuando ocurra ese tipo de evento vamos a necesitar agregar un **listener** a nuestra página y más precisamente a un *elemento*. Este listener es una función que JavaScript va a ejecutar cuando se emita ese evento con la información de este.

Entonces si queremos cambiar el valor de nuestro input aNumber cuando hagamos click en el boton cambiar, vamos a hacer algo asi:
```html
<input id="aNumber" type="number" />
<button id="cambiar">Cambiar</button>
<script>
const aNumber = document.querySelector("#aNumber");
aNumber.value; // esto nos dara vacio
const cambiar = document.querySelector("#cambiar");
// aca vamos a agregar un escuchador al boton cambiar cuando ocurra el evento click. Y cuando eso ocurra va a pasar lo que esta en el callback que se encuentra en el segundo argumento de la funcion addEventListener.
cambiar.addEventListener("click", () => {
  // cuando apretemos el boton cambiar el valor del input aNumber se va a cambiar por el 58.
  aNumber.value = 58;
});
</script>
```

> Es importante entender que el código que escribamos se ejecuta de arriba para abajo, y que al cargar la página solo se registra el listener, no se ejecuta el código que reacciona al evento, o sea la función callback que le pasamos como argumento al addEventListener la ejecuta JavaScript cuando ocurra el evento.