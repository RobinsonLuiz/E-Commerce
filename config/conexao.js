var mysql = require("mysql");
var connection = mysql.createPool({
    host: 'mysql427.umbler.com',
    port: '41890',
    user: 'robinsonluiz',
    password: '325140aa',
    database: 'webtechinfo'
});

module.exports = function () {
    return connection;
}