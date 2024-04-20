var btnInstruments = document.getElementById('btnInstruments');
var btnPediatry = document.getElementById('btnPediatry');
var btnMedicine = document.getElementById('btnMedicine');

document.addEventListener("DOMContentLoaded", function() {

    btnInstruments.addEventListener("click", function() {
        go_to_InstrumentsList();
    });
    btnPediatry.addEventListener("click", function() {
        go_to_PediatryList();
    });
    btnMedicine.addEventListener("click", function() {
        go_to_MedicineList();
    });
    
});


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

function go_to_InstrumentsList(){ window.location.href = "/listado_instrumentos/listado_instrumentos.html"; };
function go_to_PediatryList(){ window.location.href = "/listado_infantes/listado_infantes.html"; };
function go_to_MedicineList(){ window.location.href = "/listado_medicamentos/listado_medicamentos.html"; };