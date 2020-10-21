* Preludio
  * sin css unestro html tiene => 
    * **fluidez** (como se adapta el contenido a nuestra ventana, se redimenciona o no (wrap new line, width seteada, height auto, default => height content y full widht en block)), 
    * **orden** (como se muestran los elemenots, default se muestran como se escribieron en el codigo , de arriba para abajo)
    * **apilamiento** (como se muestran los elementos arriba del otro, xq tenemos varias dimenciones 3 para ser exactos, horizontal, vertical y profundidad (z)) y el orden default es que cuanto más adentro esta en el arbol más arriba en la pila va a estar, por ejemplo tenes un div y adentro un p y adentro de ese p un strong, el strong va arriba, dsp el p y dsp el div.
  * Como cambiar este flujo
    * usando height y width (cambio fluidez)
    * float (cambio el comportamiento del elemento pero tmb de los que lo que esta a su alrededor)
    * position absolute y fixed eliminan el elemento del flujo
    * z-index cambia el orden de apilamiento.


* position!
  * mostrar con divs (also comentar lo que habia dicho que las cosas no estan una abajo de la otra, sino que se pueden overlapear)
    * una caja con dos cajas adentro :thinking_face:
  * hay cinco positions que puede tomar un elemento html:
    * **static**: default, como se muestra siempre (default no lo afectan las coordenadas)
    (todos los de abajo te dan *cordenadas* top, bottom, left, right)
    * **relative**: se mueve el elemento tomando como la posicion inicial donde ocuparia normalmente con static. (relativo a la posicion actual, no afecta a los demas elementos)
    * **absolute**: Por defecto toma la posicion relativa al padre más cercano **posicionado** (tiene que tener relative absolute o fixed) (o contenedor), por lo general el body. Pero si el padre tiene position relative entonces el hijo se va a posicionar absolutamente relativo a este contenido.
    * **fixed**: la posicion que toma el elemento es relativa al viewport y fija, queda siempre en el mismo lugar relativo al viewport. (absolute pero con el viewport)
    * **sticky**: Cambia entre statico y fijo dependiendo cuando llega a lo que pusiste en alguna de los top y eso.
    (todo en general sirve para animaciones)
    (fixed para el go to top)
    (sticky sirve para los headers)

* z-index !
  * usamos esta propiedad para traer adelante o atras los elementos que tienen una posicion que se overlapea (por ejemplo un modal)

* TAREA: CREAR MODAL!


BONUS **GIT**: 
* que es ?
  * programa, CLI (command line interface), se baja de internet.
  * version control system
* que significa ? 
  * podes convertir una carpeta en un repositorio y que nos dara como beneficio la habilidad de poder trackear cambios (tener un historial de lo que fuimos haciendo, mantener versiones de nuestro codigo con un monton de informacion, autor horario, etc) y al poder tener eso podemos ir para atras y cambiar nuestra historia actual si nos equivocamos por ejemplo.
  * Por lo general estas carpetas las creamos localmente pero dsp las subimos a una especie de carpeta en la nube, que le llamaremos nuestro **origin** a traves de servicios conocidos como github, gitlab, bitbucket, etc etc, para tomar ese origen como nuestra fuente de verdad y la que tiene la ultima version siempre.
  * Ademas permite trabajar en equipos de una manera organizada, porque sabes cuales fueron los ultimos cambios y si hay dos personas tocando el mismo archivo al mismo momento tenes forma de saber que cambios hizo cada uno y los podes juntar y que todo salga bien (mergear) -> ejemplo alguien tiene una cosa local vieja y el repo piola tiene algo mas nuevo si intenta subirlo le van a decir ee tenes cambios diferentes, arregla eso y subilo
* instalacion ? -> mostrar pagina y pasos rapido.
* **GIT INIT**