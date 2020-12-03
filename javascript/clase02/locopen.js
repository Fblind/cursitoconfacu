var nombre = "Juan Pérez";
var edad = 30;
var telefono = " 11 32659865";
var datos = "Nombre: " + nombre + " | Edad: " + edad +
" | Telef: " + telefono;
alert(datos);
var nombre = prompt("Ingrese su nombre: ");
var edad = prompt("Ingrese su edda: ");
var telefono = prompt("Ingrese su telef: ");
var datos = "Nombre: " + nombre + " | Edad: " + edad +
" | Telef: " + telefono;
alert(datos);
var inteligente = "NO"
var edad = 23
if(edad < 21 || inteligente=="SI"){
  alert("El alumno está autorizado")
}
Ejm de if else:
var clave1 = prompt("ingrese su clave")
var clave2 = prompt("Repita su clave")
if(clave1==clave2){
  document.write("Ingreso las dos claves iguales")
}else{
document.write(" las dos claves NO iguales")
}
Ejemplo con if else anidados:
// IMC = PESO (K)/ESTATURA(M2)
var estatura = prompt("Ingrese su estatura en m: ")
var peso = prompt("Ingrese su peso en k: ")
var resultado = peso/(estatura*estatura)
alert("Su indice corporal es: " + resultado)
if(resultado < 18.5){
  alert("Peso inferior al normal")
}else {
  if(resultado < 24.9){
    alert("Normal")
  }else{
    if(resultado<=29.9){
      alert("Peso superior al normal")
    }else{
      if(resultado>29.9){
        alert("Usted está Obeso")    
    }else{
      alert("Resultado inesperado")
    } 
    }// del 3
  }// del 2
}//del 1