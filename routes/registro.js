var RegistroDAO = require('../DAO/RegistroDAO.js');
module.exports = function (servidor) {

    servidor.get("/html/registro", function (req, resp) {
        resp.render("registro", { success: false, email: false });
    })

    servidor.get("/html/registro/confirma", function (req, resp) {
        resp.render("confirma", { success: true });
    })

    servidor.post("/html/registro", function (req, resp) {
        var resposta = req.body;
        var registraUsuario = new RegistroDAO();
        new Promise(resolve => 
        resolve(registraUsuario.pegaDadosFormulario(resposta)))
        .then(() => registraUsuario.verificaEmail())
        .then(() => {
            setTimeout(() => {
                if (registraUsuario.erros()) resp.render("registro",{email: true});
                else {
                    registraUsuario.registrar();
                    resp.redirect("/html/registro/confirma");
                }
            }, 2000)
        })
    })
}