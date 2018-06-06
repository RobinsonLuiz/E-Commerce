class ComputadoresDAO {

    constructor() {
        this._dbConnection = require('../config/conexao')();
        this._object = require('mongodb').ObjectID;
    }
    
    listarComputadores(callback) {
        this._dbConnection().collection("computadores").find({}).toArray(callback)
    }

    listarComputador(parametro, callback) {
        this._dbConnection().collection("computadores").findOne({_id : this._object(parametro)},(callback))
    }
}

module.exports = ComputadoresDAO;