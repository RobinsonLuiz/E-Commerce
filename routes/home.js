global.logarUsuario;
module.exports = function(servidor) {
    
    servidor.get("/html", function(req,resp) {
        resp.render("home");
    })
    
    servidor.get("/html/home", function(req,resp) {
        resp.render("home");
    });

    servidor.get("/sobrenos", function(req,resp) {
        resp.render("sobre-nos");
    })

    servidor.get("/distancia", function(req,resp) {
        resp.render("distancia");
    })
}