//Modulos de la aplicacion y librerias----------------------------------------------------------------------------------------
const mysql = require("mysql");
const express = require("express");
const ejs_engine = require('ejs');

//Conexion a la base de datos--------------------------------------------------------------------------------------------------
let conection = mysql.createConnection({
    host: "localhost",
    database: "santacruzdb",
    user: "root",
    password: "",
});

//Comprobacion de la base de datos
conection.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log("conexion exitosa");
    }
});

//Objetos y metodos de express -----------------------------------------------------------------------------------------------
const app = express();


//Ruta de archivos estaticos y middleware-------------------------------------------------------------------------------------

app.set("view engine", "ejs");
app.use(express.static('views'));
app.get("/", function(err, res){
    res.render("index");
});
app.set(express.json());
app.use(express.urlencoded({extended:false}));

//Declaracion de directorios

app.post("/Start", function(req, res){
    res.render('login');
});

app.post("/home", function(req, res){
    res.render('homepage');
});

app.post("/calendar", function(req, res){
    res.render('calendar')
});

app.post("/settings", function(req, res){
    res.render('settings')
});

// POST del Directorio de formulario de registro de usuarios "agregar_correo.html"
app.post("/register", function(req, res) {

    const html_body = req.body;
    console.log(html_body);

    //Variables obtenidas del formulario de agregar_correo.html
    let nombreUsuario = html_body.nombre_usuario;
    let areaAsignada = html_body.area_asignada;
    let usuario_especialidad = html_body.especialidad;
    let correoElectronico = html_body.correo_electronico;
    let contrasenaUsuario = html_body.contrasena_usuario;

    let validateUsername = "SELECT * FROM usuario WHERE nombre = '"+nombreUsuario+"'";

    //Validacion de existencia de usuario en la base de datos
    conection.query(validateUsername, function(error, results) {

        if(error) {

            throw error;

        } else {

            if(results.length > 0) {

                // Agregar ventana emergente
                res.redirect("/Mensajes/NombreUsuarioExistente.html");
                console.log("Ya existe un usario con ese nombre")

            } else  { 

                //Variable para almacenar las consultas e insertarlas en la base de datos
                let dataInsert_usuario = "INSERT INTO usuario (nombre, area_asignada, especialidad, correo_electronico, user_password) VALUES ('"+nombreUsuario+"', '"+areaAsignada+"', '"+usuario_especialidad+"', '"+correoElectronico+"', '"+contrasenaUsuario+"')";
                if( nombreUsuario,
                    areaAsignada,
                    usuario_especialidad,
                    correoElectronico,
                    contrasenaUsuario != "") {
            
                    conection.query(dataInsert_usuario, function(error) {
            
                        if (error) {
                
                            throw error;
                
                        } else {
                            console.log("Datos almacenados en santacruzdb");
                            //Ventana emegente de usuario creado
                            res.redirect("/Mensajes/UsuarioAgregado.html");
                        }
                
                    });
            
                } else {
                    //Ventana emergante de datos vacion
                    console.log("Los campos no deben vacios");
                    res.redirect("/Mensajes/CamposVacios.html");
                }

            }

        }

    });

});


// POST de directorio de formulario de registro de infantes
app.post("/child_register", function(req, res) {

    const html_body_child = req.body;
    console.log(html_body_child);

    //Obtencion de variables del formulario de infantes
    let nombreInfante = html_body_child.nombre_infante;
    let generoInfante = html_body_child.genero_infante;
    let edadInfante = html_body_child.edad_infante;
    let noSeguro = html_body_child.no_seguro;
    let tipoSangre = html_body_child.tipo_sangre;
    let alergiasInfante = html_body_child.alergias_infante;
    let antecedentesInfante  = html_body_child.antecedentes_infante;
    let nombreTutor = html_body_child.nombre_tutor;
    let edadTutor = html_body_child.edad_tutor;
    let noTelTutor  = html_body_child.no_telefonico_tutor;
    let antecedentesTutor = html_body_child.antecedentes_tutor;

    //Consulta para insercion de datos en la tabla de infantes
    let dataInsert_infante = "INSERT INTO infantes (nombre_inf, genero_inf, edad_inf, no_seguro, tipo_sangre, alergias, antecedentes, nombre_tutor, edad_tutor, no_telefonico_tutor, parentezco) VALUES ('"+nombreInfante+"', '"+generoInfante+"', '"+edadInfante+"', '"+noSeguro+"', '"+tipoSangre+"', '"+alergiasInfante+"', '"+antecedentesInfante+"', '"+nombreTutor+"', '"+edadTutor+"', '"+noTelTutor+"', '"+antecedentesTutor+"')";

    if(nombreInfante, 
        generoInfante,  
        edadInfante, 
        noSeguro, 
        tipoSangre, 
        alergiasInfante, 
        antecedentesInfante, 
        nombreTutor,
        edadTutor,
        noTelTutor,
        antecedentesTutor != "") {

            conection.query(dataInsert_infante, function(error) {

                if (error) {
        
                    throw error;
        
                } else {
                    //Ventana emergante de llenado correcto
                    console.log("Datos de infante almacenados en santacruzdb");
                    res.redirect("/Mensajes/InfanteAgregado.html");
                }
        
            });

        } else {
            //Advertencia de datos incompletos
            console.log("Se deben de llenar todos los campos del formulario");
            res.redirect("/Mensajes/CamposVacios.html");
        };

});

//POST de directorio de formulario de agregar infante "agregar_paciente.html"
app.post("/patient_register", function(req, res) {

    const html_body_patient = req.body;
    console.log(html_body_patient);

    let nombrePaciente = html_body_patient.nombre_paciente;
    let generoPaciente = html_body_patient.genero_paciente;
    let edadPaciente = html_body_patient.edad_paciente;
    let institucionProcedencia = html_body_patient.institucion_procedencia;
    let telefonoPaciente = html_body_patient.telefono_paciente;
    let noSeguro = html_body_patient.no_seguro;
    let tipoSangre = html_body_patient.tipo_sangre;
    let alergiasPaciente = html_body_patient.alergias_paciente;
    let antecedentesPaciente = html_body_patient.antecedentes_paciente;

    //Consulta de insercion de paceintes
    let dataInsert_paciente = "INSERT INTO pacientes (nombre_paciente, genero_paciente, edad_paciente, institucion_procedencia, telefono_paciente, no_seguro, tipo_sangre, alergias_paciente, antecedentes_paciente) VALUES ('"+nombrePaciente+"', '"+generoPaciente+"', '"+edadPaciente+"', '"+institucionProcedencia+"', '"+telefonoPaciente+"', '"+noSeguro+"', '"+tipoSangre+"', '"+alergiasPaciente+"', '"+antecedentesPaciente+"')";

    if(nombrePaciente,
        generoPaciente,
        edadPaciente,
        institucionProcedencia,
        telefonoPaciente,
        noSeguro,
        tipoSangre,
        alergiasPaciente,
        antecedentesPaciente != "") {

            conection.query(dataInsert_paciente, function(error) {

                if(error) {

                    throw error;

                } else {
                    //Ventana emegernte de datos almacenados de forma correcta
                    console.log("Datos almacenados correctamente en santacruzdb");
                    res.redirect("/Mensajes/PacienteAgregado.html");
                }

            });

        } else {
            //Mensaje emergente
            console.log("No se han llenado todos los campos");
            res.redirect("/Mensajes/CamposVacios.html");
        }

});

//POST de formulario para agregar personal "agregar_personal.html"
app.post("/register_personal", function(req, res) {

    const html_body_personal = req.body;
    console.log(html_body_personal);

    let nombrePersonal = html_body_personal.nombre_personal;
    let generoPersonal = html_body_personal.genero_personal;
    let especialidadPersonal = html_body_personal.especialidad_personal;
    let procedenciaPersonal = html_body_personal.procedencia_personal;
    let experienciaPersonal = html_body_personal.experiencia_personal;

    //Consulta de insercion
    let dataInsert_personal = "INSERT INTO personal (nombre_personal, genero_personal, especialidad_personal, procedencia_personal, experiencia_personal) VALUES ('"+nombrePersonal+"', '"+generoPersonal+"', '"+especialidadPersonal+"', '"+procedenciaPersonal+"', '"+experienciaPersonal+"')";

    if(nombrePersonal,
       generoPersonal,
       especialidadPersonal,
       procedenciaPersonal,
       experienciaPersonal != "") {

            conection.query(dataInsert_personal, function(error) {

                if(error) {

                    throw error;

                } else {
                    res.redirect("/Mensajes/PersonalAgregado.html");
                    console.log("Los datos se insertaron correctamente");
                }

            });

        } else {
            res.redirect("/Mensajes/CamposVacios.html");
            console.log("No se han llenado todos los campos");

        }
});


//POST  de solcitud de login
app.post("/validate_login", function(req, res) {

    const html_body_login = req.body;
    console.log(html_body_login);

    let loginMail = html_body_login.input_mail;
    let loginPassword = html_body_login.input_password;
    let mensaje = html_body_login.TXTMSG;

    let compareDataonDB = "SELECT nombre, correo_electronico, user_password FROM usuario WHERE correo_electronico = '"+loginMail+"' AND user_password = '"+loginPassword+"'";

    conection.query(compareDataonDB, function(error, results) {

        if(error) {

            throw error;

        } else {

            if(loginMail, loginPassword != ""){

                if(results.length > 0) {

                    if( results[0].nombre === "admin" && results[0].user_password === "admin") {

                        res.render('administrador', {nameUserInsert});

                    } else {

                        let nameUserInsert = results[0].nombre
                        res.render('homepage', { nameUserInsert });
                        console.log("Sesion iniciada, bienvenido '"+nameUserInsert+"'");

                    }
                    
                } else {
                    //Ventana emergente de credenciales ivalidas
                    res.redirect("/Mensajes/CredencialesInvalidas.html");
                    console.log("Credenciales invalidas");

                }

            } else {
                //Ventana emergente de campos vacios
                res.redirect("/Mensajes/CamposVacios.html");
                console.log("No has llenado todos los campos");

            }

        }

    });

});

//Configuracion de puerto
app.listen(3000, function () {
    console.log("servidor activo");
});