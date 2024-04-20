var btnPersonal_1 = document.getElementById('btnPersonal_1');

document.addEventListener("DOMContentLoaded", function() {

    btnPersonal_1.addEventListener("click", function() {
        go_to_PersonalDetails();
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

function go_to_PersonalDetails(){
    window.location.href = "/datos_trabajador/datos_trabajador.html";
};