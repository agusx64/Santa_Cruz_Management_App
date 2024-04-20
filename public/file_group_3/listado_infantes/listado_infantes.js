var btnChildrenDetails = document.getElementById('btnChildrenDetails');

document.addEventListener("DOMContentLoaded", function() {

    btnChildrenDetails.addEventListener("click", function() {
        go_to_ChildrenDatails();
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

function go_to_ChildrenDatails(){ window.location.href = "/src/client/file_group_3/informacion_infantes/informacion_infantes.html"; };