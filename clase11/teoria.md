# Clase 11

* Corrección ejercicio (line-height, overflow, border-radius, shadow-box, vertical align center, ul)
* Intro forms

## [Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
## Qué son y para que se utilizan?
Un form es un elemento html *compuesto* y sirve para que el usuario pueda interactuar con nuestro sitio agregando o eligiendo información completando campos del formulario, luego esa información la podemos enviar a nuestro servidor el cual se encargará de procesarla de la manera que querramos.

El concepto de forms, es el mismo que existe en la realidad, el concepto de formulario viene de ahí, cuando tenes que completar una planilla para hacer un tramite, llenar una encuesta, completar unos datos para ganarte un premio, etc.

## Cómo lo usamos?
Como dijimos anteriormente, es un elemento compuesto, es decir que por sí sólo no nos sirve de nada, sino que es necesario que dentro de él haya elementos que lo "llenen" que los vamos a ver en la próxima sección.

El form se define de la siguiente manera:
```html
<form action="" method=""></form>
```
Y los atributos más comúnes y usados son:
* **action**: cuál va a ser la url que procesará los datos del formulario. Por defecto va a la misma página donde se esta parado.
* **method**: mediante qué metodo HTTP va a viajar esa información, puede ser GET, POST, o dialog, por defecto es GET.
* **novalidate**: agregamos este atributo si no queremos que nuestro formulario valide la información que ingreso el usuario (útil cuando queremos validar a mano el formulario, usando js por ejemplo)

### [Fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
Este elemento nos sirve para separar partes de nuestro formulario, al igual que el form también se compone de otros elementos, cómo los campos que hay que llenar con su descripción, un título para identificar la sección y cualquier otro elemento que querramos poner dentro de esa sección del formulario.

Se define de la siguiente manera:
```html
<fieldset><!-- Aquí van todos los elementos que componen la sección del form --></fieldset>
```

> !aunque no es obligatorio que este dentro del form para que quede asociado es preferible, si no lo queremos hacer podemos asociarlo usando el atributo *form* usando el valor del *id del form* como valor de éste. (`<fieldset form="form-de-contacto"></fieldset>`)

### [Legend](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
Este elemento se utiliza dentro del elemento fieldset y representa el *titulo* de la sección:

```html
<fieldset>
  <legend>Titulo de la sección</legend>
</fieldset>
```

### [Label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
Este elemento representa el titulo o la etiqueta de un cierto campo de entrada. Y esta directamente asociado con estos campos de entrada, esta asociatividad nos da varios beneficios tales como poder activar o hacer foco sobre un campo de entrada apretando sobre el label o escuchar el titulo del campo de entrada en un lector de pantalla.

Tenemos dos formas de usarlo:
```html
<label>
  Cuál es tu apellido ?
  <input name="apellido"/>
</label>
<!-- o utilizando el atributo for que asocia el valor que le pasemos con el id de un input -->
<label for="apellido">Cuál es tu apellido ?</label>
<input id="apellido" name="apellido"/>
<!-- es común tener el mismo valor en el id y el name del input -->
```

### Campos de entradas
Para completar el formulario tenemos que responder preguntas, llenar datos, elegir entre ciertas opciones, fechas, etc. Principalmente existen 3 elementos para hacer esto:

* **input**: le va a dar la posibilidad al usuario de completar un campo que va a una forma especifica definida por el atributo *type*.
* **textarea**: nos da la posibilidad de escribir texto que puede ser largo.
* **select**: nos da la posibilidad de mostrarle al usuario una lista de opciones que puede seleccionar.

> !comunmente a estos elementos se los llama *interactivos* ya que el usuario puede interactuar con éste y a su vez el elemento reacciona a las acciones del usuario

### [Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
Este elemento interactivo puede tomar muchas formas, dependendiendo de su atributo `type`. Es un elemento que se puede auto cerrar y se define de la siguiente manera:

```html
<input type="" id="" name="" />
<!-- es una buena práctica siempre setear estos tres atributos en nuestros inputs (ver más abajo la definición de cada uno) -->
```

En general los atributos varian según el tipo de input que sea, algunos de los *types* que puede tener tomar el input es *button, checkbox, radio, email, date, file, number, password, submit, tel, text, url*, entre muchos otros. Es importante usar el tipo correspondiente a lo que queremos que el usuario ingrese, por ejemplo si queremos que el usuario ingrese un email en un formulario, podemos usar el elemento `<input type="text">` cuando creamos el formulario, pero perderíamos funciones importantes que nos da el navegador, cómo la validación, la habilidad de autocompletar un mail que ya cargamos anteriormente y en ciertos dispositivos (móviles principalmente) la habilidad de tener el `@` en los atajos del teclado.

A su vez existen varios atributos generales para todos los inputs, a mi parecer estos son los más utilizados:
* **name**: Un nombre para identificar el input, que va a ser la clave del campo que se va a enviar una vez completado el formulario. (?nombre=valor&nombre1=valor1)
* **value**: Podemos setear el valor que queremos que tenga el input.
* **type**: El tipo de control del input 
* **required**: Si esta este atributo en el input, si no fue completado y el form no tiene seteado el atributo novalidate, el navegador no nos dejará enviar el formulario una vez completado.
* **disabled**: Si existe el atributo en el input, no se podrá cambiar el valor.

> !setear siempre el atributo *`id`* del input para asociarlo con el `label`, es decir la etiqueta del campo a completar en el formulario.

