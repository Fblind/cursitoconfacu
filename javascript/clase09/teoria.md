# Clase 9 - JS

En esta clase nos dedicamos solo a validar la fecha, vimos que los valores del `input` del tipo `date` nos daba un string con el formato *yyyy-mm-dd* y utilizamos todos los conceptos de las clases anteriores, con algunos agregados:

## [Split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
Este es un método que se **puede utilizar para los strings** y básicamente divide un texto mediante un patrón devolviendonos cada parte como un elemento de una lista. Por jemplo:
```javascript
const textoDividido = "hola, mundo, y mundito".split(","); // aca queremos dividir el texto por las comas
textoDividido; // Este texto entonces sera una lista de 3 elementos => ["hola", " mundo", " y mundito"] , notar que las comas no se incluyen pero si los espacios.
```

## Sanitizar/Normalizar
Cuando trabajamos con formularios algo importante que debemos hacer antes de hacer cualquier validación u operación con los datos que completó el usuario es normalizarlos o sanitizarlos, es decir transformarlos a la forma que más nos ayuda para hacer lo que querramos. Por ejemplo, con los textos algo común es sacarle los espacios o pasar todo a minusculas para mejor manipulación.