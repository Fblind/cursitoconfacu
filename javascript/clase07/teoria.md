# Clase 7 - JS

## Interactuando con nuevos elementos
Ya vimos que existen eventos que se emiten y escuchadores que reaccionan y hacen cosas cuando esos eventos ocurren (event and event listeners). En la clase anterior interactuamos con el evento "change" del elemento `input`. 
En esta clase el nuevo requerimiento que vamos a hacer es **validar el monto al momento de apretar el boton agregar**. Para ello vamos a ver como funcionan los eventos más en detalle.

## [Evento Bubbling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)
Existe un concepto cuando trabajamos en la web con eventos que es el **burbujeo**, es decir, todos los *eventos que ocurren van a ir para arriba*, si un evento ocurre en un elemento, su padre también va a poder escuchar ese evento. Veamos un ejemplo:
```html
<form>
  <div>
    <button>
      <strong>Apretame</strong>
      </button>
  </div>
</form>
```
En este caso si apretamos el elemento `button` o el elemento `strong` vamos a ver que tanto el `div` como el `form` si tiene agregado un event listener del tipo click va a recibir el evento que ocurrió cuando apretamos el `button`, y esto en verdad seguira burbujeando (o sea que va hacia arriba) hasta el elemento `#root` de nuestro DOM.

> Cuando trabajamos es importante agregar el event listener al elemento más especifico que querramos.

## [Event Delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation)
Ahora que tenemos una idea de lo que es el burbujeo, podemos sacarle provecho. Existe otro concepto llamado **delegación de evento** que consiste en aprovechar el burbujeo y en vez de agregar un escuchador en cada elemento, solo lo hacemos en el padre y en el callback de nuestro escuchador decidimos que hacer.

Se usa principalmente cuando tenemos listas o cosas por el estilo, por ejemplo si tenemos:
```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
</ul>
<script>
  const ul = document.querySelector("ul");
  ul.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "red";
  });
  // aca cada vez que se aprete algun elemento `li` vamos a cambiar el color de ese elemento, gracias a que el callback recibe el evento que a su vez nos da la información del target.
</script>
```

## [event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) & [event.currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)
La función callback de nuestro listener siempre recibe un evento, el evento que ocurrió, ese evento como casi todo en JavaScript es un objeto que tiene propiedades y métodos (funciones como propiedades dentro de los objetos). 
Y este objeto tiene dos propiedades muy interesantes y que vamos a usarlas casi siempre que usemos listeners, y son la propiedad target y la propiedad currentTarget.

Son muy parecidas entre si, ya que ambas propiedades nos dan un elemento del DOM, pero con la diferencia de que el **target nos da el elemento que emitió ese evento pudiendo ser uno de los hijos** y el **currentTarget nos da el elemento al cuál se agrego el listener**.

Por ejemplo:
```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
</ul>
<script>
  const ul = document.querySelector("ul");
  ul.addEventListener("click", function (event) {
    console.log(event.target); // nos dara el elemento `li` cuando apretemos en uno de los item de la list
    console.log(event.currentTarget); // nos dara el elemento `ul` siempre
  });
</script>
```

# [event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
Existe un método que pertenecena los eventos que nos permite cambiar lo que hace el evento por defecto, o mejor dicho, que **el evento no haga lo que hace por defecto**. Nos da un control mucho mayor de como queremos reaccionar y que queremos hacer cuando ocurren los eventos.

## Estructuras de control
JavaScript y la mayoria de los lenguajes nos permiten cambiar el flujo del programa en base a condiciones. Tenemos lo que se llama `if` y `else`.
El `if` es una herramienta que nos permite ejecutar un cierto código siempre que una condición, u operación, o expresión, o función que cuando sea evaluada nos de `true`. Por ejemplo:
```javascript
if (true) {
  // se va a ejecutar el codigo que pongamos entre las llaves
}

if (2 == 2) {
  // se va a ejecutar el codigo que pongamos entre las llaves
}

function esVerdadero() {
  return true;
}

if (esVerdadero()) {
  // se va a ejecutar el codigo que pongamos entre las llaves
}

if (1 > 2) {
  // no se va a ejecutar nada, ya que 1 no es mayor que 2, por lo tanto esa condición cuando sea evaluada nos dará false y no true 
}
```

Dicho esto, que pasa cuando queremos hacer algo cuando lo que evaluamos sea falso ?, para ello existe el `else`, que en ingles significa *sino*, por lo que tenemos **if que es si y else que es sino**. Entonces volviendo al ejemplo anterior:
```javascript
if (1 > 2) {
  // no se va a ejecutar nada, ya que 1 no es mayor que 2, por lo tanto esa condición cuando sea evaluada nos dará false y no true 
} else {
  // lo que este dentro de las llaves es lo que se va a ejecutar
}
```

Y por último también existe el conjunto de estos dos o la anidación `else if` y nos sirve para tener más condiciones hasta llegar al caso del `else`. Por ejemplo:
```javascript
if (1 > 2) {
  // no se va a ejecutar nada, ya que 1 no es mayor que 2, por lo tanto esa condición cuando sea evaluada nos dará false y no true 
} else if (1 == 0) {
  // la condicion se va a evaluar y nos va a dar false por lo tanto esto no se va a ejecutar
} else {
  // lo que este dentro de las llaves es lo que se va a ejecutar
}
```

> Es importante conocer los [operadores de comparación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators) y los [operadores lógicos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators) cuando usamos condicionales.

## Testing
Una parte importante cuando estamos creando una aplicación es verificar que nuestra aplicación funcione como definimos que tenía que funcionar, esa acción de **verificar que algo funcione como se espera se llama testing**.

### Testing visual (desde el lado del usuario)

Hay diferentes formas de testear o probar una aplicación, la más común es desde el lado del usuario final, es decir usando la aplicación que creamos.

Y cómo verificamos que algo funcione correctamente ?, teniendo **casos de prueba**, qué son los diferentes casos para chequear una funcionalidad, por ejemplo, si queremos verificar que el monto que el usuario escribió sea correcto haremos algo asi:

Caso de prueba "Monto no puede estar vacío":
  1. Entrar a la aplicación
  2. Dejar el campo monto vacio
  3. Apretar el botón "Agregar"
  4. Verificar que el mensaje "Hay un error, tiene que ser mayor que cero" aparezca debajo del campo "Monto"

Y también podemos tener otro que sea: 

Caso de prueba "Monto no puede tener negativos":
  1. Entrar a la aplicación
  2. Completar el campo monto con -1
  3. Apretar el botón "Agregar"
  4. Verificar que el mensaje "Hay un error, tiene que ser mayor que cero" aparezca debajo del campo "Monto"

Y así seguiremos armando todos los casos de prueba para verificar que cuando haya un error nos muestre el error y que cuando completemos correctamente el monto podamos agregar el gasto.

Como ya dije, esto tipo de testeo es manual y es algo que necesitamos hacerlo, pero a su vez también existen testeos automatizados, es decir, que todos estos casos no necesitamos una persona para hacerlo sino que podemos hacer que una computadora los pruebe y nos diga si fueron exitosos o no.

### Testing código (desde el lado del programador)
Además de testear la aplicación desde el usuario final, también podemos hacerla desde nuestro lado, el del programador.
Y cómo lo hacemos ?, la forma más simple para empezar a hacerlo y crearnos la costumbre, es testear las partes más chicas de nuestros casos de prueba mediante funciones, por ejemplo para el caso de prueba "Monto no puede estar vacio" vamos a crear algo asi:
```javascript
function montoEsCorrecto(valor) {
  return valor != "";
}
console.log("Cuando no completamos el monto, es decir el valor es vacio, el resultado nos tiene que dar FALSE: ", montoEsCorrecto("")); // nos tiene que dar false

```
Y verificaremos mediante la consola que nuestro resultado es el esperado. Y asi con los demás casos que estamos verificando. 

> Cabe destacar que esta forma de testear nuestro código es la más primitiva, pero si aprendemos a hacerlo de esta manera, luego vamos a poder tener una transición más cómoda cuando usemos herramientas creadas exclusivamente para testear.

## Test driven design - TDD
Algo que hicimos en esta clase es **pensar nuestros casos de prueba antes de implementar la función**, dijimos que queriamos que nuestra **funcion se comporte de una manera especial dependiendo de los parametros que recibía**:

```javascript
console.log("este me tiene que dar: false", elMontoEsCorrecto(0))
console.log("este me tiene que dar: true", elMontoEsCorrecto(1000))
console.log("este me tiene que dar: false", elMontoEsCorrecto(-1000))
console.log("este me tiene que dar: true", elMontoEsCorrecto(50))
```

Y luego nos pusimos a crear la función verficando que pase lo que queriamos en cada caso, esto que hicimos es una técnica de programación llamada **Test driven design o más conocido como TDD**, en la cuál creamos nuestro sistema pensando primero cómo esperamos que funcione con sus casos de prueba y luego implementamos el código necesario para hacer que esos casos de prueba sean satisfactorios.

Es una técnica muy usada y ayuda a que confiemos en nuestro sistema, ya que si primero armamos los casos de prueba y luego creamos nuestro código para que esos casos pasen haremos un sistema completamente testeado y confiable.

## Refactoring
Ahora que sabemos que es el testing, tdd y tenemos una forma de verificar por código, tenemos confianza en nuestro código y por lo tanto podemos cambiarlo con confianza. Por qué digo esto ?, ya que si cambiamos algo que estamos testeando y nuestros casos siguen siendo satisfactorios quiere decir que lo que cambié esta bien.

Y para que quisieramos cambiar nuestro código ?, para mi la principal motivación es que nuestro código sea más simple y se entienda mejor, pero también puede ser que queremos hacer algo diferente para que sea más rapido pero que nos de los mismos resultados, o porque descubrimos que tenemos algo que se repite en nuestro código.

A esto le llamamos refactorizar o refactoring, y algo que podemos hacer por ejemplo es esto:
```javascript
// Partimos de esta implementacion
function elMontoEsCorrecto(valor) {
  if (valor >= 1) {
    // si es verdadero vengo aca
    return true;
  } else {
    // si no es verdadero vengo aca
    return false;
  }
}
// La cambiamos por esta otra y verificamos que sigan pasando los casos de prueba
function elMontoEsCorrecto(valor) {
  if (valor >= 1) {
    // si es verdadero vengo aca
    return true;
  }
  return false;
}
// Volvemos a cambiar la funcion por esta otra y verificamos que sigan pasando los casos de prueba
function elMontoEsCorrecto(valor) {
  return valor >= 1; // true o false
}

// Partimos de una funcion larga que usaba malas practicas a una funcion mucho mas simple.
// Cada uno de esos cambios que hicimos por lo general tiene un nombre dentro de esta técnica.
```

> Es importante aclarar que esta técnica no se puede hacer con confianza si no tenemos los tests correspondientes.


## Más métodos y valores de los elementos
Cómo vimos los elementos de nuestro DOM, tienen métodos y valores, algunos son compartidos para todos los tipos (`form`, `div`, `button`, etc) y otros son especificos para cada elemento.

### Form
El form tiene una forma de acceder a sus hijos, o campos por el `name` o el `id` de estos mediante la propiedad `elements`:

```html
<form>
  <input
    type="number"
    name="montoAAgregar"
    id="monto"
    min="1"
    class="monto"
    required
  >
</form>
<script>
  const formulario = document.querySelector("form");
  formulario.elements.montoAAgregar; // nos va a dar el elemento input monto
  formulario.elements.monto; // también nos va a dar el elemento input monto
</script>
```

## Document
Algo que podemos hacer con el document es crear elementos que no existan en la página, hay veces que queremos crear elementos dinamicamente usando código y esto lo podemos lograr con la función [`createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement):

```javascript
window.document.createElement("p"); // esto creara un nuevo elemento p, pero no lo insertará en la página
```

Ahora que creamos un elemento podemos agregarlo a nuestra página, y para ello lo que vimos es que todos los elementos pueden agregar otros elementos y más precisamente con el método [`insertAdjacentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement):

```html
<form>
    <input id="anInput" />
    <!-- asi quedaria el html con el codigo que tenemos abajo -->
    <!-- <p>Nuevo P agregado a traves del codigo</p> -->
</form>
<script>
  const anInput = document.querySelector("#anInput");
  const newPElement = window.document.createElement("p");
  newPElement.textContent = "Nuevo P agregado a traves del codigo";
  anInput.insertAdjacentElement("afterend", newPElement); // esto agregara <p>Nuevo P agregado a traves del codigo</p>, justo despues del input.
</script>
```

### References:
* https://wesbos.com/javascript/05-events/event-listener
* https://wesbos.com/javascript/05-events/targets-bubbling-propagation-and-capture
* https://javascript.info/event-delegation
* https://martinfowler.com/books/refactoring.html