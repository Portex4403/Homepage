function aktualisiereUhr(){
let jetzt = new Date();
let stunden = jetzt.getHours();
let minuten = jetzt.getMinutes();
let sekunden = jetzt.getSeconds();

if (stunden < 10){
    stunden = "0" + stunden;
}
if (minuten < 10){
    minuten = "0" + minuten;
}
if (sekunden < 10){
    sekunden = "0" + sekunden;
}
document.getElementById('Uhr').innerHTML = stunden + ":" + minuten + ":" + sekunden;
}
setInterval(aktualisiereUhr, 1000);