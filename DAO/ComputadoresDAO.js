class ComputadoresDAO {

    constructor() {
        this._dbConnection = require('../config/conexao')();
        this._object = require('mongodb').ObjectID;
    }
    
    listarComputadores(callback) {
        this._dbConnection().collection("usuario").find({}).toArray(function(err,results) {
            console.log(results);
        })
    }

    listarComputador(parametro, callback) {
        this._dbConnection().collection("computadores").findOne({_id : this._object(parametro)},(callback))
    }
}

module.exports = ComputadoresDAO;