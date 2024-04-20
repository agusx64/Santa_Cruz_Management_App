var btnMedicineInfo = document.getElementById('btnMedicineInfo');

document.addEventListener("DOMContentLoaded", function() {

    btnMedicineInfo.addEventListener("click", function() {
        go_to_MedicineInfo();
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

function go_to_MedicineInfo(){ window.location.href = "/detalles_medicamentos/detalles_medicamentos.html"; };