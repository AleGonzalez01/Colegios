let sonido;
var resumen = document.querySelector(".palabra");

resumen.innerHTML = "palabras acertadas: " + localStorage.getItem("palabrasAcertadas") + ", palabras erroneas" + localStorage.getItem("palabraErrada");

function preload() {
  sonido = loadSound('./../../data/AMBIENTAL JUEGO.wav');
 }
 function setup() {
  sonido.setVolume(30);
  sonido.loop();
}
