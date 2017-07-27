/**
 * Created by weiqiujuan on 17-7-27.
 */

var fs= require('fs');
var buf=new Buffer(1024);
//异步
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log('异步读取:'+data.toString());
});


 //同步
 var data=fs.readFileSync('input.txt');
 console.log("同步读取："+data.toString());
 console.log('程序执行完毕。');

//打开文件
 console.log('准备打开文件！');
 fs.open('input.txt','r+',function (err,fd) {
     if(err){
         return console.error(err);
     }
     console.log('文件打开成功！');

 });


//获取文件信息
fs.stat('input.txt' ,function(err,stat){
    if(err){
        return console.error(err);
    }
    console.log(stat);
    console.log('读取文件信息成功！');

    //检测文件类型
    console.log('是否为文件:'+stat.isFile());
    console.log('是否为目录:'+stat.isDirectory());

});
//写入文件
console.log("准备写入文件");
fs.writeFile('input.txt','我是通过文件写入的！',function(err){
    if(err){
        return console.error(err);
    }
    console.log('数据写入成功！');
    console.log('-------------------');
    console.log('读取写入的信息：');
    fs.readFile('inputs.txt',function (err,data) {
        if(err){
            return console.error(err);
        }
        console.log('异步读取文件数据:'+data.toString());
    });
});
//读取文件
console.log("准备打开已经存在的文件");
fs.open('input.txt','r+',function (err,fd) {
    if (err){
        return console.error(err);
    }
    console.log('文件打开成功。');
    console.log('截取10字节后的文件内容。');
    //    截取文件
    fs.ftruncate(fd,10,function(err){
        if(err){
            console.log(err);
        }
        console.log('文件截取成功');
    });
    console.log('准备读取文件：');
    fs.read(fd,buf,0,buf.length,0,function (err,bytes) {
        if (err){
            console.log(err);
        }
        console.log(bytes+'字节被读取');


        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }

//关闭文件
        fs.close(fd,function(err){
            if(err){
                console.log(err);
            }
            console.log('文件关闭成功');
        });
    });
});
//删除文件
 /*console.log('删除文件');
 fs.unlink('input.txt',function(err){
     if(err){
         return console.error(err);
     }
     console.log('文件删除成功');
 });*/
//创建目录
console.log('创建目录/tmp/test/');
fs.mkdir('/tmp/test/',function(err){
    if(err){
    return console.error(err);
}
    console.log('目录创建成功');
});
//读取目录
console.log('查看目录');
fs.readdir('/tmp/',function(err,files){
    if(err){
        return console.error(err);
    }
    files.forEach(function(file){
        console.log(file);
    });
});

//删除目录
/*fs.rmdir('/tmp/test',function(err){
    if(err){
        console.error(err);
    }
    console.log("目录删除");
});*/