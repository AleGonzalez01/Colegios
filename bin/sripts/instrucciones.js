let sonido;

function preload() {
  sonido = loadSound('./../../data/AMBIENTAL JUEGO.wav');
 }
 function setup() {
   createCanvas(0,0)
  sonido.setVolume(30);
  sonido.loop();
}
