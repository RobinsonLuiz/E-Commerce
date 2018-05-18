var config = require('./config/express');
var servidor = config();
var dbConnection = require('./config/conexao');
var object = require('mongodb').ObjectID;

servidor.listen(3000, function() {
    dbConnection();
    console.log("iniciando server");
})

servidor.get("/html", function(req,resp) {
    resp.render("home");
})

servidor.get("/html/home", function(req,resp) {
    resp.render("home");
});

servidor.get("/html/registro", function(req,resp) {
    resp.render("registro", {success: false});
})

servidor.get("/html/cpu", function(req,resp) {
    dbConnection().collection("computadores").find({}).toArray(function(err,results) {
        resp.render("computadores",{lista: results});
    });
})


servidor.get("/html/login", function(req,resp) {
    resp.render("login");
})

servidor.get("/html/computador/:id", function(req,resp) {
    var parametros = req.params;
    dbConnection().collection("computadores").findOne({_id : object(parametros.id)}, function(error, results) {
        resp.render("computadorID",{lista: results});
    })
})

servidor.get("/html/registro/confirma", function(req,resp) {
    resp.render("confirma", {success: true});
})

servidor.post("/html/registro/salva", function(req,resp) {
    var resposta = req.body;
    let uuidv1 = require('uuid/v1');
    let uuid = uuidv1().split("-");
    resposta.token = uuid[0];
    dbConnection().collection("usuario").insert(resposta);
    resp.redirect("/html/registro/confirma");
})

