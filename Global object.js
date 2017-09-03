console.log(__filename);
console.log(__dirname);
function printHello() {
    console.log("hello,world");
}
var t=setTimeout(printHello,9000);

clearTimeout(t);

process.on('exit',function (code) {
    setTimeout(function () {
        console.log('该代码不会执行');
    }, 0);
    console.log("退出码为：", code);
});
console.log('程序执行结束');



process.stdout.write('hello'+'\n');
process.argv.forEach(function(val,index,array){
    console.log(index+':'+val);
});
console.log(process.execPath);
console.log(process.platform);
console.log('当前目录'+process.cwd());
console.log('当前版本'+process.version);
console.log(process.memoryUsage());
