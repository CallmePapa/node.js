/**
 * Created by weiqiujuan on 17-7-28.
 */
//get请求内容，获取URL参数
var http=require('http');
/*var url=require('url');
 var util=require('util');
 http.createServer(function (req,res) {
 res.writeHead(200,{'Content-type':'text/plain;charset=uts-8'});

 var parmas=url.parse(req,res);
 res.write('网站名'+parmas.name);
 res.write('\n');
 res.write("网站URL"+parmas.url);
 // res.end(util.inspect(url.params(req.url,ture)));实力/
 res.end();
 }).listen(3000);*/

/*
 var querystring = require('querystring');
 http.createServer(function (req,res) {
 //暂时存储请求体信息
 var post = '';
 // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
 req.on('data',function (chunk) {
 post += chunk;
 });
 // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回
 req.on('end',function(){
 post = querystring.parse(post);
 res.end(util.inspect(post));
 });
 }).listen(3000);
 */

// 表单通过 POST 提交并输出数据：
var querystring=require('querystring');
var postHTML=
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js实例<title><head>'+
    '<body>'+
    '<form method="post">'+
    '网站名：<input name="name"><br>'+
    '网站URL：<input name="url"><br>'+
    '<input type="submit">'+
    '</form>'+
    '</body></html>';

http.createServer(function(req,res){
    var body='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function(){
        body=querystring.parse(body);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'
        });
        if(body.name&&body.url){
            res.write('网站名：'+body.name);
            res.write('<br>');
            res.write('网站URL:'+body.url);
        }else{
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);
