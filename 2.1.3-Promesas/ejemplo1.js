//Declaración de una promesa
const promesa = new Promise((resolve, reject) =>{
    const numero = Math.floor(Math.random() * 10) //Me devuelve un número aleatorio entre el 0 y el 10
    setTimeout(() => {
        numero > 5 
        ? resolve(numero)
        : reject(new Error(numero))

    }, 1000);
})

//Ejecución de la promesa
promesa
.then(
    //Función que se ejecuta si la condición se cumple
    (numero) => {
        console.log(numero);
    }
)
.catch(
    //Función que se ejecuta si la condición no se cumple
    (error) => {
        console.error(error);
        
    }
)