var btnChildrenDetails = document.getElementById('btnChildrenDetails');

document.addEventListener("DOMContentLoaded", function() {

    btnChildrenDetails.addEventListener("click", function() {
        go_to_ChildrenDatails();
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

function go_to_ChildrenDatails(){ window.location.href = "/informacion_infantes/informacion_infantes.html"; };