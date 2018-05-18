var mongoClient = require("mongodb").MongoClient;
var resposta;
module.exports = function() {
    mongoClient.connect("mongodb://localhost:27017")
    .then(conn => resposta = conn.db("ecommerce"))
    .catch(err => {
        return "Impossivel conectar ao banco";
    })
    return resposta;
}