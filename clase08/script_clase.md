# Clase 8 - Script

1. Flexbox

## 1. Flexbox
Como te dije antes existen nuevas formas de armar estos layouts. Vamos a ver los conceptos básicos, se pueden hacer un montoooooon de cosas con esto.
Lo importante de flexbox es otra vez tener bien en claro que **todos los elementos son cajas** y la jerarquia de elementos, quienes son los **padres y los hijos** directos.
Siempre que uses la propiedad de flexbox necesitas al menos dos cosas, un padre y un hijo, el padre lo vamos a llamar **flex container** o contenedor de flex y el hijo lo vamos a llamar **flex item**.

* ! Vamos a verlo con un ejemplo => **navbar !!** ul padre, li item

Al padre le agregamos la propiedad **display: flex;**
Propiedades que tenemos:
Flex container props
* flex-direction: row, column, row-reverse y column-reverse (empiezan al reves)
* flex-wrap: wrap, nowrap, wrap-reverse
* flex-flow = flex-direction flex-wrap
* justify-content = flex-start, flex-end, center, space-aroud, space-between
* align-items
> Mostrar todo esto con el **navbar**

Flex items props
* flex-basis: setea un width en comun a todos tus items, %ish

Alta guia ! => https://css-tricks.com/snippets/css/a-guide-to-flexbox/
Alto juego ! => Z