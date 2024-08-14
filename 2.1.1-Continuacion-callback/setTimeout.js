//Utilizo setTimeout con arrow function
// setTimeout(() => {
//     console.log("He ejecutado la función");
// }, 5000);

//También puedo pasar una función definida anteriormente
function saluda() {
    console.log("Hola a todos");
}

setTimeout(saluda, 2000);


//Otra función de javascript que implementa callbacks es setInteval(func, delay)
