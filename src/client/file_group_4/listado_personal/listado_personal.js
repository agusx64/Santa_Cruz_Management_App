var btnPersonal_1 = document.getElementById('btnPersonal_1');

document.addEventListener("DOMContentLoaded", function() {

    btnPersonal_1.addEventListener("click", function() {
        go_to_PersonalDetails();
    });

});

function go_to_PersonalDetails(){ window.location.href = "/src/client/file_group_1/datos_trabajador/datos_trabajador.html"; };