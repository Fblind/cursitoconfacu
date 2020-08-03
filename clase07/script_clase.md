# Clase 7 - Script

0. Preguntas clase anterior
1. Repaso
2. Width and height units + Viewport
3. Float & Clear
4. Flexbox

## 1- Repaso
Empezamos con un repaso de los temas que vimos la clase anterior:
* Pseudo clases (link pseudo clases LVFHA)
* Box-model (Contenido, Padding, Border, Margin, Width, Height, Contet-box, Border-box)
  * Comentar que voy a indagar un poco en el width y height más adelante en la clase
* Display property (Inline, Block, Inline-Block)
  * Comentar que por lo que investigue el inline-block se esta tratando de no usar más en favor a flex.

## 2- Width and Height units + Viewport
Hay algo que nombramos las clases anteriores pero capaz no lo vimos más en detalle que es el lo que se llama viewport y que agregamos siempre en nuestros documentos html:
```html 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Cuando hablamos de viewport nos referimos al **área del documento que estamos viendo actualmente** independientemente del dispositivo que estemos usando.
Entonces el tamaño del viewport no es fijo, sino que puede cambiar dependiendo lo que hagamos o el dispositivo que estemos usando.
Por lo que tenemos unidades que representan un cierto porcentaje de nuestro viewport.

### Unidades vh & vh
Tanto VW (view-width) y VH (view-height) representan un 1% del viewport en los ejes x e y respectivamente.
Entonces:
* 1vw => 1% del ancho del viewport (de lo que estas viendo actualmente)
* 1vh => 1% del alto del viewport (de lo que estas viendo actualmente)

### Qué unidades usar cuando ponemos ancho y alto de un elemento ?
Ahora que sabemos que son estas dos nuevas unidades podemos utilizarlas claro esta :) .
Mi recomendación es que cuando estemos trabajando con anchos y altos usemos unidades porcentuales, cuales tenemos:
* % => representa el porcentaje del elemento padre (no de lo que se esta **viendo actualmente** - esa es la diferencia con viewport)
* vw y vh
* Y cómo último caso REM o EM => Es una suerte de unidad porcentual porque va cambiando dependiendo del dispositivo tmb, pero es **fija**

> Ejemplos => un div con contenido y ponerle vw y vh

## 3- Floats & clear
### Float:
**Saca el elemento del flujo normal y lo hace flotar hacia la dirección** que nosotros le indiquemos. 
Los valores que podemos elegir son **left, right, none**

Siempre que saquemos a un elemento del flujo normal, que lo hagamos flotar **necesitamos setearle un ancho** a ese elemento (a menos que sea una imagen que ya vienen con ancho) y después tenes que volver al flujo normal, usando clear.

### Clear:
Reinicia el flujo normal, asi que **siempre que uses float despues tenes que usar un clear** y sus valores son **left, right and both**
Decis que parte quiero reiniciar, la izquierda, la derecha o ambas, esta ultima es la más usada.

### Usos comunes
Hoy en día no es algo que se use mucho (pero es necesario saberlo)
En las versiones anteriores de CSS **se usaban para armar layouts**, lo vas a seguir viendo en miles de paginas y te vas a encontrar con muchos tutoriales o cosas en internet, pero hoy en dia tenemos la suerte de tener navegadores que se actualizan solos y tenemos nuevas y mejores herramientas, como flexbox y grid para armar eso y que las vamos a ver más adelante.
Otro uso y es el que vamos a ver primero nosotros y que se puede seguir usando es hacer que nuestro **contenido flote como querramos alrededor de las imagenes**.

* Mostrar ejercicio para alinear una imagen al costado de un parrafo y que siga.
  * Decirle que haga un articulo con tres imagenes (una izquierda una derecha y una en el medio)
* Mostrar ejercicio layout.



