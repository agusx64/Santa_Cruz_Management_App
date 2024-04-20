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

function go_to_AddEmail(){ window.location.href = "/agregar_correo/agregar_correo.html"; };
function go_to_AddPersonal() { window.location.href = "/agregar_personal/agregar_personal.html" };
function go_to_AddPatient() { window.location.href = "/agregar_paciente/agregar_paciente.html" };
function go_to_AddChildren() { window.location.href = "/agregar_infante/agregar_infante.html" };
function go_to_personalList() { window.location.href = "/listado_personal/listado_personal.html" };
function go_to_patientList() { window.location.href = "/listado_pacientes/listado_pacientes.html" };
function go_to_Pharmacy() { window.location.href = "/farmacia/farmacia.html" };
function go_to_Settings() { window.location.href = "/configuracion/configuracion.html" };
function go_to_Calendar() { window.location.href = "/calendario/calendario.html" };