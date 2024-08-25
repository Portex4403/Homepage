function aktualisiereUhr() {
const jetzt = new Date();
const uhrElement = document.getElementById("Uhr");
uhrElement.innerHTML = jetzt.toLocaleTimeString();
}
setInterval(aktualisiereUhr, 1000);

fetch("https://api.chucknorris.io/jokes/random?category=dev").then(response =>{
return response.json();
}).then(jsonData => {
joke.innerText = jsonData.value;
});