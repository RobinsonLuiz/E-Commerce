var RegistroDAO = require('../DAO/RegistroDAO.js');
module.exports = function (servidor) {

    servidor.get("/html/registro", function (req, resp) {
        console.log(global.logarUsuario);
        if (global.logarUsuario == undefined || global.logarUsuario == '') {
            resp.render("registro", { success: false, email: false });
        } else resp.send('construção');
    })

    servidor.get("/html/registro/confirma", function (req, resp) {
        if (!typeof global.logarUsuario == 'object') {
            resp.render("confirma", { success: true });
        } else resp.send('construção');
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
        }).catch(error => console.log("Erro não deu"))
    })
}