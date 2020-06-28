# Clase 2

* Nuevos elementos HTML (en index.html)
* Arbol del documento HTML
* Contenido en linea vs contenido en bloque
* Layout HTML semantico
* Introducción CSS

## Árbol de HTML
El documento HTML hay que verlo en como si fuera un arbol, tiene niveles de jerarquía donde todas parten de un elemento, nuestro elemento **raíz** (o root). La raíz es nuestro elemento `html`. Dentro de éste creamos todos nuestros elementos y contenido, donde a elemento de cada nivel (o cada elemento dentro de un elemento) se lo llama **hijo (o children)**, al elemento que lo contiene se lo llama **padre (o parent)** y si tenemos varios elementos que estan dentro de un elemento padre a éstos se llaman **hermanos (o siblings)** entre sí.

![arbol de documento html](/home/fack/Documentos/cursitoconfacu/clase03/dom_tree.gif)

## Contenido en linea vs contenido en bloque
En html podemos separar la creación de nuestro contenido en dos categorías de elementos, los que aceptan contenido en linea y los que tienen contenido en bloque (inline o block text content), entonces:
* [Block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements): *son tan anchos como su **contenedor*** o sea su padre (h, p, body, div)
* [Inline-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements): *son tan anchos como su **contenido*** (a, strong, em, img, span)

> Nota: div y span no los vimos, son dos elementos que no tienen semántica, solo sirven como contenedores para agrupar contenido y son útiles para diseñar con CSS.

## Layout semántico
Hay un conjunto completo de elementos diseñados con el único propósito de agregar más significado al diseño general de una página web, y se llaman **elementos de seccionamiento** (sectioning elements), cómo venimos hablando a través del curso debemos usar estos elementos semánticos con el fin de describir mucho mejor nuestra página y hacen que tanto los motores de busqueda y lectores de pantalla (screen readers) que puedan identificar las partes de nuestra web más fácil y mejor.

![layout semántico](/home/fack/Documentos/cursitoconfacu/clase03/semantic-layout.png)

## CSS
**C**ascade **S**tyle **S**heet significa hoja de estilo en cascada, y nos sirve para agregar reglas que cambian el formato de nuestro html. La parte de cascada significa que va tomando las reglas en orden descendente, si tenes una regla que dice que el color de tu texto tiene que ser rojo y abajo tenes esa misma regla pero dice que tiene que ser negro te va a mostrar el negro.

### Cómo escribo css ?
* Inline stylesheet con el **style** tag en el **head** (sirve para un archivo)
```html
<style type="text/css">
  body {
    background-color: yellow;
  }
</style>
```

* Inline style en el html. (no recomendado, solo sirve para uno, no es muy extendible)
```html
<body syle="background-color: yellow;"></body>
```

* Archivo css externo. (sirve para multiples archivos)

Primero lo linkeamos en el html
```html
<link href="path/to/css/style.css" rel="stylesheet" type="text/css" />
```
Y luego escribimos nuestras reglas en nuestro archivo style.css
``` css
  body {
    background-color: yellow;
  }
```

> Nota: Nosotros **siempre** vamos a escribir css en un **archivo externo**

### Anatomia de Archivo CSS o un bloque CSS.
Dentro de nuestro archivo CSS vamos a escribir las reglas (o conjunto de declaraciones de estilos) que van a modificar nuestros elementos. Una relga se escribe de la siguiente manera:

``` css
selector {
  nombre-propiedad: valor; /* style declaration */
  otro-nombre-propiedad: valor;
}

otro-selector {
  nombre-propiedad: valor;
}
```
* En CSS todo el tiempo vamos a estar utilizando estos dos conceptos:
  * Seleccionar elementos
  * Definir como queremos que se vean
* Según como utilizemos CSS podemos definir como se ve un elemento, un documento o todo nuestro sitio.

> Nota: En CSS también podemos escribir comentarios /* de esta manera */ y al igual que en HTML no modifican nuestro contenido, sirven de ayuda para nosotros.

### Reglas CSS
Veamos en detalle cómo escribimos una regla y qué significa cada parte
``` css
selector {
  nombre-propiedad: valor; /* style declaration */
  otro-nombre-propiedad: valor;
}
```

Todo comienza con un **selector**
* Un selector sirve para identificar el conjunto de elementos que queremos modificar el formato.

Luego abrimos una **llave** de apertura (**{**)
* Entre las llaves van a ir todas nuestras declaraciones de estilos, lo que va entre llaves se le dice *bloque* y todo ese bloque de declaraciones son las que se van a aplicar a los elementos html.

Dentro de las llaves van nuestras **declaraciones de estilo**:
* Las declaraciones se escriben de la forma *propiedad: valor* donde la propiedad es una caracteristica de estilo que queremos modificar como color, font-family y el valor que queremos aplicar, para cada propiedad tenemos un conjunto de valores definidos que se pueden usar, por ejemplo para color algunos ejemplos son 'red' o 'black'.
* Podemos poner la cantidad de declaraciones que querramos dentro de nuestro bloque.

Y por último cerramos el bloque poniendo una la **llave** de cierre (**}**).

### Selectores por elemento (element selector)
Los selectores son la forma que tenemos de identificar que elementos queremos diseñar.
Cualquier elemento html es un selector, y eso significa que a **TODOS** los elementos de ese tipo le va a aplicar esos estilos o reglas.
``` css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```
En este caso estamos diciendo que todos los elementos body y los que esten dentro de body usaran la font-family que definimos.

> Tenemos muchos tipos de selectores además del selector por elementos, por ejemplo selector de clase, selector por id, selector descendiente, selector por atributo, entre otros. [Aquí](https://developer.mozilla.org/es/docs/Web/CSS/Selectores_CSS) hay una lista completa.

### La *C* en CSS - Cascada
Uno de los temas más importantes que tenemos que entender para usar CSS es cómo es que se aplican los estilos, y por eso debemos entender las reglas de la cascada en css:

* Si tenemos reglas que aplican a un mismo elemento las **fusiona** quedandose con la declaración definida **más abajo** si es que es la misma propiedad.
* Los elementos hijos **heredan** las propiedades visuales de sus elementos padres.
* Si tenemos varias reglas que se pueden aplicar a nuestros elementos estas se aplican mediante la **especificidad**.