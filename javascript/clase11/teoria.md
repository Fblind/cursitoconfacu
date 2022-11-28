# Clase 11 - JS

## Objetos
Ya tenemos toda la funcionalidad para validar nuestro formulario, por lo que ahora necesitamos hacer algo con toda la información que el usuario agregó. Para ello vamos a crear un objeto que representará el gasto con la información del formulario.

La forma más simple de crear objetos es haciendolo *literalmente*:
```javascript
function crearGasto(formulario) {
  // object literals
  return {
    monto: formulario.elements.montoAAgregar.value,
    fecha: formulario.elements.diaAAgregar.value,
    descripcion: formulario.elements.descripcionAAgregar.value
  };
}

// todo lo que esta después del return entre llaves es el objeto literal que acabamos de crear
```

> Hay varias formas de [crear objetos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer), dependiendo nuestras necesidades usaremos diferentes.


## Guardar muchos gastos
Ahora que tenemos una forma de crear gastos, tenemos que poder mantenerlos en nuestra aplicación, y la forma que conocemos de guardar cosas es usando variables, pero ahora vamos a necesitar guardar muchas variables juntas, y para esto es que existen las **listas (array)**.

En nuestro código vamos a crear una variable arriba para usarla en todo nuestro programa y la inicializaremos de la siguiente forma para diferenciarla de que es un array:
```javascript
const lista = []; // esto creara un lista/array vacio, al que luego vamos a poder agregarle elementos, en nuestro caso gastos.
```

## [Listas/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
Cómo vimos en el apartado anterior usamos las listas para poder agrupar cosas, en nuestro caso gastos, a las listas les podemos *agregar*, *eliminar* y recorrer sus elementos, ver un elemento especifico de la lista, entre otras cosas.

## [Concatenación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators) de strings
Nos encontramos con un problema cuando queriamos comparar las fechas, al pedir las fecha de hoy, no la obteniamos en el formato donde el dia y el mes nos den con dos numeros, asi que lo tuvimos que crear nosotros usando la concatenación de strings, agregandole el cero si era necesario al principio:
```javascript
function rellenarConZeros(numero) {
  if (numero <= 9) {
    // devolve el numero rellenado
    // 1 => "01"
    // el operador +: 
    // funciona para dos tipos de datos: string y number (cadena de texto y numero)
    // cuando es para un string => concatena => "hola" + " " + "mundo" => "hola mundo"
    // cuando es para un number => suma => 0 + 1 => 1
    // cuando uso los dos tipos en la misma operacion => "0" + 1 => "01" o 1

    // en este caso queremos concatenar => "0" + "1" => "01"
    // cuando hay algun string en la operacion todo se transforma en un string entonces concatena (COHERSION de tipos)
    return "0" + numero;
  }
  return numero;
}
```