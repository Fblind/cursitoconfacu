# Clase 6
* Repaso (selectores, combinadores)
* Pseudo clases
* Box-model
* Display property

# Pseudo classes
Sirven para agregar un estilo especial a nuestros elementos cuando se encuentran en un estado especial y este estado puede estar relacionado a otros elementos de nuestro documento o a diversos factores del exterior, como la interacción con el usuario y el browser por ejemplo.

Las pseudo clases se agregan al final del selector agregandole dos puntos (`:`) seguido del nombre de la pseudo clase:
```css
div:hover { /* la pseudo clase va pegada al selector */
  /* acá estamos indicando que cuando un elemento div esté en estado `hover` (cuando el mouse esta sobre ese elemento) su contenido tenga color de letra azul */
  color: blue;
}
```

*No todos los elementos tienen los mismos estados* por lo que, aunque podriamos agregar pseudo clases a todos los elementos, puede que nunca se aplique un estilo basado en pseudo clases. 

> [Lista completa](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) de las pseudo clases.

## Link pseudo classes
Una de las formas mayormente utilizadas es cuando queremos mostrar diferentes estilos en los diferentes estados de nuestros links, los estados de los links son los siguientes y el **orden es importante** a la hora de agregarlos en nuestro archivo css.

* `:link`: Representa un link que no fue visitado
* `:visited`: Representa un link que fue visitado
* `:focus`: Representa el estado del link mientras que es seleccionado (dura hasta que selecciones otro elemento)
* `:hover`: Representa el estado del link cuando el mouse esta sobre éste
* `:active`: Selecciona el estado del link mientra este esta "activo" (el tiempo mientras que hacemos click hasta que levantamos el dedo del mouse)

> ! Las pseudo clases se pueden aplicar a **todos** nuestros selectores, no son especiales de los links aunque se usan mucho en este tipo de elementos.

--------------------------

# Box Model
**Todos los elementos html tienen una caja que lo rodea**. Este concepto es *importantisssssimo* a la hora de pensar en como aplicar el diseño que queremos a nuestros elementos, es la otra pata además de la *cascada* y la *especificidad* que tenemos que tener bien clara.

Por si no quedó claro todo en HTML y CSS son cajas y las cajas estan por todos lados, cajas cajas cajas, si tatuatelo :D.

> ! Estas cajas se pueden superponer, tener en cuenta que aunque parezca que esten en 2D, estan en 3D, vamos a ver más adelante formas de superponer cosas nosotros, pero si queres mirar existe la propiedad [`z-index`](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

Ahora bien, cada caja se compone de tres propiedades principales *`border`*, *`margin`* y *`padding`* (también tienen un `width` o ancho, un `height` o un alto y un contenido).

![boxModel](https://github.com/Fblind/cursitoconfacu/blob/master/clase06/boxModel.png)

Vamos a ver todas las partes de nuestro box model

## Border
Esta propiedad ya la utilizamos anteriormente y es la más adaptable a nuestro idioma. El borde sirve para remarcar nuestro contenido.

Cada parte de nuestro border (arriba, abajo, izquiera y derecha) puede tener su propio estilo, una explicación más detallada de las principales formas de uso las vimos [anteriormente](https://github.com/Fblind/cursitoconfacu/blob/master/clase04/teoria.md#bordes-borders)

## [Padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
A la distancia entre el contenido y el borde le decimos `padding` y al igual que todas las propiedades de nuestro box model podemos aplicar diversos estilos en cualquiera de nuestros 4 lados.

> Las unidades númericas que puede tomar el padding siempre son **positivas**.

Las propiedades que representan nuestro padding son las siguientes:
* `padding-top`: agrega espacio arriba de nuestro contenido.
* `padding-right`: agrega espacio a la derecha de nuestro contenido.
* `padding-bottom`: agrega espacio a la izquierda de nuestro contenido.
* `padding-left`: agrega espacio abajo de nuestro contenido.

```css
.caja {
  padding-top: 5rem;
  padding-right: 2px;
  padding-bottom: 10%;
  padding-left: 0;
  /* los valores se pueden usar con todas las formas de unidades de tamaño que conocemos */
}
```

### Shorthand
Existe un atajo para poder escribir las propiedades de padding en una sola linea y tiene las siguientes reglas si especificamos:
* **Un solo valor**: Se va a aplicar ese mismo tamaño (espacio) a los *cuatro lados de la caja*
* **Dos valores**: El primer valor va a representar el padding que va a tener la *parte de arriba y abajo* y el segundo valor la *parte izquierda y derecha*
* **Tres valores**: El primer valor va a representar el padding que va a tener la *parte de arriba*, el segundo la *parte de izquierda y derecha* y el tercero solo la *parte de abajo*
* **Cuatro valores**: Los tamaños se van a aplicar como las agujas del reloj, el *primero arriba, después derecha, abajo y sobre la izquierda*

```css
.caja {
  padding: 2rem; /* los 4 lados van a tener 2rem de espacio */
  padding: 2rem 1rem; /* arriba y abajo va a tener 2rem y la derecha e izquierda 1rem */
  padding: 2rem 1rem 4rem; /* arriba 2rem, derecha e izquierda 1rem, abajo 4rem */
  padding: 2rem 1rem 4rem 5rem; /* 2rem arriba, 1rem a la derecha, 4rem abajo y 5rem a la izquierda */
}
```

> ! Una regla memotecnica para acordarse del orden es **TRouBLe -> top, right, bottom, left** si como gira el reloj no es para nosotros 🕗.

## [Margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
Sirve para dar espacio entre el borde y el resto de tu página, con respecto de tu próximo elemento. Las reglas y propiedades son iguales que el padding pero *reemplazamos `margin` por `padding`*.

### Diferencias entre margin y padding
Si bien ambas propiedades se escriben de la misma manera y siguen las mismas reglas en sus shorhand hay algunas pequeñas diferencias:

* Los valores que pueden tomar las propiedades de margin **pueden ser positivos o negativos**
* Tenemos un valor especial llamado *`auto`* que se usa para delegar el espacio que se le va a agregar al navegador, el cual va a poner el margen que crea más conveniente para que nuestro contenido quedé "bien".

> ! Una forma de centrar un elemento horizontalmente en nuestra página es usar `margin: 0 auto;` que hace que no tengamos margenes arriba y abajo y deja que el explorador ponga el margen más conveniente a la izquierda y a la derecha (en este caso lo que hace el explorador es dejar el mismo tamaño a la izquierda y a la derecha)

## [Width](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
Otra de las propiedades que es parte de nuestro model box es el `width` que representa el ancho de un elemento, más adelante vamos a ver que depende el tipo de caja que usamos este ancho se va a aplicar a diferentes partes.

> ! También existe una propiedad [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) que va a representar el alto de nuestra caja, pero por lo general no es algo que se tenga que especificar sino que dejamos que la altura se tome automaticamente en base a nuestro contenido.

## Box Model Types
Tenemos dos tipos de modelos de cajas que podemos usar: 
* content model box
* border content box

Por default usamos el **content model box** que cuando habla de ancho se refiere al *ancho del contenido*. Y para determinar el total de ancho de la caja se suma el ancho del contenido + el ancho de los padding izq y der, margin y borde.

![contentbox](https://github.com/Fblind/cursitoconfacu/blob/master/clase06/contentBox.png)

En cambio si queremos que nuestra propiedad de ancho `width` se refiera al *total de la caja (sin contar los margenes)* tenemos que usar el **border content box**. Entonces en vez de sumar los padding bordes y margenes, le restamos el padding y border al total y tenemos el ancho del contenido.

![borderbox](https://github.com/Fblind/cursitoconfacu/blob/master/clase06/borderBox.png)

### Cómo lo aplicamos ?
``` html
<style>
html {
  /* opcion 1 */
  box-sizing: content-box;
  /* opcion 2 */
  box-sizing: border-box;
  /* definimos que todos los elementos del documento van a usar un tipo especifico de cajas */
}
*, *:before, *:after {
  box-sizing: inherit;
  /* aca estamos deciendo que ademas de todos los elementos también los pseudo elementos (todavia no lo vimos :D) que esten antes y después de cada elemento usen hereden el tipo de cajas que definimos antes */
}
</style>
```
--------------------------


# Block & inline elements
Todos los elementos HTML por default caen en alguna de estas dos categorías:
* **block level element**: son tan anchos como sea su contenedor o sea su padre (div, h, p, body)
* **inline level element**: son tan anchos como su contenido (a, strong, em, span, img)

## Elementos no semanticos
Hay dos elementos que usamos exclusivamente cuando necesitamos contener o agrupar una parte de nuestros elementos para poder aplicar un estilo.
* `div`: Elemento en *bloque* para dividir y agrupar elementos, sin semantica, es una caja generica.
* `span`: Elemento en *linea* y tiene la misma finalidad que un div pero cuando queremos hacerlo en linea.

--------------------------


# [Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
Como dijimos tenemos tenemos elementos block e inline. Desde CSS podemos cambiar la forma en cómo se muestran (o cómo se van a tratar) nuestros elementos, por ejemplo podemos hacer que un elemento en linea tome la forma de un elemento en bloque. 

```css
p {
  display: inline;
  display: block;
  display: inline-block;
  /* Hay muchos valores más que puede tomar la propiedad display */
} 
```
