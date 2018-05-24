var mongo = require("mongodb");

var connMongoDB = function() {
    console.log("inicio a conexao");
    var db = new mongo.Db(
        "ecommerce",
        new mongo.Server(
            "localhost",
            27017,
            {}
        ),
        {}
    )
    return db;
}

module.exports = function() {
    return connMongoDB;
}