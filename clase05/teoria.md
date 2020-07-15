# Clase 5
* Repaso - QA
* Selectores
* Especificidad
* Combinadores - intro
* Box model - intro
* Float - intro

# Selectores
Para aplicar estilos a un elemento o grupo de elementos en CSS tenemos distintas formas de hacerlo, en este documento vamos a ver todas pero si queres ver más en detalle [acá esta la documentación](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

## Type selector (Selector por elemento o de tipo)
Selecciona todos los elementos que coinciden con el nombre del elemento especificado.
Se lo usa para generar el layout base de tu diseño, por lo general van a ser sobreescritos por otros selectores.
``` css
body { /* donde body puede ser cualquier nombre de elemento html */
  /* nuestras declaraciones de estilo */
}
```

## Class selector (Selector de clase)
Selecciona todos los elementos que coinciden con el valor que tiene el atributo `class` del elemento. Para definir este selector le ponemos el nombre del valor anteponiendo un punto y desde el html en nuestro elemento podemos combinar cuantas clases querramos separandolas por espacios en el valor del atributo class, por ejemplo `<h1 class="una-clase otra-clase">`.

Se lo usa cuando queres poner un diseño especifico a varios elementos diferentes o que aparecen varias veces pero no queres sobreescribir todos, este selector es uno de los más usados.
``` css
.className {
  /* donde className es el valor del atributo class que tiene el elemento que queremos cambiar el estilo */
  /* <h1 class="texto-grande">Hola</h1> => si quisieramos cambiar el estilo de este elemento usaremos .texto-grande {} */
  /* nuestras declaraciones de estilo */
}
```

> **Nota**: No te olvides del *punto* adelante !

## Id selector (Selector por id)
Selecciona un elemento basándose en el valor de su atributo `id`. Como regla debería haber solo un elemento con ese atributo.

Son los más especificos y no se usan mucho para hacer estilos, por lo general se usan para redirigirnos en una pagina, para identificar una parte de la pagina para los readers o con javascript y son los selectores más especificos.
```css
#id {
  /* <h1 id="titulo">Hola</h1> => para seleccionar este elemento a través de un selector por id deberiamos tener en nuestro css una regla #titulo {} */
  /* nuestras declaraciones de estilo */
}
```

> **Nota**: No te olvides del *numeral* adelante !

## Attribute selector (Selector de atributo)
Selecciona elementos basándose en el valor de un determinado atributo. Es una de las formas más flexibles.
``` css
[attr] {
  /* nuestras declaraciones de estilo */
}
```
Además de basarnos solo en el nombre del atributo podemos basarnos en la presencia del atributo, el valor y diversas combinaciones, algunas de ellas son las siguientes y [aquí](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) podes encontrar todas con sus explicaciones:
```
[attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]
```

> Con el selector por atributo podemos hacer lo mismo que el selector de clase haciendo:
> ```css 
> [class~=class_name] { /* declaraciones de estilo */ }
> ```

## Universal selector (Selector universal)
Selecciona todos los elementos si se lo utiliza solo, pero también se puede restringir la selección combinandolo con otros selectores. No tiene peso y por lo general se lo utiliza para reiniciar los valores por defecto que vienen del navegador.
``` css
* {
  /* nuestras declaraciones de estilo */
}
```

> **Agrupar selectores**: Todos estos selectores se pueden agrupar mediante comas si hay estilos en común que queremos que varios selectores los tengan, a este selector se lo llama **selector de lista (selector list)**

# Especificidad
La especificidad es una serie de reglas que se aplican a los selectores para determinar que estilo se aplica a cada elemento. Se basa en un puntaje donde cuanto más especifica una regla de CSS es más puntos tiene.

> !!! En CSS cosas que hay que tener bien claras son la *C* de CSS y la especificidad (y unas cosas más que todavia no vimos :))

En orden de menos a más especifico:
1. Selector de tipo y pseudo elementos
2. Selector de clase, selector de atributo y pseudo clases
3. Selector de ID

Otras reglas:
* El selector universal, los combinadores y las pseudo clases de negación no tienen peso
* Los estilos en linea sobreescriben todas las reglas de especificidad, al igual que `!important` en una declaracion de estilos, pero si lo usas un gatito bebe va a estar muy triste y vas a soñar con ello por el resto de tu vida, no hagas llorar al gatito 🐈 

> Si tenes reglas que queres aplicar y no se aplican y no sabes por qué pasa esto, lo más probable es que sea algo relacionado con la cascada o la especificidad, y si es de especificidad podes calcular el peso de tus reglas usando esta [calculadora](https://polypane.app/css-specificity-calculator)

# Combinadores
Podemos seleccionar elementos basandonos en otros selectores, a esto llamamos combinación en CSS y como casi todo en CSS tenemos varias formas de hacerlo

## Combinador descendiente (descendant combinator or descendant selectors)
Combina dos selectores (class, id, elements, etc) **separados por espacios** donde el último selector tiene que ser descendiente del anterior (puede ser el hijo pero también el nieto)
```css
.texto span {
  /* nuestras declaraciones de estilo */
}
```

## Combinador de hijo directo (child combinator)
Combina selectores que sean hijos directos del primer selector, y se lo combina utilizando **un signo de mayor (`>`)**
```css
ul > li {
  /* nuestras declaraciones de estilo */
}
```

## Combinador general de hermanos (general sibling combinator)
El combinador **(`~`)** selecciona elementos hermanos (mismo padre en el docomento html) pero no necesariamente tiene que estar uno al lado del otro (misma regla que el combinador descendiente)
```css
img ~ p {
  /* nuestras declaraciones de estilo */
}
```

## Combinador de hijos adyacentes (adjacent sibling combinator)
El signo más **(`+`)** selecciona elementos hermanos pero que ambos esten uno al lado del otro.
```css
img + p {
  /* nuestras declaraciones de estilo */
}
```