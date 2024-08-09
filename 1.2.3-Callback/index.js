//Aquí declaro la función, la estoy definiendo

function resta(num1, num2) {
    return num1 - num2 
}

function multi(num1, num2) {
    return num1 * num2
}


function hola() {
    return "Hola";
}

function hello() {
    return "Hello";
}

//Implementación de la función
console.log( suma(1,2)) // -> 3
console.log(suma) // -> imprime la DECLARACIÓN de la función

hola()
console.log(hola);

function saludar(saludo) {
    console.log(saludo());
    
}

saludar(hola)
saludar(hello)


function operacion(num1, num2, oper) {
    console.log(oper(num1, num2));
}

operacion(2,4,suma)
operacion(2,4,resta)
operacion(2,4,multi)

function suma(num1, num2) {
    return num1 + num2
}