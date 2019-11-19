let palabra = document.querySelector(".palabra")
let tema = document.querySelector(".topic")
let boton = document.querySelector("#boton")
let descripcion = document.querySelector(".descripcion")
let url = document.location.href


let charadaActual = 0;
let temaActual = 0;

listaTemas = [

    "Relaciones",
    "Vida",
    "Animales Fantasticos",
    "Encantamientos",
    "Agricultura",
    "Maravillas del oro"

]


listaCharadas = [
    "Cacique",
    "Agricultora",
    "Chamanes",
    "Cazador",
    "Poliamor",
    "Menstruacion",
    "Artesano"
]

switch(temaActual){
    case 0:
            if (url.includes("?")) {
                url = url.split("?")
                let temaActual = url[1]
                tema.textContent = temaActual
                let palabraActual = url[2]
                palabra.textContent = palabraActual
            
            
            
                if (palabraActual == "cacique") {
                    charadaActual = 1
                    descripcion.textContent = "Los caciques tenían diferentes mujeres a su alrededor. En esta relación principalmente rige la fidelidad entre él y sus féminas. "
                }
                if (palabraActual == "agricultora") {
                    charadaActual = 2
                    descripcion.textContent = "Mujer que se encargaba de la guerra o de los cultivos, y en los diferentes quehaceres del hogar. Tenían derecho a practicar la poligamia."
                }
            
                if (palabraActual == "chamanes") {
                    charadaActual = 3
                    descripcion.textContent="Tenían la capacidad de transformarse simbólicamente en felinos, y lograr tener la habilidad de ser guerreros espirituales expertos en rituales, curanderos, mediadores, con fortalezas y capacidades de dominar los espíritus."
                }
            
                if (palabraActual == "cazador") {
                    charadaActual = 4
                    descripcion.textContent="Era el encargado de llevar de comer a los habitantes de la comunidad. "
                }
            
                if (palabraActual == "poliamor") {
                    charadaActual = 5
                    descripcion.textContent="En esa época el cacique podía tener relaciones amorosas con diferentes mujeres y cada una de ellas conocía la situación. El cacique tenía una esposa primaria con el derecho de heredar el poder en su hijo y a su vez el cacique podía tener esposas secundarias. "
                }
            
                if (palabraActual == "menstruacion") {
                    charadaActual = 6
                    descripcion.textContent="Cuando a las mujeres de la comunidad les llegaba el periodo por primera vez, realizaban una festividad por el paso de niña a mujer. De igual forma a las mujeres las tenían aparte de los cultivos, ya que podrían dañarlos. "
                }
            
                if (palabraActual == "artesano") {
                   temaActual=1
                   descripcion.textContent=" Grupo de personas que se dedicaban a la orfebrería, donde realizaban joyas que representaban poder y riqueza. "
                   
                }
            }
            break;
            case 1:
                

}
boton.addEventListener("click", function () {
    document.location.href = "./../views/categorias.html?relaciones?" + listaCharadas[charadaActual] 

})