# Clase 12

* repaso
* teoria client + server
* carpetas y como referenciarlas en programación
* tipos de inputs
* placeholder

## [Tipos de inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
Los inputs pueden tomar diferentes formas en nuestro html, dependiendo de lo que queremos mostrar vamos a usar un tipo especifico de input el cuál nos dará la flexibilidad y la accesibilidad necesaria para los datos que queremos obtener en nuestro formulario.

Por ejemplo, tenemos el [tipo número](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number) el cuál se especifica poniendo el atributo `type="number"` al input, lo que hará que nuestro campo de entrada solo acepte números, a su vez también nos muestra unas flechas para sumar o restar el número actual desde allí y en los dispositivos que tienen teclados dinamicos (tablets, celulares) nos mostrará solo el teclado númerico, mejorando mucho la experiencia del usuario a la hora de llenar el formulario.

Veamos algunos de los más comunes y su comportamiento

> !Todos los ejemplos de los tipos deben estar rodeados por un elemento form.

### [Text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
El tipo más simple y más utilizado es el `type="text"`, que nos sirve para recolectar un tipo generico de información, aceptando tanto letras, números y simbolos. Un ejemplo de uso sería obtener el nombre de un cliente o su domicilio.
```html
<label for="firstName">Escriba su nombre:</label>
<input type="text" id="firstName" name="firstName">
```

### [Radio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
Este tipo se utiliza cuando podemos elegir una sola opción entre al menos 2 opciones posibles. Por ejemplo alguna respuesta para algún examen.

Necesita de algunos atributos requeridos para poder funcionar correctamente, los cuales son `name` y `value`.
* **name**: todos los radio buttons asociados deben tener el mismo nombre, de esta manera identificamos que ese grupo de radios pertenece a la misma respuesta y sólo uno de ellos puede ser elegido.
* **value**: la valor de la opción propiamente dicha que se enviará cuando hagamos submit del form.

```html
¿Cuánto es 2 + 2?
  <!-- rodeamos el input con un label para que queden asociados y además el puntito se muestre al lado del label -->
  <label>
    <input type="radio" name="twoPlusTwo" value="four"> 4
  </label>
  <label>
    <input type="radio" name="twoPlusTwo" value="seven"> 7
  </label>
  <label>
    <input type="radio" name="twoPlusTwo" value="eight" checked> 8
    <!-- checked: agregamos este atributo para que esta opción se muestre seleccionada al principio -->
  </label>
```

### [Checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
Funciona de la misma manera que el `type="radio"` solo que este puede seleccionar varios valores de respuesta o simplemente tener una sola opción, cómo si fuera si o no.
```html
  <label>
    <input id="subscribe" type="checkbox" value="subscribe">Recibir novedades del curso ?
  </label>
```

### [Submit](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit)
Este tipo de input se mostrará como un botón y sirve para enviar toda la data asociada de nuestro formulario cuando hacemos click sobre él o cuando apretamos `enter` en nuestro teclado.
```html
<input type="submit" value="Enviar!">
```

> !No necesariamente tenemos que usar un input del tipo submit para enviar nuestro formulario, también podemos usar un button del type submit, ejemplo => `<button type="submit">Enviar!</button>`

### [Tel](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel)
Este tipo de input nos sirve para guardar información relacionada a numeros telefonicos, a simple vista es igual que el input de tipo texto pero tienen algunas diferencias que mejoran la experiencia del usuario cómo por ejemplo en algunos **dispositivos mobiles nos mostrará sólo el teclado númerico** en vez del general.
```html
<label for="telephone">Complete su telefono:</label>
<input type="tel" id="telephone" name="telephone">
```

### [Email](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
Mismo comportamiento que el tipo de texto, con la salvedad que, cómo ocurría con el tipo tel, en algunos dispositivos nos mostrara el `@` en un lugar de fácil acceso al igual que algunas ayudas para completar nuestro email, como el `.com` o hasta nuestro propio mail.
```html
<label for="email">Complete su email:</label>
<input type="email" id="email" name="email">
```

### [Number](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)
Aunque ya lo mencionamos al principio, existe el tipo `number`, que restringe a números lo que el usuario puede completar en ese campo. Puede ser *positivo o negativo*, nos agrega unas flechas al costado para aumentar o disminuir el número actual y hasta **podemos definir el rango de números validos** (si nuestro form no tiene la propiedad novalidate nos mostrará un error) y cual puede ser **el intervalo de suma o resta** del número.
```html
<label for="pair">Escriba un número par entre 2 y 12:</label>
<input type="number" id="pair" name="pair" min="2" max="12" step="2">
<!-- min: setea el valor minimo que puede tomar el input -->
<!-- max: setea el valor máximo que puede tomar el input -->
<!-- step: setea cuanto va a sumar o restar cuando hagamos click en las flechas, por ejemplo si tenemos 2 seteado cada vez que apretemos la flecha para arriba va a sumar dos, 2, después 4, después 6, etc -->
```

> !Existen los inputs del tipo [`hidden`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden), los cuales no se van a mostrar al usuario pero si se van a enviar cuando hagamos submit de nuestro formulario, son útiles cuando queremos enviar *meta-información*, o información que no queremos que complete el usuario.

### [Placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefplaceholder)
La mayoría de nuestros inputs aceptan un atributo llamado `placeholder` el cual tiene como valor una linea de texto indicando cómo se debe completar ese campo o una ayuda para completarlo. Vale aclarar que placeholder no tiene ningún valor semantico, por lo que este atributo no saca la necesidad de tener un label asociado al input.

> !existen pseudo classes (:placeholder-shown) y pseudo elementos (::placeholder) para poder modificar el estilo de este atributo.

## Cliente - Servidor, o cómo y dónde van mis datos ?

## Cómo referenciamos una imagen, archivo, carpeta, etc desde nuestro código?



