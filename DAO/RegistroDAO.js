var error = false;
var resposta;

class RegistroDAO {

    constructor() {
        this._dbConnection = require('../config/conexao');
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
        this._dbConnection().collection("usuario").insert(resposta);
    }

    verificaEmail() {
        this._dbConnection().collection("usuario").findOne({ email: { $in: [resposta.email] } }, function (err, results) {
            if (results != null) error = true;
            else error = false;
        })
    }

    verificaCPF() {
        this._dbConnection().collection("usuario").findOne({ email: { $in: [resposta.cpf] } }, function (err, results) {
            if (results != null) error = true;
            else error = false;
        })
    }

    erros() {
        return error;
    }
}

module.exports = RegistroDAO;