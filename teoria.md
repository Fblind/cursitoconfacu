# Clase 1

## Cosas importantes que no vimos
* [Cómo funciona internet](http://www.internetfundamentals.com/)
* [Teoría de todo](https://frontendmasters.github.io/bootcamp/)

## Breve introducción de los lenguajes
### HTML (HyperText Markup Language)
Este lenguaje nos va a servir para **definir la estructura y el contenido de nuestra página**, con este lenguaje lo que decimos es bueno aca queremos poner un texto, aca un titulo, aca una imagen, etc etc

### CSS (Cascading style sheet)
Este lenguaje nos sirve para **ponerle onda, formato a nuestra página**, ya que el html nos define lo que queremos mostrar pero sin ningún diseño particular, el que se encarga de darle forma a la página es el CSS.

### JavaScript
Se encarga de reaccionar a cosas que hace el usuario, de iteractuar con él, agregar cosas dinamicas, etc etc.

## HTML
Lista y referencia de elementos que vimos (y cosas que todavia no)
* https://frontendmasters.github.io/bootcamp/html
* https://developer.mozilla.org/en-US/docs/Learn/HTML

Todos los lenguajes de programación se pueden definir con dos partes, la sintaxis y la semanatica. La sintaxis son las reglas que tenemos que seguir para que la computadora entienda lo que escribimos, y la semántica se refiere a lo que nosotros queremos q mostrar a otra persona, lo que queremos transmitir, en el caso del HTML enteneder la **semántica** de cada elemento y usarlos correctamente es lo más importante a mi parecer.

> HTML no agrega ningún formato, los estilos y diseños que vemos que tienen cada elemento en nuestras páginas son agregados con CSS, cuando no tenemos ningún CSS propio cada navegador nos agrega uno por defecto y por eso es que vemos diferentes formatos para nuestros elementos.

### Anatomia de un documento HTML
Los documentos HTML son donde escribimos todo el contenido que queremos mostrar en nuestro website y tiene la siguiente estructura:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

**DOCTYPE**
``` html
<!-- El elemento doctype representa la version de HTML en la cual esta escrita la pagina, nosotros vamos a usar <!DOCTYPE html> que representa que nuestra version es la 5.-->
<!DOCTYPE html>
```

**HTML**
``` html
<html>
  <!-- Esta etiqueta es el elemento padre o raíz de todo nuestro documento. Establecemos que estamos armando una estructura en HTML y todos los elementos que necesitemos para hacer nuestra página tienen que estar aca adentro -->
</html>
```

**HEAD**
``` html
<html>
  <head>
    <!-- Este elemento representa la metadata del documento, la configuración y su descripcion general, por ejemplo incluye información sobre los estilos, los scripts, y data para ayudar a los browsers o páginas de búsquedas.
    Por ejemplo acá va el elemento title, que representa el titulo de la pagina y se muestra en la barra de herramientas de tu navegador. -->
  </head>
</html>
```

**BODY**
``` html
<html>
  <head>
  </head>
  <body>
    <!-- Este elemento representa el contenido de nuestro html y es lo que nosotros vamos a ver en el navegador, dentro del body van a ir nuestros elementos html más comunes que representan cosas, como el p, la img, etc -->
  </body>
</html>
```

### Anatomia de un elemento HTML
Los elementos HTML son la parte del lenguaje que le da significado al contenido de nuestra página.

Un ejemplo de un elemento html es:
``` html
<h1>Hola Mundo</h1>
```
En el ejemplo anterior estamos creando un elemento `h1`, el cuál indica que es el título que tiene mayor importancia en una página (heading 1) y por lo general debemos tener uno solo en cada una de nuestras páginas.

> Acá esta la referencia a todos los [elementos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

Los *elementos o etiquetas o tags*, muchas veces se los puede mencionar de estas formas y estamos refiriendonos a lo mismo, tienen un tag (`<>`) de apertura y otro de cierre (`</>`) y entre medio va el contenido que querramos agregar. Hay algunos elementos que se pueden autocerrar (self closing elements), no tienen las dos partes como img (`<img />`) ya que no se los usa con ningún contenido.

> Existen elementos que por si solo no hacen nada, como `ol`, `ul`, `table`, yo los llamo **elementos compuestos**, porque *necesitan si o si de otros elementos* para tener significado, por ejemplo el `ol` y el `ul` necesitan de los elementos `li`.


#### Resumiendo:
**Etiqueta de apertura:**
* `<` un signo menor que se conoce como apertura de la etiqueta.
* `tipoDeEtiqueta` puede ser una o varias letras que describen el tipo de etiqueta que queremos crear (h1, a, p, etc).
* `>` un signo mayor que se conoce como cierre de la etiqueta.
```html
<tipoDeEtiqueta>
```

**Contenido:**
* Contenido de la etiqueta: puede ser un texto u otro/s elemento/s de HTML
```html
<tipoDeEtiqueta>Contenido de mi etiqueta
```

**Etiqueta de cierre:**
* Tiene la misma estructura que la etiqueta de apertura.
* Se tiene que llamar igual que la etiqueta de apertura para que el navegador entienda que acá termina lo que comenzó con la etiqueta de apertura.
* `/` tiene una barra inclinada para determinar que es una etiqueta de cierre (sino sería igual que la de apertura).
```html
<tipoDeEtiqueta>Contenido de mi etiqueta</tipoDeEtiqueta>
```

**Etiquetas sin contenido:**
* Algunas etiquetas no tienen contenido y funcionan como placeholder (un lugar donde vamos a poner algo).
* Este tipo de etiquetas utilizan la apertura y cierre en una sola estructura

```html
<img />
```

### Atributos HTML
Los atributos son todo lo que escribimos de la forma *atributo="valor"* **dentro de las etiquetas de apertura** de nuestros elementos html hay algunos que son obligatorios o requeridos como el caso de *src* en *img* que si no los agregamos muestro elemento no mostraria nada, todo depende del elemento que utilicemos y *sirven para describirlo de una mejor manera, agregar funcionalidad, alterar su comportamiento*. 

Se puede agregar la cantidad de atributos que querramos a nuestros elementos, y estos tienen que ir separados por espacios.

> Podemos crear nuestros propios atributos usando `data-nombreDelAtributo` y hay otros atributos conocidos como `aria-*` que sirven para describir el elemento para dispositivos y tecnologias de asistencia.