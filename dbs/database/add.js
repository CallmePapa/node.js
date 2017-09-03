/**
 * Created by weiqiujuan on 17-9-3.
 */
var mysql  = require('mysql');
var express = require('express');
var connection = require('../Database.js');

var addSql='INSERT INTO MyClass(name,sex,degree) VALUES(?,?,?)';
var addSqlParams=['weiqiujuan','0','89.0'];
connection.query(addSql,addSqlParams,function(err,result){
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

    console.log('INSERT ID:',result);
});


connection.end();