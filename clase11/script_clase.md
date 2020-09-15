# Forms

## Qué son y para que se utilizan
Un form es un elemento html compuesto y sirve para que el usuario pueda interactuar con nuestro sitio y que luega esa información sea enviada a nuestro servidor el cual se encargará de procesarlo de la manera que querramos.

Formularios, cómo los que tenes que completar cuando vas a hacer un tramite.

```html
<form action="" method=""></form>
```
* action: a que url la informacion va a viajar (por defecto a la misma pagina '/')
* method: mediante que metodo http tiene que viajar esa informacion (por defecto GET) 

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form

* `<fieldset>` : sirve para separar partes de nuestro formulario
* `<legend>` : titulo de esa parte


## Campos de entradas (comunmente llamados inputs)
Para completar el formulario tenemos que responder preguntas, llenar informacion, etc, esos campos que nos permiten escribir o elegir opciones se los conoce comunmente como inputs.

## inputs
Los inputs son elementos html que pueden servir fuera de un formulario pero semanticamente es correcto agregarlos **dentro de un form** y que este asociado a un **label**, asi nuestro formulario es accesible (o al menos cumple con el minimo de accesibilidad).

> !Elementos autocerrantes

```html
<input type="" id="" name="" />
```
* type: de que tipo es el input, hay millones, vamos a ver estos
* id: identificador que sirve para asociar con el label
* name: nombre que se va a enviar en el request de la action del form

> labels => `<label for="[id del input]">Label</label>` o wrappeando al input, no se necesita el id

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

### types
> !required attr
> !value attr

* text: placeholder, maxLength, minLength, size
* number: min, max, step
* radio: accesible example, name for all the same
* checkbox
* submit ( puede ser un button tmb o lo q sea )

* tel
* color


## textarea
## select
```html
<select id="pietype">
  <option value="apple">Apple</option>
  <option value="cherry">Cherry</option>
</select>
```

TAREA:
https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1