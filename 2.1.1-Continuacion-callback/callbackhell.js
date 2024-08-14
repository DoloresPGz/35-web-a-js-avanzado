//Función operación1 usando callbacks
function operacion1(numero, callbacks) {
    setTimeout(() => {
        console.log("Proceso 1 cumplido");
        callbacks(numero)
    }, 1000);
}

//Función operación2 usando callbacks
function operacion2(numero, callbacks) {
    setTimeout(() => {
        console.log("Proceso 2 cumplido");
        callbacks(numero + 2)
    }, 2000);
}

//Función operación3 usando callbacks
function operacion3(numero, callbacks) {
    setTimeout(() => {
        console.log("Proceso 3 cumplido");
        callbacks(numero * 3)
    }, 1500);
}

//Ejecución encadenada usando callbacks
operacion1(10, function (resultado1) {
    operacion2(resultado1, function (resultado2) {
        operacion3(resultado2, function (resultadoFinal) {
            console.log("El resultado final es: " + resultadoFinal
            );

        })
    })
})