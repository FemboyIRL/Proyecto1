const michiActualElement = document.getElementById("michiActual");
const API = "https://dog.ceo/api/breeds/image/random"
document.getElementById("Saltar").addEventListener("click",nuevoMichi);



async function nuevoMichi(){
	const res = await fetch(API);
	const resJson = await res.json();
	michiActualElement.src = resJson.message;
}

//Ejecucion

nuevoMichi();


