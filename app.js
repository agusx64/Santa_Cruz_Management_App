
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index")
});

app.use(express.static("public"));

app.listen(3000, function(){
    console.log("servidor activo")
})