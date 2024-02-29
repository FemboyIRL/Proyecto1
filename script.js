const michiActualElement = document.getElementById("michiActual");
const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = "live_dfGNjMQZcx86RTaaIckppVLtStZpwkP9Kfw6Z12H42hymKg9H6Rk8KbXRCpfnAER";
const spinner = document.getElementById("spinner");
document.getElementById("Saltar").addEventListener("click",nuevoMichi);
document.getElementById("Like").addEventListener("click",()=> rankingMichis("+"));
document.getElementById("Dislike").addEventListener("click",()=> rankingMichis("-"));
const contenedorLikeMichis = document.getElementById("contenedorLikeMichis");
const contenedorDislikeMichis = document.getElementById("contenedorDislikeMichis");
spinner.classList.add("escondido");


function nuevoMichi()
{
  spinner.classList.toggle("escondido",false);
  michiActualElement.classList.toggle("escondido",true);
  const url = `${API_URL}images/search`;

  fetch(url,{headers: {
    'x-api-key': API_KEY
  }})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    res = data[0];
    michiActualElement.src = res.url;
    michiActualElement.classList.toggle("escondido",false);
    spinner.classList.toggle("escondido",true);
  });
  }

 function rankingMichis(ranking){
 	console.log(ranking);
 	const nuevaImagen = document.createElement("img");
  nuevaImagen.src = michiActualElement.src;
 	if(ranking === "+"){
 		contenedorLikeMichis.appendChild(nuevaImagen);
 	}else {
 		contenedorDislikeMichis.appendChild(nuevaImagen);
 	}
 	nuevoMichi();
 }



  nuevoMichi();