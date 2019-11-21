let logos = document.querySelectorAll(".tema");
let tema = "";
let sonido;

function preload() {
  sonido = loadSound('./../../data/FINAL_01-04.mp3');
 }
 function setup() {
  sonido.setVolume(30);
  sonido.loop();
}




for (let index = 0; index < logos.length; index++) {
    logos[index].addEventListener("click", function () {

        switch (index) {
            case 0:
                tema = "Relaciones";
                document.location.href = "./../views/categorias.html?"+tema+"?Cacique"
                break;
            case 1:
                tema = "Vida";
                document.location.href = "./../views/categorias.html?"+tema+"?Alfareria"
                break;
            case 2:
                tema = "Animales";
                document.location.href = "./../views/categorias.html?"+tema+"?Serpiente"
                break;
            case 3:
                tema = "Encantamientos";
                document.location.href = "./../views/categorias.html?"+tema+"?Sacrificios"
                break;
            case 4:
                tema = "Agricultura";
                document.location.href = "./../views/categorias.html?"+tema+"?Maiz"
                break;
                case 5:
                    tema = "Oro";
                    document.location.href = "./../views/categorias.html?"+tema+"?Pectorales"
        }

        
    })
}