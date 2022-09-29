# Clase 5 - JS

A partir de ahora todo lo que vamos a ir aprendiendo de JavaScript lo vamos a hacer *ad-hoc* o *in action*. A que me refiero con eso, es que vamos a ir descubriendo nuevos conceptos y aplicar los que ya sabemos a medida que lo necesitemos mientras realizamos una aplicacion web.

## Krakovia - Expense tracker app
Vamos a realizar en conjunto un programa, en este caso una aplicación web, que nos permita poder llevar un conteo de ciertos gastos realizados, donde podremos verlos, ordenarlos, buscarlos y demás, y restringiendo el acceso a ciertas personas con el uso de usuarios.

En primera instancia vamos a crear todo en el cliente, usando las herramientas que nos ofrece el browser y en un futuro vamos a llevar parte de nuestra lógica al srvidor.

![mvp](https://github.com/Fblind/cursitoconfacu/blob/master/javascript/clase05/mvp.png)

## Creación de gastos
Lo primero que vamos a hacer es crear un gasto siguendo el diseño que hicimos en la imagen anterior. Para hacerlo, tenemos que aplicar lo que fuimos viendo a lo largo del curso, más precisamente la parte de [formularios](https://github.com/Fblind/cursitoconfacu/blob/master/clase11/teoria.md#forms) y las [clases siguientes](https://github.com/Fblind/cursitoconfacu/blob/master/clase12/teoria.md) donde vimos [distintos formas](https://github.com/Fblind/cursitoconfacu/blob/master/clase13/teoria.md) de interactuar con el usuario.

Lo importante aca es sacar el máximo provecho al html, esto significa utilzar los tipos correctos para los inputs, configurarlos con los parametros más restrictivos posibles (**required**, **min**, **maxLength**, etc).

## [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
Otra cosa a la cuál también podemos sacar el máximo provecho además del HTML, es el CSS, y principalmente el css que reacciona a las cosas que ocurren en los formularios html.

Por ejemplo podemos agregar diferentes estilos a los input cuando es válido o inválido.
```css
input:valid {
  border: 1px solid green;
}

input:invalid {
  border: 1px solid red;
}
/* existes muchas más, por ejemplo :required, :optional, :user-invalid */
```
