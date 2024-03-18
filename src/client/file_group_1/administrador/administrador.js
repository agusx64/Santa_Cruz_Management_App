var btnAddEmail = document.getElementById('btnAddEmail');
var btnAddPersonal = document.getElementById('btnAddPersonal');
var btnAddPatient = document.getElementById('btnAddPatient');
var btnAddChildren = document.getElementById('btnAddChildren');
var btnPatientList = document.getElementById('frame_left');
var btnPersonalList = document.getElementById('frame_right');
var btnCalendar = document.getElementById('btnCalendar');
var btnPharmacy = document.getElementById('btnPharmacy');
var btnSettings = document.getElementById('btnSettings');

document.addEventListener("DOMContentLoaded", function() {

    btnAddEmail.addEventListener("click", function() {
        go_to_AddEmail();
    });
    btnAddPersonal.addEventListener("click", function() {
        go_to_AddPersonal();
    });
    btnAddPatient.addEventListener("click", function() {
        go_to_AddPatient();
    });
    btnAddChildren.addEventListener("click", function() {
        go_to_AddChildren();
    }); 
    btnPatientList.addEventListener("click", function() {
        go_to_patientList();
    });
    btnPersonalList.addEventListener("click", function() {
        go_to_personalList();
    })
    btnCalendar.addEventListener("click", function() {
        go_to_Calendar();
    })
    btnPharmacy.addEventListener("click", function() {
        go_to_Pharmacy();
    })
    btnSettings.addEventListener("click", function() {
        go_to_Settings()
    })

});

function go_to_AddEmail(){ window.location.href = "/src/client/file_group_3/agregar_correo/agregar_correo.html"; };
function go_to_AddPersonal() { window.location.href = "/src/client/file_group_4/agregar_personal/agregar_personal.html" };
function go_to_AddPatient() { window.location.href = "/src/client/file_group_4/agregar_paciente/agregar_paciente.html" };
function go_to_AddChildren() { window.location.href = "/src/client/file_group_4/agregar_infante/agregar_infante.html" };
function go_to_personalList() { window.location.href = "/src/client/file_group_4/listado_personal/listado_personal.html" };
function go_to_patientList() { window.location.href = "/src/client/file_group_4/listado_pacientes/listado_pacientes.html" };
function go_to_Pharmacy() { window.location.href = "/src/client/file_group_2/farmacia/farmacia.html" };
function go_to_Settings() { window.location.href = "/src/client/file_group_2/configuracion/configuracion.html" };
function go_to_Calendar() { window.location.href = "/src/client/file_group_2/calendario/calendario.html" };