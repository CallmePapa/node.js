function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;


//main.js
var Hello =require('./mokuaisystem');
hello = new Hello;
hello.setName('weiqiujuan');
hello.sayHello();