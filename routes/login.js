module.exports = function(servidor) {
    
    servidor.get("/html/login", function(req,resp) {
    resp.render("login");
    })
}