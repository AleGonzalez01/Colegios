let sonido;

function preload() {
  sonido = loadSound('./../../data/FINAL_01-01.mp3');
 }
 function setup() {
   createCanvas(0,0)
  sonido.setVolume(30);
  sonido.loop();
}
