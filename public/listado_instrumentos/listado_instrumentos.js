var btnVendas = document.getElementById('btnVendas');

document.addEventListener("DOMContentLoaded", function() {

    btnVendas.addEventListener("click", function(){
        go_to_InstrumentsDetails();
    })

})


function Home() {
    window.location.href = "/homepage/homepage.html"; 
};

function Calendar(){
    window.location.href = "/calendario/calendario.html";
};

function Pharmacy(){
    window.location.href = "/farmacia/farmacia.html";
};

function Settings(){
    window.location.href = "/configuracion/configuracion.html";
};

function go_to_InstrumentsDetails(){ window.location.href = "/detalles_instrumentos/detalles_instrumentos.html"; };