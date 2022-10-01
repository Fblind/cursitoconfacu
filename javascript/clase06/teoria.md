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

Para poder hacer todo eso primero debemos seleccionarlo, y hoy en día hay dos formas que son las mejores a mi entender, utilizando los metodos **(querySelector)[https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector] y (querySelectorAll)[https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll] del document**:

```javascript
// ambos reciben como argumento un string que representa un selector css
window.document.querySelector("#monto"); // nos dara el elemento que matchee con el id=monto 

window.document.querySelectorAll("input"); // nos dara todos los elementos que matcheen con el tag input
```

## Objetos, Variables, Funciones, Hoisting, Scope
Debemos tener en claro estos conceptos, ya que vamos a estar utilizandolos todo el tiempo cuando estemos programando e interactuando con el DOM.

> Recordar que cuando usamos objetos podemos acceder a sus propiedades y métodos (funciones como propiedades del objeto) mediante el punto `.`, por ejemplo **window es un objeto que tiene document como propiedad y a su vez document tiene querySelector como un método**.

## Interactuar con los elementos
Ahora que ya sabemos como seleccionar un elemento, podemos interactuar con él. Este elemento que obtuvimos es una representación en JavaScript del elemento que creamos con HTML, por lo que podemos obtener toda la información que tiene.

TODO: ejemoplo HTML get cosas con Javascript y indagar con el value