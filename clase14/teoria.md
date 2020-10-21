# Clase 14

* repaso html flow
* position
  * static
  * relative
  * absolute
  * fixed
  * sticky
* ejemplos position => sticky header - fixed go to top 
* z-index


## Flow por defecto en html
Por defecto los elementos html se muestran como fueron escritos en el documento html, de arriba hacia abajo y además tiene *tres reglas* que pueden modificar la forma en que estos son acomodados dentro de nuestro documento:

### Fluidez
Cómo nuestro elemento se acomoda al viewport (a las dimesiones de nuestro explorador), si se redimenciona o no.
Todos nuestros elementos *block* son fluidos, pero pueden cambiar su fluidez seteando reglas css:
* **width**: setear un valor, por ejemplo 100% (default, ocupa todo el ancho)
* **word wrap**: si no entra todo en una linea va a la próxima línea
* **height**: setear un valor, por ejemplo auto (default, crece con su contenido)

### Orden
El orden como aparecen los elementos html, cómo dijimos al principio, por defecto se van mostrando uno abajo del otro tomando el orden *arriba a abajo* (top-to-bottom) dependiendo el documento html.

### Apilamiento
En html tenemos 3 dimensiones, *x*, *y* y *z*, es decir, tenemos un eje *horizontal, vertical y de profundidad*. Cada uno de nuestros elementos html *pertenece a una capa imaginaria* (layer).

El orden de apilamiento depende en cómo estan anidados, los elementos hijos aparecen más adelante, o más cerca de la pantalla, que los padres que van a estar más al fondo.

```html
<div>
  Bien atras
  <p>
    Medio atras <strong>super adelante!!</strong>
  </p>
</div>
```

## Cambiar el flujo por defecto
Cómo vimos en clases pasadas una forma de cambiar el flujo por defecto de un elemento era usando la propiedad `float`, la cuál sacaba del flujo un elemento pero también a los que lo rodeaban.

Por otro lado si seteamos *width o height* también cambiamos el flujo por defecto. Pero también tenemos dos nuevas formas, seteando la `position` (absolute y fixed elimina el elemento del flujo) y `z-index` que cambia el orden normal del apilamiento.

A continuación vamos a ver que cosas podemos hacer con position y z-index y sus caracteristicas.

## [Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
Esta propiedad nos permite setear la forma en cómo se va a posicionar un elemento html en el documento y al setear esto tenemos la posibilidad de setear 4 nuevas propiedades (`top`, `bottom`, `left`, `right`) que serán las coordenadas donde se va a posicionar el elemento basado en el valor de `position`.

Existen cinco valores posibles que puede tomar la propiedad `position`.

### Static
Este es el valor por defecto y posiciona los elementos de arriba hacia abajo en la forma en que fueron escritas en el documento, setear alguna de las 4 coordenadas no tiene ningún efecto cuando la position es static.

```css
.static {
  position: static;
}
```

### Relative
Cuando toma este valor el elemento *ocupa el lugar que ocuparía en el flow normal* permitiendonos mover a partir de allí su posición seteando alguna propiedad de movimiento `top`, `bottom`, `left`, `right`.
Podemos decir que del lugar donde esta el elemento lo podemos mover en distintas direcciones pero siempre *relativo al lugar que ocupa* y el resto de los elementos ocupa su lugar normal.

```css
.relative {
  position: relative;
  top: 10px;
  right: 10px;
  /* se puede setear solo algunas de las direcciones */
  /* acá el elemento que tenga la clase relative se posicionará diez pixeles a la derecha y hacia abajo a partir de la posicion que tienen el elemento en el html */
}
```

### Absolute
El elemento se elimina del flujo normal, por lo que no tiene un espacio dentro del documento html y entonces los demás elementos del documento se mueven como si este no existiera. Y la posición que toma es relativa a su *ancestro posicionado más cercano*, posicionado significa un elemento contenedor que tenga alguna `position` seteada diferente a `static`, si no existe entonces la posicion que toma es relativa al ancestro block más cercano.

```css
.absolute {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

> !por lo general vamos a setear un elemento contenedor con `position: relative` y dentro de este un elemento con `position: absolute` para movernos "libremente" por nuestro contenedor.

### Fixed
Aquí también el elemento se elimina del flujo normal al igual que cuando nuestra position es tomada `absolute`, con la diferencia que se va a *posicionar relativamente al viewport*

```css
.fixed {
  position: fixed;
  top: 0;
  right: 0;
  /* va a quedar siempre fijo arriba a la derecha */
}
```

### Sticky
La forma en que se va posicionando el elemento cambia entre `relative` y `fixed` se podría decir. La posición se va a tomar relativamente a su posición inicial del flujo normal pero una vez que la página scrollee va a quedar fija donde indicamos cuando seteamos nuestras direcciones (`top`, `bottom`, `left`, `right`)

```css
.sticky {
  position: sticky;
  top: 10px;
  /* una vez que scrollee la pagina este elemento va a quedarse fijo a diez pixeles de su posicion inicial */
}
```

## [Z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
Una vez que seteamos algun valor de `position` podemos *cambiar el orden de apilamiento* seteando nuestra propiedad `z-index`. Cabe aclarar que setear esta propiedad no solo cambia el orden de apilamiento del elemento al cual fue seteada esta propiedad sino también sus hijos.

Por defecto el valor que toma `z-index` es `auto` y se comporta de la manera normal, pero también puede tomar un número. Cuando toma un numero mientras más alto sea el número más adelante se va a ver en nuestra pantalla, por ejemplo si tengo lo siguiente:

```css
.adelante {
  position: fixed;
  z-index: 200;
}

.atras {
  position: fixed;
  z-index: 100;
}
```

Los elementos que tengan la clase `adelante` se van a posicionar sobre los que tengan la clase `atras`.