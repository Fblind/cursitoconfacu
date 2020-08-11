# Clase 8

1. Flexbox

## [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
Flexbox o Flexible Box Module, es una de las formas para armar layouts que comenté anteriormente, principalmente los layouts que podemos definir con flexbox son unidimensionales, es decir que sólo podemos encargarnos de describir un eje, como columna o como fila.

Con esta herramienta vamos a poder disponer los elementos como querramos y hacer la mayoria de las cosas que necesitemos. El concepto más importante que quiero que te fijes en la cabeza es que **todos los elementos son cajas** y que tienen una *jerarquía*, es decir tenemos elementos que contienen otros elementos y los llamamos **padres e hijos**, en flexbox nos basamos en la relación de padre e hijo *directo* para ordenar los elementos.

Entonces siempre que usemos la propiedad de flexbox vamos a necesitar al menos dos elementos, un padre y un hijo, el padre lo vamos a llamar **flex container** o contenedor de flex y el hijo lo vamos a llamar **flex item**.

Y lo otro que debemos tener en cuenta cuando trabajamos con flexbox es que vamos a trabajar con dos ejes, el **eje principal** (el que definiremos con la propiedad flex-direction) y el **eje que cruza** (align-items)

### Propiedades del Contenedor
Para definir que queremos utilizar esta propiedad lo primero que debemos hacer es decir que queremos mostrarlo como flexbox en el elemento contenedor, para ello hacemos:
```css
.flex-container {
  display: flex; /* nuestro elemento va a mostrarse con la forma de una caja *flex*ible
}
```

#### [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
Para **definir el eje principal** tenemos que agregar la propiedad `flex-direction` en el contenedor, la cual toma alguno de los valores *row, column o sus variantes row-reverse y column-reverse*
```css
.flex-container {
  display: flex; /* no olvidarnos del display flex */
  /* si no definimos la propiedad flex-direction, por defecto tomará el valor row (de izq a derecha acomodará el contenido) */
  flex-direction: row; /* izq-der inline */
  flex-direction: column; /* izq-der block */
  flex-direction: row-reverse; /* der-izq inline */
  flex-direction: column-reverse; /* der-izq block */
}
```
> !Si definimos el *eje principal como row* entonces el *eje que cruza va ser column* y viseversa. Es importante tener claro cuál es nuestro eje principal y cuál el eje que cruza ya que de esto dependen las propiedades para justificar nuestro contenido y alinear nuestros items.

#### [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
Especifica **si los hijos** de este contenedor van a mostrarse en la misma línea o van a acomodarse debajo a partir del fin de la página. Puede tomar alguno de los siguientes tres valores *nowrap, wrap, wrap-reverse*
```css
.flex-container {
  display: flex; /* no olvidarnos del display flex */
  /* Si no definimos la propiedad flex-wrap, el valor por defecto será nowrap */
  flex-wrap: nowrap; /* elementos distribuidos solo en una línea (puede sobrepasar el tamaño del ancho o alto creando un overflow) */
  flex-wrap: wrap; /* elementos distribuidos en varias lineas cuando sea necesario */
  flex-wrap: wrap-reverse; /* como wrap pero son distribuidos de la forma contraria */
}
```

#### [flex-flow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow)
Cómo fuimos viendo a lo largo del curso en CSS tenemos varias formas de escribir lo mismo, comúnmente esto es lo que llamamos **shorthands**, *flex-flow es un shorthand que combina flex-direction y flex-wrap*.
```css
.flex-container {
  display: flex; /* no olvidarnos del display flex */
  /* Toma dos valores separados por espacio, el primero es un valor de flex-direction y el segundo uno de flex-wrap */
  flex-flow: row wrap;
  flex-flow: column wrap-reverse;
}
```
#### [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
Esta propiedad define cómo nuestro navegador va a distribuir el *espacio libre que haya entre los hijos en el eje principal* que definimos en nuestro contenedor.

> !justify-content se aplica luego de los margenes y los tamaños automaticos

Alguno de los valores que puede tomar son: *flex-start, flex-end, center, space-between, space-around, space-evenly*
```css
.flex-container {
  display: flex; /* no olvidarnos del display flex */
  /* Si no definimos esta propiedad el default será *flex-start* */
  /* flex-start: los items se acomodan al comienzo del contenedor dependiendo del eje principal (si es row, iran sobre la izquierda, si es column arriba) */
  justify-content: flex-start;
  /* flex-end: los items se acomodan al final del contenedor dependiendo del eje principal (si es row, iran sobre la derecha, si es column abajo) */
  justify-content: flex-end;
  /* center: los items se acomodan en el centro de la linea, dejando el mismo espacio alreadedor del conjunto de items */
  justify-content: center;
  /* space-between: los items se distribuyen dejando el mismo espacio entre sí, comenzando pegado sobre el comienzo de la linea y terminando pegado al final de la linea*/
  justify-content: space-between;
  /* space-around: los items se distribuyen dejando el mismo espacio alreadedor del item y entre los items, la diferencia con space-between es que en space-around, los items no comienzan y terminan pegados a la linea */ 
  justify-content: space-around;
  /* space-evenly: el espacio entre cada par de items es el mismo */
  justify-content: space-evenly;
}
```

> !Existen otros valores, pero estos son los principales cuando usamos flexbox.

#### [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
Se comporta cómo *justify-content pero en el eje que cruza* al principal. Los valores principales que puede tomar esta propiedad son *stretch, flex-start, flex-end, center, baseline*, pero de nuevo, como con justify-content, existen otros valores que puede tomar.

> !Por debajo align-items setea align-self para cada item hijo del contenedor.

```css
.flex-container {
  display: flex; /* no olvidarnos del display flex */
  /* Por defecto toma el valor *stretch* */
  align-items: stretch; /* llena los espacios para que los items ocupen todo el contenedor */
  align-items: flex-start; /* los items se acomodan sobre el comienzo del eje */
  align-items: flex-end; /* los items se acomodan sobre el final del eje */
  align-items: center; /* los items se acomodan sobre el centro del eje */
  align-items: baseline; /* los items son agrupados para que la base de línea del contendio de ellos queda alineado */

}
```

#### [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
Esta propiedad alinea las lineas de los flex items en el eje que cruza. Algo importante para remarcar es que para que se vea como se aplica esta propiedad se necesita al menos 2 lineas de items.

Las propiedades que se pueden utilizar son las mismas que justify-content y el valor por defecto es *stretch*.

### Propiedades de los items
Todos los elementos que pertenecen directamente al contenedor que tiene la propiedad `display: flex` son los considerados flex items y existen ciertas propiedades que fueron creadas para estos.

#### [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
Por defecto los items del contenedor tienen el mismo ancho si el flex direction es row o la misma altura si el flex-direction es column. Pero con esta propiedad podemos definir un porcentaje que va a representar el tamaño del item.

> !el porcentaje que definamos como valor no es fijo, esta propiedad es *flexible*, es decir si definimos el valor como 20% puede que no sea exacto sino que el navegador puede agregar o restar algunos puntos para que el contenido quede *bien*.

```css
.flex-item {
  /* IMPORTANTE: cuando estamos en un flex item, NO PONEMOS display: flex, eso solo se define en el padre de los items */
  flex-basis: 25%
}
```

#### [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
Reemplaza la propiedad `align-items` solo un item especifico. Los valores que puede tomar esta propiedad son los mismos que los de align-items.

#### [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
Esta propiedad define *cuanto* crecerá el item si es que necesita hacerlo. Los valores que puede tomar son numeros que serán tomados como una proporción en cuanto a los otros items. El eje principal es el que define para donde crecerá nuestro item.

```css
.flex-item {
  /* IMPORTANTE: cuando estamos en un flex item, NO PONEMOS display: flex, eso solo se define en el padre de los items */
  flex-grow: 2; /* crecerá el doble que el resto (suponiendo que el resto tenga flex-grow: 1) */
}
```
#### [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
Define cuanto se va a enconger el item en caso de ser necesario y como `flex-grow` esta propiedad también toma como valor un numero.

```css
.flex-item {
  /* IMPORTANTE: cuando estamos en un flex item, NO PONEMOS display: flex, eso solo se define en el padre de los items */
  /* el default es 1 */
  flex-shrink: 2; /* se encogerá hasta el doble que el resto */
}
```

#### [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
Esta propiedad es un shorthand de las propiedades *flex-basis, flex-shrink y flex-grow* y tenemos tres formas de escribir sus valores.
```css
.flex-item {
  /* IMPORTANTE: cuando estamos en un flex item, NO PONEMOS display: flex, eso solo se define en el padre de los items */
  /* el valor por defecto es 0 1 auto */
  flex: 1; /* setea la propiedad flex-grow en 1 */
  flex: 1 1; /* setea la propiedad flex-grow y flex-shrink en 1 */
  flex: 1 25%; /* setea la propiedad flex-grow en 1 pero aca como es un porcentaje setea también flex-basis en 25% */
  flex: 1 1 25%; /* cuando ponemos los tres valores, que es lo recomendado, el primer valor representa el flex-grow, el segundo el flex-shrink y por ultimo el flex-basis */
}
```

#### [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
Por último tenemos la propiedad order que se puede aplicar a los flex items y lo que hace es que mostrar los flex items de menor a mayor usando esta propiedad como referencia sin importar como esten en nuestro HTML. Los valores que puede tomar la propiedad son números.
```css
.flex-item {
  /* IMPORTANTE: cuando estamos en un flex item, NO PONEMOS display: flex, eso solo se define en el padre de los items */
  order: 4; /* se mostrará antes que los items que tengan esta propiedad seteada con un número mayor y después de los que la tengan con un número menor */
}
```

### Material complementario
* Guía con ejemplos y graficos sobre flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 
* Juego para practicar: http://flexboxfroggy.com/
* Otro juego: http://www.flexboxdefense.com/