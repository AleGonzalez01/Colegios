let logo = document.querySelector(".logo");
let btnText = document.querySelector(".btnComenzar")
let sonido;

function preload() {
  sonido = loadSound('./../../data/AMBIENTAL JUEGO.wav');
}

function setup() {
  sonido.setVolume(30);
  sonido.loop();
}

btnText.addEventListener("click", function (event) {

  document.location.href = "./bin/views/instruccionesDos.html"

})