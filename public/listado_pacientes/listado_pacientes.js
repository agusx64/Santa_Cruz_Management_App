var btnPatient_1 = document.getElementById('btnPatient_1');

document.addEventListener("DOMContentLoaded", function() {

    btnPatient_1.addEventListener("click", function() {
        go_to_PatientDetails();
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

function go_to_PatientDetails(){ 
    window.location.href = "/datos_paciente/datos_paciente.html";
};