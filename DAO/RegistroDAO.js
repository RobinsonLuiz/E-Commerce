var error = false;
var resposta;

class RegistroDAO {

    constructor() {
        this._dbConnection = require('../config/conexao')();
        this._mail = require('../config/mail');
    }

    pegaDadosFormulario(body) {
        let uuidv1 = require('uuid/v1');
        let uuid = uuidv1().split("-");
        body.token = uuid[0];
        body.ativado = 0;
        resposta = body;
    }

    registrar() {
        var opEmail = {
            from: "'E-Commerce' <ecommerceTemp@gmail.com>",
            to: resposta.email,
            subject: "Confirmação de Cadastro",
            text: "Por favor confirme o cadastro " + resposta.token
        }
        this._mail().sendMail(opEmail, function (err, info) {
            if (err) console.log(err);
            else console.log("Mensagem enviada com sucesso");
        });
        var insert = [resposta.nome,resposta.datanascimento,resposta.email,resposta.password,resposta.token,resposta.ativado];
        this._dbConnection.query("insert into usuario (nome,datanascimento,email,senha,token,ativado) VALUES (?,?,?,?,?,?) ", insert, function(err,res) {
            console.log(err);
        });
    }

    verificaEmail() {
        this._dbConnection.query("select * from usuario where email = ?", resposta.email, function (err, results) {
            if (results.length > 0) error = true;
            else error = false;
        })
    }

    erros() {
        return error;
    }

    set erro(erro) {
        error = erro;
    }
}

module.exports = RegistroDAO;