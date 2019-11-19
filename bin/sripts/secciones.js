let logos = document.querySelectorAll(".tema");
let tema = "";




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
                tema = "Animales Fantásticos";
                document.location.href = "./../views/serpiente.html?"+tema
                break;
            case 3:
                tema = "Encantamientos";
                document.location.href = "./../views/sacrificios.html?"+tema
                break;
            case 4:
                tema = "Agricultura";
                document.location.href = "./../views/maiz.html?"+tema
                break;
                case 5:
                    tema = "Maravillas Del Oro";
                    document.location.href = "./../views/pectorales.html?"+tema
        }

        
    })
}