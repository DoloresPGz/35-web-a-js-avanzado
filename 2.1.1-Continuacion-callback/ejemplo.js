//Tenemos 2 funciones que devuelven un valor
function soyCien() {
    return 100
}

function soyDoscientos(params) {
    return 200
}

//Tenemos una función que recibe como parámetro dos funciones y las ejecuta
function sumaDosFunciones(funcion1, funcion2) {
    const suma = funcion1() + funcion2() //100 + 200
    return suma //retornamos la suma de las dos funciones
}

console.log(sumaDosFunciones(soyCien, soyDoscientos));  //300
