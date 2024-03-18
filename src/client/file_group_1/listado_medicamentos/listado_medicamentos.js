var btnMedicineInfo = document.getElementById('btnMedicineInfo');

document.addEventListener("DOMContentLoaded", function() {

    btnMedicineInfo.addEventListener("click", function() {
        go_to_MedicineInfo();
    })

})

function go_to_MedicineInfo(){ window.location.href = "/src/client/file_group_3/detalles_medicamentos/detalles_medicamentos.html"; };