var error = false;

class UsuarioDAO {

    constructor() {
        this._dbConnection = require('../config/conexao')();
    }

    verificaUsuario(email,senha,callback) {
        var usuario = [email, senha];
        this._dbConnection.query("select * from usuario where email = ? and senha = ?", usuario, callback);
    }
}

module.exports = UsuarioDAO;