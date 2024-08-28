//Content-Type:application/json
//Es un encabezado que le indica al servidor que el contenido del cuerpo de la solicitud
//(body) está en formato JSON.
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

//Aquí estamos convirtiendo un objeto literal de JS en una cadena de texto JSON.
//Es el contendio que enviaremos al servidor.
const data = JSON.stringify({
  "name": "pedrito",
  "age": 29,
  "job": "front-end-developer"
});


const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: data,
  //Especificamos que la solicitud debe seguir las redirecciones, si las hay.
  redirect: "follow"
};

fetch("https://reqres.in/api/users", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));