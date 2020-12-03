// Number
0 2 1 3 2.5 100000 -1 -52
-0 +Infinity -Infinity 3.14 0n 10n
NaN
* + / -

// String ("", '', ``)
"hola" "hola mundo" "a"
"hola"
"hol"
'hola' 'hola mundo' 'a'
`hola` `hola mundo` `a`
"hola como 'te' va"
'hola como "te" va'
"hola como \n \"\"\"te\" va"
`hola como "te" va 'si comillas simples'`
`hola como 
"te" va`
+ 

// Boolean (true y false)
true;
false;

// Object
persona = {
  nombre: "Facundo",
  apellido: "Soria",
  mail: "fblind@gmail.com",
};

// function
function saludar (atributo) {
  console.log("holaaa!")
  console.log(atributo)
}

saludar("chicos!!!");

function sumarAUno (numero) {
  return 1 + numero;
}

sumarAUno(2);

// Array
["hola", 1, true]

// null
null

// undefined
undefined

// Symbol
Symbol()
Symbol("un simbolito")