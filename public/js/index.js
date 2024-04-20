
// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    function redireccionar() {
        window.location.href = "/inicio/inicio.html"; 
        console.log("Referencia exitosa!!")
    }
    setTimeout(redireccionar, 4000);
});
