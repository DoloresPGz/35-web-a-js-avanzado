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
            //console.log(country.name.common);
            //Creamos la base de la card, que después nos servirá para agregar toda la información en la lista de países
            const countryCard = document.createElement("div")
            countryCard.classList.add("country-card")
            const languagesName = Object.values(country.languages).join(", ")
            const border = country.borders ? `<p>Borders: ${country.borders.join(", ")}</p>` : ""

            const currencies = Object.keys(country.currencies)
            const currencyDescription = currencies.map(key => {return `<li>${country.currencies[key].name} (${country.currencies[key].symbol})</li>`}).join("")
            console.log(currencyDescription);
            
            

            //Crear la estructura de los datos que van a desplegar en card
            coutryInfo = `
                <img src="${country.flags.png}">
                <h2>${country.name.common}</h2>
                <p>Capital(s): ${country.capital.join(", ")}</p>
                <p>Continent(s): ${country.continents.join(", ")}</p>
                <p>Population: ${country.population}</p>
                <p>Languages: ${languagesName}</p>
                ${border}
                <p>Currencies:</p>
                <ul>
                    ${currencyDescription}
                </ul>
                            `
            countryCard.innerHTML = coutryInfo
            
            countryList.appendChild(countryCard)
        })

        
    })
}

//Ejecutamos la búsqueda de todos los países una vez que termine de cargar el DOM en el navegador
window.onload = fetchAllCountries