var btnPatient_1 = document.getElementById('btnPatient_1');

document.addEventListener("DOMContentLoaded", function() {

    btnPatient_1.addEventListener("click", function() {
        go_to_PatientDetails();
    });

});

function go_to_PatientDetails(){ window.location.href = "/src/client/file_group_1/datos_paciente/datos_paciente.html"; };