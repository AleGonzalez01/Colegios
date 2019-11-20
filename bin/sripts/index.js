
let logo = document.querySelector(".logo");
let btnText = document.querySelector(".linkBtn")
let sonido;

function preload() {
  sonido = loadSound('./../../data/AMBIENTAL JUEGO.wav');
 }
 function setup() {
  sonido.setVolume(30);
  sonido.loop();
}

document.addEventListener("click", function(event){

  document.location.href="./bin/views/instrucciones.html"

})