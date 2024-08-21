//Selecciono los elementos del DOM que voy a utilizar
const searchButton = document.getElementById("searchButton")
const pokemonNameInput = document.getElementById("pokemonName")
const pokemonInfoDiv = document.getElementById("pokemonInfo")

function displayPokemonInfo(pokemon) {
    //Limpiar el contenido previo del div pokemonInfoDiv
    pokemonInfoDiv.innerHTML = ""

    //Usamon comillas invertidas para embebir HTML directamente
    pokemonInfoDiv.innerHTML = `
        <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <p>Weigth: ${pokemon.weight}</p>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    `
    
}

function fetchPokemonData(pokemonName) {
    //defino la URL de la pokeapi para buscar a mi pokemon
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    //Hacemos la solicitud usando fetch
    fetch(apiURL)
    .then(res => {
       //Verificar si la respuesta es exitosa
        if(res.status != 200){
            throw new Error("Pokemon no encontrado");
        }
        return res.json()
    })
    .then(data =>{
        //Mostrar la información del pokemon
        displayPokemonInfo(data)
    })
    .catch(error => {
        //Mostramos un mensaje de error si no encontramon al pokemon
        pokemonInfoDiv.textContent = error.message
    })
}

//Añadimos un evento al botón de búsqueda para hacer la petición a la api
searchButton.addEventListener("click", () => {
    //trim(): Validación que remueve los espacios sobrantes antes y al final del texto
    //toLowerCase(): Validación para hacer la búsqueda en minúsculas independientemente de cómo lo escriba el usuario
    const pokemonName = pokemonNameInput.value.trim().toLowerCase() 
    
    if(pokemonName){
        //Si el usuario coloca por lo menos un caracter en el input,
        //realizo la petición a la api
        pokemonNameInput.value = ""
        fetchPokemonData(pokemonName) //Función que hace la solicitud a la api
    }else{
        //Sino, mando un mensaje de advertencia
        pokemonInfoDiv.textContent = "Por favor, ingresa un nombre de pokemon"
    }
    

})