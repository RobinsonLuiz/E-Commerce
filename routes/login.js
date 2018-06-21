var UsuarioDAO = require('../DAO/UsuarioDAO.js');
module.exports = function(servidor) {
    
    servidor.get("/html/login", function(req,resp) {
        resp.render("login", {usuarioLogin : global.logarUsuario});
    })

    servidor.post("/html/login/confirma", function(req,resp) {
        var usuario = new UsuarioDAO();
        var email = req.body.email;
        var senha = req.body.senha;
        usuario.verificaUsuario(email , senha, function(err, results) {
            if (results.length > 0) {
                global.logarUsuario = results;
                resp.render("login", { usuarioLogin : results});
            } else {
                resp.send("deu xablum");
            }
        });
    })


    servidor.get("/html/logout", function(req,resp) {
        global.logarUsuario = "";
        resp.redirect('/html');
    })
}