let palabra = document.querySelector(".palabra")
let tema = document.querySelector(".topic")
let boton = document.querySelector("#boton")
let descripcion = document.querySelector(".descripcion")
let url = document.location.href


let charadaActual = 0;
let tituloActual = 0;

listaTemas = [

    "Relaciones",
    "Vida",
    "Animales",
    "Encantamientos",
    "Agricultura",
    "Oro"

]


listaCharadas = [
    "Cacique",
    "Agricultora",
    "Chamanes",
    "Cazador",
    "Poliamor",
    "Menstruacion",
    "Artesano",
    "Alfarería",
    "loma",
    "Tatuajes",
    "Territorio",
    "Rio",
    "Jerarquia",
    "Bosques",
    "Serpiente",
    "Murcielago",
    "Micos",
    "Jaguar",
    "Zarigueya",
    "Pajaro",
    "Armadillos",
    "Sacrificios",
    "Rituales",
    "Brebajes",
    "Descanso",
    "Bailes",
    "Mascaras",
    "Ceremonias",
    "Maiz",
    "frijol",
    "Auyama",
    "Cuchara",
    "Frutos",
    "Vasija",
    "Cultivo",
    "Pectorales",
    "Metalurgia",
    "Oro",
    "Collar",
    "Anillos",
    "Orfebreria",
    "Dijes"
]

let palabraActual
url = document.location.href
if (url.includes("?")) {
    url = url.split("?")
    let temaActual = url[1]
    tema.textContent = temaActual


    if (temaActual == "Relaciones") {
        tituloActual = 0;
    } else if (temaActual == "vida") {
        tituloActual = 1;
    } else if (temaActual == "animales") {
        tituloActual = 2;
    } else if (temaActual == "encantamientos") {
        tituloActual = 3;
    } else if (temaActual == "agricultura") {
        tituloActual = 4;
    } else if (temaActual == "oro") {
        tituloActual = 5;
    }

}

switch (tituloActual) {
    case 0:


        url = document.location.href
        if (url.includes("?")) {
            url = url.split("?")
            palabraActual = url[2]
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
                descripcion.textContent = "Tenían la capacidad de transformarse simbólicamente en felinos, y lograr tener la habilidad de ser guerreros espirituales expertos en rituales, curanderos, mediadores, con fortalezas y capacidades de dominar los espíritus."
            }

            if (palabraActual == "cazador") {
                charadaActual = 4
                descripcion.textContent = "Era el encargado de llevar de comer a los habitantes de la comunidad. "
            }

            if (palabraActual == "poliamor") {
                charadaActual = 5
                descripcion.textContent = "En esa época el cacique podía tener relaciones amorosas con diferentes mujeres y cada una de ellas conocía la situación. El cacique tenía una esposa primaria con el derecho de heredar el poder en su hijo y a su vez el cacique podía tener esposas secundarias. "
            }

            if (palabraActual == "menstruacion") {
                charadaActual = 6
                descripcion.textContent = "Cuando a las mujeres de la comunidad les llegaba el periodo por primera vez, realizaban una festividad por el paso de niña a mujer. De igual forma a las mujeres las tenían aparte de los cultivos, ya que podrían dañarlos. "
            }

            if (palabraActual == "artesano") {
                descripcion.textContent = " Grupo de personas que se dedicaban a la orfebrería, donde realizaban joyas que representaban poder y riqueza. "

            }
        }
        break;
    case 1:

        url = document.location.href
        if (url.includes("?")) {
            url = url.split("?")
            palabraActual = url[2]
            palabra.textContent = palabraActual


            if (palabraActual == "alfareria") {
                charadaActual = 8
                descripcion.textContent = "Figuras humanas con pies y manos exagerados, son comunes en la alfarería Ilama, los realizaban por medio de este arte de elaborar objetos por medio de barro o arcilla."
            }
            if (palabraActual == "loma") {
                charadaActual = 9
                descripcion.textContent = "En aquellas épocas se construían las casas en lo alto de las lomas o sobre plataformas artificiales excavadas en la ladera.                    "
            }

            if (palabraActual == "tatuajes") {
                charadaActual = 10
                descripcion.textContent = "Los diseños de la pintura facial y corporal debían distinguir a los grupos sociales."
            }

            if (palabraActual == "territorio") {
                charadaActual = 11
                descripcion.textContent = "La Cultura Calima se identifica por ser defensores de sus tierras, todos son comprometidos y luchan por lo que les pertenece. "
            }

            if (palabraActual == "rio") {
                charadaActual = 12
                descripcion.textContent = "La Cultura Yotoco sobrepasó los límites territoriales de la sociedad Ilama, cubriendo buena parte del valle medio del Río Cauca."
            }

            if (palabraActual == "jerarquia") {
                charadaActual = 13
                descripcion.textContent = "Desde esas épocas existen las clases sociales, donde se diferenciaban: Caciques, Chamanes, Artesanos, Comerciantes y Agricultores.                     "
            }

            if (palabraActual == "bosques") {
                descripcion.textContent = " Los bosques cedieron el espacio a extensos cultivos que ocuparon las colinas y los valles. "
            }
        }

        break;
    case 2:

        url = document.location.href
        if (url.includes("?")) {
            url = url.split("?")
            palabraActual = url[2]
            palabra.textContent = palabraActual

            if (palabraActual == "serpiente") {
                charadaActual = 15
                descripcion.textContent = "Los reptiles aparecen repujados en diademas, orejeras, brazaletes y otros adornos."
            }
            if (palabraActual == "murcielago") {
                charadaActual = 16
                descripcion.textContent = "En la Cultura Calima el murciélago manifestaba la noche y la conexión espiritual entre dos mundos.                    "
            }

            if (palabraActual == "micos") {
                charadaActual = 17
                descripcion.textContent = "Es posible que los micos hayan sido tenidos como animales domésticos. Los artistas de Yotoco destacaron su similitud con los seres humanos. "
            }

            if (palabraActual == "jaguar") {
                charadaActual = 18
                descripcion.textContent = "Para la Cultura Calima representaba poder, espiritualidad y fuerza."
            }

            if (palabraActual == "zarigueya") {
                charadaActual = 19
                descripcion.textContent = "En algunas obras se muestran las zarigüeyas, marsupiales pequeños que habitaban cerca de los cultivos y se alimentaban de frutas."
            }

            if (palabraActual == "pajaro") {
                charadaActual = 20
                descripcion.textContent = "Los pájaros carpinteros se encontraban en estas épocas, comúnmente golpeando los troncos con el pico para sacar los insectos.                      "
            }

            if (palabraActual == "armadillos") {
                descripcion.textContent = " Los armadillos abundan en los campos y fueron frecuentes en la dieta de muchas culturas prehispánicas. "
            }
        }
        break;
    case 3:
        url = document.location.href
        if (url.includes("?")) {
            url = url.split("?")
            palabraActual = url[2]
            palabra.textContent = palabraActual

            if (palabraActual == "sacrificios") {
                charadaActual = 22
                descripcion.textContent = "Se realizaban diferentes sacrificios en rituales religiosos, y funerarios."
            }
            if (palabraActual == "rituales") {
                charadaActual = 23
                descripcion.textContent = "En la Cultura Calima realizaban diferentes rituales. Los rituales funerarios eran muy simbólicos ya que cuando fallece un cacique sus esposas se enterraban con él, debido a que la comunidad lo veía como un viaje a otro mundo y era necesario que en sus tumbas tuvieran los recursos necesarios y la compañía de sus seres queridos."
            }

            if (palabraActual == "brebajes") {
                charadaActual = 24
                descripcion.textContent = "Los chamanes realizaban diversos brebajes con diferentes ingredientes,  para algunos rituales o para curar algún mal de su comunidad."
            }

            if (palabraActual == "descanso") {
                charadaActual = 25
                descripcion.textContent = "En algunos rituales, para llegar a conectarse con la naturaleza, a veces caían en un sueño profundo para mayor concentración. "
            }

            if (palabraActual == "bailes") {
                charadaActual = 26
                descripcion.textContent = "En poporos de oro o de calabazo recubiertos con láminas de oro se guardaba la cal molida que, mezclada con hojas tostadas de coca, mantenía a los indígenas en vigilia durante los prolongados cantos, discursos y bailes de los rituales. "
            }

            if (palabraActual == "mascaras") {
                charadaActual = 27
                descripcion.textContent = "Utilizaban máscaras para los rituales, algunos llevaban de murciélagos y otros de serpientes. También, existian máscaras de oro con un rostro de una persona enterrada, esto tenía significado a que era un dios reencarnado.                      "
            }

            if (palabraActual == "ceremonias") {
                descripcion.textContent = "Se realizaban diferentes ceremonias, ya sea por el proceso de niña a mujer, por la vida, por la muerte, o reconocimientos. "
            }
        }
        break;
    case 4:
        url = document.location.href
        if (url.includes("?")) {
            url = url.split("?")
            palabraActual = url[2]
            palabra.textContent = palabraActual

            if (palabraActual == "maiz") {
                charadaActual = 29
                descripcion.textContent = "La siembra de maíz fue una de sus principales actividades económicas."
            }
            if (palabraActual == "frijol") {
                charadaActual = 30
                descripcion.textContent = "La siembra de frijol fue una de sus principales actividades económicas. "
            }

            if (palabraActual == "auyama") {
                charadaActual = 31
                descripcion.textContent = "Algunos de sus cultivos fueron de auyamas, comúnmente conocidas como calabaza o zapallo, se agregaban a las comidas para espesar y agregar color.                                "
            }

            if (palabraActual == "cuchara") {
                charadaActual = 32
                descripcion.textContent = "Los caciques utilizaban el oro para algunos enseres domésticos como pinzas, cuencos y cucharas. "
            }

            if (palabraActual == "frutos") {
                charadaActual = 33
                descripcion.textContent = "Algunos frutos que recogían de los árboles lo utilizaban como cultivo de inmigración para poder subsistir en los diferentes lugares que residían.  "
            }

            if (palabraActual == "vasija") {
                charadaActual = 34
                descripcion.textContent = "Realizaban vasijas de barro que exponían un culto a la feminidad, frutos y animales, cada una de ellas reflejaba una gran calidad estética. Las utilizaban para servir sus alimentos y bebidas.                      "
            }

            if (palabraActual == "cultivo") {
                descripcion.textContent = "Los bosques se talaron y se quemaron para establecer zonas de cultivo, donde utilizaron abono de materia orgánica para plantar: maíz, frijol, yuca, auyama, tabaco y batatas."
            }
        }
        break;
    case 5:
        url = document.location.href
        if (url.includes("?")) {
            url = url.split("?")
            palabraActual = url[2]
            palabra.textContent = palabraActual

            if (palabraActual == "pectorales") {
                charadaActual = 36
                descripcion.textContent = "Fabuloso atuendo que utilizaban en ceremonias los caciques y chamanes, también significaba sabiduría. "
            }
            if (palabraActual == "metalurgia") {
                charadaActual = 37
                descripcion.textContent = "Es una técnica que realizaban en la Cultura Calima para extraer metales."
            }

            if (palabraActual == "oro") {
                charadaActual = 38
                descripcion.textContent = "La Cultura Calima conoció diferentes técnicas para extraer oro ya que tenía acceso a diversos ríos del Valle y la Costa Pacífica. Y con la destreza metalúrgica lograron piezas de oro y cobre.               "
            }

            if (palabraActual == "collar") {
                charadaActual = 39
                descripcion.textContent = "Se conocen cerámicas donde se muestra a la comunidad sin ropa pero adornada con collares, brazaletes y ligas en los brazos.  "
            }

            if (palabraActual == "anillos") {
                charadaActual = 40
                descripcion.textContent = "Por medio de la orfebrería fabricaban anillos, orejeras y gargantillas de oro fino.   "
            }

            if (palabraActual == "orfebreria") {
                charadaActual = 41
                descripcion.textContent = "En la región Calima se debe la fama de la orfebrería a la Cultura Yotoco, utilizaban técnicas de martillado y repujado con oro, plata u otros metales preciosos.                   "
            }

            if (palabraActual == "dijes") {
                descripcion.textContent = "La habilidad para la fundición se evidencia también en la elaboración de miniaturas. En el museo podemos observar diferentes demostraciones como un jorobado con un cántaro bajo el brazo, aves e insectos que posiblemente se usaron como dijes."
            }
        }



} //cierra el swith
boton.addEventListener("click", function () {

    if (palabraActual == "artesano" || palabraActual == "bosques" ||palabraActual ==  "armadillos" ||palabraActual ==  "ceremonias" ||palabraActual ==  "cultivo" || palabraActual == "dijes") {

        document.location.href = "./../views/resumen.html"


    } else {

        document.location.href = "./../views/categorias.html?" + listaTemas[tituloActual] + "?" + listaCharadas[charadaActual]

    }

})