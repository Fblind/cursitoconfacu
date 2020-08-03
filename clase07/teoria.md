# Clase 7

* Repaso - QA
  * Pseudo clases (link pseudo clases LVFHA)
  * Box-model (Contenido, Padding, Border, Margin, Width, Height, Contet-box, Border-box)
  * Display property (Inline, Block, Inline-Block)
* Width and height units + Viewport
* Float & Clear


## Width and Height units + Viewport
Hay una etiqueta que utilizamos desde que comenzamos el curso pero no la vimos en detalle, la etiqueta viewport:
```html 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Cuando hablamos de *[viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport)* nos referimos al **área del documento que estamos viendo actualmente** independientemente del dispositivo que estemos usando. Por lo que el tamaño del del viewport no es fijo, sino que *puede cambiar dependiendo lo que hagamos o el dispositivo que estemos usando*.

### Unidades vh & vh
Cómo el viewport no es algo fijo tenemos unidades que se basan en este área:
* **vw (view-width)**
* **vh (view-height)**

Ambas representan un 1% del viewport en los ejes x e y respectivamente.

> Decimos que:
> * 1vw es 1% del ancho del viewport (de lo que estas viendo actualmente)
> * 1vh es 1% del alto del viewport (de lo que estas viendo actualmente)

### Qué unidades usar cuando ponemos ancho y alto de un elemento ?
Ahora que sabemos que son estas dos nuevas unidades podemos utilizarlas claro esta :) .
Mi recomendación es que cuando estemos trabajando con anchos y altos usemos unidades porcentuales, tales como:
* **%** => representa el *porcentaje del elemento padre* (no de lo que se esta viendo actualmente - esa es la diferencia con viewport)
* **vw y vh**
* Y cómo último caso **rem o em** => Es una suerte de unidad porcentual porque va cambiando dependiendo del dispositivo tmb, pero es igualmente es **fija**

## Float and clear
Floats se usaban para armar layouts (disposición de cómo tiene que quedar la página) con múltiples columnas, lo vas a seguir viendo en miles de páginas y te vas a encontrar con muchos tutoriales o cosas en internet que enseñan a armar layouts de esa manera, pero hoy en dia tenemos la suerte de tener navegadores que se actualizan solos y tenemos nuevas herramientas, como flexbox y grid.

### Para que se pueden seguir usando entonces ?
Para lo que fueron creados en un principio, para poder combinar un texto con una imagen definiendo como queremos se organicen, una al lado de la otra con la imagen a la derecha, izquierda o en el medio por ejemplo.

### [Float](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats)
La propiedad float *saca el elemento del flujo normal y lo hace flotar* hacia la dirección que nosotros le indiquemos, puede tomar como valor, *left, right o none*.
```css
.float-right {
  float: right; /* puede ser right, left o none, dependiendo donde queremos que se mueva nuestro elemento */
}
```

> !Nota: Si estamos flotando un elemento que no es una imagen debemos especificar el ancho.

### [Clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
La propiedad clear reinicia el flujo normal, asi que *siempre que uses float después tenes que usar un clear* para dejar el flujo a como estaba al principio y sus valores son *left, right and both*.
```css
.after-right {
  clear: both;
}
```