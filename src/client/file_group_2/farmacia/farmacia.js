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
    window.location.href = "/src/client/file_group_2/homepage/homepage.html"; 
};

function Calendar(){
    window.location.href = "/src/client/file_group_2/calendario/calendario.html";
};

function Pharmacy(){
    window.location.href = "/src/client/file_group_2/farmacia/farmacia.html";
};

function Settings(){
    window.location.href = "/src/client/file_group_2/configuracion/configuracion.html";
};

function go_to_InstrumentsList(){ window.location.href = "/src/client/file_group_3/listado_instrumentos/listado_instrumentos.html"; };
function go_to_PediatryList(){ window.location.href = "/src/client/file_group_3/listado_infantes/listado_infantes.html"; };
function go_to_MedicineList(){ window.location.href = "/src/client/file_group_1/listado_medicamentos/listado_medicamentos.html"; };