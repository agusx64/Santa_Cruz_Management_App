
require("../css/style.css")
require("../css/colors.css")

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    function redireccionar() {
        window.location.href = "/public/file_group_1/inicio/inicio.html"; 
    }
    setTimeout(redireccionar, 4000);
});
