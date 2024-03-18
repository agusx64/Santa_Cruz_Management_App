var btnPersonal_1 = document.getElementById('btnPersonal_1');

document.addEventListener("DOMContentLoaded", function() {

    btnPersonal_1.addEventListener("click", function() {
        go_to_PersonalDetails();
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

function go_to_PersonalDetails(){
    window.location.href = "/src/client/file_group_1/datos_trabajador/datos_trabajador.html";
};