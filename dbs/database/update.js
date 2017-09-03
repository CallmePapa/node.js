/**
 * Created by weiqiujuan on 17-9-3.
 */
var mysql  = require('mysql');
var express = require('express');
var connection = require('../Database.js');


var upSql='UPDATE MyClass SET name=?,sex=?,degree=? WHERE id=?';
var modsqlParams=['liuxiaotian','0','88',5];

connection.query(upSql,modsqlParams,function (err,result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('UPDATE affectedRows',result);
});

connection.end();