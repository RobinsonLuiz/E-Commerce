var mongo = require("mongodb").MongoClient;
var resposta;
var connMongoDB = function() {
    console.log("inicio a conexao");
    mongo.connect("mongodb://localhost:27017/")
    .then(conn => resposta = conn.db("ecommerce"))
    .catch(error => resposta = error)
    return resposta;
}

module.exports = function() {
    return connMongoDB;
}