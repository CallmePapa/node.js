/**
 * Created by weiqiujuan on 17-9-3.
 */
var mysql  = require('mysql');
var express = require('express');
var connection = require('../Database.js');

var sql='SELECT *FROM MyClass';

connection.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log(result);
});
connection.end();