/**
 * Created by weiqiujuan on 17-7-28.
 */
//对象间原型继承
    /*定义了一个基础对象Base 和一个继承自Base 的Sub，Base 有三个在构造函数 内定义的属性和一个原型中定义的函数，通过util.inherits 实现继承*/
var util=require('util');
function Base(){
    this.name = 'base';
    this.base = 1991;
    this.sayHello=function () {
        console.log('Hello '+this.name);
    };
}

Base.prototype.showName = function(){
    console.log(this.name);
};
 function Sub(){
     this.name = 'sub';
 }

 util.inherits(Sub,Base);

 var objBase = new Base();
 objBase.showName();
 objBase.sayHello();
 console.log(objBase);

 var objSub = new Sub();
 objSub.showName();
 //objSub.sayHello();
 console.log(objSub);


//将任意对象转换为字符串的方法
function Person() {
    this.name = "weiqiujuan";
    this.toString=function () {
        return this.name;
    };
}
var obj = new  Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));

// util.isArray([]);
// util.isArray(new Array);
console.log(util.isArray({}));
console.log(util.isDate( new Date()));
console.log(util.isError(new TypeError()));