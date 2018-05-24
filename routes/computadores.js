var ComputadoresDAO = require('../DAO/ComputadoresDAO.js');
module.exports = function(servidor) {
    var cpu = new ComputadoresDAO();
    servidor.get("/html/cpu", function(req,resp) {
        cpu.listarComputadores(function(err,results) {
            resp.render("computadores",{lista: results});
        })
    })

    servidor.get("/html/computador/:id", function(req,resp) {
        var parametro = req.params;
        cpu.listarComputador(parametro.id, function(err,results) {
            resp.render("computadorID",{lista: results});
        })
    })
}