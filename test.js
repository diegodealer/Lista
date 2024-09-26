//DECLARARCION DE VARIABLES
//let nombre = "juan";// esto declara una variable
//var apellido = "Perez"// esto tambien declara una variable
const PI = 3.1416;// esto declara una constante
// La diferencia entre let y var tiene que ver con SCOPE
//console.log(x);
//var x = 10;
//console.log(x);
funcionMUYMUYIMPORTANTE(x);
var x = "valor muy imnportante de pasar a la funcion";

//ciclos 
//for
for(let i =0; i<10; i++){
    console.log(i)
}
//while
let bandera = true;
let contador = 0;
while (bandera){
    contador++;
    console.log(contador);
    if (contador === 10){
        bandera = false;
    } 

}

// do while 

do{
    contador++;
    console.log(contador);
    if (contador === 10){
        bandera = false;
    } 

}while(bandera)
//for each

// TIPOS DE DATOS
// string
let cadena = "Hola Mundo";
//Number
let numero = 10;
//boolean
let boleano = true;
// array 
let array = ["Juan", "Pedro", "Maria"];
let arraybolea = [true, false, true];
let arraynum = [1,2,3,4,5];
let arraymix = ["Juan", true, 1];
let arrayobj = [{nombre: "juan"}, {nombre: "Pedro"}];
//object
let user = {
    nombre: "juan",
    apellido: "Perez",
    lugarDeNacimiento: {
        pais: "Mexico",
        Estado: "CDMX",
    },
    lugaresvisitados: ["USA", "CANADA", "JAPON"],
}; // Esto es JSON, Javascript Objext Notation
console.log(user.nombre);
console.log(user.apellido);
console.log(user["nombre"]);
console.log(user["lugarDeNacimiento"]["pais"]);
console.log(user.lugarDeNacimiento.pais);
// Undefined
let indefinido;
//NUll
let nulo = null;
//Funciones
//Operadores
//aritmeticos
let suma = 1+1;
let resta = 1-1;
let multiplicacion = 1*1;
let division = 1/1;
let modulo = 1%1;
//COMPARACION
let mayor = 1 > 2;
let menor = 1 < 2;
let igual = 1 == 1
let igualestricto = 1 === 1;
let x = "1";
let y = true;
let igualdad = x == y;
let identidad = x === y;
console.log(igualdad);
console.log(identidad);
let diferente = 1 != 1;

//LOGICOS

//FUNCIONES
function saludar(){
    console.log("Hola");
}

function suma(a, b){
    return a+b;
}
const sumafuncion = (a, b) => a + b;

//CALLBACKS
function operacion(a, b, callback){
    return callback(a, b);
}
console.log(operacion(1, 2, sumafuncion));
console.log(operacion(1, 2, (a,b) => a - b));
//Las funciones flecha o anonimas estaran presentes en muchas cosas que hagamos