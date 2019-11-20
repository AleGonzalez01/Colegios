 let temaDiv = document.querySelector(".tema")
 let tiempoDiv = document.querySelector(".time")
 let right = document.querySelector(".right")
 let wrong = document.querySelector(".wrong")
 let palabra = document.querySelector(".charada")
 let sec = 30;
 let eleccion = false;
 let acerto = ""
 tiempoDiv.textContent = sec + "s"

 let drawHilo = setInterval(hiloSegundos, 1000)

 function hiloSegundos() {
     if (sec > 0 && eleccion == false) sec -= 1;

     tiempoDiv.textContent = sec + "s"
     if (sec == 0) {
         document.location.href = ("./tiempoAcabado.html")
         sec = "";
     }
 }


 let url = document.location.href

 if (url.includes("?")) {

     parametros = url.split("?")
     tema = parametros[1].toUpperCase()

     if (parametros.length > 2) {
         charada = parametros[2].toUpperCase()
         palabra.textContent = charada
     }



     temaDiv.textContent = tema

 }
 let sonido, sonido2;

 function preload() {
     sonido = loadSound('./../../data/Acertar.wav');
     sonido2 = loadSound('./../../data/EQUIVOCARSE_BOUNCE.wav');
 }

 function setup() {
     sonido.setVolume(30);
     sonido2.setVolume(30);
 }


 document.addEventListener("click", function (event) {
     if (event.target == wrong) {
         eleccion = true;
         acerto = false;
         sonido2.play();
     }

     if (event.target == right) {
         eleccion = true;
         acerto = true;
         sonido.play();
         console.log("")
     }

     let retrasador = setTimeout(function () {
         tema = temaDiv.textContent.toLowerCase();
         palabraMinuscula = palabra.textContent.toLowerCase();
         document.location.href = "dato.html?" + tema + "?" + palabraMinuscula
     }, 1000)




 })


 palabra.addEventListener("click", function (event) {
     if (event.clientX >= window.innerWidth / 2) {
         eleccion = true;
         acerto = false;
         sonido2.play();
     }

     if (event.clientX < window.innerWidth / 2) {
         eleccion = true;
         acerto = true
         sonido.play();
     }


 })