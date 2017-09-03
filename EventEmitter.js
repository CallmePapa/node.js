/**
 * Created by 魏秋娟 on 2017/7/27.
 */
var events=require('events');//引入events模块
var eventEmitter=new events.EventEmitter();//创建EeventEmitter对象


var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

//监听器
event.on('some_event', function() {
    console.log('some_event 事件触发');
});
setTimeout(function() {
    event.emit('some_event');
}, 1000);//1000表示在1秒后some_event事件触发

/*EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递*/
emitter.on('someEvent',function(A1,A2){
    console.log('listener',A1,A2);
});
emitter.on('someEvent',function (A1,A2){
    console.log('listener',A1,A2);
});
emitter.emit('someEvent','A1canshu','A2canshu');

/*以下实例通过 connection（连接）事件演示了 EventEmitter 类的应用。*/
//监听器1
var listener1=function listener1() {
    console.log('监听器 listener1 执行');
};
//监听器2
var listener2=function  listener2() {
    console.log('监听器 listener2 执行');
};
//绑定connection事件，处理函数
eventEmitter.addListener('connection',listener1);
eventEmitter.addListener('connection',listener2);

var evenListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(evenListeners+'个监听器监听连接事件');

//处理connection事件
eventEmitter.emit('connection');

//移除绑定的函数
eventEmitter.removeListener('connection',listener1);
console.log('listener1 不再受监听');

//触发连接事件
eventEmitter.emit('connection');

eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听器监听连接事件');
console.log('程序执行完毕');

/*error事件*/
var events=require('events');
var emiter=new events.EventEmitter();
emiter.emit('error');