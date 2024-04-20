document.addEventListener("DOMContentLoaded", function() {

    var button_login = document.getElementById('btnLogin');

    button_login.addEventListener("click", function() {

        var input_email = document.getElementById('input_mail').value;
        var input_password = document.getElementById('input_password').value;

        if (input_email === "Agus" && input_password === "1234") {
            window.location.href = "/administrador/administrador.html";
        }
        else if (input_email === "Jess" && input_password === "1234"){
            window.location.href = "/homepage/homepage.html";
        }
    });
});