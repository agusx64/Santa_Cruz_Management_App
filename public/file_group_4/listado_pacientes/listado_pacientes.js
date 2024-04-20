var btnPatient_1 = document.getElementById('btnPatient_1');

document.addEventListener("DOMContentLoaded", function() {

    btnPatient_1.addEventListener("click", function() {
        go_to_PatientDetails();
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

function go_to_PatientDetails(){ 
    window.location.href = "/src/client/file_group_1/datos_paciente/datos_paciente.html";
};