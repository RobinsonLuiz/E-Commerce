var ComputadoresDAO = require('../DAO/ComputadoresDAO.js');
module.exports = function (servidor) {
    var cpu = new ComputadoresDAO();
    servidor.get("/html/cpu", function (req, resp) {
        cpu.listarComputadores(function (err, results) {
            resp.render("computadores", { lista: results , usuarioLogin : global.logarUsuario});
        })
    })

    servidor.get("/html/computador/:id", function (req, resp) {
        var parametro = req.params;
        cpu.listarComputador(parametro.id, function (err, results) {
            resp.render("computadorID", { lista: results , usuarioLogin : global.logarUsuario});
        })
    })

    servidor.get("/html/carrinho/", function (req, resp) {
        resp.render('carrinho', {usuarioLogin : global.logarUsuario});
    })

    servidor.get("/ finalizarCompra", function (req, resp) {
        resp.render("finalizarCompra", { usuarioLogin : global.logarUsuario });
    })
}