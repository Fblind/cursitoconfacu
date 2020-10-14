# Clase 13

* repaso forms (form, actions, fieldset, legend, label, input, accesibilidad - for - id - name)
* tipos de inputs
* otros atributos de los input
  * placeholder attribute (::placeholder pseudo element, :valid, :invalid pseudo class)
  * input atributes de validacion (min, max, etc)
* textarea
* select


## [Textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
Además de los inputs tenemos dos elementos más que sirven para obtener información a partir de la interacción del usuario, el primero que vamos a ver es el `textarea` y simplemente es una caja donde podemos agregar texto y se usa cuando ese texto para agregar es largo y ninguno de los tipos de inputs nos sirven, por ejemplo para escribir comentarios.

Los atributos `id` y `name` funcionan de igual manera que funcionan en los inputs. Además cuenta con la habilidad de atributos para definir cuantas filas (`rows`) y columnas (`cols`) nuestro textarea va a ocupar (ya que los diferentes exploradores pueden manejar distintos valores por defecto es *recomendable setear estos atributos* para que nuestra app se vea en todos los exploradores de la misma manera).

```html
<label for="comments">Comentarios adicionales:</label>
<textarea id="comments" name="comments" rows="3" cols="10"></textarea>
<!-- tambien se puede setear el atributo maxLength y minLength para requerir un rango de caracteres que se pueden escribir -->
```

> !existe un atributo spellcheck que nos indica si el explorador debe avisar que el texto es sintacticamente correcto o no.


## [Select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
Por último nos encontramos con el elemento `select`, que sirve para seleccionar una opción en una lista. Una forma de imaginarse este elemento es como una lista (`ul` u `ol`) que tiene opciones (`li`) y solo una se puede elegir. Es útil usarlo cuando el usuario tiene una idea o ya conoce las opciones que puede elegir, por ejemplo elegir el pais de nacimiento de una persona.

Asi como el `form` y las listas (`ul` y `li`) entre otros, el `select` es un elemento compuesto, dado que necesita de otro elemento llamado `option` y/o `optiongroup` para que tenga sentido su uso.

El elemento select acepta gran parte de los atributos comunes de los inputs (id, name, los de validación, etc), pero cuenta con algunos unicos como:
* **multiple**: si agregamos este atributo nos da la opción de elegir más de una opción de la lista, por defecto no esta seteado.
* **size**: se utiliza generalmente cuando tenemos seteado el atributo `multiple` y nos da la posibilidad de poder definir cuantas filas mostrará. Toma valores numericos enteros.
* **form**: podemos agregar este atributo para asociarlo al form que querramos, siendo el valor el id del form que queremos asociar.

### [Option](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
Este elemento puede estar dentro de los `select`, `optgroup` o `datalist` y representa un item de una lista (como si fuera un `li`) que se puede seleccionar. Es necesario agregar el atributo `value` con el valor que queremos que se envíe a nuestro servidor cuando esta opción es seleccionada. Por ejemplo si tenemos un `option` con `value="bien"` que vive dentro de un `select` que tiene `name="estadoDeAnimo"`, cuando se elija esa opción y nuestro `form` sea submitado se enviará `estadoDeAnimo=bien` como nuestro par clave-valor.

> !podemos agregar el atributo `selected` para mostrar una opcion seleccionada, tal como haciamos con los checkboxes o los radio buttons.

### [Optgroup](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
Sirve para agrupar varias `option` dentro de un `select`, acepta dos atributos:
* **label**: el cuál su valor será el titulo o descripción de la agrupación de opciones
* **disabled**: si agregamos este atributo ninguna de las `option` agrupadas podrán ser seleccionadas.

```html
<label for="countries">País de origen?</label>
<select id="countries" name="countries">
  <option value="">-- Seleccione un pais --</option>
  <!-- podemos agregar una opcion con value="" para hacer que se nos muestre como si fuera un placeholder -->
  <optgroup label="De America">
    <option value="argentina">Argentina</option>
    <option value="brazil">Brasil</option>
  <optgroup>
  <option value="spain">España</option>
</select>
```

## :valid, :invalid pseudo classes.
Existen dos pseudo clases que nos sirven para saber si nuestros campos de entrada estan válidos ([:valid](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid)) o invalidos ([:invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)), lo cuál nos permite cambiar los estilos basandonos en estos estados y combinados con los pseudo elementos `::before` y `::after` podemos lograr muchas de las cosas que antes de html5 las teniamos que hacer si o si con javascript.