# Clase 4

* Repaso
* Práctica
  * Layout semántico con contenido usando los elementos que vimos (header, main, footer, p, hs, em, strong, ul, ol, a, img)
  * Uso de reglas de css

## Letras (fonts)
Algunas de las propiedades que usamos eran `font-family` y `font-size`. Pero [este es el listado](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Fonts) de todas las propiedades relacionadas con la letra.

### [font-family](https://developer.mozilla.org/es/docs/Web/CSS/font-family)
Establece el tipo de letra que va a usar un el elemento seleccionado.
* Hay tres estilos estandares que todos los browsers tienen: `sans-serif`, `serif` y `monospace`.
* Cómo no todas las computadoras tienen los mismos tipos de letra instalados como valor de nuestra propiedad podemos poner varias opciones y el browser las prioriza de izquierda a derecha. Por ejemplo:
``` css
h1 {
  font-family: Arial, Helvetica, sans-serif;
  /* Acá estamos diciendo que queremos como primera opción el tipo de letra Arial, sino la tenemos en nuestra computadora que utilice Helvetica y cómo última opción que use el estandar sans-serif (esta última siempre la va a encontrar en nuestra computadora para mostrarla) */
}
```
> serif son todas las letras que tienen como *puntas*, la más conocida es **Times New Roman**, sans-serif son los tipos de letras que *no tienen estas puntas*, la más conocida es **Arial** y por último las monospace son las fuentes donde *todas sus letras ocupan el mismo ancho*, por ejemplo la letra **Courier**.

### [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
Esta propiedad establece el tamaño que va a tomar la letra. Y los valores se pueden definir de diferentes maneras, pero las más utilizadas son las siguientes:
* **px** que representa un píxel de la pantalla, es una buena opción si estamos haciendo pruebas en un browser de escritorio, pero si queremos que nuestro diseño sea responsivo, qué se *"vea bien"* en todos los dispositivos, no es recomendable usarlo.
* **em** es una unidad relativa a partir del tamaño de letra que tiene el padre, y que por defecto en los exploradores es 16px. Se dice em, porque toma el ancho de la letra M.
* **rem** es una unidad relativa pero a partir del elemento raíz del sitio (elemento *html*). Nosotros vamos a usar esta opcion.

``` css
h1 {
  font-size: 1.5rem;
  /* Si no cambiamos las opciones default de los exploradores web, estas expresiones son iguales -> 16px = 1em = 1rem */
}
```

> Nota: Existe un *shorthand o atajo* para poner todos los valores relacionados de las letras en una sola propiedad y es `font`

## [Colores](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) (colors)
Si queremos modificar el color de la letra utilizamos esta propiedad y los valores los podemos expresar de diferentes formas:
* **nombre del color**: si escribimos el nombre del color en ingles vamos a cambiar el color de letra usando ese color, por ejemplo si queremos poner la letra de color rojo, usamos *red* como valor.
* **rgb** (red, green, blue): usamos la función rgb para representar nuestro color pasando como primer parametro la cantidad de rojo que queremos (valor es entre 0 y 255), luego la cantidad de color verde que queremos y por útlimo la cantidad de azul que queremos y al combinarse nos da el color que veremos en el texto del elemento que elegimos.
* **rgba**: se usa de la misma forma que rgb pero el último parametro ahora un número que representa la transparencia (para hacer el color más claro o más oscuro).
* **hexadecimal**: representa los colores con 6 números hexadecimales (de 0-9 y de A-F) y cada par representa una parte del rgb, los primeros dos digitos son el rojo, los segundos dos el verde y los ultimos el azul.
* **hsl** (hue, saturation, lightness): representa los colores a partir de su matiz, saturacion e iluminación y el valor es aplicado usando una función hsl donde cada parametro se le pasa un valor del 0 al 100%.
* **hsla**: se utiliza igual que el hsl pero cómo último parametro tenemos la transparencia.

```css
h1 {
  color: white;
  color: #FFFFFF; /* si todos los valores son iguales se puede obviar el par y usar solo tres digitos, por ejemplo #FFF */
  color: rgb(255,255,255);
  color: hsl(0, 100%, 100%);
  /* todas estas declaraciones de estilo son tienen los mismo valores escrito de diferente formas */
}
```

## [Bordes](https://developer.mozilla.org/en-US/docs/Web/CSS/border) (borders)
Si queremos agregarle líneas o un formato a nuestros bordes tenemos varias propiedades como `border-width`, `border-style`, `border-color` y si queremos que solo sea un borde especifico, ponemos el nombre en ingles luego del `border-*` y antes de la propiedad, por ejemplo `border-top-style` y podemos tener `top`, `right`, `bottom` y `left`.

### border-width
Representa el ancho que va a tomar el borde, y puede tomar cualquier valor númerico usando las mismas unidades que usabamos en font-size. [Acá](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width) podemos ver todas las opciones.

### border-style
Representa el tipo de línea que va a tener un componente, algunos ejemplos son `solid`, `none`, `dotted`, etc. [Acá](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) podemos ver todas las opciones.

### border-color
Representa el color que va a tomar la línea y toma cómo valores las mismas unidades que la propiedad color que vimos más arriba. [Acá](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color) las opciones.

### [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
Es un shorthand y setea los valores width, style y color para todos los lados de un contenedor, su valor no tiene ningún orden especifico.
```css
p {
  border-width: 1px;
  border-style: solid;
  border-color: red;
  /* el conjunto de las tres declaraciones de arriba es igual al siguiente shorthand: */
  border: red 1px solid;
  border: solid 1px red;
  border: 1px red solid;
  /* las tres declaraciones de arriba son iguales */
}
``` 

## Fondo (background)
Para ponerle un fondo a algún elemento lo hacemos a través de la propiedad `background-*`. Por ejemplo, si queremos que nuestro fondo se verde usamos la propiedad *`background-color`* con el valor green.

Vimos tres propiedades, `background-color`, `background-image` y `background-repeat` y a su vez todas se pueden combinar usando un shorthand [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

### [background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
Usando esta propiedad podemos hacer que nuestro elemento tenga un fondo de un color especifico, los valores que usamos son de las mismas unidades que la propiedad color que vimos anteriormente.

### [background-image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
Mediante esta propiedad podemos definir una imagen como fondo de un elemento y como valor recibe una función `url` que recibe una ruta a una imagen, por ejemplo:
```css
body {
  /* Por defecto las imagenes se repiten a lo ancho y a lo largo de todo el elemento */
  background-image: url("http://www.lolcats.com/images/u/11/45/lolcatsdotcom3gp6wm7dw3jihq9t.jpg")
  /* También podemos usar rutas internas para referenciar imagenes locales */
}
```

### [background-repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
Esta propiedad sirve para indicar cómo queremos que nuestras imagenes de fondo se repitan, podemos decirle que se repitan en un solo eje, `repeat-x`-`repeat-y`, que no se repitan, `no-repeat`, que se repita en todas las direcciones, `repeat`, entre otros.

> La propiedad **`background`** sirve como shorthand para definir en una sola declaracion las propiedades que vimos recién y algunas otras más.

