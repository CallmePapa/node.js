/*三种创建Buffer类的方法*/
var buf =new Buffer(10);
var buf1=new Buffer([10,20,30,40,50,60]);
var buf2 =new Buffer('ww.tunbuno.com','nishizhu');
/*写入缓存区，返回字节数*/
buf = new Buffer(256);
len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);
/*从缓冲区读取数据*/
buf=new Buffer(27);
for(var i=0;i<27;i++){
    buf[i]=i+65;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));

/*将Buffer转换为JSON对象*/
var buf=new Buffer('weiqiujuan');
var json=buf.toJSON(buf);
console.log(json);

/*缓冲区的合并*/

var buffer1=new Buffer('cainiaojiaocheng');
var buffer2=new Buffer(' node.js');
var buffer3=Buffer.concat([buffer1,buffer2]);
console.log('buffer3:'+buffer3);

/*缓冲区比较*/

var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
    console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}

/*缓冲区的拷贝*/

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);

buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

/*缓冲区的裁剪*/
var buffer1 = new Buffer('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());

//长度
console.log(buffer.length);