function aktualisiereUhr(){
    var jetzt = new Date();
    var stunden = jetzt.getHours();
    var minuten = jetzt.getMinutes();
    var sekunden = jetzt.getSeconds();

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