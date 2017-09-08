/**
 * Created by weiqiujuan on 17-9-3.
 */
var mysql  = require('mysql');
var express = require('express');
var connection = require('../Database.js');

var delSql='DELETE FROM MyClass where id=5';
connection.query(delSql,function (err,result) {
    if(err){
        console.log('[DELETE ERROR] - ',err.message);
        return;
    }

    console.log('DELETE affectedRows',result.affectedRows);
});

connection.end();