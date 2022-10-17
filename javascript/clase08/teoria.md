# Clase 8 - JS

## Bult-in methods
Como hemos visto JavaScript tiene varias funcionalidades ya creadas, particularmente funciones ya pensadas y creadas por el lenguaje que nosotros podemos usar, a estas propiedadas, funciones o métodos de los objetos les decimos **built-in**, ya que vienen con el lenguaje.

En esta clase vamos a ver algunos que son particulares para todos los **[strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)** y en lo que va del curso vamos a seguir viendo para los string pero también para otro tipo de datos como los numeros.

### [Trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
Este método es muy simple de usar y muy útil, cuando tenemos un string vamos a poder obtener un nuevo string pero sin los espacios tanto al principio de la palabra como al final:

```javascript
const palabraSinEspacios = "          hola   ".trim(); // esto nos dará "hola"
```

#### [Length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
Esta es una propiedad que tienen todos los strings, y la usamos para saber cuantos caracteres tiene un string, por ejemplo:
```javascript
"hola mundo".length // nos dará como resultado 10, ya que incluye a los espacios tambien
```

## Funciones como abstracciones
En clases anteriores explicamos un poco las funciones, cómo las creabamos y usabamos, y para que nos servian. En esta clase vamos a ver que necesitamos las funciones para poder eliminar código repetido y hacerlo generico, creando nuevas abtracciones más generales con la ayuda de los argumentos:

```javascript
function mostrarElErrorEnElMonto(elementoMonto) {
  const error = window.document.createElement("p");
  error.textContent = "Hay un error, tiene que ser mayor que cero";
  elementoMonto.insertAdjacentElement("afterend", error);
}

function mostrarElErrorEnElDescripcion(elementoDescripcion) {
  const error = window.document.createElement("p");
  error.textContent = "Hay un error, la descripcion tiene que tener entre 1 y 10 caracteres";
  elementoDescripcion.insertAdjacentElement("afterend", error);
}

// Aca arriba tenemos dos funciones muy parecidas, primero escribimos la funcion para mostrar el error en el monto y luego tuvimos que crear una para la descripcion.
// Al ver las funciones nos dimos cuenta que eran muy parecidas, casi iguales.
// Por lo que decidimos crear algo más generico que pueda servir para ambos casos:

// lo primero que cambiamos es el nombre para que siga siendo clara la intención del código
function mostrarElError(texto, elemento) {
  // a su vez ahora la nueva funcion recibe dos parametros "texto" y "elemento"
  // donde texto sera el texto que aparecera como mensaje de error
  // y elemento sera el elemento del DOM al cual anidaremos nuestro mensaje de error
  const error = window.document.createElement("p");
  error.textContent = texto; // reemplazamos el texto escrito a mano especifico para cada caso por una variable texto que tomará el valor que querramos dependiendo el caso
  elemento.insertAdjacentElement("afterend", error); // esto sigue siendo igual, lo unico que hicimos fue usar un nombre más general
}

// y reemplazaremos donde usabamos `mostrarElErrorEnElMonto` y `mostrarElErrorEnElDescripcion(elementoDescripcion` por algo asi :
mostrarError("Hay un error, la descripcion tiene que tener entre 1 y 10 caracteres", elementoDescripcion);
mostrarError("Hay un error, tiene que ser mayor que cero", elementoMonto);
```

## Estructuras de repetición - [For](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
Muchas veces necesitamos hacer varias veces la misma acción, una de las formas de hacer esto en JavaScript es mediante el `for`.

Podemos usarlo para iterar sobre una lista, un string o simplemente para repetir n veces una acción, veamos un ejemplo:

```javascript
const palabra = "hola mundo"
let contador = 0; // la variable contador esta declarada e iniciada en 0
// el for consiste de tres statements separados por punto y coma (;):
// el primero (en este caso let index = 0) es el inicializador, empezara en la vuelta numero 0 en este caso
// el segundo (index < palabra.length) es la condicion de ejecución, es decir, al comenzar cada vuelta chequeará esta condición y en caso de ser verdadera ejecutará lo que se encuentra entre las llaves
// el tercero (index++), es la acción que se hará al finalizar cada vuelta, y por lo general lo hacemos para modificar la variable que definimos en el primer statament y avanzar.
for (let index = 0; index < palabra.length; index++) {
  // todo lo que esta entre llaves será lo que se ejecutará en cada vuelta
  contador = contador + 1;
  console.log(palabra[index]);
}
// al finalizar todas las iteraciones/vueltas la variable `contador` ahora vale 10
```
