//Selecciono los elementos del DOM que voy a utilizar
const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")
const countryList = document.getElementById("countryList")


function fetchAllCountries() {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data =>{//Recibo toda la lista de países en un arreglo
        countryList.innerHTML = ""
        console.log(data);
        data.forEach((country) => {
            console.log(country.name.common);
            
        })
    })
}

//Ejecutamos la búsqueda de todos los países una vez que termine de cargar el DOM en el navegador
window.onload = fetchAllCountries