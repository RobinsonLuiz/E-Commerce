module.exports = function() {
    var consign = require('consign');
    var express = require('express');
    var bodyParser = require('body-parser');
    var module = express();
    module.use(bodyParser.urlencoded({extended : true}));
    module.use(express.static("."));
    module.set("view engine","ejs");
    consign()
        .include('config/conexao.js')
        .into(module);
    return module;
}