var btnVendas = document.getElementById('btnVendas');

document.addEventListener("DOMContentLoaded", function() {

    btnVendas.addEventListener("click", function(){
        go_to_InstrumentsDetails();
    })

})

function go_to_InstrumentsDetails(){ window.location.href = "/src/client/file_group_3/detalles_instrumentos/detalles_instrumentos.html"; };