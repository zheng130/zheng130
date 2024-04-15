var mysql = require('mysql');
var config = require('./config').db;
module.exports = mysql.createConnection(config);