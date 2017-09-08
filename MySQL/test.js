var express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',
    // port: '3306'
});
var app = express();

connection.connect(function(err){
    if(err){
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
});

/*connection.query('SELECT * from user', function(err, rows, fields) {
    connection.end();
    if (!err)
        console.log('查询结果: ', rows);
    else
        console.log('查询出错.');
});*/


app.listen(8080);