//Modulos de la aplicacion y librerias----------------------------------------------------------------------------------------
const mysql = require("mysql");
const express = require("express");


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

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set(express.json());
app.use(express.urlencoded({extended:false}));

//Declaracion de directorios
app.post("/register", function(req, res) {

    const html_body = req.body;
    console.log(html_body);

    //Variables obtenidas del formulario de agregar_correo.html
    let nombreUsuario = html_body.nombre_usuario;
    let areaAsignada = html_body.area_asignada;
    let usuario_especialidad = html_body.especialidad;
    let correoElectronico = html_body.correo_electronico;
    let contrasenaUsuario = html_body.contrasena_usuario;

    //Variable para almacenar las consultas e insertarlas en la base de datos
    let dataInsert = "INSERT INTO usuario (nombre, area_asignada, especialidad, correo_electronico, user_password) VALUES ('"+nombreUsuario+"', '"+areaAsignada+"', '"+usuario_especialidad+"', '"+correoElectronico+"', '"+contrasenaUsuario+"')";

    conection.query(dataInsert, function(error) {

        if (error) {

            throw error;

        } else {

            console.log("Datos almacenados en santacruzdb");
            res.sendStatus(200);

        }

    })

});


//Configuracion de puerto
app.listen(3000, function () {
    console.log("servidor activo");
});

//Ejecucion de metodos de CRUD
// insert();
// select();
// update();
// fun_delete();
//conection.end();

//Metodo de seleccion de datos
function select() {

    const emails = "SELECT * FROM correos"
    conection.query(emails, function(error, list) {

        if(error) {

            throw error;

        } else {

            //Para contar se agrega .length
            //Para seleccionar fila especifica []
            //Para mostrar un unico campo de fila [].nombre_campo
            //Mostrar el ultimo registro de la tabla [list.length - 1]
            console.log(list[list.length - 1]);

        };

    });

};

//Metodo de insercion de datos
function insert() {

    const insert_mails = "INSERT INTO correos (email_doc, pass) VALUES ('agusm1253@gmail.com', '12345678')";
    conection.query(insert_mails, function(error, rows) {

        if(error) {

            throw error;

        } else {

            console.log("Datos insertados correctamente");

        }

    })

}

//Metodo de modificacion de datos
function update() {

    const modify__mails = "UPDATE correos SET email_doc = 'lol@cruz.com' WHERE id_correo = 5 ";
    conection.query(modify__mails, function(error, rows) {

        if(error) {

            throw error;

        } else {

            console.log("Datos actualizados correctamente");

        }

    })

};

//Metodo para eliminar los datos
function fun_delete() {

    const delete_query = "DELETE FROM correos WHERE id_correo = 5"
    conection.query(delete_query, function(error, rows) {

        if(error) {

            throw error;

        } else {

            console.log("Datos eliminados correctamente");

        }

    })

}