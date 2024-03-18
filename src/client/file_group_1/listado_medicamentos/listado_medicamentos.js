var btnMedicineInfo = document.getElementById('btnMedicineInfo');

document.addEventListener("DOMContentLoaded", function() {

    btnMedicineInfo.addEventListener("click", function() {
        go_to_MedicineInfo();
    })

})

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

function go_to_MedicineInfo(){ window.location.href = "/src/client/file_group_3/detalles_medicamentos/detalles_medicamentos.html"; };