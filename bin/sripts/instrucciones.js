let sonido;

function preload() {
  sonido = loadSound('./../../data/AMBIENTAL JUEGO.wav');
 }
 function setup() {
  sonido.setVolume(30);
  sonido.loop();
}
