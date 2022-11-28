# Clase 10 - JS

En esta clase limpiamos un poco la aplicación, eliminando varias funciones que no utilizabamos al igual que los comentarios que no eran útiles. Además vimos nuevos atributos que tienen los elementos inputs que nos sirven para restringir, y a su vez conceptos que nos van a servir para mantener una buena experiencia de usuario, como resetear el form cada vez que queremos agregar algo y como sacar elementos del DOM.

## Atributo [step](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step)
Es un atributo que corresponden a varios inputs, pero en nuestro caso nos interesa cómo funciona para el tipo `number`. Este atributo va a hacer que el input de pequeños saltos para adelante o atrás usando el valor de este. Por ejemplo:
```html
<input type="number" step="0.01" /> 
<!-- Esto sumara 0.01 o restará 0.01 cada vez que seleccionemos la flechar para arriba o abajo respectivamente:
Por ejemplo, si tenemos el input con el valor 1 y tocamos la flecha para arriba entonces el nuevo valor sera 1.01
-->
```

Usar este atributo es una forma de restringir el uso y a su vez obligar al input a que siempre nos de con dos decimales si se usan las flechas del elemento.

## Atributo [Min/Max](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max)
Este es otro atributo que sirve para restringir el comportamiento por defecto de algunos inputs, por ejemplo si hay un `min` y un `max` en un `input` del tipo *number* solo va a poder seleccionar numeros entre esos limites. Otro caso es cuando se utiliza este atributo en un `input` del tipo *date* lo cual hará que no podamos seleccionar ciertas fechas en el calendario que tenemos para seleccionar.
```html
<input type="number" min="0" />
 <!-- solo vamos a poder elegir numeros mayoures a cero usando la interfaz web -->
<script>
  const elemento = document.querySelector("input[type=number]");
  elemento.setAttribute("min", "0");
  // de esta manera también estamos haciendo lo mismo que arriba pero dinamicamente usando código
</script>
```

## Reiniciar estado inicial del formulario
Cuando empezamos a tener más dinamismo en nuestras aplicaciones tenemos que tener en cuenta ciertas cuestiones, la primera de ellas es ser ordenado con nuestro código y mantenerlo lo más limpio y simple posible. 

Una forma de tener ordenado nuestro código es hacer las cosas por partes, lo que vimos es que antes de validar nuestro formulario vamos a *"limpiarlo"* o *"reiniciarlo"*, para que el estado de nuestro formulario este correcto antes de hacer todas nuestras validaciones.
```javascript
function submit(event) {
  const form = event.target;
  limpiarFormulario(form); // sacamos todos los errores que tenemos por pantalla
  validarFormulario(form); // hacemos todas nuestras validaciones por código y mostramos por pantalla
  // entonces siempre que vamos a validar nuestro formulario, lo hacemos sin nada en nuestra pantalla y con un estado limpio en nuestras estructuras de datos que utilicemos.
}
```

## Eliminar elmentos del DOM
Ya vimos que podemos crear elementos usando JavaScript y agregarlos a la pantalla, ahora vamos a ver que todos los elementos tienen una forma de eliminarse, usando el método [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove).

```javascript
const element = document.querySelector("#paraEliminar");
element.remove(); // va a eliminar el elemento con el id=paraEliminar
```

## Agregar atributos a los elementos del DOM
Otra cosa que podemos cambiar de los elementos usando el DOM y JavaScript es agregar nuevos atributos a estos. Usando el metodo [setAttribute]() de los elementos.

```javascript
const element = document.querySelector("#atributo");
element.setAttribute("min", 38); // va a agregar un nuevo atributo al elemento min=38
```