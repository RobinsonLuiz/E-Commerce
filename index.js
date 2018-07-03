var servidor = require('./config/express')();
var dbConnection = require('./config/conexao');
const Watson = require('./routes/watson')(servidor);
const RotasComputadores = require("./routes/computadores")(servidor);
const RotasHome = require("./routes/home")(servidor);
const RotasLogin = require("./routes/login")(servidor);
const RotasRegistro = require("./routes/registro")(servidor);

servidor.listen(3000, function() {
    console.log("iniciando server");
})