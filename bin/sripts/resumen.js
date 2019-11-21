let sonido;
var resumen = document.querySelectorAll(".palabra");
var volver = document.querySelector(".volver")


resumen[0].innerHTML = "palabras acertadas: " + localStorage.getItem("palabrasAcertadas")
resumen[1].innerHTML = "palabras erroneas: " + localStorage.getItem("palabrasErradas");


function preload() {
  sonido = loadSound('./../../data/AMBIENTAL JUEGO.wav');
}

function setup() {
  sonido.setVolume(30);
  sonido.loop();
}

volver.addEventListener("click", function(){
  localStorage.clear();
  document.location.href="./../../bin/views/secciones.html"

})