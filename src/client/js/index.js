//Cada archivo CSS que se valla a utilizar se debe de declarar aqui, 
//para que el servidor pueda leer los estilos :)

//CSS del index principal
require('../css/style.css');

// Función para activar la pantalla completa
function activarPantallaCompleta() {
    var elemento = document.documentElement;
    if (elemento.requestFullscreen) {
        elemento.requestFullscreen();
    } else if (elemento.mozRequestFullScreen) { /* Firefox */
        elemento.mozRequestFullScreen();
    } else if (elemento.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elemento.webkitRequestFullscreen();
    } else if (elemento.msRequestFullscreen) { /* IE/Edge */
        elemento.msRequestFullscreen();
    }
}

// Asociar la función con el evento clic del botón
document.getElementById("botonPantallaCompleta").addEventListener("click", activarPantallaCompleta);