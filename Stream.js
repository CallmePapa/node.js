/*Stream*/

var fs =require('fs');

/*读取流*/
var data='';
//创建可读流
var readerStream=fs.createReadStream('input.txt');
//设置编码
readerStream.setEncoding('UTF-8');
//处理时间流-data end and error
readerStream.on('data',function (chunk) {
    data+=chunk
});
readerStream.on('end',function () {
    console.log(data);
});
readerStream.on('error',function (err) {
    console.log(err.stack);
});
console.log("程序执行完毕");

/*写入流*/
var data ='cainiaojiaocheng';
var writerStream=fs.createReadStream('output.txt');
// writerStream.write(data,'UTF8');
writerStream.end();
writerStream.on('finish',function(){
    console.log('写入完成');
});
writerStream.on('error',function (err) {
    console.log(err.stack);
});
console.log('程序执行完毕');

/*管道流*/

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");

/*链式流*/
//压缩文件
//压缩文件为input.txt.gz
var zlib=require('zlib');
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
console.log("wenjianyasuowancheng");
//解压文件
// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成。");