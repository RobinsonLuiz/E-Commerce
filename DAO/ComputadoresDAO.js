class ComputadoresDAO {

    constructor() {
        this._dbConnection = require('../config/conexao')();
    }
    
    listarComputadores(callback) {
        this._dbConnection.query("select * from produtos where categoria = 'computadores'", callback);
    }

    listarComputador(parametro, callback) {
        this._dbConnection.query('select * from produtos where id = ' + parametro, (callback))
    }
}

module.exports = ComputadoresDAO;