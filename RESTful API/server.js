var express = require('express/express_demo');
var app = express();
var fs = requires('fs');


//添加的新用户数据
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
};

//删除用户信息
var id = 2;




app.get('/listUsers',function (req,res) {
    fs.readFile(_dirname+'/'+'users.json','utf8',function (err,data) {
        data = JSON.parse( data );

       //增加用户信息
        data["user4"] = user["user4"];

        //删除用户信息
        delete data["user" + 2];

        console.log(data);
        res.end(JSON.stringify(user));
    });
})

var server = app.listen(8081,function(){

    var host = server.address().address
    var port = server.address().port

    console.lod('应用实例，访问地址http://%s:%s',host,post)

})