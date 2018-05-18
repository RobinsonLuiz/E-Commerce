module.exports = function() {
    var express = require('express');
    var bodyParser = require('body-parser');
    var module = express();
    module.use(bodyParser.urlencoded());
    module.use(express.static("."));
    module.set("view engine","ejs");
    return module;
}