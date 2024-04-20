
let mysql = require("mysql");

let conection = mysql.createConnection({
    host: "localhost",
    database: "test",
    user: "root",
    password: ""
});

conection.connect(function(err){
    if(err){
        throw err;
    }
    else{
        console.log("conexion exitosa")
    }
});

conection.end();