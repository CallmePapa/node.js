/**
 * Created by weiqiujuan on 17-7-28.
 */
/*function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");*/


//匿名函数
function execute(someFunction, value) {
someFunction(value);
}

execute(function(word){ console.log(word) }, "Hello");


//HTTP服务器


var http=require('http');
 function onRequest(request,response){
 response.writeHead(200,{'xontent-type':'text/plain'});
 response.write('hello World');
 response.end();
 }
 http.createServer(onRequest).listen(8888);

 //用匿名函数实现
 /*var http = require("http");

 function onRequest(request, response) {
 response.writeHead(200, {"Content-Type": "text/plain"});
 response.write("Hello World");
 response.end();
 }

 http.createServer(onRequest).listen(8888);*/
